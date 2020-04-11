<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@page import="java.net.URLDecoder"%>
<%

		String lang		= request.getParameter("lang");
		String folder		= request.getParameter("folder");
		String program = request.getParameter("program");
		String dept		= request.getParameter("dept");
		String path		=	"";
		
		if(lang==null) {
			lang = "ko";
		}
		
		if(folder==null) {
			path = "./main.jsp?lang=";
		} else {
			path = "./main.jsp?folder="+folder+"&program="+program+"&dept="+dept+"&lang=";
		}
%>
 <Script> 	
 		
		function fn_language(val) {		
			
			var url = "<%=path%>";
					
			location.href = url + val;
		} 	
		
</Script>
		<header id="header">
			<div id="logo-group">

				<!-- PLACE YOUR LOGO HERE -->
				<span id="logo"> <a href="./main.jsp"><img src="common/images/EDILOGO.png" alt="전자전표시스템"></a> </span>
				<!-- END LOGO PLACEHOLDER -->
				
			</div>

			<!-- #TOGGLE LAYOUT BUTTONS -->
			<!-- pulled right: nav area -->
			<div class="pull-right">
				
				<!-- collapse menu button -->
				<div id="hide-menu" class="btn-header pull-right">
					<span> <a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu"><i class="fa fa-reorder"></i></a> </span>
				</div>
				<!-- end collapse menu -->
				
				<!-- #MOBILE -->
				<!-- Top menu profile link : this shows only when top menu is active -->
				<ul id="mobile-profile-img" class="header-dropdown-list hidden-xs padding-5">
					<li class="">
						<a href="#" class="dropdown-toggle no-margin userdropdown" data-toggle="dropdown"> 
							<img src="img/avatars/sunny.png" alt="John Doe" class="online" />  
						</a>
						<ul class="dropdown-menu pull-right">
							<li>
								<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0"><i class="fa fa-cog"></i> Setting</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="profile.html" class="padding-10 padding-top-0 padding-bottom-0"> <i class="fa fa-user"></i> <u>P</u>rofile</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0" data-action="toggleShortcut"><i class="fa fa-arrow-down"></i> <u>S</u>hortcut</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0" data-action="launchFullscreen"><i class="fa fa-arrows-alt"></i> Full <u>S</u>creen</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="login.html" class="padding-10 padding-top-5 padding-bottom-5" data-action="userLogout"><i class="fa fa-sign-out fa-lg"></i> <strong><u>L</u>ogout</strong></a>
							</li>
						</ul>
					</li>
				</ul>
				
				<!-- logout button -->
				<div id="logout" class="btn-header transparent pull-right">
					<span> <a href="logout.jsp" title="Sign Out" data-action="userLogout" data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i class="fa fa-sign-out"></i></a> </span>
				</div>
				<!-- end logout button -->
				<!-- search mobile button (this is hidden till mobile view port) -->
				<!-- 
				<div id="search-mobile" class="btn-header transparent pull-right">
					<span> <a href="javascript:void(0)" title="Search"><i class="fa fa-search"></i></a> </span>
				</div>
				-->
				<!-- end search mobile button -->
				
				<!-- #SEARCH -->
				<!-- input: search field -->
				<!-- 
				<form action="search.html" class="header-search pull-right">
					<input id="search-fld" type="text" name="param" placeholder="Find reports and more">
					<button type="submit">
						<i class="fa fa-search"></i>
					</button>
					<a href="javascript:void(0);" id="cancel-search-js" title="Cancel Search"><i class="fa fa-times"></i></a>
				</form>
				 -->
				<!-- end input: search field -->

				<!-- fullscreen button -->
				<!-- 
				<div id="fullscreen" class="btn-header transparent pull-right">
					<span> <a href="javascript:void(0);" data-action="launchFullscreen" title="Full Screen"><i class="fa fa-arrows-alt"></i></a> </span>
				</div>
				 -->
				<!-- end fullscreen button -->		

				<!-- multiple lang dropdown : find all flags in the flags page -->
				<%
						String temp_class = "";
						String temp_alt = "";
						String temp_country = "";
					
						
						if(lang.equals("en")) {
							temp_class = "flag flag-us";
							temp_alt = "United States";
							temp_country = "English (US)";
						} else if(lang.equals("ko")) {
							temp_class = "flag flag-kr";
							temp_alt = "Korea";
							temp_country = "한국어";
						}
				%>
				<ul class="header-dropdown-list hidden-xs">
					<li>
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"> <img src="img/blank.gif" class="<%=temp_class %>" alt="<%=temp_alt%>"> <span> <%=temp_country %> </span> <i class="fa fa-angle-down"></i> </a>
						<ul class="dropdown-menu pull-right">
							<!-- 
							<li class="<% if (lang.equals("en")) { out.println("active"); } %>">
								<a href="javascript:fn_language('en');"><img src="img/blank.gif" class="flag flag-us" alt="United States"> English (US)</a>
							</li>
							
							<li>
								<a href="javascript:fn_language('en');"><img src="img/blank.gif" class="flag flag-cn" alt="China"> 中文</a>
							</li>								
							<li>
								<a href="javascript:fn_language('en');"><img src="img/blank.gif" class="flag flag-pt" alt="Portugal"> Portugal</a>
							</li>	
							 -->						
							<li class="<% if (lang.equals("ko")) { out.println("active"); } %>">
								<a href="javascript:fn_language('ko');"><img src="img/blank.gif" class="flag flag-kr" alt="Korea"> 한국어</a>
							</li>						
							
						</ul>
					</li>
				</ul>
				<!-- end multiple lang -->

			</div>
			<!-- end pulled right: nav area -->

		</header>