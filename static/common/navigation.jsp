<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ include file="../cookie.jsp" %>
 <%@ page import = "home.*, java.util.*" %>
<jsp:useBean id="db" class="home.ediManager" />
<%

		String lang = request.getParameter("lang");
		String dept = request.getParameter("dept");
		String program = request.getParameter("program");	
		//System.out.println(lang);
		
		if(lang==null) {
			lang = "ko";
		}
		
		if(dept==null) {
			dept = "";
		}
		
		if(program==null) {
			program = "";
		}
		
		//System.out.println(lang);
		//System.out.println(dept);
		//System.out.println(program);
%>
<!-- Left panel : Navigation area -->
		<!-- Note: This width of the aside area can be adjusted through LESS variables -->
		<aside id="left-panel">
			<!-- User info 
			<div class="login-info">
				<span> 
					
					<a href="javascript:void(0);" id="show-shortcut" data-action="toggleShortcut">
						<img src="img/avatars/sunny.png" alt="me" class="online" /> 
						<span>
							john.doe 
						</span>
						<i class="fa fa-angle-down"></i>
					</a> 
					
				</span>
			</div>
			 end user info -->

			<nav>
				<!-- 
				NOTE: Notice the gaps after each icon usage <i></i>..
				Please note that these links work a bit different than
				traditional href="" links. See documentation for details.
				-->

				<ul>
					<!--  사용자 정의 메뉴 시작 -->
					<%
							//	프로그램 권한그룹 조회	
							int ProgramGroupCount = 0;	
							int ProgramGroupCount2 = 0;
							int ProgramCount	= 0;
							int ProgramCount2	= 0;
							String ActGbn1 = "";
							String ActGbn2 = "";
							String ActGbn3 = "";
							String ActGbn4 = "";
							String CodeGbn2 = "";
							String CodeGbn2_Depth1 = "";
							String CodeNm = "";
							String CodeNm_Depth1 = "";
							String Val1 = "";
							String Val1_Depth1 = "";
							String Val2 = "";
							String Val2_Depth1 = "";
							String Val3 = "";
							String Val3_Depth1 = "";
							String programid = "";
							String programid_Depth1 = "";
							String category ="";
							String category_Depth1 ="";
							String filenm = "";
							String filenm_Depth1 = "";
							String programnm = "";
							String programnm_Depth1 = "";
							String programiconnm = "";
							String programiconnm_Depth1 = "";
							
							// QRY
							Vector<Object> ProgramGroupList;
							Vector<Object> ProgramGroupList2;
							Vector<Object> ProgramList;
							Vector<Object> ProgramList2;
							
							ProgramGroupList = db.getauthprogramgroup(cookie_Sabun, lang);
							ProgramGroupCount = ProgramGroupList.size();	
							
							//System.out.println(cookie_Sabun);
							//System.out.println(lang);
							
							for ( int i = 0; i < ProgramGroupCount; i++) {								
								
								ediData tmpData1		= (ediData) ProgramGroupList.elementAt(i);		  		
						  		CodeGbn2 				= tmpData1.getCodeGbn2();
						  		CodeNm 					= tmpData1.getCodeNm();
						  		Val1 						= tmpData1.getVal1();
						  		Val2 						= tmpData1.getVal2();
						  		Val3 						= tmpData1.getVal3();
						  		
						  		
						  		if(dept.equals(Val2)) {
						  			ActGbn1 = "active";
						  		} else {
						  			ActGbn1 = "";
						  		}
						  		
						  		
						  			/*			프로그램 그룹 Depth = 0 삽입 시작		*/						  			
							  		out.println("<li class='" + ActGbn1 +"'>");
							  		out.println("     <a href='#'><i class='fa fa-lg fa-fw " + Val1 +"'><!--<em>1</em>!--></i> <span class='menu-item-parent'>" + CodeNm + "</span></a>");
							  		out.println("     <ul>");
							  		
							  		ProgramGroupList2 = db.getauthprogramgroup(cookie_Sabun, lang, Val2);
									ProgramGroupCount2 = ProgramGroupList2.size();	
									
									if(ProgramGroupCount2 > 0) {
										
										for ( int k = 0; k < ProgramGroupCount2; k++) {								
											
											ediData tmpData3		= (ediData) ProgramGroupList2.elementAt(k);		  		
									  		CodeGbn2_Depth1 	= tmpData3.getCodeGbn2();
									  		CodeNm_Depth1 		= tmpData3.getCodeNm();
									  		Val1_Depth1 			= tmpData3.getVal1();
									  		Val2_Depth1 			= tmpData3.getVal2();
									  		Val3_Depth1 			= tmpData3.getVal3();
									  		
									  		if(dept.equals(Val2_Depth1)) {
									  			ActGbn3 = "active";
									  		} else {
									  			ActGbn3 = "";
									  		}
										
											out.println("<li class='" + ActGbn3 +"'>");
									  		out.println("     <a href='#'><i class='fa fa-lg fa-fw " + Val1_Depth1 +"'><!--<em>1</em>!--></i> <span class='menu-item-parent'>" + CodeNm_Depth1 + "</span></a>");
									  		out.println("     <ul>");
									  		
										  		/*			프로그램 리스트 시작	Depth1		*/
										  		ProgramList2 = db.getauthprogramlist(cookie_Sabun, lang, CodeGbn2_Depth1);
										  		ProgramCount2 = ProgramList2.size();	
										  		
										  		//System.out.println(ProgramCount2);
										  		
										  		for ( int h = 0; h < ProgramCount2; h++) {
										  			ediData tmpData4			= (ediData) ProgramList2.elementAt(h);		  		
											  		programid_Depth1			= tmpData4.getProgramid();
											  		category_Depth1			= tmpData4.getCategory();
											  		filenm_Depth1				= tmpData4.getFileNm();
											  		programnm_Depth1		= tmpData4.getProgramNm();
											  		programiconnm_Depth1	= tmpData4.getProgramIconNm();
											  		
											  		if(program.equals(filenm_Depth1)) {
											  			ActGbn4 = "active";
											  		} else {
											  			ActGbn4 = "";
											  		}
										  			
										  			out.println("          <li class='" + ActGbn4 + "'>");
										  			out.println("               <a href='./main.jsp?folder=" + CodeGbn2_Depth1 + "&program=" + filenm_Depth1 + "&dept=" + Val2_Depth1 + "&lang=" + lang +"'><i class='" + programiconnm_Depth1 +"'></i> "  + programnm_Depth1 + "</a>");
										  			out.println("          </li>");
										  			
										  		}
										  		ProgramList2.clear();
										  		/*			프로그램 리스트 끝				*/	
									  		
									  		out.println("     </ul>");
									  		out.println("</li>");		
										}
									}
							  		
							  		/*			프로그램 리스트 시작	Depth0		*/
							  		ProgramList = db.getauthprogramlist(cookie_Sabun, lang, CodeGbn2);
							  		ProgramCount = ProgramList.size();	
							  		
							  		for ( int j = 0; j < ProgramCount; j++) {
							  			ediData tmpData2		= (ediData) ProgramList.elementAt(j);		  		
								  		programid 				= tmpData2.getProgramid();
								  		category 					= tmpData2.getCategory();
								  		filenm 					= tmpData2.getFileNm();
								  		programnm 				= tmpData2.getProgramNm();
								  		programiconnm 		= tmpData2.getProgramIconNm();
								  		
								  		if(program.equals(filenm)) {
								  			ActGbn2 = "active";
								  		} else {
								  			ActGbn2 = "";
								  		}
								  		
								  		if(filenm.equals("xmlupload")) {
								  			
								  			out.println("          <li class='" + ActGbn2 + "'>");
								  			out.println("               <a href='./main2.jsp?folder=" + CodeGbn2 + "&program=" + filenm + "&dept=" + Val2 + "&lang=" + lang +"'><i class='" + programiconnm +"'></i> "  + programnm + "</a>");
								  			out.println("          </li>");
								  			
								  		} else {
								  			
								  			out.println("          <li class='" + ActGbn2 + "'>");
								  			out.println("               <a href='./main.jsp?folder=" + CodeGbn2 + "&program=" + filenm + "&dept=" + Val2 + "&lang=" + lang +"'><i class='" + programiconnm +"'></i> "  + programnm + "</a>");
								  			out.println("          </li>");
								  			
								  		}
							  			
							  			
							  			
							  		}
							  		ProgramList.clear();
							  		/*			프로그램 리스트 끝				*/	
									out.println("     </ul>");
							  		out.println("</li>");						  		
						  		
						  		/*			프로그램 그룹 삽입 끝			*/
							}
							
							ProgramGroupList.clear();
					%>
				</ul>
			</nav>
			

			<span class="minifyme" data-action="minifyMenu"> 
				<i class="fa fa-arrow-circle-left hit"></i> 
			</span>

		</aside>