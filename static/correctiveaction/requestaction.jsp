<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../common/sheetHeader.jsp" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%

		String lang = request.getParameter("lang").trim();

		//System.out.println(lang);
		
		if(lang==null) {
			lang = "ko";
		}
		
		//System.out.println(lang);
%>
<fmt:requestEncoding value="utf-8"/>
<fmt:setLocale value="<%=lang %>" />
<fmt:bundle basename="resource.message-common">
 <script>

	function LoadPage() {		
		
		var sheet_init = {};
		sheet_init.Cfg ={SearchMode:smLazyLoad,Page:50,AutoFitColMinWidth:""};		
		
		//HeaderMode
		sheet_init.HeaderMode = {Sort:1,ColMove:1,ColResize:1,HeaderCheck:0};	
		sheet_init.Cols = [		
		       			{Header:"NO", Type:"Seq", Width:50, SaveName:"SEQ", Align:"Right"},
		       			{Header:"<fmt:message>header.state</fmt:message>", Type:"Status", Width:50, SaveName:"STATUS", Align:"Center"},
		       			{Header:"<fmt:message>header.del</fmt:message>",	Type:"DelCheck", Width:50},
		       			{Header:"<fmt:message>header.req.PlantCd</fmt:message>",	Type:"Text", Width:70, SaveName:"PlantCd", Align:"Center"},
		       			{Header:"<fmt:message>header.req.OccurDate</fmt:message>",	Type:"Text", Width:80, SaveName:"OccurDate", Align:"Center"},
		       			{Header:"<fmt:message>header.req.CarType</fmt:message>",	Type:"Text", Width:50, SaveName:"CarType"},
		       			{Header:"<fmt:message>header.req.ItemCd</fmt:message>",	Type:"Text", Width:100, SaveName:"ItemCd"},
		       			{Header:"<fmt:message>header.req.ItemNm</fmt:message>",	Type:"Text", Width:150, SaveName:"ItemNm"},
		       			{Header:"<fmt:message>header.req.LotNo</fmt:message>",	Type:"Text", Width:80, SaveName:"LotNo"},
		       			{Header:"<fmt:message>header.req.BadPhenCd</fmt:message>",	Type:"Text", Width:120, SaveName:"BadPhenCd"},
		       			{Header:"<fmt:message>header.req.BadQty</fmt:message>",	Type:"Int", Width:120, SaveName:"BadQty"},
		       			{Header:"<fmt:message>header.req.DutyDept</fmt:message>",	Type:"Text", Width:120, SaveName:"DutyDept"},
		       			{Header:"<fmt:message>header.req.TheProblem</fmt:message>",	Type:"Text", Width:120, SaveName:"TheProblem"},
		       			{Header:"<fmt:message>header.req.ProgStatus</fmt:message>",	Type:"Text", Width:120, SaveName:"ProgStatus"},
		       			{Header:"<fmt:message>header.req.OccurPlace</fmt:message>",	Type:"Text", Width:120, SaveName:"OccurPlace"},
		       			{Header:"<fmt:message>header.createdate</fmt:message>",	Type:"Text", Width:80, SaveName:"CreateDate", Align:"Center", Format:"yyyy-MM-dd"},
		       			{Header:"<fmt:message>header.createsawon</fmt:message>",	Type:"Text", Width:80, SaveName:"CreateSawon", Align:"Center"},
		       			{Header:"<fmt:message>header.updatedate</fmt:message>",	Type:"Text", Width:80, SaveName:"UpdateDate", Align:"Center", Format:"yyyy-MM-dd"},
		       			{Header:"<fmt:message>header.updatesawon</fmt:message>",	Type:"Text", Width:80, SaveName:"UpdateSawon", Align:"Center"},
		       		]; 
		
		
		IBS_InitSheet(mySheet, sheet_init);
		mySheet.SetCountPosition(4);	
		//editFunc();
		mySheet.SetTheme('WHM','ModernWhite');			
		mySheet.FitColWidth();	
		//doAction("search");
		
	}	
	
	function editFunc() {		
		mySheet.SetColEditable(3,0);
		//mySheet.SetColEditable(4,0);
		mySheet.SetColEditable(5,0);
		mySheet.SetColEditable(6,0);
		mySheet.SetColEditable(7,0);
		mySheet.SetColEditable(8,0);
		
	}
	
	function mySheet_OnSmartResize() {
        mySheet.FitColWidth();
    }
	
	function doAction(sAction) {
		switch(sAction) {
			case "search":      //조회	
				mySheet.DoSearch("./claim/carmodel_Data.jsp");					
				break;			
			case "save":		
				//alert("저장될 문자열:"+ mySheet.GetSaveString());	
				mySheet.DoSave("./claim/carmodel_Save.jsp");	
				//mySheet.DoSave("basicInfo_Save.jsp");		
				//location.href = "./claim/carmodel_Save.jsp";
				break;
			case "loadexcel": //엑셀 업로드 (import)		
				var params = { Mode : "HeaderMatch",  StartRow: "1"} ;
				mySheet.LoadExcel(params);			
				break;	
			case "templetedown": //엑셀양식 다운로드	
				fn_down();	
				break;
			case "setfilter1":
				mySheet.ShowFilterRow();  
				break;
			case "setfilter2":
				mySheet.HideFilterRow();  
				break;
			case "insert":
				//신규행 추가
				mySheet.DataInsert();				
				break;
		}
	}	
	
	function mySheet_OnSaveEnd(code, message) {
		if(code == 0){
			alert("<fmt:message>msg.SYS_SaveSuccess</fmt:message>");	
			doAction("search");
		} else {
			//alert(message);	
			alert("<fmt:message>msg.SYS_SaveFail</fmt:message>");	
		}
	}
	
	function mySheet_OnSearchEnd(code, message) {
		if(code == 0) {
			//alert(mySheet.RowCount() );
			//for(var i = 1; i <= mySheet.RowCount(); i++) {
			//	mySheet.SetCellEditable(i, 3, 0);
			//}
		}
		else {
			alert("<fmt:message>msg.SYS_SearchError</fmt:message>");
		}
	}	
	
	function fn_down(){	
		target = 'down';
		var left_position = (screen.width-370)/2; //팝업 위치 세로
		var top_position = ((screen.height-225)/2)-15; //팝업 위치 가로   
		window.open("./common/templete/download.jsp?filename=Car_Model_Templete_<%=lang%>.xlsx","Templete","width=300,height=225,location=no,status=yes,menubar=no,scrollbars=no,resizable=no,left="+left_position+",top="+top_position);			

	}
</script>
<body onload = "LoadPage();">
<div id="main" role="main">

			<!-- RIBBON -->
			<div id="ribbon">

				<span class="ribbon-button-alignment"> 
					<span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
						<i class="fa fa-refresh"></i>
					</span> 
				</span>

				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<li>Home</li><li><fmt:message>menu.correctiveaction</fmt:message></li><li><fmt:message>menu.reqeustaction</fmt:message></li><li><fmt:message>menu.requestaction_s</fmt:message></li>
				</ol>
				<!-- end breadcrumb -->

				<!-- You can also add more buttons to the
				ribbon for further usability

				Example below:

				<span class="ribbon-button-alignment pull-right">
				<span id="search" class="btn btn-ribbon hidden-xs" data-title="search"><i class="fa-grid"></i> Change Grid</span>
				<span id="add" class="btn btn-ribbon hidden-xs" data-title="add"><i class="fa-plus"></i> Add</span>
				<span id="search" class="btn btn-ribbon" data-title="search"><i class="fa-search"></i> <span class="hidden-mobile">Search</span></span>
				</span> -->

			</div>
			<!-- END RIBBON -->
			
			

			<!-- MAIN CONTENT -->
			<div id="content">	
				<!--
					The ID "widget-grid" will start to initialize all widgets below 
					You do not need to use widgets if you dont want to. Simply remove 
					the <section></section> and you can use wells or panels instead 
					-->
				
				<!-- widget grid -->
				<section id="widget-grid" class="">
				
					<!-- row -->
					<div class="row">
						
						<!-- NEW WIDGET START -->
						<article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget" id="wid-id-0"  data-widget-editbutton="false"  data-widget-deletebutton="false" >
								<!-- widget options:
									usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">
									
									data-widget-colorbutton="false"	
									data-widget-editbutton="false"
									data-widget-togglebutton="false"
									data-widget-deletebutton="false"
									data-widget-fullscreenbutton="false"
									data-widget-custombutton="false"
									data-widget-collapsed="true" 
									data-widget-sortable="false"
									
								-->
								<header>
									<span class="widget-icon"> <i class="fa fa-comments"></i> </span>
									<h2><fmt:message>widget.list </fmt:message></h2>				
									
								</header>
				
								<!-- widget div-->
								<div>
									
									<!-- widget edit box -->									
									<div class="jarviswidget-editbox">
										<!-- This area used as dropdown edit box -->
										<input class="form-control" type="text" >	
									</div>								
									<!-- end widget edit box -->
									
									<!-- widget content -->
									<div class="widget-body">
									<form name="myform">
										<div class="row">
											<div class="col-sm-6">
							                	<button type="button" class="btn btn-sm btn-info pull-left" style="margin-right: 5px;" onclick ="javascript:doAction('setfilter1')"><i class="fa fa-filter"></i> <fmt:message>button.filteron</fmt:message></button>
							                	<button type="button" class="btn btn-sm pull-left" style="margin-right: 5px;" onclick ="javascript:doAction('setfilter2')"><i class="fa fa-filter"></i> <fmt:message>button.filteroff</fmt:message></button>
						                   </div>
											<div class="col-sm-6" style="margin-bottom:5px;">												
												<button type="button" class="btn btn-sm btn-warning pull-right" style="margin-right: 5px;" onclick ="javascript:doAction('insert')"><i class="fa fa-plus"></i> <fmt:message>button.addrow</fmt:message></button>
												<button type="button" class="btn btn-sm btn-primary pull-right" style="margin-right: 5px;" onclick ="javascript:doAction('save')"><i class="fa fa-save"></i> <fmt:message>button.save</fmt:message></button>
												<button type="button" class="btn btn-sm btn-info pull-right" style="margin-right: 5px;" onclick ="javascript:doAction('search')"><i class="fa fa-search"></i> <fmt:message>button.search</fmt:message></button>
											</div>
										</div>
										
										<div class="row">
											<!-- this is what the user will see -->
											<div class="col-sm-12" style="height:400px;">
						                        <script type="text/javascript"> createIBSheet("mySheet", "100%", "100%", "<%=lang%>"); </script>
						                    </div>
										</div>					                   
									</form>
									</div>									
									<!-- end widget content -->
									
								</div>
								<!-- end widget div -->
								
							</div>
							<!-- end widget -->
				
						</article>
						<!-- WIDGET END -->
						
					</div>
				
					<!-- end row -->
				
					<!-- row -->
				
					<div class="row">
				
						<!-- a blank row to get started -->
						<div class="col-sm-12">
							<!-- your contents here -->
						</div>
							
					</div>
				
					<!-- end row -->
				
				</section>
				<!-- end widget grid -->

			</div>
			<!-- END MAIN CONTENT -->

		</div>
</fmt:bundle>
</body>