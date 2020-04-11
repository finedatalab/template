<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.io.File,java.net.URLDecoder,java.text.SimpleDateFormat,java.util.*"%>
<%@ page import="org.apache.commons.fileupload.*, org.apache.commons.fileupload.disk.*, org.apache.commons.fileupload.servlet.*,org.json.simple.*"%>
<%@ page import = "home.*, java.util.*, java.sql.SQLException" %>
<jsp:useBean id="db" class="home.ediManager" />
<jsp:useBean id = "data" class = "home.ediData" />
<%@ page session = "true" %> 
<%             
	//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	//┃ IBLeaders IBUpload Server Side Program v7.3.0.14
	//┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	//┃ ○ 설 계 자 : (주)아이비리더스
	//┃ ○ 모듈이름 : ibupload.jsp
	//┃ ○ 기능설명 : 업로드 및 파일 제거
	//┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	//┃ⓘ 아이비리더스 2016
	//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	// ====================================================================================================
	// ※ 처음 설치시 주의사항 - 아래 항목들을 검토하고 필수변경요소는 반드시 설정 또는 변경해야 합니다.
	// ====================================================================================================
	// ① [서버함수 인자1 - 필수변경요소] 업로드 루트 경로 지정 - 실제로 파일이 업로드 되어 저장되는 경로
	// ② [서버함수 인자2 - 필수변경요소] 업로드 된 대용량 파일의 임시 경로 지정 - 가용 메모리를 초과하는 대용량 파일의 경우 임시 경로에 일시적으로 파일이 기록되었다가 자동 제거됨
	// ③ [서버함수 인자3 - 옵션][기본값:16MB] 가용 메모리 용량 1MB 로 지정할 경우 1MB 이하의 파일들은 모두 메모리 내에서 직접 처리되며, 초과하는 파일들만 임시적으로 파일 처리됨
	// ④ [서버함수 인자4 - 옵션][기본값:2GB] 최대 파일 크기 제한 - UI 에서 통과된 파일 크기라고 하더라도, 여기서 최종적으로 다시 한번 걸러짐. 되도록 여유있게 잡아야 됨.
	// ⑤ [서버함수 인자5 - 옵션][기본값:utf-8] 업로드 엔코딩 - 업로드 과정에서 웹페이지의 UploadEncoding 값과 서버쪽 수신시 한글 엔코딩 방식이 무엇인지 설정한다. 둘다 반드시 일치해야 됨.
	// ⑥ [서버함수 인자6 - 필수검토요소] 서버 응답 여부 - 기본값 true, form.submit() 호출을 통하여 page reloading 되는 게시판 연동의 경우 서버 응답을 하면 응답문이 웹페이지에 표시되는 현상이 있다. 이런 경우 false 로 설정하여 서버 응답문을 무시하도록 한다.
	// ====================================================================================================
	// ⑦ [설치후, 추가 개발 요소] 업로드 설치가 완료된 후에 현업 업무 로직을 추가할 수 있습니다. ( IBUpload_DoUpload 함수 등 내부 로직의 커스터마이징 작업 )
	// ♣1 : [브라우저로부터 받은 업무 성격의 파라메터들의 처리] client 에서 보낸 파라메터 값들에 대한 처리 로직 예제가 들어있습니다.
	// ♣2 : [보안안상 위험한 업로드 확장자 파일의 제한 처리] 서버에서 실행될 위험한 파일들의 제한 예제가 들어있습니다. 추가할 파일이 있으면 나열된 확장자에서 더 추가하고 ibuplaodinfo.js 의 limitFileExtServer 값도 동일하게 설정 필요.
	// ♣3 : [고유 파일명 저장 규칙에 따른 파일 저장의 처리] 업로드 받은 파일들을 한 폴더내에서 고유한 파일로 변경하기 위한 로직 (가능하면 파일명에 한글이 들어가지 않는 것이 운영상 좋습니다.)
	// ♣4 : [브라우저로 응답할 JSON 응답문의 처리 & DB 처리] JSON 형태로 client 에 업무 성격의 파라메터 값들을 보낼 수 있습니다. DB 처리 반영도 가능합니다.
	// ♣5 : [파일정책 변경에 따른 관리] - 업로드폴더를 별도로 관리 하는 경우, 또는 DB 에 파일을 직접 저장하는 경우등에 대한 커스터마이징 작업
	//====================================================================================================

	// ====================================================================================================
	// ※ [참고사항] JDK 1.6 에서 설계 및 테스트 되었습니다.
	// ====================================================================================================
	
	//================================================================================
	// ① [필수변경요소] 업로드 루트 경로 지정 - 실제로 파일이 업로드 되어 저장되는 경로
	//================================================================================
	// ※ 보안상의 이유로 UploadRootDir 가 webRoot 아래로 노출되는 것 보다는 오픈되지 않은 별도의 시스템 내부 폴더로 저장하는 것을 권장합니다.
	//================================================================================
	String UploadRootDir = "D:/EDI/attachfile/";	

	//================================================================================
	// ② [필수변경요소] 업로드 된 대용량 파일의 임시 경로 지정 - 가용 메모리를 초과하는 대용량 파일의 경우 임시 경로에 일시적으로 파일이 기록되었다가 자동 제거됨
	//================================================================================
	// 예) "D:/tempDir/";  "/usr/temp/";
	//================================================================================
	String TempDir = "D:/EDI/attachfile/temp";

	//================================================================================
	// ③ [옵션][기본값:16MB] 가용 메모리 용량 1MB 로 지정할 경우 1MB 이하의 파일들은 모두 메모리 내에서 직접 처리되며, 초과하는 파일들만 임시적으로 파일 처리됨
	//================================================================================
	// 메모리 사용량 설정 (클수록 디스크 기록 부담율이 적어짐 - 16 MB
	//================================================================================
	int AvailableMemory = 16 * 1024 * 1024;

	//================================================================================
	// ④ [옵션][기본값:2GB] 최대 파일 크기 제한 - UI 에서 통과된 파일 크기라고 하더라도, 여기서 최종적으로 다시 한번 걸러짐. 되도록 여유있게 잡아야 됨.
	//================================================================================
	// 파일별 최대 용량 제한 - 2 GB
	//================================================================================
	long MaxFileSize = 2 * 1024 * 1024 * 1024; //최대 용량 2.04 GB 를 초과할 수 없음.
	//long MaxFileSize = 1 * 1024 * 1024 * 1024; //최대 용량 1.04 GB 를 초과할 수 없음.

	//================================================================================
	// ⑤ [옵션][기본값:utf-8] 업로드 엔코딩 - 업로드 과정에서 웹페이지의 UploadEncoding 값과 서버쪽 수신시 한글 엔코딩 방식이 무엇인지 설정한다. 둘다 반드시 일치해야 됨.
	//================================================================================
	// 브라우저에서 $(sel).IBUpload("UploadEncoding","utf-8") 로 설정했다면 utf-8 로 설정해야 한다.
	// 브라우저에서 $(sel).IBUpload("UploadEncoding","euc-kr") 로 설정했다면 euc-kr 로 설정해야 한다.
	// ( 한글 깨짐 주의 ★★★ ) 브라우저에서 설정한 값과 아래의 값은 반드시 일치해야 됨.
	//================================================================================
	String UploadEncoding = "utf-8";
	//String UploadEncoding = "euc-kr";

	//================================================================================
	// ⑥ [서버함수 인자6 - 필수검토요소] 서버 응답 여부
	//================================================================================
	// 기본값 true
	// form.submit() 호출을 통하여 page reloading 되는 기존 게시판의 IBUpload 연동의 경우,
	// 서버 응답을 true로 설정하면 응답문이 웹페이지에 글자 그대로 표시되는 현상이 있다. (응답문은 원래 IBUpload Client 가 수신하기 위함임)
	// 이런 경우 서버 응답문을 발생하지 않도록 false 로 설정한다.
	// IBSheet와의 연동등 Ajax 방식으로 IBUpload 가 동작하는 경우,
	// 즉, IBUpload 콘트롤이 웹페이지의 reload 없이(form.submit 호출 없이) 항상 웹페이지에 존재하면서 동작하는 경우에는
	// true 로 설정하여야 IBUpload CLient와의 원할한 통신 및 동작이 보장된다.
	//================================================================================
	boolean isServerResponse = true; // true : ibsheet 와의 연동 등 reload 되지 않는 ajax 방식에서 응답해야 한다.(false 설정시 ERR-012 응답 문법 오류 발생함) / false : 게시판 처럼 화면 reload 되므로 응답 불필요(true 설정시 reload 화면의 맨위에 결과물이 html text 로 표시되는 현상이 발생한다.)

	//====================================================================================================
	// IBUpload_DoUpload 함수 - 서버 업로드의 처리
	//====================================================================================================
	// String UploadRootDir = "D:/file_uploaded/";
	// String TempDir = "D:/file_uploaded_temp";
	// int AvailableMemory = 16 * 1024 * 1024 ;
	// long MaxFileSize = 2*1024*1024*1024 ; //최대 용량 2.04 GB 를 초과할 수 없음.
	// String UploadEncoding = "utf-8";
	// boolean isServerResponse = false; // true : ibsheet 와의 연동 등 reload 되지 않는 ajax 방식에서 응답해야 한다.(false 설정시 ERR-012 응답 문법 오류 발생함) / false : 게시판 처럼 화면 reload 되므로 응답 불필요(true 설정시 reload 화면의 맨위에 결과물이 html text 로 표시되는 현상이 발생한다.)
	//====================================================================================================
	// 모든 request.getParameter 항목을 ibuploadMap.get 으로 얻을 수 있다.
	// ibuploadMap.get("files") 로 최종 files 결과값을 얻을 수 있다.
	//====================================================================================================	
	
	HashMap<String, String> ibuploadMap = IBUpload_DoUpload(out, request, response, UploadRootDir, TempDir,
			AvailableMemory, MaxFileSize, UploadEncoding, isServerResponse);
	
	//System.out.println(UploadRootDir);
%>
<%!//====================================================================================================
	// 이하는 서버파트 IBUpload_DoUpload 함수이며 위에서 언급된 커스터마이징 등 특별한 사유가 없는 한 수정할 필요가 없습니다.
	//====================================================================================================
	HashMap<String, String> IBUpload_DoUpload(JspWriter out, HttpServletRequest request, HttpServletResponse response,
			String UploadRootDir, String TempDir, int AvailableMemory, long MaxFileSize, String UploadEncoding,
			boolean isServerResponse) throws Exception {

		File file;
		DiskFileItemFactory factory;
		ServletFileUpload upload;
		List<FileItem> fileItems = null;
		

		/*   전역 변수 선언		*/
		String gGubun = "";
		String gBoard = "";
		String gSeq = "";
		

		HashMap<String, String> ibuploadMap = new HashMap<String, String>();

		String RequestUrl = request.getRequestURL().toString();
		String ContentType = "" + request.getContentType();
		String CommandType = "";
		String FileID = ""; // 클릭해 줄 ID (IE 6 ~ IE 9)
		String DeleteFileList = ""; // 제거할 파일 목록(\n 엔터구분자 조합 문자열)
		String files = ""; // DB 에 저장할 최종 files 값  (예) {name: "관심과집중.mp4", size:"11417124", date:"20160101125959", url: "20160126_180337_82754651"},{name:"오렌지.jpg", size:"1075761", date:"20160101125959", url:"20160126_180801"},
		String files_id = ""; // DB 에 저장할 최종 files 값에 IBUpload Client 에서 부여한 파일 id 도 포함됨  (예) {id:"file1_1", name:"관심과집중.mp4", size:"11417124", date:"20160101125959", url:"20160126_180337_82754651"},{name:"오렌지.jpg", size:"1075761", date:"20160101125959", url: "20160126_180801"},
		boolean isUTF_force = false; // Win10 IE11 버그체크
		
		
		//System.out.println(RequestUrl);
		

		String FormNo = ""; // 업로드 요청해 온 폼 번호 (응답시 "formX_Y" 형태로 응답해야 한다. X 가 폼번호, Y 는 파일 순번)
		String TestValue = ""; // ExtendParam 한글 깨짐 실험
		String ParentID = "";
		request.setCharacterEncoding(UploadEncoding);

		response.setHeader("Content-Transfer-Encoding", "binary;");
		response.setHeader("Pragma", "no-cache;");
		response.setHeader("Expires", "-1;");
		response.setHeader("Access-Control-Allow-Origin", "*"); // CrossDomain 보안 설정 옵션

		//--------------------------------------------------------------------------------
		// [IE 6 ~ IE 9 파일 오픈 창 지원 & 파일 업로드 처리]
		//--------------------------------------------------------------------------------
		if (ContentType.indexOf("multipart/form-data") == -1) {

			//================================================================================
			// IE9 이하의 파일 업로드를 지원하려면 이 부분이 반드시 있어야 됨.
			//================================================================================
			if (request.getParameter("cmd") != null) {
				CommandType = request.getParameter("cmd");
			}
			// FileOpen 에 대한 처리 ( IE9 이하 )
			if (CommandType.equals("FileOpen")) {
				if (request.getParameter("id") != null) {
					FileID = request.getParameter("id");
				}
				ParentID = request.getParameter("parentid");
				out.println("<html><head><script>try{ parent.document.getElementById('" + ParentID + "_IBUpload_Add"
						+ FileID + "').click(); }catch(e){}</script></head></html>");
				out.close();
			}

			Enumeration<String> e = request.getParameterNames();

			while (e.hasMoreElements()) {
				String name = e.nextElement();
				String fieldValue = "";
				String[] data = request.getParameterValues(name);
				if (data != null) {
					for (String fieldName : data) {
						fieldValue = "";
						if (request.getParameter(fieldName) != null) {
							fieldValue = request.getParameter(fieldName);
						}
						ibuploadMap.put(fieldName, fieldValue);
					}
				}
			}
		} else {

			String files_result = ""; // IBUpload files 에 넣을 결과 값
			String files_id_result = ""; // IBUpload files_id 에 넣을 결과 값

			factory = new DiskFileItemFactory();
			factory.setSizeThreshold(AvailableMemory);
			factory.setRepository(new File(TempDir));
			upload = new ServletFileUpload(factory);
			upload.setSizeMax(MaxFileSize);

			JSONObject jsonServerResponse = new JSONObject(); // 서버에서 응답하는 JSON
			JSONArray jsonFileList = new JSONArray();

			JSONArray jsonFiles = new JSONArray(); // 서버쪽에서 수신하여 정리한 파일객체들의 목록
			JSONArray jsonFilesID = new JSONArray(); // 서버쪽에서 수신하여 정리한 파일객체들의 목록 ( Client 에서 제공한 ID 포함 )

			try {

				request.setCharacterEncoding(UploadEncoding);
				fileItems = upload.parseRequest(request);				
				//--------------------------------------------------------------------------------
				// Win10 IE11 오류 대응
				//--------------------------------------------------------------------------------
				for (FileItem item : fileItems) {
					if (item.isFormField()) {
						String fieldName = item.getFieldName();
						String fieldValue = item.getString(UploadEncoding);

						if ("_ibupload_ie11_han_check".equals(item.getFieldName())) {

							// Windows10,IE11,10240 에서는 무조건 utf-8 로 전송되는 버그가 있다.
							// Windows8 IE11 은 잘됨
							// 갑자기 패치될 가능성 있음..
							// 10547 해결되었다는 소문이 있으나 10586 에서 안됨.
							// UTF-8 로 보내는 IE11 의 버그라고 한다면 여기서 대응처리
							if ("ea".equals(String.format("%02x", item.getString(UploadEncoding).getBytes()[0]))) {
								UploadEncoding = "utf-8";
								isUTF_force = true;
							}
						} else if ("__formNo".equals(fieldName)) {
							FormNo = fieldValue;
						} else if ("__delList".equals(fieldName)) {
							//System.out.println(fieldName);
							DeleteFileList = fieldValue; // 서버에서 삭제해야할 파일들
						} else if ("__files".equals(fieldName)) {
							files = fieldValue; // IBUpload 가 갖고 있었던 최근 files 목록
						} else {

							fieldValue = URLDecoder.decode((String) fieldValue, UploadEncoding);
							ibuploadMap.put(fieldName, fieldValue);

							//====================================================================================================
							// ♣1 : client 에서 보낸 파라메터 값들에 대한 처리 로직
							//====================================================================================================
							// client 의 extendParamUpload 에서 보낸 parameter 들의 처리
							// client 쪽에서 아래와 같이 dataA 라는 파라메터와 dataB 라는 파라메터를 업무상 값을 정의하여 보낸 경우 그 값들을 얻을 수 있습니다.
							//
							// 예) $("#myUpload").extendParamUpload("dataA=1&dataB=2");
							//====================================================================================================

							System.out.println(fieldName + " 의 값은 : " + fieldValue + " 입니다.");
							
							if(fieldName.equals("gubun")) {
								gGubun = fieldValue;
							}
							if(fieldName.equals("board_id")) {
								gBoard = fieldValue;
							}
							if(fieldName.equals("seq")) {
								gSeq = fieldValue;
							}
							
						}
					}
				} // end of form data
			} catch (Exception ex) {
				System.out.println(ex);
				JSONObject errObject = new JSONObject();
				jsonServerResponse.put("error", ex.toString());

			}

			try {
				/*		파일 업로드 전  전체 삭제 - 수정일 경우		*/
				if(gGubun.equals("board")) {					
					fn_DeleteDB(gBoard, gSeq);	
				}

				//--------------------------------------------------------------------------------
				// 파일 업로드 처리 ( type = file 인 경우의 처리 )
				//--------------------------------------------------------------------------------
				// 저장되는 파일 위치 : UploadRootDir / 업로드 파일명
				//--------------------------------------------------------------------------------
				String createFilePath = "";
				String newFileSavePath = "";

				SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
				Random rand = new Random();
				String TodayString = sdf.format(Calendar.getInstance().getTime());

				int UploadCount = 0;
				String oldFieldName = "";

				boolean isFirstComma = true;
				for (FileItem item : fileItems) {
					if (!item.isFormField()) {
						String fieldName = item.getFieldName();
						String fileName = ("" + item.getName()).trim();

						// WIN10-IE11 의 UTF8 한글깨짐에 의한 파일깨짐방지
						if (isUTF_force) {
							fileName = new String(fileName.getBytes("EUC-KR"), "iso-8859-1");
						}
						if (!oldFieldName.equals(fieldName)) {
							UploadCount = 0;
						}
						oldFieldName = item.getFieldName();

						//====================================================================================================
						// ♣2 : 보안상 위험한 업로드 확장자 파일의 제한 처리
						//====================================================================================================
						// 보안상 IBUpload 의 limitFileExt 속성을 참고하여 아래와 동일한 파일 목록들을 차단하는 것을 권장한다.
						//====================================================================================================
						boolean isExecFile = true;
						if (" html htm php php2 php3 php4 php5 phtml pwml inc asp aspx ascx jsp cfm cfc pl bat exe com dll vbs js reg cgi htaccess asis sh shtml shtm phtm "
								.indexOf(" " + fileName.substring(fileName.lastIndexOf(".") + 1) + " ") == -1) {
							isExecFile = false;
						}

						boolean isUploadCancel = false; // 첨부중에 업로드 취소한 항목들
						if ((DeleteFileList + "\r\n").indexOf(fieldName + FormNo + "_" + (UploadCount) + "\r\n") > -1) {
							isUploadCancel = true;
						}

						if (!"".equals(fileName)) {

							//====================================================================================================
							// ♣3 : 수신 받은 파일들을 한 폴더내에서 고유한 파일명으로 바꿔주고 client 에 그 결과를 응답한다.
							//====================================================================================================
							// 기본적으로 수신받은 파일명은 아래와 같은 형식으로 저장되고 있습니다.
							// 업무상 파일관리 정책에 따라 바꾸셔도 됩니다.
							//
							// 1. 기존적으로 현재날짜와 시간으로 저장됨.
							// 2. 날짜와 시간까지 동일하게 겹친 파일에 한하여 중복시고유번호를 붙임
							//
							// 파일명 형식 : yyyyMMdd_HHmmss_##### (##### 은 중복시 랜덤 고유번호)
							//
							//====================================================================================================
							if (isExecFile == true) {
								newFileSavePath = "_REJECT_";
							} else {
								newFileSavePath = TodayString;
								createFilePath = UploadRootDir + TodayString;

								if (new File(createFilePath).isFile()) { // 중복체크
									for (int i = 1; i < 99999; i++) {
										newFileSavePath = TodayString + "_"
												+ String.format("%08d", rand.nextInt(100000000));
										createFilePath = UploadRootDir + newFileSavePath;
										if (!new File(createFilePath).isFile())
											break;
									}
								}

								if (isUploadCancel == false) {
									file = new File(createFilePath);
									item.write(file);
								}
							}

							if (isUploadCancel == false) {
								String item_getName = "";
								item_getName = item.getName();
								if (item_getName.indexOf("\\") > -1) {
									item_getName = item_getName.substring(item_getName.lastIndexOf("\\") + 1,
											item_getName.length());
								}

								//--------------------------------------------------------------------------------
								// Client 로 응답할 JSON 작성
								//--------------------------------------------------------------------------------
								JSONObject jsonFile = new JSONObject();
								jsonFile.put(fieldName + FormNo + "_" + UploadCount, newFileSavePath);
								jsonFile.put("size", item.getSize());
								jsonFileList.add(jsonFile);

								//--------------------------------------------------------------------------------
								// ibuploadMap.get("files") 속성을 위한 준비
								//--------------------------------------------------------------------------------
								JSONObject jsonFile1 = new JSONObject();
								jsonFile1.put("name", item_getName);
								jsonFile1.put("size", item.getSize());
								jsonFile1.put("date", TodayString);
								jsonFile1.put("url", newFileSavePath);
								jsonFiles.add(jsonFile1);

								//--------------------------------------------------------------------------------
								// ibuploadMap.get("files_id") 속성을 위한 준비
								//--------------------------------------------------------------------------------
								JSONObject jsonFile2 = new JSONObject();
								jsonFile2.put("id", item.getFieldName() + FormNo + "_" + UploadCount);
								jsonFile2.put("name", item_getName);
								jsonFile2.put("size", item.getSize());
								jsonFile2.put("date", TodayString);
								jsonFile2.put("url", newFileSavePath);
								jsonFilesID.add(jsonFile2);

								isFirstComma = false;	
								
								if(gGubun.equals("board")) {
									
									if(gSeq.equals("")) {
										
										fn_InsertDB(gBoard, item_getName, newFileSavePath, TodayString, item.getSize());		
										
									} else {
										
										fn_InsertDB2(gBoard, gSeq, item_getName, newFileSavePath, TodayString, item.getSize());	
									}
									
								}
														
							}
							UploadCount++;
						} // filename is not null
					} // end of if form file
				} // end of for

				//--------------------------------------------------------------------------------
				// 파일 삭제 처리
				//--------------------------------------------------------------------------------
				List<String> deleteItem = Arrays.asList(DeleteFileList.split("\n"));				
				for (String item : deleteItem) {	
					//out.println(item);
					item = item.trim();							
					if (!"".equals(item)) {
						File delFile = new File(IBUpload_RealFilePath(UploadRootDir, item));
						if (delFile.isFile()) { // 존재할 경우 제거							
						} 
					}
				}

				//====================================================================================================
				// files 결과문을 최종 준비한다.
				//====================================================================================================
				// ㆍ files 의 값 : [{"name":"공지사항.hwp", "size":"13259", "date":"20160401161015", "url":"20160401105"},{"name":"사진.jpg", "size":"1577166", "date":"20160410161335", "url":"20160410161335"}]
				// ㆍ files_id 의 값 : [{"id":"file0_0", "name": "공지사항.hwp", "size":"13259", "date": "20160401161015", "url": "20160401105"},{"id":"file0_1", "name":"사진.jpg", "size":"1577166", "date":"20160410161335", "url":"20160410161335"}]
				//====================================================================================================
				ibuploadMap.put("files", jsonFiles.toString());
				ibuploadMap.put("files_id", jsonFilesID.toString());

				//System.out.println(" files 최종 결과  : " + ibuploadMap.get("files"));
				//System.out.println(" files_id 최종 결과  : " + ibuploadMap.get("files_id"));				
				
			} catch (Exception ex) {
				System.out.println(ex);
			}

			//====================================================================================================
			// JSON 결과문을 IBUpload Client 로 응답한다.
			//====================================================================================================
			if (isServerResponse) {
				// autoUpload=true 경우, (웹페이지가 reload 되지 않는 Ajax 방식에서만 사용)
				// autoUpload=false 경우, (IBSheet 연동등 Ajax 방식에서만 사용)
				// autoUpload=false 경우, (form submit 방식으로 page 가 reload 되는 경우에서는 사용되지 않는다.)

				//====================================================================================================
				// ♣4 : [브라우저로 응답할 JSON 응답문의 처리 & DB 처리] JSON 형태로 client 에 업무 성격의 파라메터 값들을 보낼 수 있다.
				//====================================================================================================
				// etcdata 라는 객체명 안에 자유롭게 업무상 필요한 파라메터들을 보낼 수 있다.
				//====================================================================================================
				// ( 참고사항 - client 측에서는 아래와 같이 서버에서 보낸 값을 받아 사용할 수 있다 )
				//	onUploadData: function(serverResponseObject, serverResponeText){
				//		alert("JSON 형식의 서버 전체 응답문  : "+serverResponeText);
				//		alert("서버로부터 얻은 응답 객체중 name 값 (etcdata.name) : "+serverResponseObject.etcdata.name);
				//		alert("서버로부터 얻은 응답 객체중 content 값 (etcdata.content) : "+serverResponseObject.etcdata.content);
				//
				//		// 반드시 리턴해야 한다. (서버에서 수신한 정보를 미리 받아서 변경 가능하다)
				//		return serverResponseObject;
				//   }
				//====================================================================================================
				JSONObject etcdataObject = new JSONObject();
				//etcdataObject.put("name", "IBUpload Client 로 보내는 사용자 정의 데이타 ");
				//etcdataObject.put("content", "IBUpload 의 onUploadData 이벤트에서 serverResponeObject.etcdata 로 얻을 수 있다. ");
				//jsonServerResponse.put("etcdata", etcdataObject);
				
				etcdataObject.put("fileinfo", jsonFiles.toString());
				jsonServerResponse.put("etcdata", etcdataObject);

				jsonServerResponse.put("ibupload", jsonFileList);
				out.println(jsonServerResponse.toJSONString());
				System.out.println("JSON 응답 결과 : " + jsonServerResponse.toJSONString());
				
				//System.out.println(UploadRootDir);

			}

		}
		return ibuploadMap;
	}

	//====================================================================================================
	// Client 에서 받은 files 속성값 형태를 파일저장 후, Server 의 files 속성값 형태로 리턴한다.
	//====================================================================================================
	// Client 의 files 속성값 : {name : "공지사항.hwp", id : "file0_0"}
	// Server 의 files 속성값 : {name : "공지사항.hwp", size : "12000", date : "19851231125959", url : "19851231125959"}
	//====================================================================================================
	String IBUpload_Update_Files(HashMap<String, String> ibuploadMap, String client_filedata) {

		String files_id = "";
		files_id = ibuploadMap.get("files_id");

		int i = 0;
		int id_pos = 0;
		String replaced_Files = "";
		String result = "";
		String temp = "";
		String[] fileItems = null;

		client_filedata = client_filedata + ",";
		fileItems = client_filedata.split("},");

		// 첨부 파일 갯수 만큼 반복하여 최종 저장 결과를 치환한다.
		for (i = 0; i < fileItems.length; i++) {

			temp = fileItems[i];

			id_pos = temp.indexOf("\"id\":\"");
			if (id_pos == -1) {
				replaced_Files += fileItems[i];
				continue;
			}

			temp = temp.substring(id_pos, temp.length());
			id_pos = temp.indexOf("\"");
			if (id_pos == -1) {
				continue;
			}

			temp = temp.substring(id_pos + 1, temp.length());
			temp = temp.substring(0, temp.indexOf("\""));

			// 해당 id 의 실제 파일업로드 결과 찾기

			id_pos = files_id.indexOf("\"id\":\"" + temp + "\"");
			if (id_pos == -1) {
				continue;
			}

			result = files_id.substring(9 + id_pos + temp.length(), files_id.length());
			result = result.substring(0, result.indexOf("\"}"));
			result = result.substring(result.indexOf("\"size\":"), result.length());

			// 해당 파일 1개의 최종 치환
			fileItems[i] = fileItems[i].replaceAll("\"id\":\"" + temp + "\"", result + "\"}");
			replaced_Files += fileItems[i] + ",";
		}
		// 마지막 콤마 제거
		if (!"".equals(replaced_Files)) {
			replaced_Files = replaced_Files.substring(0, replaced_Files.length() - 1);
		}

		return replaced_Files;
	}

	//====================================================================================================
	// ♣5 : client 에서 요청하는 URL KEY 값을 실제로 저장된 디스크의 물리적 전체경로를 리턴함
	//====================================================================================================
	// ㆍ입력값(UrlKey)의 예 : 20161231_235959_000001
	// ㆍ리턴값의 예 : D:/file_uploaded/20161231_235959_000001
	//
	// ※ 업로드 폴더에 실제로 고유 파일을 저장하는 경우에는 변경할 필요가 없습니다.
	// ※ DB 에 저장하거나 별도의 디스크에 저장되어 관리되는 경우 실제 저장된 파일 경로를 리턴해 주시면 됩니다.
	//
	//====================================================================================================
	String IBUpload_RealFilePath(String UploadRootDir, String UrlKey) {
		System.out.println("요청된 파일 URL ID  : " + UrlKey);
		System.out.println("실제로 저장된 경로 : [" + UploadRootDir + UrlKey + "]");
		return UploadRootDir + UrlKey;		
	}
	
	
	//  사용자 정의	
	String fn_InsertDB(String Board_id, String FileName, String FileUrl, String FileDate, long FileSize) throws SQLException {	
		
		ediManager db = new ediManager();
		ediData tmpData = new ediData();	
		ediData tmpData2 = new ediData();	
		
		tmpData = db.GetSeq(Board_id);
		int gBoardSeq = tmpData.getBoardSeq();		
		
		tmpData2  = db.InsertBoardFile(Board_id, gBoardSeq, FileName, FileUrl, FileDate, FileSize)	;
		String MsgCode = tmpData2.getCode();
		String MsgInfo = tmpData2.getCodeNm();		
		
		return MsgCode;		
	}
	
	String fn_InsertDB2(String Board_id, String Seq, String FileName, String FileUrl, String FileDate, long FileSize) throws SQLException {	
		
		ediManager db = new ediManager();
		ediData tmpData = new ediData();		
		
		tmpData  = db.InsertBoardFile(Board_id, db.convertInt(Seq), FileName, FileUrl, FileDate, FileSize)	;
		String MsgCode = tmpData.getCode();
		String MsgInfo = tmpData.getCodeNm();		
		
		return MsgCode;		
	}
	
	/*		수정시 전체 삭제후 재 업로드한다		*/
	String fn_DeleteDB(String Board_id, String Seq) throws SQLException {	
		
		ediManager db = new ediManager();
		ediData tmpData = new ediData();	
	
		tmpData  = db.DeleteBoardFile(Board_id, db.convertInt(Seq));
		String MsgCode = tmpData.getCode();
		String MsgInfo = tmpData.getCodeNm();		
		
		return MsgCode;		
	}
	
	/*
	String fn_xmlupload_finish(String FileName, String FileUrl) {
		
		return FileName + "|" + FileUrl;
	}
	*/
	
	//  사용자 정의	끝
%>
