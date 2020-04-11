<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"
%><%@page import="java.io.*"
%><%@page import="java.util.List"
%><%@page import="java.util.ArrayList"
%><%@page import="com.ibleaders.ibsheet.IBSheetDown"
%><%

    response.setContentType("application/octet-stream");
    response.setCharacterEncoding("UTF-8");
    response.setHeader("Content-Disposition", "");

    IBSheetDown down = null;

    try {

        out.clear();
        out = pageContext.pushBody();
        
        down = new IBSheetDown();

        //====================================================================================================
        // [ 사용자 환경 설정 #0 ]
        //====================================================================================================
        // Html 페이지의 인코딩이 UTF-8 로 구성되어 있으면 "down.setEncoding("UTF-8");" 로 설정하십시오.
        // LoadText.jsp 도 동일한 값으로 바꿔 주십시오.
        // setService 전에 설정해야 합니다.
        //====================================================================================================
        down.setEncoding("UTF-8");
        
	    //====================================================================================================
        // [ 사용자 환경 설정 #1 ]
        //====================================================================================================
        // HttpServletRequest, HttpServletResponse를 IBSheet 서버모듈에 등록합니다.
        //====================================================================================================
        down.setService(request, response);

        //====================================================================================================
        // [ 사용자 환경 설정 #2 ]
        //====================================================================================================
        // 다운로드 받을 문서의 타입을 설정하십시오.
        // txt : txt 형식으로 다운로드
        //====================================================================================================        
        down.setFileType("txt");

        //====================================================================================================
        // [ 사용자 환경 설정 #3 ]
        //====================================================================================================
        // 텍스트 파일의 행 구분자를 설정하십시오. (시트의 RowDelim 설정이 우선 적용)
        //====================================================================================================      
        //down.setTextLine("\n");

        //====================================================================================================
        // [ 사용자 환경 설정 #4 ]
        //====================================================================================================
        // 텍스트 파일의 열 구분자를 설정하십시오. (시트의 ColDelim 설정이 우선 적용)
        //====================================================================================================      
        //down.setTextSpliter("\t");

        // 생성된 문서를 브라우저를 통해 다운로드
        down.downToBrowser();

    } catch (Exception e) {
        response.setContentType("text/html;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Content-Disposition", "");

        out.println("<script>alert('엑셀 다운로드중 에러가 발생하였습니다.');</script>");

        //e.printStackTrace();
    } catch (Error e) {
        response.setContentType("text/html;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Content-Disposition", "");

        out.println("<script>alert('엑셀 다운로드중 에러가 발생하였습니다.');</script>");
        //e.printStackTrace();
    } finally {
        if (down != null) {
            try {
                down.close();
            } catch (Exception ex) {}
        }
        down = null;
    }
%>