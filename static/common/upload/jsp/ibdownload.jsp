<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%><%@ page import="java.io.*,java.util.*,java.net.URLEncoder, javax.servlet.*,org.apache.tools.zip.ZipEntry, org.apache.tools.zip.ZipOutputStream"%><%@ page import="org.apache.commons.fileupload.*"%><%@ page import="org.apache.commons.fileupload.disk.*"%><%@ page import="org.apache.commons.fileupload.servlet.*"%><%
	//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	//┃ IBLeaders IBUpload Server Side Program v7.3.0.11
	//┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	//┃ ○ 설 계 자 : (주) 아이비리더스
	//┃ ○ 모듈이름 : ibdownload.jsp
	//┃ ○ 기능설명 : 다운로드
	//┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	//┃ⓘ 아이비리더스 2015
	//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	// ====================================================================================================
	// ※ 처음 설치시 주의사항 - 아래 항목들을 검토하고 필수변경요소는 반드시 설정 또는 변경해야 합니다.
	// ====================================================================================================
	// ① [필수변경요소] 업로드 루트 경로 지정 - 실제로 파일이 업로드 되어 저장되는 경로
	// ② [옵션][기본값:utf-8] 업로드 엔코딩 - 첨부 파일에 한글이 포함되어 있는 경우 엔코딩 방식
	// ※ [참고사항] JDK 1.6 에서 설계 및 테스트 되었습니다.
	// ====================================================================================================

	//================================================================================
	// ① [필수변경요소] 업로드 루트 경로 지정 - 실제로 파일이 업로드 되어 저장되는 경로
	//================================================================================
	// ※ 보안상의 이유로 UploadRootDir 가 webRoot 아래로 노출되는 것 보다는 오픈되지 않은 별도의 시스템 내부 폴더로 저장하는 것을 권장합니다.
	//================================================================================
	//String UploadRootDir = "C:/file_uploaded/";
	String UploadRootDir = "D:/EDI/attachfile/";	

	//================================================================================
	// ② 다운로드 엔코딩
	// ( 한글 깨짐 주의 ★★★ ) 이 엔코딩이 올바르지 않으면 다운로드 받은 압축 파일 속의 한글들의 파일명칭이 깨져보입니다.
	//================================================================================
	String DownloadEncoding = "utf-8"; // 한글 파일명의 엔코딩 방식
	//String DownloadEncoding = "euc-kr";

	//====================================================================================================
	// ③ [추후 추가 개발 요소] IBUpload 설치가 성공적으로 완료된 이후에 현업 업무 로직을 추가할 수 있습니다.
	//====================================================================================================
	// ♣ 가 표시된 부분은 개발자가 직접 현업의 파일관리 정책과 DB 처리 등에 따라 소스 코드를 수정 / 변경 / 응용해야 할 부분입니다.
	//
	// ♣1 : GetRealFilePathFromURLKey 함수의 수정
	//	※ 업로드 폴더에서 직접 다운로드 할 경우에는 변경할 필요가 없습니다. (☞ 소스코드 맨 아래 함수 참조.)
	//
	//	- DB 에 파일을 저장하는 경우 : DB 로부터 파일을 얻어서 임시 폴더에 저장하고 해당 파일의 전체 경로를 리턴해주면 됩니다.
	//	- 별도의 디스크 경로로 관리하는 경우 : 요청된 UrlKey 에 해당되는 실제 존재하는 파일 경로를 리턴해주면 됩니다.
	//====================================================================================================

	//====================================================================================================
	// 아래의 코드는 수정하지 마십시오.
	//====================================================================================================
	File file;

	String ContentType = "" + request.getContentType();
	String DownloadFiles = ""; // 다운로드 할 파일들
	String ParentID = "";
	String FileDownloadNo = "";
	//--------------------------------------------------------------------------------
	// [요청자 검증]
	//--------------------------------------------------------------------------------
	if (ContentType.indexOf("multipart/form-data") == -1) {

		request.setCharacterEncoding("utf-8");

		String DownloadFileName = "";
		String DownloadFileURL = "";
		String UserAgent = request.getHeader("User-Agent");
		String DownloadToken = "";

		if (request.getParameter("token") != null) {
			DownloadToken = request.getParameter("token");
		}
		if (request.getParameter("file") != null) {
			DownloadFiles = "" + request.getParameter("file");
		}
		ParentID = request.getParameter("parentid");
		FileDownloadNo = request.getParameter("filedownloadno");

		if (request.getParameter(ParentID + "_downloadFileName" + FileDownloadNo) != null) {
			DownloadFileName = "" + request.getParameter(ParentID + "_downloadFileName" + FileDownloadNo)
					+ ".zip";
		} else {
			DownloadFileName = "download.zip";
		}

		response.setHeader("Content-Transfer-Encoding", "binary;");
		response.setHeader("Pragma", "no-cache;");
		response.setHeader("Expires", "-1;");
		response.setContentType("application/octet-stream");

		Cookie cookie = new Cookie("token", DownloadToken);
		cookie.setPath("/");
		response.addCookie(cookie);

		out.clear();

		String[] items = DownloadFiles.split("\n");
		if (items.length <= 1) {
			DownloadFileURL = DownloadFiles.substring(0, DownloadFiles.indexOf(" "));
			DownloadFileName = DownloadFiles.substring(DownloadFiles.indexOf(" ") + 1, DownloadFiles.length());
			DownloadFileName = DownloadFileName.trim();
		}

		List<String> downItem = Arrays.asList(items);

		int bytesRead;
		byte bytes[] = new byte[8192];

		if (items.length == 1) {
			response.setContentType("application/octet-stream");

			String item = DownloadFileURL;
			item = item.trim();
			item = item.replaceFirst("(http|https|ftp)://", "");
			item = item.substring(item.indexOf("/") + 1, item.length());

			try {

				if (new File(GetRealFilePathFromURLKey(UploadRootDir, item)).isFile()) {
					if (UserAgent.contains("MSIE") || UserAgent.contains("Trident")
							|| UserAgent.contains("Edge")) {
						DownloadFileName = URLEncoder.encode(DownloadFileName, "utf-8").replaceAll("\\+",
								"%20");
						response.setHeader("Content-Disposition",
								"attachment;filename=" + DownloadFileName + ";");
					} else {
						DownloadFileName = new String(DownloadFileName.getBytes("utf-8"), "ISO-8859-1");
						response.setHeader("Content-Disposition",
								"attachment;filename=\"" + DownloadFileName + "\"");
					}

					FileInputStream fis = new FileInputStream(UploadRootDir + item);
					BufferedInputStream bis = new BufferedInputStream(fis);
					ServletOutputStream outFile1 = response.getOutputStream();

					while ((bytesRead = fis.read(bytes, 0, 8192)) != -1) {
						outFile1.write(bytes, 0, bytesRead);
					}
					bis.close();
					fis.close();
					outFile1.flush();
					outFile1.close();
				} else {
					out.close();
				}

			} catch (Exception ex) {
				out.println(ex);
			}

		} else if (items.length > 1) {
			response.setContentType("application/zip");

			try {

				if (UserAgent.contains("MSIE") || UserAgent.contains("Trident") || UserAgent.contains("Edge")) {
					DownloadFileName = URLEncoder.encode(DownloadFileName, "utf-8").replaceAll("\\+", "%20");
					response.setHeader("Content-Disposition", "attachment;filename=" + DownloadFileName + ";");
				} else {
					DownloadFileName = new String(DownloadFileName.getBytes("utf-8"), "ISO-8859-1");
					response.setHeader("Content-Disposition",
							"attachment;filename=\"" + DownloadFileName + "\"");
				}

				ServletOutputStream sos = response.getOutputStream();
				ZipOutputStream zos = new ZipOutputStream(sos);
				zos.setEncoding("euc-kr");
				for (String item : downItem) {
					item = item.trim();
					item = item.replaceFirst("(http|https|ftp)://", "");
					item = item.substring(item.indexOf("/") + 1, item.length());

					DownloadFileURL = item.substring(0, item.indexOf(" "));
					DownloadFileName = item.substring(item.indexOf(" ") + 1, item.length());

					//====================================================================================================
					// 실제 다운로드 받을 파일이 존재하는 경우에만 압축 파일에 넣어준다.
					//====================================================================================================
					if (new File(GetRealFilePathFromURLKey(UploadRootDir, DownloadFileURL)).isFile()) {
						FileInputStream fis = new FileInputStream(UploadRootDir + DownloadFileURL);
						BufferedInputStream bis = new BufferedInputStream(fis);

						ZipEntry zipEntry = new ZipEntry(DownloadFileName);
						zos.putNextEntry(zipEntry);
						while ((bytesRead = bis.read(bytes)) != -1) {
							zos.write(bytes, 0, bytesRead);
						}
						bis.close();
						fis.close();
						zos.flush();
						zos.closeEntry();
					}
				}

				zos.close();
				sos.close();
			} catch (Exception ex) {
				out.println(ex);
			}
		}
	}
%><%!//====================================================================================================
	// ♣1 : client 에서 요청하는 URL KEY 값을 실제로 저장된 디스크의 물리적 전체경로를 리턴함
	//====================================================================================================
	// ㆍ입력값(UrlKey)의 예 : 20161231_235959_000001
	// ㆍ리턴값의 예 : D:/file_uploaded/20161231_235959_000001
	//
	// ※ 업로드 폴더에 실제로 고유 파일을 저장하는 경우에는 변경할 필요가 없습니다.
	// ※ DB 에 저장하거나 별도의 디스크에 저장되어 관리되는 경우 실제 저장된 파일 경로를 리턴해 주시면 됩니다.
	//
	//====================================================================================================
	String GetRealFilePathFromURLKey(String UploadRootDir, String UrlKey) {
		return UploadRootDir + UrlKey;
	}%>