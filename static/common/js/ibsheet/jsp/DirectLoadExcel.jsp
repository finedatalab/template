<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"
%><%@page import="com.ibleaders.ibsheetLoader.IBSheetLoad"
%><%@page import="java.util.ArrayList"
%><%@page import="java.util.List"
%><%@page import="java.io.*" 
%><%

    out.clear();
    out = pageContext.pushBody();

    IBSheetLoad load = null;
    
    try {
        
        load = new IBSheetLoad();

        //====================================================================================================
        // [ 사용자 환경 설정 #0 ]
        //====================================================================================================
        // Html 페이지의 인코딩이 UTF-8 로 구성되어 있으면 "load.setEncoding("UTF-8");" 로 설정하십시오.
        // setService 전에 설정해야 합니다.
        //====================================================================================================
        load.setEncoding("UTF-8");

        //====================================================================================================
        // [ 사용자 환경 설정 #1 ]
        //====================================================================================================
        // 엑셀 전문의 MarkupTag Delimiter 사용자 정의 시 설정하세요.
        // 설정 값은 IBSheet7 환경설정(ibsheet.cfg)의 MarkupTagDelimiter 설정 값과 동일해야 합니다.
        //====================================================================================================      
        //load.setMarkupTagDelimiter("[s1]","[s2]","[s3]","[s4]");

        //====================================================================================================
	// [ 사용자 환경 설정 #2 ]
	//====================================================================================================
	// 시트에 포함될 문자열 중 STX(\u0002), ETX(\u0003) 이 포함된 경우에만 설정해주세요.
	// 설정을 원하지 않는 경우 주석처리해주세요.
	// 0 : 시트 구분자로 STX, ETX 문자를 사용합니다. (기본값)
	// 1 : 시트 구분자로 변형된 문자열을 사용합니다. (시트에 설정이 되어 있어야 합니다.)
	//====================================================================================================
	//load.setDelimMode(1);        
        
	//====================================================================================================
        // [ 사용자 환경 설정 #3 ]
        //====================================================================================================
        // HttpServletRequest, HttpServletResponse를 IBSheet 서버모듈에 등록합니다.
        //====================================================================================================
        load.setService(request, response);

        // 시트에서 보낸 ExtendParam 받기 (IBSheetLoad 선언 이후 ExtendParam 사용 가능)
        //String exParam = load.getExtendParam("TestParam");
        //System.out.println("exParam [" + exParam + "]");

        // 로드 1. 시트에 설정한 FP 페이지로 포워딩
        load.sendDirectToFP();

        // 로드 2. 엑셀파일의 내용을 읽어온 데이터를 List로 받아서 처리(List<Map<String, String>> 형태)
        //List list = load.directLoadExcel();
        //System.out.println("list:"+list); 

        //브라우저에 데이터를 전달하여 시트에 로드
        //load.writeToBrowser();

    } catch (Exception e) {
        out.println("<script>var targetWnd = null; if(opener!=null) {targetWnd = opener;} else {targetWnd = parent;} targetWnd.Grids[0].LoadExcelError(); </script>");
        
        e.printStackTrace();
    } catch (Error e) {
        out.println("<script>var targetWnd = null; if(opener!=null) {targetWnd = opener;} else {targetWnd = parent;} targetWnd.Grids[0].LoadExcelError(); </script>");
        e.printStackTrace();
    } finally {
        if (load != null) {
            load.close();
        }
        load = null;
    }
%>