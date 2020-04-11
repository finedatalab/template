var ibsheetObject = function() {
		///	<summary>
		/// 
		///	</summary>
	}
	ibsheetObject.prototype.GetActionMenu = function()			{
	  /// <summary>&#13;
	  ///  컬럼 팝업과 같이 특정 컬럼에 값을 바꾸기 위해 사용하는 메뉴팝업이 아니라 전반적으로 어떤 Action을 처리하기 위해 사용하는 메뉴를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 메뉴만 설정					&#13;
  ///  mySheet.GetActionMenu();					&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetActionMenu = function(Text, Code)			{
	  /// <summary>&#13;
	  ///  컬럼 팝업과 같이 특정 컬럼에 값을 바꾸기 위해 사용하는 메뉴팝업이 아니라 전반적으로 어떤 Action을 처리하기 위해 사용하는 메뉴를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 메뉴만 설정					&#13;
  ///  mySheet.SetActionMenu(입력|행복사|*-|행삭제|Clear|엑셀다운로드);					&#13;
  ///  // 메뉴와 코드 설정					&#13;
  ///  var Text = 입력|행복사|*-|행삭제|Clear|엑셀다운로드;					&#13;
  ///  var Code = Ins|Copy||Del|Clear|Download;					&#13;
  ///  mySheet.SetActionMenu(Text, Code);					&#13;
  ///  // JSON 객체 설정					&#13;
  ///  var Menu = [					&#13;
  ///  {Text: 입력, Code: Ins},					&#13;
  ///  {Text: 행복사, Code: Copy},					&#13;
  ///  {Text: *-},					&#13;
  ///  {Text: 행삭제, Code: Delete},					&#13;
  ///  {Text: Clear, Code: Clear},					&#13;
  ///  {Text: 엑셀다운로드, Code: Download}					&#13;
  ///  ];					&#13;
  ///  mySheet.SetActionMenu(Menu);					&#13;
  ///  // JSON 객체 계층구조설정					&#13;
  ///  var Menu = [					&#13;
  ///  {Text: 입력, Code: Ins, 					&#13;
  ///    Items : [					&#13;
  ///    { Text: 첫행입력, Code: FIns},					&#13;
  ///    { Text: 마지막행입력, Code: LIns}					&#13;
  ///  ]					&#13;
  ///  },					&#13;
  ///  {Text: 행복사, Code: Copy},					&#13;
  ///  {Text: *-},					&#13;
  ///  {Text: 행삭제, Code: Delete},					&#13;
  ///  {Text: Clear, Code: Clear},					&#13;
  ///  {Text: 엑셀다운로드, Code: Download}					&#13;
  ///  ];					&#13;
  ///  mySheet.SetActionMenu(Menu);					&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Text' type='String' >&#13;
	 ///       설정할 팝업메뉴 문자열&#13;
	 /// </param>&#13;
	 /// <param name='Code' type='String' >&#13;
	 ///       설정할 팝업메뉴 코드 문자열&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetAllowCheck = function()		{
	  /// <summary>&#13;
	  ///  사용자가 체크박스의 값 변경시, 값의 변경을 수용할 지의 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 메뉴만 설정					&#13;
  ///  mySheet.SetActionMenu(입력|행복사|*-|행삭제|Clear|엑셀다운로드);					&#13;
  ///  // 메뉴와 코드 설정					&#13;
  ///  var Text = 입력|행복사|*-|행삭제|Clear|엑셀다운로드;					&#13;
  ///  var Code = Ins|Copy||Del|Clear|Download;					&#13;
  ///  mySheet.SetActionMenu(Text, Code);					&#13;
  ///  // JSON 객체 설정					&#13;
  ///  var Menu = [					&#13;
  ///  {Text: 입력, Code: Ins},					&#13;
  ///  {Text: 행복사, Code: Copy},					&#13;
  ///  {Text: *-},					&#13;
  ///  {Text: 행삭제, Code: Delete},					&#13;
  ///  {Text: Clear, Code: Clear},					&#13;
  ///  {Text: 엑셀다운로드, Code: Download}					&#13;
  ///  ];					&#13;
  ///  mySheet.SetActionMenu(Menu);					&#13;
  ///  // JSON 객체 계층구조설정					&#13;
  ///  var Menu = [					&#13;
  ///  {Text: 입력, Code: Ins, 					&#13;
  ///    Items : [					&#13;
  ///    { Text: 첫행입력, Code: FIns},					&#13;
  ///    { Text: 마지막행입력, Code: LIns}					&#13;
  ///  ]					&#13;
  ///  },					&#13;
  ///  {Text: 행복사, Code: Copy},					&#13;
  ///  {Text: *-},					&#13;
  ///  {Text: 행삭제, Code: Delete},					&#13;
  ///  {Text: Clear, Code: Clear},					&#13;
  ///  {Text: 엑셀다운로드, Code: Download}					&#13;
  ///  ];					&#13;
  ///  mySheet.SetActionMenu(Menu);					&#13;
  ///  // 체크박스의 값을 확인한다.				&#13;
  ///  mySheet.GetAllowCheck(); 				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetAllowCheck = function(Val)		{
	  /// <summary>&#13;
	  ///  사용자가 체크박스의 값 변경시, 값의 변경을 수용할 지의 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 체크박스의 값의 변경을 하지 않는다.				&#13;
  ///  mySheet.SetAllowCheck(false); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Val' type='Boolean' >&#13;
	 ///       값의 변경 수용여부. Default=true&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.AllowEvent4CheckAll = function(Val)			{
	  /// <summary>&#13;
	  ///  전체선택 기능을 실행할 때 OnChange Event를 실행할지 여부를 지정한다&#13;
	  /// Example : 
  ///  // 체크박스의 값의 변경을 하지 않는다.				&#13;
  ///  mySheet.SetAllowCheck(false); 				&#13;
  ///  // 전체선택시 이벤트 발생안함				&#13;
  ///  sheetObj.AllowEvent4CheckAll(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Val' type='Boolean' >&#13;
	 ///       OnChange Event 발생여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetAllowExpand = function()		{
	  /// <summary>&#13;
	  ///  OnBeforeExpand 이벤트가 발생한 직후에 실제로 트리를 펼치거나 접혀지는 것을 막고싶은 경우 사용한다&#13;
	  /// Example : 
  ///  // 체크박스의 값의 변경을 하지 않는다.				&#13;
  ///  mySheet.SetAllowCheck(false); 				&#13;
  ///  // 전체선택시 이벤트 발생안함				&#13;
  ///  sheetObj.AllowEvent4CheckAll(0);				&#13;
  ///  mySheet.GetAllowExpand();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetAllowExpand = function(Expand)		{
	  /// <summary>&#13;
	  ///  OnBeforeExpand 이벤트가 발생한 직후에 실제로 트리를 펼치거나 접혀지는 것을 막고싶은 경우 사용한다&#13;
	  /// Example : 
  ///  function mySheet_OnBeforeExpand(Row,Expand) {				&#13;
  ///  if(Row == 1 &amp;&amp; Expand == 2) {				&#13;
  ///  mySheet.SetAllowExpand(0);				&#13;
  ///  alert(1 행에서는 펼칠 수 있지만 접을 수 없습니다.);				&#13;
  ///  }				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Expand' type='Boolean' >&#13;
	 ///       트리의 펼쳐짐 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetAutoRowHeight = function()		{
	  /// <summary>&#13;
	  ///  데이터 행의 높이를 자동으로 조정할지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  function mySheet_OnBeforeExpand(Row,Expand) {				&#13;
  ///  if(Row == 1 &amp;&amp; Expand == 2) {				&#13;
  ///  mySheet.SetAllowExpand(0);				&#13;
  ///  alert(1 행에서는 펼칠 수 있지만 접을 수 없습니다.);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 설정값 확인				&#13;
  ///  mySheet.GetAutoRowHeight();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetAutoRowHeight = function(Flag)		{
	  /// <summary>&#13;
	  ///  데이터 행의 높이를 자동으로 조정할지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 높이를 자동으로 조정하지 않고, 한줄 높이로 고정한다.				&#13;
  ///  mySheet.SetAutoRowHeight(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Flag' type='Boolean' >&#13;
	 ///       데이터행의 높이 자동조정 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetAutoSumPosition = function()		{
	  /// <summary>&#13;
	  ///  전체 합계/평균의 표시 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 높이를 자동으로 조정하지 않고, 한줄 높이로 고정한다.				&#13;
  ///  mySheet.SetAutoRowHeight(0);				&#13;
  ///  //합계 행을 상단에 표시				&#13;
  ///  mySheet.GetAutoSumPosition();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetAutoSumPosition = function(Position)		{
	  /// <summary>&#13;
	  ///  전체 합계/평균의 표시 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //합계 행을 상단에 표시				&#13;
  ///  mySheet.SetAutoSumPosition(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Position' type='Integer' >&#13;
	 ///       합계행의 위치 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetBasicImeMode = function()		{
	  /// <summary>&#13;
	  ///  Edit 가능한 셀에 포커스가 들어갔을 때 한/영 키보드 상태를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //합계 행을 상단에 표시				&#13;
  ///  mySheet.SetAutoSumPosition(0);				&#13;
  ///  //기본 한글 입력 키보드 상태 사용				&#13;
  ///  mySheet.GetBasicImeMode();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetBasicImeMode = function(Val)		{
	  /// <summary>&#13;
	  ///  Edit 가능한 셀에 포커스가 들어갔을 때 한/영 키보드 상태를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //기본 한글 입력 키보드 상태 사용				&#13;
  ///  mySheet.SetBasicImeMode(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Val' type='Integer' >&#13;
	 ///       ImeMode 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellAlign = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀에 대한 정렬을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //기본 한글 입력 키보드 상태 사용				&#13;
  ///  mySheet.SetBasicImeMode(1);				&#13;
  ///  // 해당 셀의 정렬 값을 확인한다.				&#13;
  ///  var align = mySheet.GetCellAlign(1, 1);				&#13;
  ///  alert(셀의 정렬 값은  + align + 입니다.);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellAlign = function(Row, Col, Align)		{
	  /// <summary>&#13;
	  ///  셀에 대한 정렬을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 해당 셀을 가운데 정렬로 변경한다.				&#13;
  ///  mySheet.SetCellAlign(1, 1, Center);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Align' type='String' >&#13;
	 ///       정렬 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellBackColor = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀의 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 해당 셀을 가운데 정렬로 변경한다.				&#13;
  ///  mySheet.SetCellAlign(1, 1, Center);				&#13;
  ///  // 설정된 색상 값을 확인한다.				&#13;
  ///  var color = mySheet.GetCellBackColor(1,1);				&#13;
  ///  alert(셀의 색상 값은  + color + 입니다.);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellBackColor = function(Row, Col, Color)		{
	  /// <summary>&#13;
	  ///  셀의 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //헤더행의 첫번째 셀의 배경색을 빨간색으로 변경				&#13;
  ///  mySheet.SetCellBackColor(0, 0, #FF0000);       // WebColor				&#13;
  ///  //데이터행의 셀의 배경색을 헤더행의 첫번째 셀의 배경색과 동일하게 설정				&#13;
  ///  mySheet.SetCellBackColor(1,0, mySheet.GetCellBackColor(0, 0));				&#13;
  ///  //헤더행의 SaveName이 amt인 셀의 배경색을 빨간색으로 변경				&#13;
  ///  mySheet.SetCellBackColor(0,amt, #FF0000);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.CellComboItem = function(Row, Col,info)			{
	  /// <summary>&#13;
	  ///  특정 셀의 Combo 항목만 다른 경우 Combo항목을 개별 설정한다&#13;
	  /// Example : 
  ///  //헤더행의 첫번째 셀의 배경색을 빨간색으로 변경				&#13;
  ///  mySheet.SetCellBackColor(0, 0, #FF0000);       // WebColor				&#13;
  ///  //데이터행의 셀의 배경색을 헤더행의 첫번째 셀의 배경색과 동일하게 설정				&#13;
  ///  mySheet.SetCellBackColor(1,0, mySheet.GetCellBackColor(0, 0));				&#13;
  ///  //헤더행의 SaveName이 amt인 셀의 배경색을 빨간색으로 변경				&#13;
  ///  mySheet.SetCellBackColor(0,amt, #FF0000);				&#13;
  ///  //특정 셀의 콤보 항목 바꾸기				&#13;
  ///  var info = {ComboCode:사장|과장|대리,ComboText:A|B|C};				&#13;
  ///  mySheet.CellComboItem(1,2,info);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       특정 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       특정 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='info' type='Object' >&#13;
	 ///       변경할 Combo item 내용을 구분자 |로 연결된 문자열을 만들어 ComboCode와 ComboText로 값을 설정&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellEditable = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀의 Edit 가능 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //헤더행의 첫번째 셀의 배경색을 빨간색으로 변경				&#13;
  ///  mySheet.SetCellBackColor(0, 0, #FF0000);       // WebColor				&#13;
  ///  //데이터행의 셀의 배경색을 헤더행의 첫번째 셀의 배경색과 동일하게 설정				&#13;
  ///  mySheet.SetCellBackColor(1,0, mySheet.GetCellBackColor(0, 0));				&#13;
  ///  //헤더행의 SaveName이 amt인 셀의 배경색을 빨간색으로 변경				&#13;
  ///  mySheet.SetCellBackColor(0,amt, #FF0000);				&#13;
  ///  //특정 셀의 콤보 항목 바꾸기				&#13;
  ///  var info = {ComboCode:사장|과장|대리,ComboText:A|B|C};				&#13;
  ///  mySheet.CellComboItem(1,2,info);				&#13;
  ///  //1행 2컬럼이 Edit 가능이면 3컬럼도 Edit 가능으로 변경한다.				&#13;
  ///  if(mySheet.GetCellEditable(1, 2) == 1) { 				&#13;
  ///      mySheet.SetCellEditable(1, 3, 1); 				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellEditable = function(Row, Col, Edit)		{
	  /// <summary>&#13;
	  ///  셀의 Edit 가능 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //1행 2컬럼이 Edit 가능이면 3컬럼도 Edit 가능으로 변경한다.				&#13;
  ///  if(mySheet.GetCellEditable(1, 2) == 1) { 				&#13;
  ///      mySheet.SetCellEditable(1, 3, 1); 				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Editable' type='Boolean' >&#13;
	 ///       편집 가능 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellFont = function(Flag, Row1, Col1, Row2, Col2)		{
	  /// <summary>&#13;
	  ///  특정 셀 또는 영역의 글꼴, 크기, 글자색, 기울임, 볼드, 밑줄 등을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //1행 2컬럼이 Edit 가능이면 3컬럼도 Edit 가능으로 변경한다.				&#13;
  ///  if(mySheet.GetCellEditable(1, 2) == 1) { 				&#13;
  ///      mySheet.SetCellEditable(1, 3, 1); 				&#13;
  ///  }				&#13;
  ///  //글자크기가 10보다 큰 경우 9사이즈로 변경한다.				&#13;
  ///  if (mySheet.GetCellFont(FontSize, 2,1,2,1) &amp;gt;= 10) {				&#13;
  ///   mySheet.SetCellFont(FontSize, 2,1,2,1,9));				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Flag' type='String' >&#13;
	 ///       폰트 속성&#13;
	 /// </param>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       영역 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long / String' >&#13;
	 ///       영역 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       영역 마지막 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long / String' >&#13;
	 ///       영역 마지막 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellFont = function(Flag, Row1, Col1, Row2, Col2, Value)		{
	  /// <summary>&#13;
	  ///  특정 셀 또는 영역의 글꼴, 크기, 글자색, 기울임, 볼드, 밑줄 등을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //영역에 글자 Bold 설정				&#13;
  ///  mySheet.SetCellFont(FontBold, 1,1,2,3,1) ;				&#13;
  ///  //영역에 글자 취소선 설정				&#13;
  ///  mySheet.SetCellFont(FontStrike, 1,1,2,3,1) ;				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Flag' type='String' >&#13;
	 ///       폰트 속성&#13;
	 /// </param>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       영역 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long / String' >&#13;
	 ///       영역 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       영역 마지막 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long / String' >&#13;
	 ///       영역 마지막 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='Boolean / String' >&#13;
	 ///       폰트속성에 설정할 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellFontBold = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  특정 셀의 글자 Bold(굵은 글자체) 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //영역에 글자 Bold 설정				&#13;
  ///  mySheet.SetCellFont(FontBold, 1,1,2,3,1) ;				&#13;
  ///  //영역에 글자 취소선 설정				&#13;
  ///  mySheet.SetCellFont(FontStrike, 1,1,2,3,1) ;				&#13;
  ///  //특정 셀의 Bold 처리 여부를 확인한다. 				&#13;
  ///  alert(mySheet.GetCellFontBold(1, 1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellFontBold = function(Row, Col, Bold)		{
	  /// <summary>&#13;
	  ///  특정 셀의 글자 Bold(굵은 글자체) 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //특정 셀에 글자를 Bold 처리한다.				&#13;
  ///  mySheet.SetCellFontBold(1, 1,1)				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Bold' type='Boolean' >&#13;
	 ///       Bold 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellFontColor = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀의 글자 색을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //특정 셀에 글자를 Bold 처리한다.				&#13;
  ///  mySheet.SetCellFontBold(1, 1,1)				&#13;
  ///  //금액이 0보다 작으면 숫자는 붉은색으로 표시한다.				&#13;
  ///  if(mySheet.GetCellValue(1, 2) &amp;lt; 0 ) {				&#13;
  ///      mySheet.SetCellFontColor(1,2,#FF0000) ;				&#13;
  ///  //금액이 0보다 크면 숫자는 검은색으로 표시한다.				&#13;
  ///  } else {				&#13;
  ///      mySheet.SetCellFontColor(1,2, #000000);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellFontColor = function(Row, Col, Color)		{
	  /// <summary>&#13;
	  ///  셀의 글자 색을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //금액이 0보다 작으면 숫자는 붉은색으로 표시한다.				&#13;
  ///  if(mySheet.GetCellValue(1, 2) &amp;lt; 0 ) {				&#13;
  ///      mySheet.SetCellFontColor(1,2,#FF0000) ;				&#13;
  ///  //금액이 0보다 크면 숫자는 검은색으로 표시한다.				&#13;
  ///  } else {				&#13;
  ///      mySheet.SetCellFontColor(1,2, #000000);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellFontItalic = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  특정 셀의 글자 이탤릭(기울임 글자체) 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //금액이 0보다 작으면 숫자는 붉은색으로 표시한다.				&#13;
  ///  if(mySheet.GetCellValue(1, 2) &amp;lt; 0 ) {				&#13;
  ///      mySheet.SetCellFontColor(1,2,#FF0000) ;				&#13;
  ///  //금액이 0보다 크면 숫자는 검은색으로 표시한다.				&#13;
  ///  } else {				&#13;
  ///      mySheet.SetCellFontColor(1,2, #000000);				&#13;
  ///  }				&#13;
  ///  //특정 셀의 이탤릭체 여부를 확인한다. 				&#13;
  ///  alert(mySheet.GetCellFontItalic(1, 1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellFontItalic = function(Row, Col, Italic)		{
	  /// <summary>&#13;
	  ///  특정 셀의 글자 이탤릭(기울임 글자체) 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //특정 셀에 글자를 이탤릭체로 설정한다.				&#13;
  ///  mySheet.SetCellFontItalic(1, 1,1)				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Italic' type='Boolean' >&#13;
	 ///       이탤릭 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellFontName = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  특정 셀에 대해 글자체를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //특정 셀에 글자를 이탤릭체로 설정한다.				&#13;
  ///  mySheet.SetCellFontItalic(1, 1,1)				&#13;
  ///  //글자체를 확인한다				&#13;
  ///  alert(mySheet.GetCellFontName(1, 1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellFontName = function(Row, Col, FontName)		{
	  /// <summary>&#13;
	  ///  특정 셀에 대해 글자체를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //글자체를 궁서체로 바꾼다.				&#13;
  ///  mySheet.SetCellFontName(1, 1, Gungsuh)				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='FontName' type='String' >&#13;
	 ///       글자체&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellFontSize = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  특정 셀에 대해 글자 크기를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //글자체를 궁서체로 바꾼다.				&#13;
  ///  mySheet.SetCellFontName(1, 1, Gungsuh)				&#13;
  ///  // 셀의 글자 크기를 확인한다.				&#13;
  ///  alert(mySheet.GetCellFontSize(1,1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellFontSize = function(Row, Col, FontSize)		{
	  /// <summary>&#13;
	  ///  특정 셀에 대해 글자 크기를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 글자크기를 20px로 바꾼다.				&#13;
  ///  mySheet.SetCellFontSize(1, 1, 20)				&#13;
  ///  // SaveName이 sName 인 셀의 글자크기를 20으로 바꾼다.				&#13;
  ///  mySheet.SetCellFontSize(1,sName, 20);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='FontSize' type='Integer' >&#13;
	 ///       설정하고자 하는 글자크기&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellFontStrike = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  특정 셀 글자에 취소선을 설정한다&#13;
	  /// Example : 
  ///  // 글자크기를 20px로 바꾼다.				&#13;
  ///  mySheet.SetCellFontSize(1, 1, 20)				&#13;
  ///  // SaveName이 sName 인 셀의 글자크기를 20으로 바꾼다.				&#13;
  ///  mySheet.SetCellFontSize(1,sName, 20);				&#13;
  ///  // 셀의 글자 취소선 설정여부를 확인한다.				&#13;
  ///  alert(mySheet.GetCellFontStrike(1,1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellFontStrike = function(Row, Col, FontStrike)		{
	  /// <summary>&#13;
	  ///  특정 셀 글자에 취소선을 설정한다&#13;
	  /// Example : 
  ///  // 글자 취소선을 설정한다.				&#13;
  ///  mySheet.SetCellFontStrike(1, 1, 1)				&#13;
  ///  // SaveName이 sName 인 셀의 글자에 취소선을 설정한다.				&#13;
  ///  mySheet.SetCellFontStrike(1,sName, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='FontStrike' type='Integer' >&#13;
	 ///       설정하고자 하는 글자크기&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellFontUnderline = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀의 글자의 밑줄을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 글자 취소선을 설정한다.				&#13;
  ///  mySheet.SetCellFontStrike(1, 1, 1)				&#13;
  ///  // SaveName이 sName 인 셀의 글자에 취소선을 설정한다.				&#13;
  ///  mySheet.SetCellFontStrike(1,sName, 1);				&#13;
  ///  //금액이 0보다 작으면 언더라인 표시한다.				&#13;
  ///  if(mySheet.GetCellValue(1, 2) &amp;lt; 0 ) {				&#13;
  ///      mySheet.SetCellFontUnderline(1, 2, 1);				&#13;
  ///  //금액이 0보다 크면 언더라인을 표시하지 않는다.				&#13;
  ///  } else {				&#13;
  ///      mySheet.SetCellFontUnderline(1, 2, 0);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellFontUnderline = function(Row, Col, Underline)		{
	  /// <summary>&#13;
	  ///  셀의 글자의 밑줄을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //금액이 0보다 작으면 언더라인 표시한다.				&#13;
  ///  if(mySheet.GetCellValue(1, 2) &amp;lt; 0 ) {				&#13;
  ///      mySheet.SetCellFontUnderline(1, 2, 1);				&#13;
  ///  //금액이 0보다 크면 언더라인을 표시하지 않는다.				&#13;
  ///  } else {				&#13;
  ///      mySheet.SetCellFontUnderline(1, 2, 0);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Underline' type='Boolean' >&#13;
	 ///       밑줄 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellImage = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  Type이 Image이거나 Image 속성을 사용한 경우 해당 셀의 이미지를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //금액이 0보다 작으면 언더라인 표시한다.				&#13;
  ///  if(mySheet.GetCellValue(1, 2) &amp;lt; 0 ) {				&#13;
  ///      mySheet.SetCellFontUnderline(1, 2, 1);				&#13;
  ///  //금액이 0보다 크면 언더라인을 표시하지 않는다.				&#13;
  ///  } else {				&#13;
  ///      mySheet.SetCellFontUnderline(1, 2, 0);				&#13;
  ///  }				&#13;
  ///   // 데이터 행을 신규 생성 하고 셀의 이미지와 문자열을 변경한다.				&#13;
  ///    var Row=mySheet.DataInsert();				&#13;
  ///  mySheet.GetCellImage(Row, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellImage = function(Row, Col, Image)		{
	  /// <summary>&#13;
	  ///  Type이 Image이거나 Image 속성을 사용한 경우 해당 셀의 이미지를 확인하거나 설정한다&#13;
	  /// Example : 
  ///   // 데이터 행을 신규 생성 하고 셀의 이미지와 문자열을 변경한다.				&#13;
  ///    var Row=mySheet.DataInsert();				&#13;
  ///  mySheet.SetCellImage(Row, 1, ../image/myImage1.jpg);				&#13;
  ///    // 1컬럼의 SaveName이 btnAction인 경우				&#13;
  ///    mySheet.SetCellImage(Row ,btnAction, ../image/myImage1.jpg);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Image' type='String' >&#13;
	 ///       실제 이미지 경로&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.CellSaveName = function(Row, Col)			{
	  /// <summary>&#13;
	  ///  Row, Col 인자의 데이터 셀에 대한 SaveName을 확인 한다&#13;
	  /// Example : 
  ///   // 데이터 행을 신규 생성 하고 셀의 이미지와 문자열을 변경한다.				&#13;
  ///    var Row=mySheet.DataInsert();				&#13;
  ///  mySheet.SetCellImage(Row, 1, ../image/myImage1.jpg);				&#13;
  ///    // 1컬럼의 SaveName이 btnAction인 경우				&#13;
  ///    mySheet.SetCellImage(Row ,btnAction, ../image/myImage1.jpg);				&#13;
  ///  function mySheet_OnClick(Row, Col, Value, CellX, CellY, CellW, CellH) {				&#13;
  ///  // 클릭한 셀의 SaveName을 확인한다.				&#13;
  ///  var saveName = mySheet.CellSaveName(Row, Col);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.CellSearchValue = function(Row, Col)			{
	  /// <summary>&#13;
	  ///  셀이 조회되었던 당시의 값을 확인한다&#13;
	  /// Example : 
  ///   // 데이터 행을 신규 생성 하고 셀의 이미지와 문자열을 변경한다.				&#13;
  ///    var Row=mySheet.DataInsert();				&#13;
  ///  mySheet.SetCellImage(Row, 1, ../image/myImage1.jpg);				&#13;
  ///    // 1컬럼의 SaveName이 btnAction인 경우				&#13;
  ///    mySheet.SetCellImage(Row ,btnAction, ../image/myImage1.jpg);				&#13;
  ///  function mySheet_OnClick(Row, Col, Value, CellX, CellY, CellW, CellH) {				&#13;
  ///  // 클릭한 셀의 SaveName을 확인한다.				&#13;
  ///  var saveName = mySheet.CellSaveName(Row, Col);				&#13;
  ///  }				&#13;
  ///  // 조회되었던 셀 값을 확인하고, 해당 셀 값을 원래 값으로 되돌린다.				&#13;
  ///  var OrgValue = mySheet.CellSearchValue(Row, Col);				&#13;
  ///  if(OrgValue != mySheet.GetCellValue(Row, Col)) {				&#13;
  ///      mySheet.SetCellValue(Row, Col, OrgValue);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellVAlign = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀 세로 정렬을 설정하거나 확인한다&#13;
	  /// Example : 
  ///   // 데이터 행을 신규 생성 하고 셀의 이미지와 문자열을 변경한다.				&#13;
  ///    var Row=mySheet.DataInsert();				&#13;
  ///  mySheet.SetCellImage(Row, 1, ../image/myImage1.jpg);				&#13;
  ///    // 1컬럼의 SaveName이 btnAction인 경우				&#13;
  ///    mySheet.SetCellImage(Row ,btnAction, ../image/myImage1.jpg);				&#13;
  ///  function mySheet_OnClick(Row, Col, Value, CellX, CellY, CellW, CellH) {				&#13;
  ///  // 클릭한 셀의 SaveName을 확인한다.				&#13;
  ///  var saveName = mySheet.CellSaveName(Row, Col);				&#13;
  ///  }				&#13;
  ///  // 조회되었던 셀 값을 확인하고, 해당 셀 값을 원래 값으로 되돌린다.				&#13;
  ///  var OrgValue = mySheet.CellSearchValue(Row, Col);				&#13;
  ///  if(OrgValue != mySheet.GetCellValue(Row, Col)) {				&#13;
  ///      mySheet.SetCellValue(Row, Col, OrgValue);				&#13;
  ///  }				&#13;
  ///  // 특정 셀의 세로 정렬 설정을 확인한다.				&#13;
  ///  alert(mySheet.GetCellVAlign(1,1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellVAlign = function(Row, Col, valign)		{
	  /// <summary>&#13;
	  ///  셀 세로 정렬을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 특정 셀에 세로 정렬을 top으로 설정한다.				&#13;
  ///  mySheet.SetCellVAlign(1, 1, top);				&#13;
  ///  // 특정 셀에 세로 정렬을 bottom 으로 설정한다.				&#13;
  ///  mySheet.SetCellVAlign(1, 1,  bottom);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='valign' type='String' >&#13;
	 ///       셀 세로 정렬 설정값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellText = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀의 값을 Format이 적용된 형태로 화면에 보여지는 값 그대로 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 특정 셀에 세로 정렬을 top으로 설정한다.				&#13;
  ///  mySheet.SetCellVAlign(1, 1, top);				&#13;
  ///  // 특정 셀에 세로 정렬을 bottom 으로 설정한다.				&#13;
  ///  mySheet.SetCellVAlign(1, 1,  bottom);				&#13;
  ///  //날짜 셀, 확인 값은 2011/07/15				&#13;
  ///  alert(mySheet.GetCellText(1,1)); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellText = function(Row, Col, Text)		{
	  /// <summary>&#13;
	  ///  셀의 값을 Format이 적용된 형태로 화면에 보여지는 값 그대로 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //공백 설정				&#13;
  ///  mySheet.SetCellText(1, 0, " );              				&#13;
  ///  //날짜 셀에 값 설정				&#13;
  ///  mySheet.SetCellText(1, 1, 2011/07/15);				&#13;
  ///  //숫자 셀에 값 설정 				&#13;
  ///  mySheet.SetCellText(1, 2, 1,234,567);				&#13;
  ///  //콤보 셀에 콤보코드가 아닌 콤보텍스트 설정				&#13;
  ///  mySheet.SetCellText(1, 3, 원화); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Text' type='String' >&#13;
	 ///       셀에 설정할 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellValue = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀에 값을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //공백 설정				&#13;
  ///  mySheet.SetCellText(1, 0, " );              				&#13;
  ///  //날짜 셀에 값 설정				&#13;
  ///  mySheet.SetCellText(1, 1, 2011/07/15);				&#13;
  ///  //숫자 셀에 값 설정 				&#13;
  ///  mySheet.SetCellText(1, 2, 1,234,567);				&#13;
  ///  //콤보 셀에 콤보코드가 아닌 콤보텍스트 설정				&#13;
  ///  mySheet.SetCellText(1, 3, 원화); 				&#13;
  ///  //날짜 셀에 값 확인, 결과는 2011/07/15임				&#13;
  ///  alert(mySheet.GetCellValue(1, 4)); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetCellValue = function(Row, Col, Value)		{
	  /// <summary>&#13;
	  ///  셀에 값을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //상태 셀을 삭제 상태로 설정				&#13;
  ///  mySheet.SetCellValue(1, 0, D);				&#13;
  ///  //CheckBox에 체크되도록 설정				&#13;
  ///  mySheet.SetCellValue(1, 1, 1); 				&#13;
  ///  //숫자 셀에 값 설정, 표시되는 값은 12,345임				&#13;
  ///  mySheet.SetCellValue(1, 2, 12345);				&#13;
  ///  //콤보 셀에 값 설정, 표시되는 값은 콤보 텍스트 임				&#13;
  ///  mySheet.SetCellValue(1, 3, 01); 				&#13;
  ///  //날짜 셀에 값 설정, 표시되는 값은 2011/07/15 임				&#13;
  ///  mySheet.SetCellValue(1, 4, 2011/07/15);				&#13;
  ///  //소수점 숫자 셀에 값 설정, 소수점 3자리이면 표시되는 값은 123.450 임				&#13;
  ///  // OnChange 이벤트 발생				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450);				&#13;
  ///  // OnChange 이벤트 발생하지 않음 				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450, 0); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='String' >&#13;
	 ///       셀에 설정할 값&#13;
	 /// </param>&#13;
	 /// <param name='Flag' type='Boolean' >&#13;
	 ///       OnChange 이벤트 발생 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.CheckAll = function(Col, Value, OnChangeEvent)			{
	  /// <summary>&#13;
	  ///  CheckBox가 존재하는 컬럼의 모든 CheckBox를 전체 Check하거나 UnCheck 처리한다&#13;
	  /// Example : 
  ///  //상태 셀을 삭제 상태로 설정				&#13;
  ///  mySheet.SetCellValue(1, 0, D);				&#13;
  ///  //CheckBox에 체크되도록 설정				&#13;
  ///  mySheet.SetCellValue(1, 1, 1); 				&#13;
  ///  //숫자 셀에 값 설정, 표시되는 값은 12,345임				&#13;
  ///  mySheet.SetCellValue(1, 2, 12345);				&#13;
  ///  //콤보 셀에 값 설정, 표시되는 값은 콤보 텍스트 임				&#13;
  ///  mySheet.SetCellValue(1, 3, 01); 				&#13;
  ///  //날짜 셀에 값 설정, 표시되는 값은 2011/07/15 임				&#13;
  ///  mySheet.SetCellValue(1, 4, 2011/07/15);				&#13;
  ///  //소수점 숫자 셀에 값 설정, 소수점 3자리이면 표시되는 값은 123.450 임				&#13;
  ///  // OnChange 이벤트 발생				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450);				&#13;
  ///  // OnChange 이벤트 발생하지 않음 				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450, 0); 				&#13;
  ///  // 모두 선택하기				&#13;
  ///  mySheet.CheckAll(1, 1);				&#13;
  ///  // 모두 선택 취소하기 				&#13;
  ///  mySheet.CheckAll(1, 0);       				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       특정 컬럼의 Column Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='Integer' >&#13;
	 ///       0 : 전체체크해제,&#13;
	 /// </param>&#13;
	 /// <param name='OnChangeEvent' type='Boolean' >&#13;
	 ///       OnChange 이벤트 발생 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.CheckedRows = function(Col)			{
	  /// <summary>&#13;
	  ///  해당 컬럼에 존재하는 체크박스 중 체크된 행의 개수를 반환한다&#13;
	  /// Example : 
  ///  //상태 셀을 삭제 상태로 설정				&#13;
  ///  mySheet.SetCellValue(1, 0, D);				&#13;
  ///  //CheckBox에 체크되도록 설정				&#13;
  ///  mySheet.SetCellValue(1, 1, 1); 				&#13;
  ///  //숫자 셀에 값 설정, 표시되는 값은 12,345임				&#13;
  ///  mySheet.SetCellValue(1, 2, 12345);				&#13;
  ///  //콤보 셀에 값 설정, 표시되는 값은 콤보 텍스트 임				&#13;
  ///  mySheet.SetCellValue(1, 3, 01); 				&#13;
  ///  //날짜 셀에 값 설정, 표시되는 값은 2011/07/15 임				&#13;
  ///  mySheet.SetCellValue(1, 4, 2011/07/15);				&#13;
  ///  //소수점 숫자 셀에 값 설정, 소수점 3자리이면 표시되는 값은 123.450 임				&#13;
  ///  // OnChange 이벤트 발생				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450);				&#13;
  ///  // OnChange 이벤트 발생하지 않음 				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450, 0); 				&#13;
  ///  // 모두 선택하기				&#13;
  ///  mySheet.CheckAll(1, 1);				&#13;
  ///  // 모두 선택 취소하기 				&#13;
  ///  mySheet.CheckAll(1, 0);       				&#13;
  ///  var RowCnt1 = mySheet.CheckedRows(1);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt1 + 개 입니다.);				&#13;
  ///  var RowCnt2 = mySheet.CheckedRows(chkData);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt2 + 개 입니다.);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.CheckReverse = function(Col, Editable, Event)			{
	  /// <summary>&#13;
	  ///  특정 컬럼에 존재하는 체크박스에 체크된 것은 체크를 풀어주고, 체크되지 않은것은 체크한다&#13;
	  /// Example : 
  ///  //상태 셀을 삭제 상태로 설정				&#13;
  ///  mySheet.SetCellValue(1, 0, D);				&#13;
  ///  //CheckBox에 체크되도록 설정				&#13;
  ///  mySheet.SetCellValue(1, 1, 1); 				&#13;
  ///  //숫자 셀에 값 설정, 표시되는 값은 12,345임				&#13;
  ///  mySheet.SetCellValue(1, 2, 12345);				&#13;
  ///  //콤보 셀에 값 설정, 표시되는 값은 콤보 텍스트 임				&#13;
  ///  mySheet.SetCellValue(1, 3, 01); 				&#13;
  ///  //날짜 셀에 값 설정, 표시되는 값은 2011/07/15 임				&#13;
  ///  mySheet.SetCellValue(1, 4, 2011/07/15);				&#13;
  ///  //소수점 숫자 셀에 값 설정, 소수점 3자리이면 표시되는 값은 123.450 임				&#13;
  ///  // OnChange 이벤트 발생				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450);				&#13;
  ///  // OnChange 이벤트 발생하지 않음 				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450, 0); 				&#13;
  ///  // 모두 선택하기				&#13;
  ///  mySheet.CheckAll(1, 1);				&#13;
  ///  // 모두 선택 취소하기 				&#13;
  ///  mySheet.CheckAll(1, 0);       				&#13;
  ///  var RowCnt1 = mySheet.CheckedRows(1);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt1 + 개 입니다.);				&#13;
  ///  var RowCnt2 = mySheet.CheckedRows(chkData);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt2 + 개 입니다.);				&#13;
  ///  // 1컬럼의 체크를 반전한다.				&#13;
  ///  mySheet.CheckReverse(1);				&#13;
  ///  // Edit를 체크하고, Event를 발생시킨다.				&#13;
  ///  mySheet.CheckReverse(1, 1, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Editable' type='Boolean' >&#13;
	 ///       편집가능 불가능을 확인하여 편집가능일때만 변경한다. Default=0&#13;
	 /// </param>&#13;
	 /// <param name='Event' type='Boolean' >&#13;
	 ///       체크가 바뀔때 OnChange 이벤트를 발생할것인가 여부, Default=0&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ClearHeaderCheck = function()			{
	  /// <summary>&#13;
	  ///  헤더의 모든 전체체크박스의 값을 언체크로 초기화 한다&#13;
	  /// Example : 
  ///  //상태 셀을 삭제 상태로 설정				&#13;
  ///  mySheet.SetCellValue(1, 0, D);				&#13;
  ///  //CheckBox에 체크되도록 설정				&#13;
  ///  mySheet.SetCellValue(1, 1, 1); 				&#13;
  ///  //숫자 셀에 값 설정, 표시되는 값은 12,345임				&#13;
  ///  mySheet.SetCellValue(1, 2, 12345);				&#13;
  ///  //콤보 셀에 값 설정, 표시되는 값은 콤보 텍스트 임				&#13;
  ///  mySheet.SetCellValue(1, 3, 01); 				&#13;
  ///  //날짜 셀에 값 설정, 표시되는 값은 2011/07/15 임				&#13;
  ///  mySheet.SetCellValue(1, 4, 2011/07/15);				&#13;
  ///  //소수점 숫자 셀에 값 설정, 소수점 3자리이면 표시되는 값은 123.450 임				&#13;
  ///  // OnChange 이벤트 발생				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450);				&#13;
  ///  // OnChange 이벤트 발생하지 않음 				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450, 0); 				&#13;
  ///  // 모두 선택하기				&#13;
  ///  mySheet.CheckAll(1, 1);				&#13;
  ///  // 모두 선택 취소하기 				&#13;
  ///  mySheet.CheckAll(1, 0);       				&#13;
  ///  var RowCnt1 = mySheet.CheckedRows(1);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt1 + 개 입니다.);				&#13;
  ///  var RowCnt2 = mySheet.CheckedRows(chkData);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt2 + 개 입니다.);				&#13;
  ///  // 1컬럼의 체크를 반전한다.				&#13;
  ///  mySheet.CheckReverse(1);				&#13;
  ///  // Edit를 체크하고, Event를 발생시킨다.				&#13;
  ///  mySheet.CheckReverse(1, 1, 1);				&#13;
  ///  // RemoveAll 호출전에 전체체크박스를 초기화 한다..				&#13;
  ///  mySheet.ClearHeaderCheck();				&#13;
  ///  mySheet.RemoveAll();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.ClearSelection = function()			{
	  /// <summary>&#13;
	  ///  마우스 드래그를 이용한 선택 영역을 초기화 한다&#13;
	  /// Example : 
  ///  //상태 셀을 삭제 상태로 설정				&#13;
  ///  mySheet.SetCellValue(1, 0, D);				&#13;
  ///  //CheckBox에 체크되도록 설정				&#13;
  ///  mySheet.SetCellValue(1, 1, 1); 				&#13;
  ///  //숫자 셀에 값 설정, 표시되는 값은 12,345임				&#13;
  ///  mySheet.SetCellValue(1, 2, 12345);				&#13;
  ///  //콤보 셀에 값 설정, 표시되는 값은 콤보 텍스트 임				&#13;
  ///  mySheet.SetCellValue(1, 3, 01); 				&#13;
  ///  //날짜 셀에 값 설정, 표시되는 값은 2011/07/15 임				&#13;
  ///  mySheet.SetCellValue(1, 4, 2011/07/15);				&#13;
  ///  //소수점 숫자 셀에 값 설정, 소수점 3자리이면 표시되는 값은 123.450 임				&#13;
  ///  // OnChange 이벤트 발생				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450);				&#13;
  ///  // OnChange 이벤트 발생하지 않음 				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450, 0); 				&#13;
  ///  // 모두 선택하기				&#13;
  ///  mySheet.CheckAll(1, 1);				&#13;
  ///  // 모두 선택 취소하기 				&#13;
  ///  mySheet.CheckAll(1, 0);       				&#13;
  ///  var RowCnt1 = mySheet.CheckedRows(1);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt1 + 개 입니다.);				&#13;
  ///  var RowCnt2 = mySheet.CheckedRows(chkData);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt2 + 개 입니다.);				&#13;
  ///  // 1컬럼의 체크를 반전한다.				&#13;
  ///  mySheet.CheckReverse(1);				&#13;
  ///  // Edit를 체크하고, Event를 발생시킨다.				&#13;
  ///  mySheet.CheckReverse(1, 1, 1);				&#13;
  ///  // RemoveAll 호출전에 전체체크박스를 초기화 한다..				&#13;
  ///  mySheet.ClearHeaderCheck();				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 선택 영역을 초기화 한다.				&#13;
  ///  mySheet.ClearSelection()				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetClipCopyMode = function()		{
	  /// <summary>&#13;
	  ///  문자열을 선택하고 Ctrl + C 를 하면 선택된 내용이 클립보드에 복사된다&#13;
	  /// Example : 
  ///  //상태 셀을 삭제 상태로 설정				&#13;
  ///  mySheet.SetCellValue(1, 0, D);				&#13;
  ///  //CheckBox에 체크되도록 설정				&#13;
  ///  mySheet.SetCellValue(1, 1, 1); 				&#13;
  ///  //숫자 셀에 값 설정, 표시되는 값은 12,345임				&#13;
  ///  mySheet.SetCellValue(1, 2, 12345);				&#13;
  ///  //콤보 셀에 값 설정, 표시되는 값은 콤보 텍스트 임				&#13;
  ///  mySheet.SetCellValue(1, 3, 01); 				&#13;
  ///  //날짜 셀에 값 설정, 표시되는 값은 2011/07/15 임				&#13;
  ///  mySheet.SetCellValue(1, 4, 2011/07/15);				&#13;
  ///  //소수점 숫자 셀에 값 설정, 소수점 3자리이면 표시되는 값은 123.450 임				&#13;
  ///  // OnChange 이벤트 발생				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450);				&#13;
  ///  // OnChange 이벤트 발생하지 않음 				&#13;
  ///  mySheet.SetCellValue(1,5, 123.450, 0); 				&#13;
  ///  // 모두 선택하기				&#13;
  ///  mySheet.CheckAll(1, 1);				&#13;
  ///  // 모두 선택 취소하기 				&#13;
  ///  mySheet.CheckAll(1, 0);       				&#13;
  ///  var RowCnt1 = mySheet.CheckedRows(1);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt1 + 개 입니다.);				&#13;
  ///  var RowCnt2 = mySheet.CheckedRows(chkData);				&#13;
  ///  alert(체크된 행의 개수는  + RowCnt2 + 개 입니다.);				&#13;
  ///  // 1컬럼의 체크를 반전한다.				&#13;
  ///  mySheet.CheckReverse(1);				&#13;
  ///  // Edit를 체크하고, Event를 발생시킨다.				&#13;
  ///  mySheet.CheckReverse(1, 1, 1);				&#13;
  ///  // RemoveAll 호출전에 전체체크박스를 초기화 한다..				&#13;
  ///  mySheet.ClearHeaderCheck();				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 선택 영역을 초기화 한다.				&#13;
  ///  mySheet.ClearSelection()				&#13;
  ///  mySheet.GetClipCopyMode();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetClipCopyMode = function(Mode)		{
	  /// <summary>&#13;
	  ///  문자열을 선택하고 Ctrl + C 를 하면 선택된 내용이 클립보드에 복사된다&#13;
	  /// Example : 
  ///  // 포커스셀 값이나 선택셀 값 모두 복사 				&#13;
  ///  mySheet.SetClipCopyMode(0);				&#13;
  ///  // 포커스행 복사나 선택셀 값 모두 복사 				&#13;
  ///  mySheet.SetClipPasteMode(1); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Integer' >&#13;
	 ///       복사 방법에 따른 설정값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetClipPasteMode = function()		{
	  /// <summary>&#13;
	  ///  문자열을 선택하고 Ctrl + C 를 하면 선택된 내용이 클립보드에 복사된다&#13;
	  /// Example : 
  ///  // 포커스셀 값이나 선택셀 값 모두 복사 				&#13;
  ///  mySheet.SetClipCopyMode(0);				&#13;
  ///  // 포커스행 복사나 선택셀 값 모두 복사 				&#13;
  ///  mySheet.SetClipPasteMode(1); 				&#13;
  ///  mySheet.GetClipPasteMode();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetClipPasteMode = function(Mode)		{
	  /// <summary>&#13;
	  ///  문자열을 선택하고 Ctrl + C 를 하면 선택된 내용이 클립보드에 복사된다&#13;
	  /// Example : 
  ///  // 1개 셀에 붙이기 모드				&#13;
  ///  mySheet.SetClipPasteMode(0);				&#13;
  ///  // 여러개 셀에 붙이기 모드				&#13;
  ///  mySheet.SetClipPasteMode(1); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Integer' >&#13;
	 ///       붙여넣기 방법에 따른 설정값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetColBackColor = function(Col)		{
	  /// <summary>&#13;
	  ///  대상 컬럼 전체의 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 1개 셀에 붙이기 모드				&#13;
  ///  mySheet.SetClipPasteMode(0);				&#13;
  ///  // 여러개 셀에 붙이기 모드				&#13;
  ///  mySheet.SetClipPasteMode(1); 				&#13;
  ///  // 2컬럼 배경색을 확인한다.				&#13;
  ///  mySheet.GetColBackColor(2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColBackColor = function(Col, Color)		{
	  /// <summary>&#13;
	  ///  대상 컬럼 전체의 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //컬럼 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetColBackColor(1, #ADADAD);				&#13;
  ///   //2컬럼 배경색을 1컬럼 배경색으로 설정한다.				&#13;
  ///  mySheet.SetColBackColor(2, mySheet.GetColBackColor(1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       WebColor 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetColCondProperty = function(Col)		{
	  /// <summary>&#13;
	  ///  숫자형 타입에서 특정 컬럼의 각 셀의 데이타값이 조건에 맞을경우 속성을 설정, 설정한 조건을 확인한다&#13;
	  /// Example : 
  ///  //컬럼 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetColBackColor(1, #ADADAD);				&#13;
  ///   //2컬럼 배경색을 1컬럼 배경색으로 설정한다.				&#13;
  ///  mySheet.SetColBackColor(2, mySheet.GetColBackColor(1));				&#13;
  ///  // 설정한 조건을 확인한다.				&#13;
  ///  mySheet.GetColCondProperty(13)				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       대상이 되는 컬럼 index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColCondProperty = function(Col, Cond, Prop)		{
	  /// <summary>&#13;
	  ///  숫자형 타입에서 특정 컬럼의 각 셀의 데이타값이 조건에 맞을경우 속성을 설정, 설정한 조건을 확인한다&#13;
	  /// Example : 
  ///  // 13번째 컬럼의 각 셀 데이터 값이 1000 보다 클경우 				&#13;
  ///  mySheet.SetColCondProperty(13,%d&amp;gt;1000,{BackColorT:#00ff00,FontColorT:#ffff00, EditT : false, BackColorF : #0000ff,FontColorF:#ffffff, EditF : true, CursorT:Pointer, CursorF:Default})				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       대상이 되는 컬럼 index&#13;
	 /// </param>&#13;
	 /// <param name='Cond' type='String' >&#13;
	 ///       설정할 조건 (예:%d >1000)&#13;
	 /// </param>&#13;
	 /// <param name='Prop' type='Object' >&#13;
	 ///       설정할 컬럼 속성&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetColEditable = function(Col)		{
	  /// <summary>&#13;
	  ///  특정 컬럼의 Edit 가능 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 13번째 컬럼의 각 셀 데이터 값이 1000 보다 클경우 				&#13;
  ///  mySheet.SetColCondProperty(13,%d&amp;gt;1000,{BackColorT:#00ff00,FontColorT:#ffff00, EditT : false, BackColorF : #0000ff,FontColorF:#ffffff, EditF : true, CursorT:Pointer, CursorF:Default})				&#13;
  ///  //5컬럼의 Edit 가능 여부를 확인한다.				&#13;
  ///  mySheet. GetColEditable (5);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColEditable = function(Col, Editable)		{
	  /// <summary>&#13;
	  ///  특정 컬럼의 Edit 가능 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //5컬럼의 Edit 가능 여부를 불가로 설정한다.				&#13;
  ///  mySheet.SetColEditable(5,0);				&#13;
  ///  //5컬럼의 Edit 가능 여부를 가능으로 설정한다.				&#13;
  ///  mySheet. SetColEditable (5,1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Editable' type='Boolean' >&#13;
	 ///       특정컬럼의 Edit 가능 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ColDelete = function(Col)			{
	  /// <summary>&#13;
	  ///  특정 컬럼을 삭제 한다&#13;
	  /// Example : 
  ///  //5컬럼의 Edit 가능 여부를 불가로 설정한다.				&#13;
  ///  mySheet.SetColEditable(5,0);				&#13;
  ///  //5컬럼의 Edit 가능 여부를 가능으로 설정한다.				&#13;
  ///  mySheet. SetColEditable (5,1);				&#13;
  ///  // Index값이 3인 컬럼을 삭제 한다.				&#13;
  ///  mySheet.ColDelete(3);				&#13;
  ///  // SaveName이 sText인 컬럼을 삭제 한다.				&#13;
  ///  mySheet.ColDelete(sText);				&#13;
  ///  // 마지막 컬럼을 삭제 한다.				&#13;
  ///  mySheet.ColDelete();				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number /String' >&#13;
	 ///       대상 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetColFontBold = function(Col)		{
	  /// <summary>&#13;
	  ///  대상 컬럼 전체의 Bold(굵은 글자체)를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //5컬럼의 Edit 가능 여부를 불가로 설정한다.				&#13;
  ///  mySheet.SetColEditable(5,0);				&#13;
  ///  //5컬럼의 Edit 가능 여부를 가능으로 설정한다.				&#13;
  ///  mySheet. SetColEditable (5,1);				&#13;
  ///  // Index값이 3인 컬럼을 삭제 한다.				&#13;
  ///  mySheet.ColDelete(3);				&#13;
  ///  // SaveName이 sText인 컬럼을 삭제 한다.				&#13;
  ///  mySheet.ColDelete(sText);				&#13;
  ///  // 마지막 컬럼을 삭제 한다.				&#13;
  ///  mySheet.ColDelete();				&#13;
  ///  //인덱스가 1인 컬럼에 Bold 설정여부를 확인한다.				&#13;
  ///  alert(mySheet.GetColFontBold(1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number /String' >&#13;
	 ///       특정 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColFontBold = function(Col, Bold)		{
	  /// <summary>&#13;
	  ///  대상 컬럼 전체의 Bold(굵은 글자체)를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //컬럼 전체 글자에 Bold를 설정한다.				&#13;
  ///  mySheet.SetColFontBold(1, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number /String' >&#13;
	 ///       특정 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Bold' type='Boolean' >&#13;
	 ///       Bold 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetColFontColor = function(Col)		{
	  /// <summary>&#13;
	  ///  대상 컬럼 전체의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //컬럼 전체 글자에 Bold를 설정한다.				&#13;
  ///  mySheet.SetColFontBold(1, 1);				&#13;
  ///  //2컬럼 글자색을 확인한다..				&#13;
  ///  alert(mySheet.GetColFontColor(2));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColFontColor = function(Col, Color)		{
	  /// <summary>&#13;
	  ///  대상 컬럼 전체의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //컬럼 글자색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetColFontColor(1, #FF0000);				&#13;
  ///  //2컬럼 글자색을 1컬럼 글자색으로 설정한다.				&#13;
  ///  mySheet. SetColFontColor(2, mySheet.GetColFontColor(1)); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetColFontUnderline = function(Col)		{
	  /// <summary>&#13;
	  ///  대상 컬럼 전체의 글자 언더라인을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //컬럼 글자색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetColFontColor(1, #FF0000);				&#13;
  ///  //2컬럼 글자색을 1컬럼 글자색으로 설정한다.				&#13;
  ///  mySheet. SetColFontColor(2, mySheet.GetColFontColor(1)); 				&#13;
  ///  //컬럼 전체 글자에 언더라인 설정여부를 확인한다.				&#13;
  ///  alert(mySheet.GetColFontUnderline(1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number /String' >&#13;
	 ///       특정 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColFontUnderline = function(Col, Underline)		{
	  /// <summary>&#13;
	  ///  대상 컬럼 전체의 글자 언더라인을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //컬럼 전체 글자에 언더라인을 설정한다.				&#13;
  ///  mySheet.SetColFontUnderline(1, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number /String' >&#13;
	 ///       특정 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Underline' type='Boolean' >&#13;
	 ///       밑줄 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetColHidden = function(Col)		{
	  /// <summary>&#13;
	  ///  컬럼의 숨김여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //컬럼 전체 글자에 언더라인을 설정한다.				&#13;
  ///  mySheet.SetColFontUnderline(1, 1);				&#13;
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColHidden = function(Col, Hidden)		{
	  /// <summary>&#13;
	  ///  컬럼의 숨김여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Hidden' type='Boolean' >&#13;
	 ///       숨김여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ColInsert = function(Info)			{
	  /// <summary>&#13;
	  ///  특정 위치에 컬럼을 생성 한다&#13;
	  /// Example : 
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;
  ///  // 마지막 위치에 기본(Text 컬럼타입) 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Header : {Text : 기본타입}				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  // Index 3의 위치에 CheckBox 타입의 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Pos:3,				&#13;
  ///  Header:{Text: 체크박스,Align: Left},				&#13;
  ///  Col:[{				&#13;
  ///  Type: CheckBox,				&#13;
  ///  Width:60,				&#13;
  ///  SaveName: sCheckBox				&#13;
  ///  }]				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Info.Pos' type='Number /String' >&#13;
	 ///       생성할 위치의 컬럼 Index&#13;
	 /// </param>&#13;
	 /// <param name='Info.Header.Text' type='String' >&#13;
	 ///       헤더에 설정할 문자열 (헤더가 2줄이상인 경우 구분자 |로 연결한 문자열로 설정)&#13;
	 /// </param>&#13;
	 /// <param name='Info.Header.Align' type='String' >&#13;
	 ///       헤더 문자열의 정렬값&#13;
	 /// </param>&#13;
	 /// <param name='Info.Col' type='Object' >&#13;
	 ///       생성할 컬럼의 설정 속성 집합 객체&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ColLeft = function(Col)			{
	  /// <summary>&#13;
	  ///  컬럼의 왼쪽 위치를 확인한다&#13;
	  /// Example : 
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;
  ///  // 마지막 위치에 기본(Text 컬럼타입) 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Header : {Text : 기본타입}				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  // Index 3의 위치에 CheckBox 타입의 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Pos:3,				&#13;
  ///  Header:{Text: 체크박스,Align: Left},				&#13;
  ///  Col:[{				&#13;
  ///  Type: CheckBox,				&#13;
  ///  Width:60,				&#13;
  ///  SaveName: sCheckBox				&#13;
  ///  }]				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  //컬럼의 왼쪽 위치를 파악한다.				&#13;
  ///  var iLeft = mySheet.ColLeft(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ColSaveName = function(DataRow, Col)			{
	  /// <summary>&#13;
	  ///  특정 컬럼 Index에 해당하는 InitColumns 함수에서 설정한 SaveName을 확인한다&#13;
	  /// Example : 
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;
  ///  // 마지막 위치에 기본(Text 컬럼타입) 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Header : {Text : 기본타입}				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  // Index 3의 위치에 CheckBox 타입의 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Pos:3,				&#13;
  ///  Header:{Text: 체크박스,Align: Left},				&#13;
  ///  Col:[{				&#13;
  ///  Type: CheckBox,				&#13;
  ///  Width:60,				&#13;
  ///  SaveName: sCheckBox				&#13;
  ///  }]				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  //컬럼의 왼쪽 위치를 파악한다.				&#13;
  ///  var iLeft = mySheet.ColLeft(1);				&#13;
  ///  //컬럼의 SaveName을 가져온다.				&#13;
  ///  var sSaveName = mySheet.ColSaveName(0, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DataRow' type='Number' >&#13;
	 ///       단위 데이터행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number' >&#13;
	 ///       특정 컬럼의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ColumnSort = function(Col, Sort, ColSort,KeepColOrder)			{
	  /// <summary>&#13;
	  ///  단일 또는 다중 컬럼의 데이터를 정렬한다&#13;
	  /// Example : 
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;
  ///  // 마지막 위치에 기본(Text 컬럼타입) 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Header : {Text : 기본타입}				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  // Index 3의 위치에 CheckBox 타입의 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Pos:3,				&#13;
  ///  Header:{Text: 체크박스,Align: Left},				&#13;
  ///  Col:[{				&#13;
  ///  Type: CheckBox,				&#13;
  ///  Width:60,				&#13;
  ///  SaveName: sCheckBox				&#13;
  ///  }]				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  //컬럼의 왼쪽 위치를 파악한다.				&#13;
  ///  var iLeft = mySheet.ColLeft(1);				&#13;
  ///  //컬럼의 SaveName을 가져온다.				&#13;
  ///  var sSaveName = mySheet.ColSaveName(0, 1);				&#13;
  ///  //6컬럼만 내림차순으로 정렬				&#13;
  ///  mySheet.ColumnSort(6, DESC)				&#13;
  ///  //4컬럼을 중심으로 먼저 오름차순 정렬하고, 그 안에서 5컬럼 오름차순 정렬				&#13;
  ///  mySheet.ColumnSort(4|5)				&#13;
  ///  //2,3,4컬럼 순서로 정렬하고, 내림차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(2|3|4, DESC);				&#13;
  ///  //3,2,4컬럼을 2,3,4컬럼인덱스 순서대로 내림차순, 오름차순, 오름차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(3|2|4, DESC,ASC|DESC|ASC);				&#13;
  ///  //3,2,4컬럼을 3,2,4컬럼 지정된 순서대로 오름차순, 내림차순, 오름차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(3|2|4,  DESC ,ASC|DESC|ASC, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long /' >&#13;
	 ///       소트할 컬럼 Index 또는 SaveName을 |로 조합한 문자열&#13;
	 /// </param>&#13;
	 /// <param name='Sort' type='String' >&#13;
	 ///       ASC 또는 DESC, Default =ASC&#13;
	 /// </param>&#13;
	 /// <param name='ColSort' type='String' >&#13;
	 ///       각 컬럼의 소트 방향을 |로 연결한 문자열, Default="&#13;
	 /// </param>&#13;
	 /// <param name='KeepColOrder' type='Boolean' >&#13;
	 ///       Cols파라미터에서 지정된 순서대로 소트할 것인지 선택, Default=0&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ColValueDup = function(ColStr, IncludeDelRow, Division, IncludeSumRow)			{
	  /// <summary>&#13;
	  ///  특정 컬럼 내에 중복된 값이 존재하는지 여부를 확인한다&#13;
	  /// Example : 
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;
  ///  // 마지막 위치에 기본(Text 컬럼타입) 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Header : {Text : 기본타입}				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  // Index 3의 위치에 CheckBox 타입의 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Pos:3,				&#13;
  ///  Header:{Text: 체크박스,Align: Left},				&#13;
  ///  Col:[{				&#13;
  ///  Type: CheckBox,				&#13;
  ///  Width:60,				&#13;
  ///  SaveName: sCheckBox				&#13;
  ///  }]				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  //컬럼의 왼쪽 위치를 파악한다.				&#13;
  ///  var iLeft = mySheet.ColLeft(1);				&#13;
  ///  //컬럼의 SaveName을 가져온다.				&#13;
  ///  var sSaveName = mySheet.ColSaveName(0, 1);				&#13;
  ///  //6컬럼만 내림차순으로 정렬				&#13;
  ///  mySheet.ColumnSort(6, DESC)				&#13;
  ///  //4컬럼을 중심으로 먼저 오름차순 정렬하고, 그 안에서 5컬럼 오름차순 정렬				&#13;
  ///  mySheet.ColumnSort(4|5)				&#13;
  ///  //2,3,4컬럼 순서로 정렬하고, 내림차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(2|3|4, DESC);				&#13;
  ///  //3,2,4컬럼을 2,3,4컬럼인덱스 순서대로 내림차순, 오름차순, 오름차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(3|2|4, DESC,ASC|DESC|ASC);				&#13;
  ///  //3,2,4컬럼을 3,2,4컬럼 지정된 순서대로 오름차순, 내림차순, 오름차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(3|2|4,  DESC ,ASC|DESC|ASC, 1);				&#13;
  ///  //1컬럼에 중복된 값이 존재하는 행번을 가져옴				&#13;
  ///  var Row = mySheet.ColValueDup(1);				&#13;
  ///  //2,3,7 컬럼에 중복된 값이 존재하는 행번을 가져옴				&#13;
  ///  var Row = mySheet.ColValueDup(2|3|7);				&#13;
  ///  //삭제된 행을 제외하고 중복 체크하기				&#13;
  ///  var Row = mySheet.ColValueDup(2|3|7, 0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='ColStr' type='Number /' >&#13;
	 ///       컬럼의 Index 또는 SaveName의 조합. |로 연결&#13;
	 /// </param>&#13;
	 /// <param name='IncludeDelRow' type='Boolean' >&#13;
	 ///       트랜잭션 상태가 삭제인 행을 포함 여부. Default=1&#13;
	 /// </param>&#13;
	 /// <param name='Division' type='Boolean' >&#13;
	 ///       대/ 소문자 구분 설정여부,&#13;
	 /// </param>&#13;
	 /// <param name='IncludeSumRow' type='Boolean' >&#13;
	 ///       합계/소계/누계 행 포함 여부.&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ColValueDupRows = function(ColStr, IncludeDelRow, IncludeFirstRow, StartRow, EndRow)			{
	  /// <summary>&#13;
	  ///  중복된 모든 행을 ,로 조합하여 문자열로 반환 한다&#13;
	  /// Example : 
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;
  ///  // 마지막 위치에 기본(Text 컬럼타입) 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Header : {Text : 기본타입}				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  // Index 3의 위치에 CheckBox 타입의 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Pos:3,				&#13;
  ///  Header:{Text: 체크박스,Align: Left},				&#13;
  ///  Col:[{				&#13;
  ///  Type: CheckBox,				&#13;
  ///  Width:60,				&#13;
  ///  SaveName: sCheckBox				&#13;
  ///  }]				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  //컬럼의 왼쪽 위치를 파악한다.				&#13;
  ///  var iLeft = mySheet.ColLeft(1);				&#13;
  ///  //컬럼의 SaveName을 가져온다.				&#13;
  ///  var sSaveName = mySheet.ColSaveName(0, 1);				&#13;
  ///  //6컬럼만 내림차순으로 정렬				&#13;
  ///  mySheet.ColumnSort(6, DESC)				&#13;
  ///  //4컬럼을 중심으로 먼저 오름차순 정렬하고, 그 안에서 5컬럼 오름차순 정렬				&#13;
  ///  mySheet.ColumnSort(4|5)				&#13;
  ///  //2,3,4컬럼 순서로 정렬하고, 내림차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(2|3|4, DESC);				&#13;
  ///  //3,2,4컬럼을 2,3,4컬럼인덱스 순서대로 내림차순, 오름차순, 오름차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(3|2|4, DESC,ASC|DESC|ASC);				&#13;
  ///  //3,2,4컬럼을 3,2,4컬럼 지정된 순서대로 오름차순, 내림차순, 오름차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(3|2|4,  DESC ,ASC|DESC|ASC, 1);				&#13;
  ///  //1컬럼에 중복된 값이 존재하는 행번을 가져옴				&#13;
  ///  var Row = mySheet.ColValueDup(1);				&#13;
  ///  //2,3,7 컬럼에 중복된 값이 존재하는 행번을 가져옴				&#13;
  ///  var Row = mySheet.ColValueDup(2|3|7);				&#13;
  ///  //삭제된 행을 제외하고 중복 체크하기				&#13;
  ///  var Row = mySheet.ColValueDup(2|3|7, 0);				&#13;
  ///  //6컬럼,7컬럼의 글자가 중복된 행들(삭제행포함, 최초행미포함, 전체 데이터 영역 검사)				&#13;
  ///    var duprows1 = mySheet.ColValueDupRows(6|7);				&#13;
  ///    //4컬럼,5컬럼에 대해 첫번째 행부터 50번째 행까지의 중복검사(삭제행제외, 최초행포함, 1행~50행)				&#13;
  ///    var duprows2 = mySheet.ColValueDupRows(4|5,false,true,1,50);				&#13;
  ///    //가져온 행을 배열로 반든다.				&#13;
  ///    var arrRow = duprows1.split(,);				&#13;
  ///    for (idx=0; idx&amp;lt;arrRow.length-1; idx++){ alert(arrRow[idx] + 행); }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='ColStr' type='Number/String' >&#13;
	 ///       필수&#13;
	 /// </param>&#13;
	 /// <param name='IncludeDelRow' type='Boolean' >&#13;
	 ///       트랜잭션 상태가 삭제인 행을 포함 여부.&#13;
	 /// </param>&#13;
	 /// <param name='IncludeFirstRow' type='Boolean' >&#13;
	 ///       중복된 행의 최초의 행을 포함할지 여부.&#13;
	 /// </param>&#13;
	 /// <param name='StartRow' type='Number' >&#13;
	 ///       중복 검사를 수행 하고자 하는 부분의 첫행의 행index.&#13;
	 /// </param>&#13;
	 /// <param name='EndRow' type='Number' >&#13;
	 ///       중복 검사를 수행 하고자 하는 부분의 마지막행 행index.&#13;
	 /// </param>&#13;
	 /// <param name='IncludeSumRow' type='Boolean' >&#13;
	 ///       합계/소계/누계 행 포함 여부.&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetColWidth = function(Col)		{
	  /// <summary>&#13;
	  ///  특정 컬럼의 너비를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 컬럼이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetColHidden(1) == 1) {				&#13;
  ///  mySheet.SetColHidden(1, 0);				&#13;
  ///  }				&#13;
  ///  // 마지막 위치에 기본(Text 컬럼타입) 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Header : {Text : 기본타입}				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  // Index 3의 위치에 CheckBox 타입의 컬럼을 생성 한다.				&#13;
  ///  var info = {				&#13;
  ///  Pos:3,				&#13;
  ///  Header:{Text: 체크박스,Align: Left},				&#13;
  ///  Col:[{				&#13;
  ///  Type: CheckBox,				&#13;
  ///  Width:60,				&#13;
  ///  SaveName: sCheckBox				&#13;
  ///  }]				&#13;
  ///  };				&#13;
  ///  mySheet.ColInsert(info);				&#13;
  ///  //컬럼의 왼쪽 위치를 파악한다.				&#13;
  ///  var iLeft = mySheet.ColLeft(1);				&#13;
  ///  //컬럼의 SaveName을 가져온다.				&#13;
  ///  var sSaveName = mySheet.ColSaveName(0, 1);				&#13;
  ///  //6컬럼만 내림차순으로 정렬				&#13;
  ///  mySheet.ColumnSort(6, DESC)				&#13;
  ///  //4컬럼을 중심으로 먼저 오름차순 정렬하고, 그 안에서 5컬럼 오름차순 정렬				&#13;
  ///  mySheet.ColumnSort(4|5)				&#13;
  ///  //2,3,4컬럼 순서로 정렬하고, 내림차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(2|3|4, DESC);				&#13;
  ///  //3,2,4컬럼을 2,3,4컬럼인덱스 순서대로 내림차순, 오름차순, 오름차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(3|2|4, DESC,ASC|DESC|ASC);				&#13;
  ///  //3,2,4컬럼을 3,2,4컬럼 지정된 순서대로 오름차순, 내림차순, 오름차순으로 정렬한다.				&#13;
  ///  mySheet.ColumnSort(3|2|4,  DESC ,ASC|DESC|ASC, 1);				&#13;
  ///  //1컬럼에 중복된 값이 존재하는 행번을 가져옴				&#13;
  ///  var Row = mySheet.ColValueDup(1);				&#13;
  ///  //2,3,7 컬럼에 중복된 값이 존재하는 행번을 가져옴				&#13;
  ///  var Row = mySheet.ColValueDup(2|3|7);				&#13;
  ///  //삭제된 행을 제외하고 중복 체크하기				&#13;
  ///  var Row = mySheet.ColValueDup(2|3|7, 0);				&#13;
  ///  //6컬럼,7컬럼의 글자가 중복된 행들(삭제행포함, 최초행미포함, 전체 데이터 영역 검사)				&#13;
  ///    var duprows1 = mySheet.ColValueDupRows(6|7);				&#13;
  ///    //4컬럼,5컬럼에 대해 첫번째 행부터 50번째 행까지의 중복검사(삭제행제외, 최초행포함, 1행~50행)				&#13;
  ///    var duprows2 = mySheet.ColValueDupRows(4|5,false,true,1,50);				&#13;
  ///    //가져온 행을 배열로 반든다.				&#13;
  ///    var arrRow = duprows1.split(,);				&#13;
  ///    for (idx=0; idx&amp;lt;arrRow.length-1; idx++){ alert(arrRow[idx] + 행); }				&#13;
  ///  // 1컬럼의 너비값을 확인				&#13;
  ///  mySheet.GetColWidth(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long/ ' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColWidth = function(Col, Width)		{
	  /// <summary>&#13;
	  ///  특정 컬럼의 너비를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //50 픽셀로 너비 수정				&#13;
  ///  mySheet.SetColWidth(1, 50);				&#13;
  ///  //컬럼 내의 최대 글자 너비로 자동 변경				&#13;
  ///  mySheet.SetColWidth(2, 0);				&#13;
  ///  //3컬럼의 너비를 2컬럼의 너비와 동일하게 변경				&#13;
  ///  mySheet.SetColWidth(3, mySheet.GetColWidth(2));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long/ ' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Width' type='Integer' >&#13;
	 ///       너비 픽셀 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetComboOpenMode = function()		{
	  /// <summary>&#13;
	  ///  Combo, ComboEdit 컬럼을 한번 클릭으로 펼쳐줄지에 대해 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //50 픽셀로 너비 수정				&#13;
  ///  mySheet.SetColWidth(1, 50);				&#13;
  ///  //컬럼 내의 최대 글자 너비로 자동 변경				&#13;
  ///  mySheet.SetColWidth(2, 0);				&#13;
  ///  //3컬럼의 너비를 2컬럼의 너비와 동일하게 변경				&#13;
  ///  mySheet.SetColWidth(3, mySheet.GetColWidth(2));				&#13;
  ///  //ComboOpenMode 설정되어 있는 값을 확인한다.				&#13;
  ///  mySheet.GetComboOpenMode();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetComboOpenMode = function(mode)		{
	  /// <summary>&#13;
	  ///  Combo, ComboEdit 컬럼을 한번 클릭으로 펼쳐줄지에 대해 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //콤보를 한번 클릭으로 연다.				&#13;
  ///  mysheet.SetComboOpenMode(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='mode' type='Boolean' >&#13;
	 ///       0&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ComputeSum = function(CalcuLogic,FirstRow,LastRow,isFullSum)			{
	  /// <summary>&#13;
	  ///  특정 영역의 합계를 계산하여 반환한다&#13;
	  /// Example : 
  ///  //콤보를 한번 클릭으로 연다.				&#13;
  ///  mysheet.SetComboOpenMode(1);				&#13;
  ///  //3컬럼의 합계를 구한다.				&#13;
  ///  var Sum3 = mySheet.ComputeSum(|3|);				&#13;
  ///  //1행부터 10행까지 3컬럼 * 4컬럼 / 100 한 값들의 합계를 구한다.				&#13;
  ///  var Sum4 = mySheet.ComputeSum(|3| * |4| / 100, 1, 10);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='CalcuLogic' type='String' >&#13;
	 ///       계산 공식, 공식에 다른 컬럼값이 사용되는 경우 반드시 |로 감싸서 사용한다.&#13;
	 /// </param>&#13;
	 /// <param name='FirstRow' type='Long' >&#13;
	 ///       계산 대상행의 시작 index, Default=-1&#13;
	 /// </param>&#13;
	 /// <param name='LastRow' type='Long' >&#13;
	 ///       계산 대상행의 마지막 index, Default=-1&#13;
	 /// </param>&#13;
	 /// <param name='isFullSum' type='Boolean' >&#13;
	 ///       해당 계산식을 소계행도 포함할지의 여부, Default=1&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ConfirmOK = function(Val)			{
	  /// <summary>&#13;
	  ///  OnMessage Event에서 IsConfirm = 1인 경우 확인창을 표시하고 응답 결과를 Sheet로 되돌려 준다&#13;
	  /// Example : 
  ///  //콤보를 한번 클릭으로 연다.				&#13;
  ///  mysheet.SetComboOpenMode(1);				&#13;
  ///  //3컬럼의 합계를 구한다.				&#13;
  ///  var Sum3 = mySheet.ComputeSum(|3|);				&#13;
  ///  //1행부터 10행까지 3컬럼 * 4컬럼 / 100 한 값들의 합계를 구한다.				&#13;
  ///  var Sum4 = mySheet.ComputeSum(|3| * |4| / 100, 1, 10);				&#13;
  ///  //메시지 모드를 설정한다.				&#13;
  ///  mySheet.ShowMsgMode=0;				&#13;
  ///  //OnMessage 이벤트를 처리한다.				&#13;
  ///  Function mySheet_OnMessage(grid,msg, level, isconfirm)				&#13;
  ///  //메시지 표시하기				&#13;
  ///      var win_result = window.showModalDialog(				&#13;
  ///   sheet_message.jsp?Msg= + msg + &amp;IsConfirm= + isconfirm, 				&#13;
  ///          'modalResult', 				&#13;
  ///          'dialogWidth:200px;dialogHeight:200px;center:yes;help:no;status:no;');				&#13;
  ///      //Sheet로 메시지 결과를 반환한다.				&#13;
  ///      if(IsConfirm) mySheet.ConfirmOK(win_result);				&#13;
  ///  &amp;lt;/script&amp;gt;				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Val' type='Boolean' >&#13;
	 ///       확인창 선택 결과 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCountFormat = function()		{
	  /// <summary>&#13;
	  ///  보여지는 건수 정보의 포멧을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //콤보를 한번 클릭으로 연다.				&#13;
  ///  mysheet.SetComboOpenMode(1);				&#13;
  ///  //3컬럼의 합계를 구한다.				&#13;
  ///  var Sum3 = mySheet.ComputeSum(|3|);				&#13;
  ///  //1행부터 10행까지 3컬럼 * 4컬럼 / 100 한 값들의 합계를 구한다.				&#13;
  ///  var Sum4 = mySheet.ComputeSum(|3| * |4| / 100, 1, 10);				&#13;
  ///  //메시지 모드를 설정한다.				&#13;
  ///  mySheet.ShowMsgMode=0;				&#13;
  ///  //OnMessage 이벤트를 처리한다.				&#13;
  ///  Function mySheet_OnMessage(grid,msg, level, isconfirm)				&#13;
  ///  //메시지 표시하기				&#13;
  ///      var win_result = window.showModalDialog(				&#13;
  ///   sheet_message.jsp?Msg= + msg + &amp;IsConfirm= + isconfirm, 				&#13;
  ///          'modalResult', 				&#13;
  ///          'dialogWidth:200px;dialogHeight:200px;center:yes;help:no;status:no;');				&#13;
  ///      //Sheet로 메시지 결과를 반환한다.				&#13;
  ///      if(IsConfirm) mySheet.ConfirmOK(win_result);				&#13;
  ///  &amp;lt;/script&amp;gt;				&#13;
  ///  //건수 포멧을 확인한다.				&#13;
  ///  mySheet.GetCountFormat();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetCountFormat = function(Format)		{
	  /// <summary>&#13;
	  ///  보여지는 건수 정보의 포멧을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //건수 포멧을 설정한다.				&#13;
  ///  mySheet.SetCountFormat(현재 BOTTOMDATA건 / 전체 TOTALROWS건);				&#13;
  ///  //포커스로 표시한다.				&#13;
  ///  mySheet.SetCountFormat(선택 SELECTDATAROW행 / 총 ROWCOUNT건);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Format' type='String' >&#13;
	 ///       설정할 출력포맷&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCountInfoElement = function()		{
	  /// <summary>&#13;
	  ///  건수 정보를 시트 외부의 DOM 엘리먼트에 표현하기 위한 설정을 하거나 설정된 엘리먼트를 확인 한다&#13;
	  /// Example : 
  ///  //건수 포멧을 설정한다.				&#13;
  ///  mySheet.SetCountFormat(현재 BOTTOMDATA건 / 전체 TOTALROWS건);				&#13;
  ///  //포커스로 표시한다.				&#13;
  ///  mySheet.SetCountFormat(선택 SELECTDATAROW행 / 총 ROWCOUNT건);				&#13;
  ///  // 건수정보를 표시할 DOM 엘리먼트 객체를 확인 한다.				&#13;
  ///  Var elem = mySheet.GetCountInfoElement();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetCountInfoElement = function(Element)		{
	  /// <summary>&#13;
	  ///  건수 정보를 시트 외부의 DOM 엘리먼트에 표현하기 위한 설정을 하거나 설정된 엘리먼트를 확인 한다&#13;
	  /// Example : 
  ///  // 건수정보를 표시할 DOM 엘리먼트를 설정한다.				&#13;
  ///  // (countElem 아이디의 DOM 엘리먼트가 생성되어 있어야 함)				&#13;
  ///  mySheet.SetCountInfoElement(countElem);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Element' type='Object/' >&#13;
	 ///       설정할 DOM 엘리먼트 객체 또는 Id&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCountPosition = function()		{
	  /// <summary>&#13;
	  ///  건수 정보를 IBSheet의 특정 영역에 보이도록 설정한다&#13;
	  /// Example : 
  ///  // 건수정보를 표시할 DOM 엘리먼트를 설정한다.				&#13;
  ///  // (countElem 아이디의 DOM 엘리먼트가 생성되어 있어야 함)				&#13;
  ///  mySheet.SetCountInfoElement(countElem);				&#13;
  ///  }				&#13;
  ///  // 개수 정보가 표시되지 않고 있다면 개수 정보를 좌측 상단에 표시한다.				&#13;
  ///  if(mySheet.GetCountPosition() == 0) {				&#13;
  ///  mySheet.SetCountPosition(1);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetCountPosition = function(Position)		{
	  /// <summary>&#13;
	  ///  건수 정보를 IBSheet의 특정 영역에 보이도록 설정한다&#13;
	  /// Example : 
  ///  // 개수 정보가 표시되지 않고 있다면 개수 정보를 좌측 상단에 표시한다.				&#13;
  ///  if(mySheet.GetCountPosition() == 0) {				&#13;
  ///  mySheet.SetCountPosition(1);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Position' type='Integer' >&#13;
	 ///       설정할 출력정보 위치 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.CreatePivotTable = function(Info, DataSheet)			{
	  /// <summary>&#13;
	  ///  피벗 테이블은 대화형 테이블의 일종으로, 데이터의 나열 형태에 따라서 합계나 카운트 등의 계산을 하는 기능이다&#13;
	  /// Example : 
  ///  // 개수 정보가 표시되지 않고 있다면 개수 정보를 좌측 상단에 표시한다.				&#13;
  ///  if(mySheet.GetCountPosition() == 0) {				&#13;
  ///  mySheet.SetCountPosition(1);				&#13;
  ///  }				&#13;
  ///  //5,6,7 열을 행 레이블 필드로 설정하고, 8,9,10 열을 열 레이블의 필드로 설정하여, 13 컬럼을 요약정보(합계)에 표시한다.				&#13;
  ///  mySheet2.CreatePivotTable({Rows:'5|6|7', Cols:'8|9|10', Value:'13', ValueType:'Sum'}, mySheet);				&#13;
  ///  // 5,6,7 열을 행 레이블 필드로 설정하고, 2 열을 열 레이블의 필드로 설정하여, 13 컬럼을 요약정보(개수)에 표시한다.				&#13;
  ///  mySheet2.CreatePivotTable({Rows:'5|6|7', Cols:'2', Value:'13', ValueType:'Count'}, mySheet);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Info' type='json' >&#13;
	 ///       피벗 테이블 설정 객체 집합 (세부내용참고)&#13;
	 /// </param>&#13;
	 /// <param name='DataSheet' type='Object' >&#13;
	 ///       원본 데이터가 있는 IBSheet의 객체&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCumulateBackColor = function()		{
	  /// <summary>&#13;
	  ///  누계 행의 배경 색상을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 개수 정보가 표시되지 않고 있다면 개수 정보를 좌측 상단에 표시한다.				&#13;
  ///  if(mySheet.GetCountPosition() == 0) {				&#13;
  ///  mySheet.SetCountPosition(1);				&#13;
  ///  }				&#13;
  ///  //5,6,7 열을 행 레이블 필드로 설정하고, 8,9,10 열을 열 레이블의 필드로 설정하여, 13 컬럼을 요약정보(합계)에 표시한다.				&#13;
  ///  mySheet2.CreatePivotTable({Rows:'5|6|7', Cols:'8|9|10', Value:'13', ValueType:'Sum'}, mySheet);				&#13;
  ///  // 5,6,7 열을 행 레이블 필드로 설정하고, 2 열을 열 레이블의 필드로 설정하여, 13 컬럼을 요약정보(개수)에 표시한다.				&#13;
  ///  mySheet2.CreatePivotTable({Rows:'5|6|7', Cols:'2', Value:'13', ValueType:'Count'}, mySheet);				&#13;
  ///  //누계 행 배경색상을 확인				&#13;
  ///  mySheet.GetCumulateBackColor();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetCumulateBackColor = function(Color)		{
	  /// <summary>&#13;
	  ///  누계 행의 배경 색상을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //누계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetCumulateBackColor(#00FF00);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       WebColor 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.Data2Clipboard = function()			{
	  /// <summary>&#13;
	  ///  IBSheet위의 있는 모든 데이터를 클립보드에 복사한다&#13;
	  /// Example : 
  ///  //누계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetCumulateBackColor(#00FF00);				&#13;
  ///  //클립보드에 복사한다.				&#13;
  ///  mySheet.Data2Clipboard();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetDataAlternateBackColor = function()		{
	  /// <summary>&#13;
	  ///  짝수번째 데이터 행의 기본 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //누계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetCumulateBackColor(#00FF00);				&#13;
  ///  //클립보드에 복사한다.				&#13;
  ///  mySheet.Data2Clipboard();				&#13;
  ///  // 현재 색상 값을 확인한다.				&#13;
  ///  var color = mySheet.GetDataAlternateBackColor(1,1);				&#13;
  ///  alert(짝수번째행의 색상 값은  + color + 입니다.);				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDataAlternateBackColor = function(Color)		{
	  /// <summary>&#13;
	  ///  짝수번째 데이터 행의 기본 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 짝수번째행의 배경색을 빨간색으로 변경				&#13;
  ///  mySheet.SetDataAlternateBackColor(#FF0000);       // WebColor				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       설정할 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDataAutoTrim = function()		{
	  /// <summary>&#13;
	  ///  조회 또는 저장 시 데이터의 공백 트림 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 짝수번째행의 배경색을 빨간색으로 변경				&#13;
  ///  mySheet.SetDataAlternateBackColor(#FF0000);       // WebColor				&#13;
  ///  //자동 트림여부 설정 확인하기				&#13;
  ///  mySheet.GetDataAutoTrim();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDataAutoTrim = function(Trim)		{
	  /// <summary>&#13;
	  ///  조회 또는 저장 시 데이터의 공백 트림 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //자동 트림하여 조회하기				&#13;
  ///  mySheet.SetDataAutoTrim(1);				&#13;
  ///  mySheet.DoSearch(list.jsp);				&#13;
  ///  //트림하지 않고 데이터 그대로 저장하기				&#13;
  ///  mySheet.SetDataAutoTrim(0);				&#13;
  ///  mySheet.DoSave(save.jsp);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Trim' type='Boolean' >&#13;
	 ///       설정할 데이터의 공백Trim값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDataBackColor = function()		{
	  /// <summary>&#13;
	  ///  홀수번째 데이터 행의 기본 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //자동 트림하여 조회하기				&#13;
  ///  mySheet.SetDataAutoTrim(1);				&#13;
  ///  mySheet.DoSearch(list.jsp);				&#13;
  ///  //트림하지 않고 데이터 그대로 저장하기				&#13;
  ///  mySheet.SetDataAutoTrim(0);				&#13;
  ///  mySheet.DoSave(save.jsp);				&#13;
  ///  //홀수번째 데이터 행의 배경색을 확인한다.				&#13;
  ///  mySheet.GetDataBackColor();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDataBackColor = function(Color)		{
	  /// <summary>&#13;
	  ///  홀수번째 데이터 행의 기본 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //홀수번째 데이터 행의 배경색을 흰색으로 설정한다. 				&#13;
  ///  mySheet.SetDataBackColor(#FFFFFF);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       설정할 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DataCopy = function(IncludeChild)			{
	  /// <summary>&#13;
	  ///  마지막으로 선택된 데이터 행의 내용을 복사하여 신규 입력 행으로 생성하고, 생성된 행의 Row Index를 반환한다&#13;
	  /// Example : 
  ///  //홀수번째 데이터 행의 배경색을 흰색으로 설정한다. 				&#13;
  ///  mySheet.SetDataBackColor(#FFFFFF);				&#13;
  ///  //행을 복사하고, 복사된 행의 트랜잭션 상태를 조회로 변경한다.				&#13;
  ///  //'Status' 는 상태 컬럼의 SaveName				&#13;
  ///  var Row = mySheet.DataCopy();				&#13;
  ///  mySheet.SetCellValue(Row, Status, R);				&#13;
  ///  //자식 레벨까지 모두 복사하기				&#13;
  ///  mySheet.DataCopy(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='IncludeChild' type='Boolean' >&#13;
	 ///       자식 레벨의 행까지 복사하는지 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDataFontColor = function()		{
	  /// <summary>&#13;
	  ///  모든 데이터 행의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //홀수번째 데이터 행의 배경색을 흰색으로 설정한다. 				&#13;
  ///  mySheet.SetDataBackColor(#FFFFFF);				&#13;
  ///  //행을 복사하고, 복사된 행의 트랜잭션 상태를 조회로 변경한다.				&#13;
  ///  //'Status' 는 상태 컬럼의 SaveName				&#13;
  ///  var Row = mySheet.DataCopy();				&#13;
  ///  mySheet.SetCellValue(Row, Status, R);				&#13;
  ///  //자식 레벨까지 모두 복사하기				&#13;
  ///  mySheet.DataCopy(1);				&#13;
  ///  //데이터 행의 글자색을 확인한다.				&#13;
  ///  mySheet.GetDataFontColor();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDataFontColor = function(Color)		{
	  /// <summary>&#13;
	  ///  모든 데이터 행의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //데이터 행의 글자색을 빨간색으로 설정한다.				&#13;
  ///  mySheet.SetDataFontColor(#FF0000);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       설정할 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DataInsert = function(Row, Level)			{
	  /// <summary>&#13;
	  ///  데이터 행을 신규 생성하고, 생성된 행의 Row Index를 반환한다&#13;
	  /// Example : 
  ///  //데이터 행의 글자색을 빨간색으로 설정한다.				&#13;
  ///  mySheet.SetDataFontColor(#FF0000);				&#13;
  ///  //첫 행에 생성하기				&#13;
  ///  mySheet.DataInsert(0);				&#13;
  ///  //마지막 행에 생성하기				&#13;
  ///  mySheet.DataInsert(-1);				&#13;
  ///  //현재 선택된 행의 바로 아래에 생성				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  //7 행에 생성				&#13;
  ///  mySheet.DataInsert(7);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       생성될 행 위치, Default=마지막 선택 행 바로 아래&#13;
	 /// </param>&#13;
	 /// <param name='Level' type='Long' >&#13;
	 ///       생성될 행의 트리 레벨 수준, Default=마지막 선택 행의 레벨보다 1큰 레벨로, 자식으로 생성&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDataLinkMouse = function(Col)		{
	  /// <summary>&#13;
	  ///  데이터 행의 페이지 링크 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //데이터 행의 글자색을 빨간색으로 설정한다.				&#13;
  ///  mySheet.SetDataFontColor(#FF0000);				&#13;
  ///  //첫 행에 생성하기				&#13;
  ///  mySheet.DataInsert(0);				&#13;
  ///  //마지막 행에 생성하기				&#13;
  ///  mySheet.DataInsert(-1);				&#13;
  ///  //현재 선택된 행의 바로 아래에 생성				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  //7 행에 생성				&#13;
  ///  mySheet.DataInsert(7);				&#13;
  ///  //데이터행의 페이지 링크 여부 확인한다.				&#13;
  ///  mySheet.GetDataLinkMouse(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       특정 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetDataLinkMouse = function(Col, Link)		{
	  /// <summary>&#13;
	  ///  데이터 행의 페이지 링크 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //1,2 컬럼에서만 가능하도록 설정한다.				&#13;
  ///  mySheet.SetDataLinkMouse(1, 1);				&#13;
  ///  mySheet.SetDataLinkMouse(2, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       특정 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Link' type='Boolean' >&#13;
	 ///       링크여부 설정&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DataMove = function(ToRow, FromRow, RowLevel)			{
	  /// <summary>&#13;
	  ///  데이터 행을 원하는 다른 위치로 이동한다&#13;
	  /// Example : 
  ///  //1,2 컬럼에서만 가능하도록 설정한다.				&#13;
  ///  mySheet.SetDataLinkMouse(1, 1);				&#13;
  ///  mySheet.SetDataLinkMouse(2, 1);				&#13;
  ///  //12행을 10행으로 이동한다.				&#13;
  ///  mySheet.DataMove(10, 12);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='ToRow' type='Long' >&#13;
	 ///       이동할 위치의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='FromRow' type='Long' >&#13;
	 ///       선택된 데이터의 Row Index,&#13;
	 /// </param>&#13;
	 /// <param name='RowLevel' type='Integer' >&#13;
	 ///       이동 후 선택된 데이터의 트리 레벨&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDataRowHeight = function()		{
	  /// <summary>&#13;
	  ///  모든 데이터 행의 행높이를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //1,2 컬럼에서만 가능하도록 설정한다.				&#13;
  ///  mySheet.SetDataLinkMouse(1, 1);				&#13;
  ///  mySheet.SetDataLinkMouse(2, 1);				&#13;
  ///  //12행을 10행으로 이동한다.				&#13;
  ///  mySheet.DataMove(10, 12);				&#13;
  ///  //모든 데이터 행의 높이를 확인한다.				&#13;
  ///  mySheet.GetDataRowHeight();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDataRowHeight = function(Height)		{
	  /// <summary>&#13;
	  ///  모든 데이터 행의 행높이를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 높이를 22 픽셀로 설정한다.				&#13;
  ///  mySheet.SetDataRowHeight(22);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Height' type='Integer' >&#13;
	 ///       설정할 데이터행 높이 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDataRowMerge = function()		{
	  /// <summary>&#13;
	  ///  모든 데이터 행의 가로 머지 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 높이를 22 픽셀로 설정한다.				&#13;
  ///  mySheet.SetDataRowHeight(22);				&#13;
  ///  //모든 데이터 행의 가로머지를 여부				&#13;
  ///  mySheet.GetDataRowMerge();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDataRowMerge = function(Merge)		{
	  /// <summary>&#13;
	  ///  모든 데이터 행의 가로 머지 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Merge' type='Boolean' >&#13;
	 ///       머지 허용 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DirectDown2Excel = function(parameters)			{
	  /// <summary>&#13;
	  ///  조회된 데이터가 많은 경우 Down2Excel()메서드를 이용하여 엑셀 파일을 다운로드 하면 client에서 조회된 데이터를 서버로 보내는 과정에서 상당한 부하가 걸릴수 있다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Merge' type='Boolean' >&#13;
	 ///       머지 허용 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DirectLoadExcel = function(parameters)			{
	  /// <summary>&#13;
	  ///  LoadExcel 처럼 엑셀 문서를 읽어들이는 것은 동일하지만, 엑셀 문서의 내용을 IBSheet 에 담지 않고 서버쪽에서 지정한 페이지로 전달한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='ColumnMapping' type='String' >&#13;
	 ///       엑셀 컬럼 번호&#13;
	 /// </param>&#13;
	 /// <param name='EndRow' type='String' >&#13;
	 ///       엑셀 로딩완료 행번호&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParam' type='String' >&#13;
	 ///       서버로 전달될 파라미터를 쿼리스트링 형태로 넣음.&#13;
	 /// </param>&#13;
	 /// <param name='FileExt' type='String' >&#13;
	 ///       업로드 가능한 파일 확장자&#13;
	 /// </param>&#13;
	 /// <param name='Mode' type='String' >&#13;
	 ///       로딩 방식 (헤더매칭등)&#13;
	 /// </param>&#13;
	 /// <param name='StartRow' type='String' >&#13;
	 ///       엑셀 로딩 행번호&#13;
	 /// </param>&#13;
	 /// <param name='WorkSheetNo' type='String' >&#13;
	 ///       엑셀WorkSheet번호, Default=1&#13;
	 /// </param>&#13;
	 /// <param name='WorkSheetName' type='String' >&#13;
	 ///       엑셀WorkSheet이름&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DoAllSave = function(Url, Opt)			{
	  /// <summary>&#13;
	  ///  데이터의 트랜잭션 상태에 관계 없이 모든 데이터를 저장 하도록 페이지를 호출한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       저장 처리할 페이지 파일 이름&#13;
	 /// </param>&#13;
	 /// <param name='Opt.UrlEncode' type='Boolean' >&#13;
	 ///       IBSheet 위의 데이터를 인코딩할지 여부를 설정, Default=1&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Mode' type='Number' >&#13;
	 ///       Query String 문자열 조합방법을 설정Mode=1, Mode=2 (Default =1)&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Delim' type='String' >&#13;
	 ///       Mode=2일때, 연결될 구분자 설정&#13;
	 /// </param>&#13;
	 /// <param name='Opt.ReqHeader' type='Object' >&#13;
	 ///       요청헤더 설정 값 객체,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DoPrint = function()			{
	  /// <summary>&#13;
	  ///  보여지고 있는 모든 데이터를 인쇄한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;
  ///  // 인쇄 하기				&#13;
  ///  mySheet.DoPrint();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.DoRowSearch = function(Row, PageUrl, Param, Opt)			{
	  /// <summary>&#13;
	  ///  특정 행의 셀 데이터를 조회 한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;
  ///  // 인쇄 하기				&#13;
  ///  mySheet.DoPrint();				&#13;
  ///  //3컬럼의 데이터가 바뀌었을 때 해당 행의 데이터를 DB에서 읽어옴				&#13;
  ///  function mySheet_OnChange(Row, Col, Value) {				&#13;
  ///  if (Col == 3) {				&#13;
  ///      var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 1. 이미지 미표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 0, Sync : 0 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  // 2. 이미지 표시, 동기 조회				&#13;
  ///  var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='PageUrl' type='String' >&#13;
	 ///       처리할 페이지 Url&#13;
	 /// </param>&#13;
	 /// <param name='Param' type='String' >&#13;
	 ///       조회조건 Query String, Default "&#13;
	 /// </param>&#13;
	 /// <param name='Opt.ReqHeader' type='Object' >&#13;
	 ///       요청헤더 설정 값 객체,&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Sync' type='Boolean' >&#13;
	 ///       동기 조회 여부&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Wait' type='Boolean' >&#13;
	 ///       대기 이미지 표시 여부, Default =1&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DoSave = function(Url, Opt)			{
	  /// <summary>&#13;
	  ///  데이터의 트랜잭션 상태 또는 특정 컬럼 데이터에 따라 저장 처리한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;
  ///  // 인쇄 하기				&#13;
  ///  mySheet.DoPrint();				&#13;
  ///  //3컬럼의 데이터가 바뀌었을 때 해당 행의 데이터를 DB에서 읽어옴				&#13;
  ///  function mySheet_OnChange(Row, Col, Value) {				&#13;
  ///  if (Col == 3) {				&#13;
  ///      var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 1. 이미지 미표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 0, Sync : 0 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  // 2. 이미지 표시, 동기 조회				&#13;
  ///  var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  //트랜잭션이 일어난 데이터만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1 });				&#13;
  ///  //2컬럼의 CheckBox가 체크된것만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1, Col : 2 });				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$ });				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       저장 처리할 페이지 파일 이름&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Col' type='Number / String' >&#13;
	 ///       저장 대상이 되는 기준 컬럼의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Quest' type='Boolean' >&#13;
	 ///       저장 시 확인 메시지 표시 여부 설정, Default=1&#13;
	 /// </param>&#13;
	 /// <param name='Opt.UrlEncode' type='Boolean' >&#13;
	 ///       IBSheet 위의 데이터를 인코딩할지 여부를 설정, Default=1&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Mode' type='Integer' >&#13;
	 ///       Query String 문자열 조합방법을 설정Mode=1, Mode=2 (Default=1)&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Delim' type='String' >&#13;
	 ///       Mode=2일때, 연결될 구분자 설정&#13;
	 /// </param>&#13;
	 /// <param name='Opt.ReqHeader' type='Object' >&#13;
	 ///       요청헤더 설정 값 객체,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DoSearch = function(PageUrl, Param, Opt)			{
	  /// <summary>&#13;
	  ///  조회 페이지를 연결하여 조회 XML을 읽어 들이고, XML의 데이터를 IBSheet 내부에 표현한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;
  ///  // 인쇄 하기				&#13;
  ///  mySheet.DoPrint();				&#13;
  ///  //3컬럼의 데이터가 바뀌었을 때 해당 행의 데이터를 DB에서 읽어옴				&#13;
  ///  function mySheet_OnChange(Row, Col, Value) {				&#13;
  ///  if (Col == 3) {				&#13;
  ///      var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 1. 이미지 미표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 0, Sync : 0 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  // 2. 이미지 표시, 동기 조회				&#13;
  ///  var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  //트랜잭션이 일어난 데이터만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1 });				&#13;
  ///  //2컬럼의 CheckBox가 체크된것만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1, Col : 2 });				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$ });				&#13;
  ///  // 1. 일반조회				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb);				&#13;
  ///  // 2. Sync 조회				&#13;
  ///  var opt = { Sync : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 3. Append 조회				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 4. Sync &amp;&amp; Append 조회				&#13;
  ///  var opt = { Sync : 1, Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 5. 요청헤더 설정				&#13;
  ///  Var opt = { ReqHeader : { Prop : “Value} };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='PageUrl' type='String' >&#13;
	 ///       조회 XML 페이지 파일 이름&#13;
	 /// </param>&#13;
	 /// <param name='Param' type='String' >&#13;
	 ///       조회 조건 Query String, Default=””&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Append' type='Boolean' >&#13;
	 ///       Append 조회 여부, Default=0&#13;
	 /// </param>&#13;
	 /// <param name='Opt.AppendRow' type='Number' >&#13;
	 ///       Append 조회 시 데이터를 붙여넣을 위치 설정&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Fx' type='Boolean' >&#13;
	 ///       포맷팅된 데이터 조회 처리 여부,&#13;
	 /// </param>&#13;
	 /// <param name='Opt.ReqHeader' type='Object' >&#13;
	 ///       요청헤더 설정 값 객체,&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Sync' type='Boolean' >&#13;
	 ///       동기 조회 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DoSearchChild = function(Row, PageUrl, Param, Opt)			{
	  /// <summary>&#13;
	  ///  트리 형태의 데이터 구조에서 해당행의 자식을 조회하지 않은 상태에서 OnTreeChild 이벤트 안에서 자식데이타를 조회 페이지를 연결하여 조회 XML, JSON을 읽어 들이고, XML, JSON의 데이터를 자식으로 Append 하여 표현한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;
  ///  // 인쇄 하기				&#13;
  ///  mySheet.DoPrint();				&#13;
  ///  //3컬럼의 데이터가 바뀌었을 때 해당 행의 데이터를 DB에서 읽어옴				&#13;
  ///  function mySheet_OnChange(Row, Col, Value) {				&#13;
  ///  if (Col == 3) {				&#13;
  ///      var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 1. 이미지 미표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 0, Sync : 0 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  // 2. 이미지 표시, 동기 조회				&#13;
  ///  var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  //트랜잭션이 일어난 데이터만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1 });				&#13;
  ///  //2컬럼의 CheckBox가 체크된것만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1, Col : 2 });				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$ });				&#13;
  ///  // 1. 일반조회				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb);				&#13;
  ///  // 2. Sync 조회				&#13;
  ///  var opt = { Sync : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 3. Append 조회				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 4. Sync &amp;&amp; Append 조회				&#13;
  ///  var opt = { Sync : 1, Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 5. 요청헤더 설정				&#13;
  ///  Var opt = { ReqHeader : { Prop : “Value} };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 자식데이터 조회하기				&#13;
  ///  &amp;lt;script type=text/Javascript&amp;gt;				&#13;
  ///   function mySheet_OnTreeChild(Row){				&#13;
  ///     var url = ";				&#13;
  ///     // 4컬럼 : 트리컬럼				&#13;
  ///     switch(mySheet.GetCellValue(Row, 4)){				&#13;
  ///      case 서울 : 				&#13;
  ///        url =  type15_dat(1).xml;				&#13;
  ///        break;				&#13;
  ///      case 인천:				&#13;
  ///        url = type15_data(2).xml;				&#13;
  ///        break;				&#13;
  ///     }				&#13;
  ///     var opt = { Wait : 1, Sync : 0 };				&#13;
  ///     mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///   }				&#13;
  ///  &amp;lt;/script&amp;gt;				&#13;
  ///  // 1. 이미지 표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 1 Sync : 0 };				&#13;
  ///  mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///  // 2. 이미지 미표시, 동기 조회 (동기조회 선택시 대기이미지는 보여지지 안음)				&#13;
  ///  var opt = { Wait : 0, Sync : 1 };				&#13;
  ///  mySheet.DoSearchChild(Row, url, ", opt);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       OnTreeChild 이벤트에서 받은&#13;
	 /// </param>&#13;
	 /// <param name='PageUrl' type='String' >&#13;
	 ///       조회 XML,JSON 페이지 파일 이름&#13;
	 /// </param>&#13;
	 /// <param name='Param' type='String' >&#13;
	 ///       조회 조건 Query String, Default="&#13;
	 /// </param>&#13;
	 /// <param name='Opt.ReqHeader' type='Object' >&#13;
	 ///       요청헤더 설정 값 객체,&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Sync' type='Boolean' >&#13;
	 ///       동기 조회 여부 (동기상태에서는 대기이미지가 표시되지 않음)&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Wait' type='Boolean' >&#13;
	 ///       대기 이미지 표시 여부, Default=1&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.DoSearchPaging = function(Url, Opt)			{
	  /// <summary>&#13;
	  ///  대량 데이터를 조회 하고자 하는 경우 IBSheet 의 스크를 위치의 데이터 일부만을 조회 하여 화면에 표현한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;
  ///  // 인쇄 하기				&#13;
  ///  mySheet.DoPrint();				&#13;
  ///  //3컬럼의 데이터가 바뀌었을 때 해당 행의 데이터를 DB에서 읽어옴				&#13;
  ///  function mySheet_OnChange(Row, Col, Value) {				&#13;
  ///  if (Col == 3) {				&#13;
  ///      var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 1. 이미지 미표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 0, Sync : 0 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  // 2. 이미지 표시, 동기 조회				&#13;
  ///  var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  //트랜잭션이 일어난 데이터만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1 });				&#13;
  ///  //2컬럼의 CheckBox가 체크된것만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1, Col : 2 });				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$ });				&#13;
  ///  // 1. 일반조회				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb);				&#13;
  ///  // 2. Sync 조회				&#13;
  ///  var opt = { Sync : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 3. Append 조회				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 4. Sync &amp;&amp; Append 조회				&#13;
  ///  var opt = { Sync : 1, Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 5. 요청헤더 설정				&#13;
  ///  Var opt = { ReqHeader : { Prop : “Value} };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 자식데이터 조회하기				&#13;
  ///  &amp;lt;script type=text/Javascript&amp;gt;				&#13;
  ///   function mySheet_OnTreeChild(Row){				&#13;
  ///     var url = ";				&#13;
  ///     // 4컬럼 : 트리컬럼				&#13;
  ///     switch(mySheet.GetCellValue(Row, 4)){				&#13;
  ///      case 서울 : 				&#13;
  ///        url =  type15_dat(1).xml;				&#13;
  ///        break;				&#13;
  ///      case 인천:				&#13;
  ///        url = type15_data(2).xml;				&#13;
  ///        break;				&#13;
  ///     }				&#13;
  ///     var opt = { Wait : 1, Sync : 0 };				&#13;
  ///     mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///   }				&#13;
  ///  &amp;lt;/script&amp;gt;				&#13;
  ///  // 1. 이미지 표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 1 Sync : 0 };				&#13;
  ///  mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///  // 2. 이미지 미표시, 동기 조회 (동기조회 선택시 대기이미지는 보여지지 안음)				&#13;
  ///  var opt = { Wait : 0, Sync : 1 };				&#13;
  ///  mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///  //초기화 설정 (페이지 사이즈를 100으로 설정)				&#13;
  ///  var cfg = {SearchMode:3, Page:100};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 실시간 조회				&#13;
  ///  var info = {PageParam: page, OrderbyParam:”orderbyParam”, Param: id=ibleaders&amp;seq=1};				&#13;
  ///  mySheet.DoSearchPaging(list.jsp,info);				&#13;
  ///  // 동기 조회				&#13;
  ///  var info = {PageParam: page, OrderbyParam:”orderbyParam”, Param: id=ibleaders&amp;seq=1, Sync : 1};				&#13;
  ///  mySheet.DoSearchPaging(list.jsp,info);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       조회 페이지 Url&#13;
	 /// </param>&#13;
	 /// <param name='Opt.PageParam' type='String' >&#13;
	 ///       페이지 인덱스를 받을 변수명, Default=ibpage&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Param' type='String' >&#13;
	 ///       조회 조건 Query String, Default="&#13;
	 /// </param>&#13;
	 /// <param name='Opt. OrderbyParam' type='String' >&#13;
	 ///       헤더 정렬 정보를 받을 변수명, Default=iborderby&#13;
	 /// </param>&#13;
	 /// <param name='Opt. UseWaitImage' type='Boolean' >&#13;
	 ///       WaitImageVisible 설정이 true 일때&#13;
	 /// </param>&#13;
	 /// <param name='Opt.ReqHeader' type='Object' >&#13;
	 ///       요청헤더 설정 값 객체,&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Sync' type='Boolean' >&#13;
	 ///       동기 조회 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.Down2Excel = function(parameters)			{
	  /// <summary>&#13;
	  ///  조회된 데이터가 있는 경우 IBSheet의 내용을 엑셀 파일로 변환하여 다운로드 한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;
  ///  // 인쇄 하기				&#13;
  ///  mySheet.DoPrint();				&#13;
  ///  //3컬럼의 데이터가 바뀌었을 때 해당 행의 데이터를 DB에서 읽어옴				&#13;
  ///  function mySheet_OnChange(Row, Col, Value) {				&#13;
  ///  if (Col == 3) {				&#13;
  ///      var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 1. 이미지 미표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 0, Sync : 0 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  // 2. 이미지 표시, 동기 조회				&#13;
  ///  var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  //트랜잭션이 일어난 데이터만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1 });				&#13;
  ///  //2컬럼의 CheckBox가 체크된것만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1, Col : 2 });				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$ });				&#13;
  ///  // 1. 일반조회				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb);				&#13;
  ///  // 2. Sync 조회				&#13;
  ///  var opt = { Sync : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 3. Append 조회				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 4. Sync &amp;&amp; Append 조회				&#13;
  ///  var opt = { Sync : 1, Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 5. 요청헤더 설정				&#13;
  ///  Var opt = { ReqHeader : { Prop : “Value} };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 자식데이터 조회하기				&#13;
  ///  &amp;lt;script type=text/Javascript&amp;gt;				&#13;
  ///   function mySheet_OnTreeChild(Row){				&#13;
  ///     var url = ";				&#13;
  ///     // 4컬럼 : 트리컬럼				&#13;
  ///     switch(mySheet.GetCellValue(Row, 4)){				&#13;
  ///      case 서울 : 				&#13;
  ///        url =  type15_dat(1).xml;				&#13;
  ///        break;				&#13;
  ///      case 인천:				&#13;
  ///        url = type15_data(2).xml;				&#13;
  ///        break;				&#13;
  ///     }				&#13;
  ///     var opt = { Wait : 1, Sync : 0 };				&#13;
  ///     mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///   }				&#13;
  ///  &amp;lt;/script&amp;gt;				&#13;
  ///  // 1. 이미지 표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 1 Sync : 0 };				&#13;
  ///  mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///  // 2. 이미지 미표시, 동기 조회 (동기조회 선택시 대기이미지는 보여지지 안음)				&#13;
  ///  var opt = { Wait : 0, Sync : 1 };				&#13;
  ///  mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///  //초기화 설정 (페이지 사이즈를 100으로 설정)				&#13;
  ///  var cfg = {SearchMode:3, Page:100};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 실시간 조회				&#13;
  ///  var info = {PageParam: page, OrderbyParam:”orderbyParam”, Param: id=ibleaders&amp;seq=1};				&#13;
  ///  mySheet.DoSearchPaging(list.jsp,info);				&#13;
  ///  // 동기 조회				&#13;
  ///  var info = {PageParam: page, OrderbyParam:”orderbyParam”, Param: id=ibleaders&amp;seq=1, Sync : 1};				&#13;
  ///  mySheet.DoSearchPaging(list.jsp,info);				&#13;
  ///  // 엑셀로 내려 받기				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 다운로드할 파일명을 excel2로 하고 워크시트명은 sheet-test 로 정의하여다운로드 받는다.				&#13;
  ///  mySheet.Down2Excel({FileName:'excel2',SheetName:' sheet-test'});				&#13;
  ///  //시트 색상과 머지를 모두 반영하며, 콤보는 코드로, 체크는 Y/N으로 다운로드 받되,헤더와 합계는 제외하고 컬럼은 왼쪽에서 3개의 컬럼만 다운로드 한다.				&#13;
  ///  mySheet.Down2Excel({SheetDesign:1, Merge:1, DownCombo:'CODE', CheckBoxOnValue:'Y', CheckBoxOffValue:'N',  DownRows:'', DownCols:'0|1|2', DownHeader:0, DownSum:0});				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='AllTypeToText' type='bool' >&#13;
	 ///       모든 컬럼을 Text타입으로 다운로드 받을지 여부&#13;
	 /// </param>&#13;
	 /// <param name='AutoSizeColumn' type='bool' >&#13;
	 ///       Default=0(컬럼 넓이 자동 조절 안함)&#13;
	 /// </param>&#13;
	 /// <param name='CheckBoxOffValue' type='String' >&#13;
	 ///       체크박스의 체크 해제시의 값&#13;
	 /// </param>&#13;
	 /// <param name='CheckBoxOnValue' type='String' >&#13;
	 ///       체크박스의 체크시의 값&#13;
	 /// </param>&#13;
	 /// <param name='ComboValidation' type='bool' >&#13;
	 ///       콤보의 드롭다운 형식 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownCols' type='String' >&#13;
	 ///       다운로드 받을 열들을 | 로 연결. Default="(모두 받음)&#13;
	 /// </param>&#13;
	 /// <param name='DownCombo' type='String' >&#13;
	 ///       콤보의 TEXT/CODE 형태의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownHeader' type='bool' >&#13;
	 ///       헤더의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownRows' type='String' >&#13;
	 ///       다운로드 받을 행들을 | 로 연결. Default="(모두 받음)&#13;
	 /// </param>&#13;
	 /// <param name='DownSum' type='bool' >&#13;
	 ///       합계의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownTreeHide' type='bool' >&#13;
	 ///       트리의 접혀진 행 다운 여부&#13;
	 /// </param>&#13;
	 /// <param name='ExcelFontSize' type='Integer' >&#13;
	 ///       폰트크기 설정&#13;
	 /// </param>&#13;
	 /// <param name='ExcelRowHeight' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='ExcludeSubSum' type='Integer' >&#13;
	 ///       소계/누계 행 제외 여부&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParam' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParamMethod' type='String' >&#13;
	 ///       Default=GET&#13;
	 /// </param>&#13;
	 /// <param name='FileName' type='String' >&#13;
	 ///       저장할 파일 명&#13;
	 /// </param>&#13;
	 /// <param name='HiddenColumn' type='bool' >&#13;
	 ///       열숨김 반영 여부.&#13;
	 /// </param>&#13;
	 /// <param name='KeyFieldMark' type='bool' >&#13;
	 ///       KeyField 마크(*)를 다운 여부&#13;
	 /// </param>&#13;
	 /// <param name='Merge' type='bool' >&#13;
	 ///       머지의 다운로드 적용 여부&#13;
	 /// </param>&#13;
	 /// <param name='NumberTypeToText' type='bool' >&#13;
	 ///       숫자타입 셀 데이터를 문자 타입으로 다운로드 받을지 여부.&#13;
	 /// </param>&#13;
	 /// <param name='OnlyHeaderMerge' type='bool' >&#13;
	 ///       헤더만 머지할지의 여부&#13;
	 /// </param>&#13;
	 /// <param name='ReportXMLURL' type='String' >&#13;
	 ///       엑셀파일에 타이틀이나 패턴등을 별도의 xml파일을 통해 설정&#13;
	 /// </param>&#13;
	 /// <param name='SheetDesign' type='Integer' >&#13;
	 ///       디자인 다운로드 적용 여부&#13;
	 /// </param>&#13;
	 /// <param name='SheetName' type='String' >&#13;
	 ///       엑셀WorkSheet이름, Default=Sheet&#13;
	 /// </param>&#13;
	 /// <param name='SheetNo' type='Integer' >&#13;
	 ///       템플릿으로 사용할 엑셀 WorkSheet 번호.&#13;
	 /// </param>&#13;
	 /// <param name='StartCol' type='Integer' >&#13;
	 ///       템플릿 적용 다운로드 시 엑셀 파일내 데이터를 쓰기 시작할 컬럼 번호&#13;
	 /// </param>&#13;
	 /// <param name='StartRow' type='Integer' >&#13;
	 ///       템플릿 적용 다운로드 시 엑셀 파일내 데이터를 쓰기 시작할 행 번호&#13;
	 /// </param>&#13;
	 /// <param name='TempFile' type='String' >&#13;
	 ///       템플릿으로 사용할 엑셀 파일명파일명&#13;
	 /// </param>&#13;
	 /// <param name='TextToGeneral' type='bool' >&#13;
	 ///       Text 타입의 엑셀 서식 형식&#13;
	 /// </param>&#13;
	 /// <param name='TitleAlign' type='String' >&#13;
	 ///       Default=center(중앙정렬)&#13;
	 /// </param>&#13;
	 /// <param name='TitleText' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='TreeLevel' type='bool' >&#13;
	 ///       Default=0(다운 안받음)&#13;
	 /// </param>&#13;
	 /// <param name='URL' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='UserMerge' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='WordWrap' type='bool' >&#13;
	 ///       Default=1(줄바꿈 허용)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDown2ExcelUrl = function()		{
	  /// <summary>&#13;
	  ///  엑셀 다운로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  //모든 데이터 행의 가로머지를 허용				&#13;
  ///  mySheet.SetDataRowMerge(1);				&#13;
  ///  // 서버에서 데이터를 직접 준비하여다운로드 한다.				&#13;
  ///  var param = {URL:/sub/ex/bussDeptList.jsp				&#13;
  ///  ,ExtendParam:DECNO=3422&amp;PartMngNO=982211				&#13;
  ///  ,FileName:OrgList.xls};				&#13;
  ///  mySheet. DirectDown2Excel(param);         				&#13;
  ///  // 참고 함수				&#13;
  ///  function makeExParam(key,data){				&#13;
  ///  return  &amp;+encodeURIComponent(key)+=+encodeURIComponent(data);				&#13;
  ///  }				&#13;
  ///  // 엑셀로 넘어온 내용을 전달할 포워딩 페이지(ContextRoot명은 빼고 적는다.)				&#13;
  ///  var param =makeExParam( “FP ,/bu/MassSave.jsp);				&#13;
  ///  param += makeExParam(sname,chris);				&#13;
  ///  param += makeExParam(date,20091221”);				&#13;
  ///  var parameters = { Mode : mch,  StartRow: 1, ExtendParam:param}				&#13;
  ///  // 엑셀로 로딩하여 서버에서 즉시 처리하기				&#13;
  ///  mySheet. DirectLoadExcel(parameters);				&#13;
  ///  -----------------------------------------------------------------------------------------------------				&#13;
  ///  // MassSave.jsp 페이지 내용				&#13;
  ///  // 1. 엑셀의 내용을 찍어본다. (데이터확인)				&#13;
  ///  String PRINT_STR = ";				&#13;
  ///  ArrayList keys = new ArrayList();				&#13;
  ///  List li = (List)request.getAttribute(SHEETDATA);				&#13;
  ///  for(int i=0;i&amp;lt;li.size();i++){				&#13;
  ///  Map mp = (Map)li.get(i);				&#13;
  ///  // 헤더 한줄만 뿌려주자.				&#13;
  ///  if(i==0){				&#13;
  ///  Iterator it = mp.keySet().iterator();				&#13;
  ///  while(it.hasNext()){				&#13;
  ///  String key = (String)it.next();				&#13;
  ///  PRINT_STR += key+\t;				&#13;
  ///  keys.add(key);				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 데이터를 뿌리자				&#13;
  ///  for(int c=0;c&amp;lt;keys.size();c++){				&#13;
  ///  PRINT_STR += mp.get(keys.get(c))+\t;				&#13;
  ///  }				&#13;
  ///  PRINT_STR += \\n;				&#13;
  ///  }				&#13;
  ///  // 서버 콘솔에서 확인				&#13;
  ///  System.out.println(PRINT_STR);				&#13;
  ///  // 2. ExtendParam으로 넘긴 내용도 확인해 본다.				&#13;
  ///  System.out.println(  request.getAttribute(“sname”));				&#13;
  ///  System.out.println(  request.getAttribute(“date”));				&#13;
  ///  // 3. 최종적으로 화면에 결과를 리턴한다.				&#13;
  ///  out.println(“&amp;lt;script&amp;gt;alert(‘총 데이터 건수 :”+li.size()+” 건이\n저장 되었습니다.');&amp;lt;/script&amp;gt;”);				&#13;
  ///  // 모든 내역 저장하기				&#13;
  ///  var Result = mySheet.DoAllSave(save.jsp, { Param : id=khlee&amp;seq=1 });				&#13;
  ///  //저장 실패한 경우 에러 메시지를 표시하고, 성공한 경우 조회처리				&#13;
  ///  if(!Result){				&#13;
  ///      alert(저장 실패했습니다. 다시 시도하세요);				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSearch(list.jsp);				&#13;
  ///  }				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoAllSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$});				&#13;
  ///  // 인쇄 하기				&#13;
  ///  mySheet.DoPrint();				&#13;
  ///  //3컬럼의 데이터가 바뀌었을 때 해당 행의 데이터를 DB에서 읽어옴				&#13;
  ///  function mySheet_OnChange(Row, Col, Value) {				&#13;
  ///  if (Col == 3) {				&#13;
  ///      var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 1. 이미지 미표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 0, Sync : 0 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  // 2. 이미지 표시, 동기 조회				&#13;
  ///  var opt = { Wait : 1, Sync : 1 };				&#13;
  ///  mySheet.DoRowSearch(Row, grid_rowdata.html,  " , opt);				&#13;
  ///  //트랜잭션이 일어난 데이터만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1 });				&#13;
  ///  //2컬럼의 CheckBox가 체크된것만 저장하기				&#13;
  ///  mySheet.DoSave(Save.jsp ,{ Param : id=khlee&amp;seq=1, Col : 2 });				&#13;
  ///  //설정할 선택 인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.DoSave(PageUrl, { UrlEncode:0, Mode:2, Delim:$ });				&#13;
  ///  // 1. 일반조회				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb);				&#13;
  ///  // 2. Sync 조회				&#13;
  ///  var opt = { Sync : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 3. Append 조회				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 4. Sync &amp;&amp; Append 조회				&#13;
  ///  var opt = { Sync : 1, Append : 1 };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 5. 요청헤더 설정				&#13;
  ///  Var opt = { ReqHeader : { Prop : “Value} };				&#13;
  ///  mySheet.DoSearch(list.jsp, p1=aa&amp;p2=bb, opt);				&#13;
  ///  // 자식데이터 조회하기				&#13;
  ///  &amp;lt;script type=text/Javascript&amp;gt;				&#13;
  ///   function mySheet_OnTreeChild(Row){				&#13;
  ///     var url = ";				&#13;
  ///     // 4컬럼 : 트리컬럼				&#13;
  ///     switch(mySheet.GetCellValue(Row, 4)){				&#13;
  ///      case 서울 : 				&#13;
  ///        url =  type15_dat(1).xml;				&#13;
  ///        break;				&#13;
  ///      case 인천:				&#13;
  ///        url = type15_data(2).xml;				&#13;
  ///        break;				&#13;
  ///     }				&#13;
  ///     var opt = { Wait : 1, Sync : 0 };				&#13;
  ///     mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///   }				&#13;
  ///  &amp;lt;/script&amp;gt;				&#13;
  ///  // 1. 이미지 표시, 비동기 조회				&#13;
  ///  var opt = { Wait : 1 Sync : 0 };				&#13;
  ///  mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///  // 2. 이미지 미표시, 동기 조회 (동기조회 선택시 대기이미지는 보여지지 안음)				&#13;
  ///  var opt = { Wait : 0, Sync : 1 };				&#13;
  ///  mySheet.DoSearchChild(Row, url, ", opt);				&#13;
  ///  //초기화 설정 (페이지 사이즈를 100으로 설정)				&#13;
  ///  var cfg = {SearchMode:3, Page:100};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 실시간 조회				&#13;
  ///  var info = {PageParam: page, OrderbyParam:”orderbyParam”, Param: id=ibleaders&amp;seq=1};				&#13;
  ///  mySheet.DoSearchPaging(list.jsp,info);				&#13;
  ///  // 동기 조회				&#13;
  ///  var info = {PageParam: page, OrderbyParam:”orderbyParam”, Param: id=ibleaders&amp;seq=1, Sync : 1};				&#13;
  ///  mySheet.DoSearchPaging(list.jsp,info);				&#13;
  ///  // 엑셀로 내려 받기				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 다운로드할 파일명을 excel2로 하고 워크시트명은 sheet-test 로 정의하여다운로드 받는다.				&#13;
  ///  mySheet.Down2Excel({FileName:'excel2',SheetName:' sheet-test'});				&#13;
  ///  //시트 색상과 머지를 모두 반영하며, 콤보는 코드로, 체크는 Y/N으로 다운로드 받되,헤더와 합계는 제외하고 컬럼은 왼쪽에서 3개의 컬럼만 다운로드 한다.				&#13;
  ///  mySheet.Down2Excel({SheetDesign:1, Merge:1, DownCombo:'CODE', CheckBoxOnValue:'Y', CheckBoxOffValue:'N',  DownRows:'', DownCols:'0|1|2', DownHeader:0, DownSum:0});				&#13;
  ///  // 엑셀 다운로드 설정 경로를 확인한다.				&#13;
  ///  var url = mySheet.GetDown2ExcelUrl();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDown2ExcelUrl = function(Url)		{
	  /// <summary>&#13;
	  ///  엑셀 다운로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  // 엑셀 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2ExcelUrl(/jsp/Down2Excel.jsp);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       설정할 서버 페이지 Url&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.Down2ExcelBuffer = function(IsBuffer)			{
	  /// <summary>&#13;
	  ///  여러 개의 시트로부터 1개의 엑셀 문서로 다운로드 받는다&#13;
	  /// Example : 
  ///  // 엑셀 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2ExcelUrl(/jsp/Down2Excel.jsp);				&#13;
  ///  //이후로는 버퍼링한다. 아무 동작 안함.				&#13;
  ///  firstSheet.Down2ExcelBuffer(true);  				&#13;
  ///  // 첫번째 워크시트에 담아두기를 예약함.				&#13;
  ///  firstSheet.Down2Excel({FileName:'excel2',SheetName:'sheet1'}); 				&#13;
  ///  // 두번째 워크시트에 담아두기를 예약함.				&#13;
  ///  secondSheet.Down2Excel({FileName:'excel2',SheetName:' sheet2'}); 				&#13;
  ///  // 버퍼링된 모든 엑셀 자료를 1개의 엑셀문서에 모두 모아서 즉시 다운로드 한다.				&#13;
  ///  firstSheet.Down2ExcelBuffer(false); 				&#13;
  ///  DirectDown2Excel 로 여러개의 시트를 다운로드 하는 경우				&#13;
  ///  // 시트에서 Down2ExcelBuffer 통해 DirectDown2Excel 호출				&#13;
  ///  firstSheet.Down2ExcelBuffer(true);				&#13;
  ///  firstSheet.DirectDown2Excel({URL:../jsp/fp.jsp,FileName:IBLeaders.xls});				&#13;
  ///  secondSheet.DirectDown2Excel({URL:../jsp/fp.jsp,FileName:IBLeaders.xls, SheetDesign:1});				&#13;
  ///  firstSheet.Down2ExcelBuffer(false);				&#13;
  ///  // 데이터 생성 파일 (fp.jsp)				&#13;
  ///  request.setAttribute(SHEETDATA, li);				&#13;
  ///  request.setAttribute(SHEETDATA1, li2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='IsBuffer' type='bool' >&#13;
	 ///       버퍼링 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.Down2Pdf = function(parameters)			{
	  /// <summary>&#13;
	  ///  조회된 데이터가 있는 경우 IBSheet의 내용을 PDF 파일로 변환하여 다운로드 한다&#13;
	  /// Example : 
  ///  // 엑셀 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2ExcelUrl(/jsp/Down2Excel.jsp);				&#13;
  ///  //이후로는 버퍼링한다. 아무 동작 안함.				&#13;
  ///  firstSheet.Down2ExcelBuffer(true);  				&#13;
  ///  // 첫번째 워크시트에 담아두기를 예약함.				&#13;
  ///  firstSheet.Down2Excel({FileName:'excel2',SheetName:'sheet1'}); 				&#13;
  ///  // 두번째 워크시트에 담아두기를 예약함.				&#13;
  ///  secondSheet.Down2Excel({FileName:'excel2',SheetName:' sheet2'}); 				&#13;
  ///  // 버퍼링된 모든 엑셀 자료를 1개의 엑셀문서에 모두 모아서 즉시 다운로드 한다.				&#13;
  ///  firstSheet.Down2ExcelBuffer(false); 				&#13;
  ///  DirectDown2Excel 로 여러개의 시트를 다운로드 하는 경우				&#13;
  ///  // 시트에서 Down2ExcelBuffer 통해 DirectDown2Excel 호출				&#13;
  ///  firstSheet.Down2ExcelBuffer(true);				&#13;
  ///  firstSheet.DirectDown2Excel({URL:../jsp/fp.jsp,FileName:IBLeaders.xls});				&#13;
  ///  secondSheet.DirectDown2Excel({URL:../jsp/fp.jsp,FileName:IBLeaders.xls, SheetDesign:1});				&#13;
  ///  firstSheet.Down2ExcelBuffer(false);				&#13;
  ///  // 데이터 생성 파일 (fp.jsp)				&#13;
  ///  request.setAttribute(SHEETDATA, li);				&#13;
  ///  request.setAttribute(SHEETDATA1, li2);				&#13;
  ///  // PDF 파일로 내려 받기				&#13;
  ///  mySheet.Down2Pdf();         				&#13;
  ///  // 다운로드할 파일명을 text로 정의하여다운로드 받는다.				&#13;
  ///  mySheet.Down2Pdf({FileName:'text' });				&#13;
  ///  // 다운로드할 컬럼을 지정하여 myPDF.pdf로 다운받는다.				&#13;
  ///  mySheet.Down2Pdf({FileName:myPDF, DownCols:7|8|9|4|5|6|10});				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DownCols' type='String' >&#13;
	 ///       다운로드 받을 열들을 | 로 연결.&#13;
	 /// </param>&#13;
	 /// <param name='Dpi' type='Integer' >&#13;
	 ///       축소/확대 비율. 값이 작을 수록 크게 출력된다. 50~32840 사이 값으로 설정 가능하다.&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParam' type='String' >&#13;
	 ///       서버로 전달해야 하는 내용이 있는 경우 Get 방식의  QueryString으로 연결하여 설정Default="&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParam' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParamMethod' type='String' >&#13;
	 ///       Default=GET&#13;
	 /// </param>&#13;
	 /// <param name='FileName' type='String' >&#13;
	 ///       저장할 파일 명&#13;
	 /// </param>&#13;
	 /// <param name='FontTo' type='String' >&#13;
	 ///       Default = Gothic&#13;
	 /// </param>&#13;
	 /// <param name='Paper' type='String' >&#13;
	 ///       용지 방향 설정&#13;
	 /// </param>&#13;
	 /// <param name='Title' type='String' >&#13;
	 ///       Default = "&#13;
	 /// </param>&#13;
	 /// <param name='TitleStyle' type='String' >&#13;
	 ///       Default = "&#13;
	 /// </param>&#13;
	 /// <param name='URL' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDown2PdfUrl = function()		{
	  /// <summary>&#13;
	  ///  PDF 다운로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  // 엑셀 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2ExcelUrl(/jsp/Down2Excel.jsp);				&#13;
  ///  //이후로는 버퍼링한다. 아무 동작 안함.				&#13;
  ///  firstSheet.Down2ExcelBuffer(true);  				&#13;
  ///  // 첫번째 워크시트에 담아두기를 예약함.				&#13;
  ///  firstSheet.Down2Excel({FileName:'excel2',SheetName:'sheet1'}); 				&#13;
  ///  // 두번째 워크시트에 담아두기를 예약함.				&#13;
  ///  secondSheet.Down2Excel({FileName:'excel2',SheetName:' sheet2'}); 				&#13;
  ///  // 버퍼링된 모든 엑셀 자료를 1개의 엑셀문서에 모두 모아서 즉시 다운로드 한다.				&#13;
  ///  firstSheet.Down2ExcelBuffer(false); 				&#13;
  ///  DirectDown2Excel 로 여러개의 시트를 다운로드 하는 경우				&#13;
  ///  // 시트에서 Down2ExcelBuffer 통해 DirectDown2Excel 호출				&#13;
  ///  firstSheet.Down2ExcelBuffer(true);				&#13;
  ///  firstSheet.DirectDown2Excel({URL:../jsp/fp.jsp,FileName:IBLeaders.xls});				&#13;
  ///  secondSheet.DirectDown2Excel({URL:../jsp/fp.jsp,FileName:IBLeaders.xls, SheetDesign:1});				&#13;
  ///  firstSheet.Down2ExcelBuffer(false);				&#13;
  ///  // 데이터 생성 파일 (fp.jsp)				&#13;
  ///  request.setAttribute(SHEETDATA, li);				&#13;
  ///  request.setAttribute(SHEETDATA1, li2);				&#13;
  ///  // PDF 파일로 내려 받기				&#13;
  ///  mySheet.Down2Pdf();         				&#13;
  ///  // 다운로드할 파일명을 text로 정의하여다운로드 받는다.				&#13;
  ///  mySheet.Down2Pdf({FileName:'text' });				&#13;
  ///  // 다운로드할 컬럼을 지정하여 myPDF.pdf로 다운받는다.				&#13;
  ///  mySheet.Down2Pdf({FileName:myPDF, DownCols:7|8|9|4|5|6|10});				&#13;
  ///  // PDF 다운로드 설정 경로를 확인한다.				&#13;
  ///  var url = mySheet.GetDown2PdfUrl();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDown2PdfUrl = function(Url)		{
	  /// <summary>&#13;
	  ///  PDF 다운로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  // PDF 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2PdfUrl(/jsp/Down2Pdf.jsp);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       설정할 서버 페이지 Url&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.Down2Text = function(parameters)			{
	  /// <summary>&#13;
	  ///  조회된 데이터가 있는 경우 IBSheet의 내용을 텍스트 파일로 변환하여 다운로드 한다&#13;
	  /// Example : 
  ///  // PDF 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2PdfUrl(/jsp/Down2Pdf.jsp);				&#13;
  ///  // 텍스트 파일로 내려 받기				&#13;
  ///  mySheet.Down2Text();         				&#13;
  ///  // 다운로드할 파일명을 text로 정의하여다운로드 받는다.				&#13;
  ///  mySheet.Down2Text({FileName:'text' });				&#13;
  ///  // 콤보는 코드로 받고, 헤더와 합계는 제외하고 컬럼은 왼쪽에서 3개의 컬럼만 다운로드 한다.				&#13;
  ///  mySheet.Down2Text({DownCombo:'CODE', DownRows:'', DownCols:'0|1|2', DownHeader:0, DownSum:0});				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='FileName' type='String' >&#13;
	 ///       저장할 파일 명&#13;
	 /// </param>&#13;
	 /// <param name='RowDelim' type='String' >&#13;
	 ///       행 자료 사이에 표시될 레코드 구분자&#13;
	 /// </param>&#13;
	 /// <param name='ColDelim' type='String' >&#13;
	 ///       셀 자료 사이에 표시될 컬럼 구분자&#13;
	 /// </param>&#13;
	 /// <param name='DownRows' type='String' >&#13;
	 ///       다운로드 받을 행들을 | 로 연결.&#13;
	 /// </param>&#13;
	 /// <param name='DownCols' type='String' >&#13;
	 ///       다운로드 받을 열들을 | 로 연결.&#13;
	 /// </param>&#13;
	 /// <param name='DownHeader' type='bool' >&#13;
	 ///       헤더의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownSum' type='bool' >&#13;
	 ///       합계의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownCombo' type='String' >&#13;
	 ///       콤보의 TEXT / CODE 형태의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParam' type='String' >&#13;
	 ///       서버로 전달해야 하는 내용이 있는 경우 Get 방식의  QueryString으로 연결하여 설정Default="&#13;
	 /// </param>&#13;
	 /// <param name='DownTreeHide' type='bool' >&#13;
	 ///       트리의 접혀진 행 다운 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDown2TextUrl = function()		{
	  /// <summary>&#13;
	  ///  텍스트 다운로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  // PDF 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2PdfUrl(/jsp/Down2Pdf.jsp);				&#13;
  ///  // 텍스트 파일로 내려 받기				&#13;
  ///  mySheet.Down2Text();         				&#13;
  ///  // 다운로드할 파일명을 text로 정의하여다운로드 받는다.				&#13;
  ///  mySheet.Down2Text({FileName:'text' });				&#13;
  ///  // 콤보는 코드로 받고, 헤더와 합계는 제외하고 컬럼은 왼쪽에서 3개의 컬럼만 다운로드 한다.				&#13;
  ///  mySheet.Down2Text({DownCombo:'CODE', DownRows:'', DownCols:'0|1|2', DownHeader:0, DownSum:0});				&#13;
  ///  // 텍스트 다운로드 설정 경로를 확인한다.				&#13;
  ///  var url = mySheet.GetDown2TextUrl();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDown2TextUrl = function(Url)		{
	  /// <summary>&#13;
	  ///  텍스트 다운로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  // 텍스트 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2TextUrl(/jsp/Down2Text.jsp);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       설정할 서버 페이지 Url&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDownloadingImage = function()		{
	  /// <summary>&#13;
	  ///  파일 다운로드 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 텍스트 다운로드 경로를 설정한다.				&#13;
  ///  mySheet.SetDown2TextUrl(/jsp/Down2Text.jsp);				&#13;
  ///  //현재 설정되어있는 다운로드 중 대기 이미지 경로를 확인한다.				&#13;
  ///  alert(mySheet.GetDownloadingImage());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDownloadingImage = function(Url)		{
	  /// <summary>&#13;
	  ///  파일 다운로드 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //다운로드 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetDownloadingImage( /sheet/imgDownload.gif);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       이미지 URL&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetDragMode = function()		{
	  /// <summary>&#13;
	  ///  마우스 드래깅시 처리 방법을 설정하거나 확인 한다&#13;
	  /// Example : 
  ///  //다운로드 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetDownloadingImage( /sheet/imgDownload.gif);				&#13;
  ///  //DragMode 설정 값 확인				&#13;
  ///  var mode = mySheet.GetDragMode();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetDragMode = function(Mode)		{
	  /// <summary>&#13;
	  ///  마우스 드래깅시 처리 방법을 설정하거나 확인 한다&#13;
	  /// Example : 
  ///  // DragMode 방식 설정 (마우스 드래깅시 행 드래깅 처리 방식 설정)				&#13;
  ///  mySheet.SetDragMode(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Boolean' >&#13;
	 ///       드래그 처리 설정 값 (Default=0)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEditable = function()		{
	  /// <summary>&#13;
	  ///  전체적인 Edit 허용 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // DragMode 방식 설정 (마우스 드래깅시 행 드래깅 처리 방식 설정)				&#13;
  ///  mySheet.SetDragMode(1);				&#13;
  ///  //Edit 가능 여부 확인				&#13;
  ///  mySheet.GetEditable();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetEditable = function(Edit)		{
	  /// <summary>&#13;
	  ///  전체적인 Edit 허용 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //초기 로드 시 전체 적인 Edit 가능 설정				&#13;
  ///  mySheet.SetEditable(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Edit' type='Boolean' >&#13;
	 ///       설정할 편집 여부 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEditEnterBehavior = function()		{
	  /// <summary>&#13;
	  ///  데이터를 Edit 후 Enter 키를 눌렀을 때 동작을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //초기 로드 시 전체 적인 Edit 가능 설정				&#13;
  ///  mySheet.SetEditable(1);				&#13;
  ///  // Enter키의 동작을 확인한다.				&#13;
  ///  mySheet.GetEditEnterBehavior( );				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetEditEnterBehavior = function(Mode)		{
	  /// <summary>&#13;
	  ///  데이터를 Edit 후 Enter 키를 눌렀을 때 동작을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // Edit 후 Enter를 누르면 무조건 아래로 이동하게 한다.				&#13;
  ///  mySheet.SetEditEnterBehavior( down);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='String ' >&#13;
	 ///       편집상태에서 Enter key 입력시 설정할 속성 값. Default=“tab”&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEditableColorDiff = function()		{
	  /// <summary>&#13;
	  ///  편집이 불가능한 셀을 색상으로 구분하여 표시할지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // Edit 후 Enter를 누르면 무조건 아래로 이동하게 한다.				&#13;
  ///  mySheet.SetEditEnterBehavior( down);				&#13;
  ///  //편집 불가능한 셀의 표시방법 확인				&#13;
  ///  mySheet.GetEditableColorDiff ();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetEditableColorDiff = function(Mode)		{
	  /// <summary>&#13;
	  ///  편집이 불가능한 셀을 색상으로 구분하여 표시할지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //편집 불가능한 셀을 구분하지 않음				&#13;
  ///  mySheet.SetEditableColorDiff (0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Integer' >&#13;
	 ///       설정 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEditArrowBehavior = function()		{
	  /// <summary>&#13;
	  ///  편집모드시 화살표키(상,하,좌,우)에 대한 셀의 포커스 이동 동작을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //편집 불가능한 셀을 구분하지 않음				&#13;
  ///  mySheet.SetEditableColorDiff (0);				&#13;
  ///  // 설정값 확인				&#13;
  ///  mySheet.GetEditArrowBehavior();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetEditArrowBehavior = function(behavior)		{
	  /// <summary>&#13;
	  ///  편집모드시 화살표키(상,하,좌,우)에 대한 셀의 포커스 이동 동작을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 편집모드인 상태에서 화살표키(상,하,좌,우)를 눌렀을때 상하,좌우셀로 포커스이동가능				&#13;
  ///  mySheet.SetEditArrowBehavior(3);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='behavior' type='Integer' >&#13;
	 ///       설정할 동작 값 (Default=1)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEditTabBehavior = function()		{
	  /// <summary>&#13;
	  ///  데이터를 Edit 후 Tab 키를 눌렀을 때 동작을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 편집모드인 상태에서 화살표키(상,하,좌,우)를 눌렀을때 상하,좌우셀로 포커스이동가능				&#13;
  ///  mySheet.SetEditArrowBehavior(3);				&#13;
  ///  // Tab키의 동작을 확인한다.				&#13;
  ///  mySheet.GetEditTabBehavior();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetEditTabBehavior = function(Mode)		{
	  /// <summary>&#13;
	  ///  데이터를 Edit 후 Tab 키를 눌렀을 때 동작을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // Edit 후 Tab을 누르면 무조건 다음 셀로 이동하게 한다.				&#13;
  ///  mySheet.SetEditTabBehavior(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Number' >&#13;
	 ///       편집상태에서 Tab key 입력시 설정할 속성 값. Default=“0”&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEllipsis = function()		{
	  /// <summary>&#13;
	  ///  말줄임 표시 기능을 사용할 것인지 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // Edit 후 Tab을 누르면 무조건 다음 셀로 이동하게 한다.				&#13;
  ///  mySheet.SetEditTabBehavior(1);				&#13;
  ///  // 설정값 확인 				&#13;
  ///  mySheet.GetEllipsis();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetEllipsis = function(Flag)		{
	  /// <summary>&#13;
	  ///  말줄임 표시 기능을 사용할 것인지 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 말줄임 기능 사용하기				&#13;
  ///  mySheet.SetEllipsis(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Flag' type='Boolean ' >&#13;
	 ///       말줄임 표시기능 사용여부,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEnable = function()		{
	  /// <summary>&#13;
	  ///  이 속성값을 0로 설정하면 마우스나 키보드를 사용한 User Interface 기능은 모두 사용 불가능하고, 기타 제품이 제공하는 Method나 Property는 코딩으로 호출되므로 사용할수 있다&#13;
	  /// Example : 
  ///  // 말줄임 기능 사용하기				&#13;
  ///  mySheet.SetEllipsis(1);				&#13;
  ///  //User Interface 사용가능 여부 값을 확인한다.				&#13;
  ///  mySheet.GetEnable();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetEnable = function(Enable)		{
	  /// <summary>&#13;
	  ///  이 속성값을 0로 설정하면 마우스나 키보드를 사용한 User Interface 기능은 모두 사용 불가능하고, 기타 제품이 제공하는 Method나 Property는 코딩으로 호출되므로 사용할수 있다&#13;
	  /// Example : 
  ///  //사용 불가능 상태로 변경한다.				&#13;
  ///  mySheet.SetEnable(0);				&#13;
  ///  //사용 가능 상태로 변경한다.				&#13;
  ///  mySheet.SetEnable(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Enable' type='Boolean ' >&#13;
	 ///       User Interface 사용 가능 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEnterBehavior = function()		{
	  /// <summary>&#13;
	  ///  셀에서 포커스를 두고 TAB키를 누르면 옆셀로 포커스가 이동하고, Enter 키를 누르면 Edit를 시작한다&#13;
	  /// Example : 
  ///  //사용 불가능 상태로 변경한다.				&#13;
  ///  mySheet.SetEnable(0);				&#13;
  ///  //사용 가능 상태로 변경한다.				&#13;
  ///  mySheet.SetEnable(1);				&#13;
  ///  //설정을 확인하다.				&#13;
  ///  mySheet.GetEnterBehavior();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetEnterBehavior = function(Mode)		{
	  /// <summary>&#13;
	  ///  셀에서 포커스를 두고 TAB키를 누르면 옆셀로 포커스가 이동하고, Enter 키를 누르면 Edit를 시작한다&#13;
	  /// Example : 
  ///  //Enter를 누르면 무조건 옆으로 이동하게 한다. 				&#13;
  ///  mySheet.SetEnterBehavior(“tab”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='String ' >&#13;
	 ///       Enter key 입력시 설정할 속성 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetEtcData = function(KeyName)		{
	  /// <summary>&#13;
	  ///  데이터 정보 이외의 정보를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //Enter를 누르면 무조건 옆으로 이동하게 한다. 				&#13;
  ///  mySheet.SetEnterBehavior(“tab”);				&#13;
  ///  // XML을 통해서 조회된 기타 정보를 TextBox에 설정한다.				&#13;
  ///  document.form1.txtAge.value = mySheet.GetEtcData(age) 				&#13;
  ///  // 저장 처리 완료 후 기타 정보를 이용하여 페이지를 이동한다.				&#13;
  ///  mySheet.DoSave(“save.html”);				&#13;
  ///  location.href = /site/showmaster.html?keyinfo= + mySheet.GetEtcData(“전표번호”)				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='KeyName' type='String' >&#13;
	 ///       기타정보 키 이름&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetEtcData = function(KeyName, Value)		{
	  /// <summary>&#13;
	  ///  데이터 정보 이외의 정보를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 기타 정보의 값을 변경한다.				&#13;
  ///  mySheet.SetEtcData(age, 40);				&#13;
  ///  // 새로운 기타정보를 생성한다.				&#13;
  ///  mySheet.SetEtcData(Pay, 2000000); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='KeyName' type='String' >&#13;
	 ///       기타정보 키 이름&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='String' >&#13;
	 ///       기타정보 키 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.EtcDataString = function(UrlEncode)			{
	  /// <summary>&#13;
	  ///  EtcData 객체에 설정된 키와 값을 모두 조합하여 키이름1=키값1&키이름2=키값2와 같은 QueryString 형태로 반환 한다&#13;
	  /// Example : 
  ///  // 기타 정보의 값을 변경한다.				&#13;
  ///  mySheet.SetEtcData(age, 40);				&#13;
  ///  // 새로운 기타정보를 생성한다.				&#13;
  ///  mySheet.SetEtcData(Pay, 2000000); 				&#13;
  ///  // EtcData 영역의 값을 문자열로 받는다.				&#13;
  ///  var param = mySheet.EtcDataString();				&#13;
  ///  //저장시 인자로 넘긴다.				&#13;
  ///  mySheet.DoSave(Save.jsp, Param);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='UrlEncode' type='Boolean' >&#13;
	 ///       인코딩 처리 여부 (Default = 0)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetExtendLastCol = function()		{
	  /// <summary>&#13;
	  ///  마지막 컬럼의 너비를 전체 너비에 맞게 자동으로 맞출것인지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 기타 정보의 값을 변경한다.				&#13;
  ///  mySheet.SetEtcData(age, 40);				&#13;
  ///  // 새로운 기타정보를 생성한다.				&#13;
  ///  mySheet.SetEtcData(Pay, 2000000); 				&#13;
  ///  // EtcData 영역의 값을 문자열로 받는다.				&#13;
  ///  var param = mySheet.EtcDataString();				&#13;
  ///  //저장시 인자로 넘긴다.				&#13;
  ///  mySheet.DoSave(Save.jsp, Param);				&#13;
  ///  //설정 여부를 확인한다.				&#13;
  ///  mySheet.GetExtendLastCol()				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetExtendLastCol = function(Extend)		{
	  /// <summary>&#13;
	  ///  마지막 컬럼의 너비를 전체 너비에 맞게 자동으로 맞출것인지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Extend' type='Boolean' >&#13;
	 ///       마지막 컬럼 너비 확장 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.FilteredRowCount = function()			{
	  /// <summary>&#13;
	  ///  필터행이 있는 경우 필터가 적용되어 있으면 필터링 된 행의 갯수(출력된 행)를 반환하며 필터가 적용되어 있지 않으면 전체 행 수를 반환한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.FindCheckedRow = function(Col)			{
	  /// <summary>&#13;
	  ///  특정 컬럼을 기준으로 체크된 행번호를 |로 연결하여 반환한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       특정 컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.FindStatusRow = function(sStatus)			{
	  /// <summary>&#13;
	  ///  트랜잭션 상태에 해당하는 행번호를 ;로 조합하여 반환한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;
  ///  // 수정, 삭제인 행을 알아오기				&#13;
  ///  //인자-&amp;gt;U|D, 결과-&amp;gt;1;3;4;5;6				&#13;
  ///  var sRow = mySheet.FindStatusRow(U|D);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrow = sRow.split(;);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='sStatus' type='String' >&#13;
	 ///       찾고자 하는 트랜잭션 상태 코드를 |로 연결한 문자열&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.FindSubSumRow = function(StdCol)			{
	  /// <summary>&#13;
	  ///  ShowSubSum 함수를 이용하여 표시된 소계의 행 번호를 |로 연결하여 문자열로 반환한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;
  ///  // 수정, 삭제인 행을 알아오기				&#13;
  ///  //인자-&amp;gt;U|D, 결과-&amp;gt;1;3;4;5;6				&#13;
  ///  var sRow = mySheet.FindStatusRow(U|D);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrow = sRow.split(;);				&#13;
  ///  //표시된 모든 소계의 행 번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow();				&#13;
  ///  //1컬럼으로 기준으로 표시된 소계 행의 행번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='StdCol' type='Long/String' >&#13;
	 ///       소계를 표시한 기준 컬럼의 컬럼Index 또는 SaveName. Default="(전체컬럼)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.FindSumRow = function()			{
	  /// <summary>&#13;
	  ///  합계행의 인덱스를 확인한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;
  ///  // 수정, 삭제인 행을 알아오기				&#13;
  ///  //인자-&amp;gt;U|D, 결과-&amp;gt;1;3;4;5;6				&#13;
  ///  var sRow = mySheet.FindStatusRow(U|D);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrow = sRow.split(;);				&#13;
  ///  //표시된 모든 소계의 행 번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow();				&#13;
  ///  //1컬럼으로 기준으로 표시된 소계 행의 행번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow(1);				&#13;
  ///  //합계행의 행 번호를 가져온다.				&#13;
  ///  var sumRow = mySheet.FindSumRow();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.FindText = function(Col,SearchText,StartRow,FullMatch, CaseSensitive)			{
	  /// <summary>&#13;
	  ///  컬럼내에 특정 텍스트를 찾아서 행번호를 반환한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;
  ///  // 수정, 삭제인 행을 알아오기				&#13;
  ///  //인자-&amp;gt;U|D, 결과-&amp;gt;1;3;4;5;6				&#13;
  ///  var sRow = mySheet.FindStatusRow(U|D);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrow = sRow.split(;);				&#13;
  ///  //표시된 모든 소계의 행 번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow();				&#13;
  ///  //1컬럼으로 기준으로 표시된 소계 행의 행번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow(1);				&#13;
  ///  //합계행의 행 번호를 가져온다.				&#13;
  ///  var sumRow = mySheet.FindSumRow();				&#13;
  ///  // 2컬럼내에 ‘한국'으로 시작하는 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0, 0, 0);				&#13;
  ///  //전체 글자가 한국인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0);				&#13;
  ///  //뒤에 글자가 은행인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은행, 0, 1);				&#13;
  ///  //글자 중에 은이라는 글자가 들어가는 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은, 0, 2);				&#13;
  ///  //대소문자 구분하지 않고 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, Bank, 0, 2, 0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       찾고자 하는 컬럼의 Index&#13;
	 /// </param>&#13;
	 /// <param name='SearchText' type='String' >&#13;
	 ///       찾을 문자열&#13;
	 /// </param>&#13;
	 /// <param name='StartRow' type='Number' >&#13;
	 ///       시작 행의 Index, Default=첫행&#13;
	 /// </param>&#13;
	 /// <param name='FullMatch' type='Number' >&#13;
	 ///       글자 동일 종류, Default= -1&#13;
	 /// </param>&#13;
	 /// <param name='CaseSensitive' type='Boolean' >&#13;
	 ///       대소문자 구분 여부, Default=1&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.FitColWidth = function(Width)			{
	  /// <summary>&#13;
	  ///  전체 넓이를 기준으로 모든 컬럼의 Width를 재조정하여 수평 스크롤이 생기지 않도록 한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;
  ///  // 수정, 삭제인 행을 알아오기				&#13;
  ///  //인자-&amp;gt;U|D, 결과-&amp;gt;1;3;4;5;6				&#13;
  ///  var sRow = mySheet.FindStatusRow(U|D);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrow = sRow.split(;);				&#13;
  ///  //표시된 모든 소계의 행 번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow();				&#13;
  ///  //1컬럼으로 기준으로 표시된 소계 행의 행번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow(1);				&#13;
  ///  //합계행의 행 번호를 가져온다.				&#13;
  ///  var sumRow = mySheet.FindSumRow();				&#13;
  ///  // 2컬럼내에 ‘한국'으로 시작하는 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0, 0, 0);				&#13;
  ///  //전체 글자가 한국인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0);				&#13;
  ///  //뒤에 글자가 은행인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은행, 0, 1);				&#13;
  ///  //글자 중에 은이라는 글자가 들어가는 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은, 0, 2);				&#13;
  ///  //대소문자 구분하지 않고 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, Bank, 0, 2, 0);				&#13;
  ///  // 컬럼들의 너비 비율을 유지하며 전체적으로 너비 재조정하기				&#13;
  ///  mySheet.FitColWidth();				&#13;
  ///  // % 단위로 재설정하기				&#13;
  ///  mySheet.FitColWidth(10|20|40|30);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Width' type='String' >&#13;
	 ///       각 컬럼의 %단위 너비의 조합,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.FitSize = function(RowHeight, ColumnWidth)			{
	  /// <summary>&#13;
	  ///  모든 행의 높이와 모든 컬럼의 너비를 재조정한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;
  ///  // 수정, 삭제인 행을 알아오기				&#13;
  ///  //인자-&amp;gt;U|D, 결과-&amp;gt;1;3;4;5;6				&#13;
  ///  var sRow = mySheet.FindStatusRow(U|D);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrow = sRow.split(;);				&#13;
  ///  //표시된 모든 소계의 행 번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow();				&#13;
  ///  //1컬럼으로 기준으로 표시된 소계 행의 행번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow(1);				&#13;
  ///  //합계행의 행 번호를 가져온다.				&#13;
  ///  var sumRow = mySheet.FindSumRow();				&#13;
  ///  // 2컬럼내에 ‘한국'으로 시작하는 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0, 0, 0);				&#13;
  ///  //전체 글자가 한국인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0);				&#13;
  ///  //뒤에 글자가 은행인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은행, 0, 1);				&#13;
  ///  //글자 중에 은이라는 글자가 들어가는 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은, 0, 2);				&#13;
  ///  //대소문자 구분하지 않고 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, Bank, 0, 2, 0);				&#13;
  ///  // 컬럼들의 너비 비율을 유지하며 전체적으로 너비 재조정하기				&#13;
  ///  mySheet.FitColWidth();				&#13;
  ///  // % 단위로 재설정하기				&#13;
  ///  mySheet.FitColWidth(10|20|40|30);				&#13;
  ///  //행 높이만 재조정하기				&#13;
  ///  mySheet.FitSize(1, 0);				&#13;
  ///  //컬럼 너비만 재조정하기				&#13;
  ///  mySheet.FitSize(0, 1);				&#13;
  ///  //모두 재조정하기				&#13;
  ///  mySheet.FitSize(1, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='RowHeight' type='Boolean' >&#13;
	 ///       행 높이 변경 여부&#13;
	 /// </param>&#13;
	 /// <param name='ColumnWidth' type='Boolean' >&#13;
	 ///       컬럼 너비 변경 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.FitSizeCol = function(Col)			{
	  /// <summary>&#13;
	  ///  대상 컬럼의 너비를 컬럼 내의 가장 넓은 글자의 너비에 맞게 재조정한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;
  ///  // 수정, 삭제인 행을 알아오기				&#13;
  ///  //인자-&amp;gt;U|D, 결과-&amp;gt;1;3;4;5;6				&#13;
  ///  var sRow = mySheet.FindStatusRow(U|D);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrow = sRow.split(;);				&#13;
  ///  //표시된 모든 소계의 행 번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow();				&#13;
  ///  //1컬럼으로 기준으로 표시된 소계 행의 행번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow(1);				&#13;
  ///  //합계행의 행 번호를 가져온다.				&#13;
  ///  var sumRow = mySheet.FindSumRow();				&#13;
  ///  // 2컬럼내에 ‘한국'으로 시작하는 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0, 0, 0);				&#13;
  ///  //전체 글자가 한국인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0);				&#13;
  ///  //뒤에 글자가 은행인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은행, 0, 1);				&#13;
  ///  //글자 중에 은이라는 글자가 들어가는 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은, 0, 2);				&#13;
  ///  //대소문자 구분하지 않고 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, Bank, 0, 2, 0);				&#13;
  ///  // 컬럼들의 너비 비율을 유지하며 전체적으로 너비 재조정하기				&#13;
  ///  mySheet.FitColWidth();				&#13;
  ///  // % 단위로 재설정하기				&#13;
  ///  mySheet.FitColWidth(10|20|40|30);				&#13;
  ///  //행 높이만 재조정하기				&#13;
  ///  mySheet.FitSize(1, 0);				&#13;
  ///  //컬럼 너비만 재조정하기				&#13;
  ///  mySheet.FitSize(0, 1);				&#13;
  ///  //모두 재조정하기				&#13;
  ///  mySheet.FitSize(1, 1);				&#13;
  ///  //SaveName 이 sTarget인 컬럼에 대한 처리				&#13;
  ///  mySheet.FitSizeCol(sTarget);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number/ String' >&#13;
	 ///       대상 컬럼의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetFocusAfterProcess = function()		{
	  /// <summary>&#13;
	  ///  조회 완료 후 포커스를 데이터 행으로 설정할지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //마지막 컬럼을 전체 너비에 맞춘다..				&#13;
  ///  mySheet.SetExtendLastCol(1)				&#13;
  ///  //필터링 된 행 개수를 가져온다.				&#13;
  ///  alert(mySheet.FilteredRowCount());				&#13;
  ///  //체크된 행번호를 가져온다.				&#13;
  ///  //인자-&amp;gt;1, 결과-&amp;gt;1|3|4|5|6				&#13;
  ///  var sRow = mySheet.FindCheckedRow(1);				&#13;
  ///  var sRow = mySheet.FindCheckedRow(pass_yn);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrRow = sRow.split(|);				&#13;
  ///  for(idx=0; idx&amp;lt;arrRow.length; idx++){ alert(arrRow[idx]); }				&#13;
  ///  // 수정, 삭제인 행을 알아오기				&#13;
  ///  //인자-&amp;gt;U|D, 결과-&amp;gt;1;3;4;5;6				&#13;
  ///  var sRow = mySheet.FindStatusRow(U|D);				&#13;
  ///  //받은 결과를 배열로 생성한다.				&#13;
  ///  var arrow = sRow.split(;);				&#13;
  ///  //표시된 모든 소계의 행 번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow();				&#13;
  ///  //1컬럼으로 기준으로 표시된 소계 행의 행번호를 가져온다.				&#13;
  ///  var sRow = mySheet.FindSubSumRow(1);				&#13;
  ///  //합계행의 행 번호를 가져온다.				&#13;
  ///  var sumRow = mySheet.FindSumRow();				&#13;
  ///  // 2컬럼내에 ‘한국'으로 시작하는 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0, 0, 0);				&#13;
  ///  //전체 글자가 한국인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 한국, 0);				&#13;
  ///  //뒤에 글자가 은행인 데이터의 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은행, 0, 1);				&#13;
  ///  //글자 중에 은이라는 글자가 들어가는 행 위치 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, 은, 0, 2);				&#13;
  ///  //대소문자 구분하지 않고 찾기				&#13;
  ///  var Row1 = mySheet.FindText(2, Bank, 0, 2, 0);				&#13;
  ///  // 컬럼들의 너비 비율을 유지하며 전체적으로 너비 재조정하기				&#13;
  ///  mySheet.FitColWidth();				&#13;
  ///  // % 단위로 재설정하기				&#13;
  ///  mySheet.FitColWidth(10|20|40|30);				&#13;
  ///  //행 높이만 재조정하기				&#13;
  ///  mySheet.FitSize(1, 0);				&#13;
  ///  //컬럼 너비만 재조정하기				&#13;
  ///  mySheet.FitSize(0, 1);				&#13;
  ///  //모두 재조정하기				&#13;
  ///  mySheet.FitSize(1, 1);				&#13;
  ///  //SaveName 이 sTarget인 컬럼에 대한 처리				&#13;
  ///  mySheet.FitSizeCol(sTarget);				&#13;
  ///  //조회 후 포커스 여부				&#13;
  ///  mySheet.GetFocusAfterProcess();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetFocusAfterProcess = function(mode)		{
	  /// <summary>&#13;
	  ///  조회 완료 후 포커스를 데이터 행으로 설정할지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //조회 후 포커스를 두지 않음 				&#13;
  ///  mySheet.SetFocusAfterProcess(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='mode' type='Boolean' >&#13;
	 ///       포커스 설정 여부 (Default=1)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetFocusAfterRowTransaction = function()		{
	  /// <summary>&#13;
	  ///  행 추가, 삭제, 이동, 복사 후 포커스를 이동 할지 여부를 확인 하거나 설정 한다&#13;
	  /// Example : 
  ///  //조회 후 포커스를 두지 않음 				&#13;
  ///  mySheet.SetFocusAfterProcess(0);				&#13;
  ///  // 포커스를 이동 할지 여부를 확인 				&#13;
  ///  mySheet.GetFocusAfterRowTransaction(); 				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetFocusAfterRowTransaction = function(mode)		{
	  /// <summary>&#13;
	  ///  행 추가, 삭제, 이동, 복사 후 포커스를 이동 할지 여부를 확인 하거나 설정 한다&#13;
	  /// Example : 
  ///  // 현재 포커스행 하위로 10개 행을 추가후 맨 마지막 추가된 행에 포커스 설정				&#13;
  ///  mySheet.SetFocusAfterRowTransaction(0); 				&#13;
  ///  var new Row = null;				&#13;
  ///  for (var i = 0; I &amp;lt; 10; i++) {				&#13;
  ///    newRow = mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.SetSelectRow(newRow);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='mode' type='Boolean' >&#13;
	 ///       포커스 설정 여부 (Default=1)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetFocusEditMode = function()		{
	  /// <summary>&#13;
	  ///  셀에 포커스가 들어갔을 때 Edit 가능한 셀은 기본적으로 단순 포커스 상태로 둘것인지 Edit 상태로 둘것인지 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 현재 포커스행 하위로 10개 행을 추가후 맨 마지막 추가된 행에 포커스 설정				&#13;
  ///  mySheet.SetFocusAfterRowTransaction(0); 				&#13;
  ///  var new Row = null;				&#13;
  ///  for (var i = 0; I &amp;lt; 10; i++) {				&#13;
  ///    newRow = mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.SetSelectRow(newRow);				&#13;
  ///  //포커스가 갔을 때 Edit 상태로 표시 할지 여부 확인				&#13;
  ///  mySheet.GetFocusEditMode();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetFocusEditMode = function(Mode)		{
	  /// <summary>&#13;
	  ///  셀에 포커스가 들어갔을 때 Edit 가능한 셀은 기본적으로 단순 포커스 상태로 둘것인지 Edit 상태로 둘것인지 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 포커스가 갔을 때 Edit가 아닌 단순 포커스 상태 유지 				&#13;
  ///  mySheet.SetFocusEditMode(0);				&#13;
  ///  //포커스가 갔을 때 Edit 상태로 표시				&#13;
  ///  mySheet.SetFocusEditMode(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Integer' >&#13;
	 ///       설정 여부 (Default=0)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetFrozenCol = function()		{
	  /// <summary>&#13;
	  ///  좌측 고정컬럼을 동적으로 설정 확인한다&#13;
	  /// Example : 
  ///  // 포커스가 갔을 때 Edit가 아닌 단순 포커스 상태 유지 				&#13;
  ///  mySheet.SetFocusEditMode(0);				&#13;
  ///  //포커스가 갔을 때 Edit 상태로 표시				&#13;
  ///  mySheet.SetFocusEditMode(1);				&#13;
  ///  // 고정컬럼 설정 값을 확인한다.				&#13;
  ///  alert(mySheet.GetFrozenCol());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetFrozenCol = function(Count)		{
	  /// <summary>&#13;
	  ///  좌측 고정컬럼을 동적으로 설정 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정컬럼을 설정한다. 				&#13;
  ///  mySheet.SetFrozenCol(3);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Rows' type='Integer' >&#13;
	 ///       설정할 고정컬럼 개수 (Default=0)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetFrozenRows = function()		{
	  /// <summary>&#13;
	  ///  고정행 출력 여부 및 출력 옵션을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정컬럼을 설정한다. 				&#13;
  ///  mySheet.SetFrozenCol(3);				&#13;
  ///  // 고정행 설정 값을 확인한다.				&#13;
  ///  alert(mySheet.GetFrozenRows());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetFrozenRows = function(Rows)		{
	  /// <summary>&#13;
	  ///  고정행 출력 여부 및 출력 옵션을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Rows' type='Integer' >&#13;
	 ///       설정할 고정행 개수 (Default=0)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCellProperty = function(Row, Col, PropName)			{
	  /// <summary>&#13;
	  ///  InitColumns 또는 InitCellProperty 에서 설정한 속성의 정보를 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       특정 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       특정 셀의 컬럼 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='PropName' type='String' >&#13;
	 ///       확인하고자 하는 속성명&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetChildNodeCount = function(Row)			{
	  /// <summary>&#13;
	  ///  트리구조에서 특정 행의 하위(다음레벨) 노드의 개수를 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       특정 행의 Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetChildRows = function(Row, MaxLevel)			{
	  /// <summary>&#13;
	  ///  트리구조에서 특정 행의 자식행들의 Index를 |로 조합하여 반환한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='MaxLevel' type='Integer' >&#13;
	 ///       확인할 자식행의 제한 레벨&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetComboInfo = function(Row,Col,Flag)			{
	  /// <summary>&#13;
	  ///  특정 셀의 콤보 정보를 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       특정 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       틀정 셀의 컬럼 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Flag' type='String' >&#13;
	 ///       Text, Code 선택&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetCurrentPage = function()			{
	  /// <summary>&#13;
	  ///  조회 방식이 smGeneral 이 아닌 경우 전체데이터를 기준으로 현재 화면 위에 올려진 부분이 몇번째 페이지인지를 리턴한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetDataRows = function()			{
	  /// <summary>&#13;
	  ///  단위 데이터 행의 설정 개수를 확인 한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetEditText = function()			{
	  /// <summary>&#13;
	  ///  Edit 중인 글자를 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetFilterParam = function(AllFilter, UrlEncode)			{
	  /// <summary>&#13;
	  ///  SearchMode:3 은, 디비에서 부분 데이터를 가져와 조회하는 것이므로 필터링 기능 사용이 불가능하다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='AllFilter' type='Boolean' >&#13;
	 ///       전체 필터링 여부, Default =0&#13;
	 /// </param>&#13;
	 /// <param name='UrlEncode' type='Boolean' >&#13;
	 ///       UrlEncode 여부, Default= 1&#13;
	 /// </param>&#13;
	 /// <param name='0' type='사용 안 함' >&#13;
	 ///       같다&#13;
	 /// </param>&#13;
	 /// <param name='2' type='같지 않다' >&#13;
	 ///       작은&#13;
	 /// </param>&#13;
	 /// <param name='4' type='작거나 같은' >&#13;
	 ///       큰&#13;
	 /// </param>&#13;
	 /// <param name='6' type='크거나 같은' >&#13;
	 ///       단어로 시작함&#13;
	 /// </param>&#13;
	 /// <param name='8' type='단어로 시작하지 않음' >&#13;
	 ///       단어로 끝남&#13;
	 /// </param>&#13;
	 /// <param name='10' type='단어로 끝나지 않음' >&#13;
	 ///       포함함&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetFirstChildRow = function(Row)			{
	  /// <summary>&#13;
	  ///  트리구조에서 특정 행의 첫번째 자식 행의 Index를 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetGroupCol = function()			{
	  /// <summary>&#13;
	  ///  현재 설정되어있는 그룹 기준 컬럼을 SaveName확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetLastChildRow = function(Row)			{
	  /// <summary>&#13;
	  ///  트리구조에서 특정 행의 마지막 자식 행의 Index를 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetMergedEndCell = function(Row, Col)			{
	  /// <summary>&#13;
	  ///  전체 머지된 셀중 머지 마지막 셀의 Row와 Col 정보를 Row, Col 형태의 String으로 리턴한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       대상이 되는 컬럼 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetMergedStartCell = function(Row, Col)			{
	  /// <summary>&#13;
	  ///  전체 머지된 셀중 머지 시작 셀의 Row와 Col 정보를 Row, Col 형태의 String으로 리턴한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       대상이 되는 컬럼 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetNextSiblingRow = function(Row)			{
	  /// <summary>&#13;
	  ///  트리구조에서 특정 행에 대한 동일 부모, 동일 레벨상의 다음 행의 Index를 확인 한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetParentRow = function(Row)			{
	  /// <summary>&#13;
	  ///  트리구조에서 특정 행의 부모 행의 Index를 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetPrevSiblingRow = function(Row)			{
	  /// <summary>&#13;
	  ///  트리구조에서 특정 행에 대한 동일 부모, 동일 레벨상의 이전 행의 Index를 확인 한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSaveData = function(PageUrl, SaveString, Param, Opt)			{
	  /// <summary>&#13;
	  ///  저장 페이지를 호출하여 저장 처리를 완료한 후 생성된 결과를 문자열로 반환한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='PageUrl' type='String' >&#13;
	 ///       저장 처리할 페이지 URL&#13;
	 /// </param>&#13;
	 /// <param name='SaveString' type='String' >&#13;
	 ///       저장할 Query String, Default="&#13;
	 /// </param>&#13;
	 /// <param name='Param' type='String' >&#13;
	 ///       저장 조건 Query String, Default="&#13;
	 /// </param>&#13;
	 /// <param name='Opt.ReqHeader' type='Object' >&#13;
	 ///       요청헤더 설정 값 객체,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSaveJson = function(Option)			{
	  /// <summary>&#13;
	  ///  저장 대상의 데이터를 Json 객체로 반환한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Option.AllSave' type='Boolean' >&#13;
	 ///       전체 저장 여부, (Default =0)&#13;
	 /// </param>&#13;
	 /// <param name='Option.StdCol' type='Number / String' >&#13;
	 ///       대상이 되는 기준 컬럼의 Index 또는 SaveName, (Default =상태 컬럼)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSaveString = function(AllSave, UrlEncode, Col, Prefix ,Mode, Delim)			{
	  /// <summary>&#13;
	  ///  저장 시 사용되는 데이터의 Query String을 문자열로 반환한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='AllSave' type='Boolean' >&#13;
	 ///       전체 저장 여부, Default=0&#13;
	 /// </param>&#13;
	 /// <param name='UrlEncode' type='Boolean' >&#13;
	 ///       UrlEncode 여부, Default=1&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       대상이 되는 기준 컬럼 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Prefix' type='String' >&#13;
	 ///       저장시 SaveName 앞에 붙이고자 하는 문자열, Default="&#13;
	 /// </param>&#13;
	 /// <param name='Mode' type='Integer' >&#13;
	 ///       Query String 문자열 조합방법을 설정Mode=1, Mode=2 (Default =1)&#13;
	 /// </param>&#13;
	 /// <param name='Delim' type='String' >&#13;
	 ///       Mode=2일때, 연결될 구분자 설정&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSearchData = function(PageUrl, Param, Opt)			{
	  /// <summary>&#13;
	  ///  조회 페이지를 호출하여 조회 처리를 완료한 후 생성된 조회결과 데이터를 문자열로 반환한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='PageUrl' type='String' >&#13;
	 ///       조회 처리할 페이지 URL&#13;
	 /// </param>&#13;
	 /// <param name='Param' type='String' >&#13;
	 ///       조회 조건 Query String, Default="&#13;
	 /// </param>&#13;
	 /// <param name='Opt.ReqHeader' type='Object' >&#13;
	 ///       요청헤더 설정 값 객체,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSelectionCols = function(DeliChar)			{
	  /// <summary>&#13;
	  ///  사용자가 드레그한 영역의 열을 구분자로 구분하여 반환한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DeliChar' type='String' >&#13;
	 ///       조합구분자, Default=|&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSelectionRows = function(DeliChar)			{
	  /// <summary>&#13;
	  ///  사용자가 드레그를 통해 선택한 영역의 행을 구분자로 구분하여 반환한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DeliChar' type='String' >&#13;
	 ///       조합구분자, Default=|&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSheetHtml = function()			{
	  /// <summary>&#13;
	  ///  현재 시트의 Html 소스를 반환한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;
  ///  // 시트 Html 가져오기				&#13;
  ///  var code = mySheet.GetSheetHtml();				&#13;
  ///  document.getElementById(styleText).value = code.style;				&#13;
  ///  document.getElementById(htmlText).value += code.body; 				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GoToBaseSheet = function()			{
	  /// <summary>&#13;
	  ///  피벗 설정 팝업으로부터 피벗 테이블이 화면에 표시되어 있는 경우 이 기능을 사용하면 해당 피벗 테이블의 원본 시트로 이동 한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;
  ///  // 시트 Html 가져오기				&#13;
  ///  var code = mySheet.GetSheetHtml();				&#13;
  ///  document.getElementById(styleText).value = code.style;				&#13;
  ///  document.getElementById(htmlText).value += code.body; 				&#13;
  ///  // 피벗 테이블의 원본 시트로 이동				&#13;
  ///  mySheet.GoToBaseSheet();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GoToFirstPage = function()			{
	  /// <summary>&#13;
	  ///  페이징 모드로 설정되어 있는 경우 맨 처음 페이지로 이동한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;
  ///  // 시트 Html 가져오기				&#13;
  ///  var code = mySheet.GetSheetHtml();				&#13;
  ///  document.getElementById(styleText).value = code.style;				&#13;
  ///  document.getElementById(htmlText).value += code.body; 				&#13;
  ///  // 피벗 테이블의 원본 시트로 이동				&#13;
  ///  mySheet.GoToBaseSheet();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 처음 페이지로 이동				&#13;
  ///  mySheet.GoToFirstPage();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GoToLastPage = function()			{
	  /// <summary>&#13;
	  ///  페이징 모드로 설정되어 있는 경우 맨 마지막 페이지로 이동한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;
  ///  // 시트 Html 가져오기				&#13;
  ///  var code = mySheet.GetSheetHtml();				&#13;
  ///  document.getElementById(styleText).value = code.style;				&#13;
  ///  document.getElementById(htmlText).value += code.body; 				&#13;
  ///  // 피벗 테이블의 원본 시트로 이동				&#13;
  ///  mySheet.GoToBaseSheet();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 처음 페이지로 이동				&#13;
  ///  mySheet.GoToFirstPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 마지막 페이지로 이동				&#13;
  ///  mySheet.GoToLastPage();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GoToNextPage = function()			{
	  /// <summary>&#13;
	  ///  페이징 모드로 설정되어 있는 경우 다음 페이지로 이동한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;
  ///  // 시트 Html 가져오기				&#13;
  ///  var code = mySheet.GetSheetHtml();				&#13;
  ///  document.getElementById(styleText).value = code.style;				&#13;
  ///  document.getElementById(htmlText).value += code.body; 				&#13;
  ///  // 피벗 테이블의 원본 시트로 이동				&#13;
  ///  mySheet.GoToBaseSheet();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 처음 페이지로 이동				&#13;
  ///  mySheet.GoToFirstPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 마지막 페이지로 이동				&#13;
  ///  mySheet.GoToLastPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 다음 페이지로 이동				&#13;
  ///  mySheet.GoToNextPage();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GoToPageNum = function(index)			{
	  /// <summary>&#13;
	  ///  페이징 모드로 설정되어 있는 경우 인자로 입력한 페이지로 이동한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;
  ///  // 시트 Html 가져오기				&#13;
  ///  var code = mySheet.GetSheetHtml();				&#13;
  ///  document.getElementById(styleText).value = code.style;				&#13;
  ///  document.getElementById(htmlText).value += code.body; 				&#13;
  ///  // 피벗 테이블의 원본 시트로 이동				&#13;
  ///  mySheet.GoToBaseSheet();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 처음 페이지로 이동				&#13;
  ///  mySheet.GoToFirstPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 마지막 페이지로 이동				&#13;
  ///  mySheet.GoToLastPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 다음 페이지로 이동				&#13;
  ///  mySheet.GoToNextPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 5번째 페이지로 이동				&#13;
  ///  mySheet.GoToPageNum(5);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='index' type='Integer' >&#13;
	 ///       이동하고자 하는 Page의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GoToPrevPage = function()			{
	  /// <summary>&#13;
	  ///  페이징 모드로 설정되어 있는 경우 이전 페이지로 이동한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;
  ///  // 시트 Html 가져오기				&#13;
  ///  var code = mySheet.GetSheetHtml();				&#13;
  ///  document.getElementById(styleText).value = code.style;				&#13;
  ///  document.getElementById(htmlText).value += code.body; 				&#13;
  ///  // 피벗 테이블의 원본 시트로 이동				&#13;
  ///  mySheet.GoToBaseSheet();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 처음 페이지로 이동				&#13;
  ///  mySheet.GoToFirstPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 마지막 페이지로 이동				&#13;
  ///  mySheet.GoToLastPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 다음 페이지로 이동				&#13;
  ///  mySheet.GoToNextPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 5번째 페이지로 이동				&#13;
  ///  mySheet.GoToPageNum(5);				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 이전 페이지로 이동				&#13;
  ///  mySheet.GoToPrevPage();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetHeaderActionMenu = function()		{
	  /// <summary>&#13;
	  ///  헤더 컨텍스트 메뉴를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 3개의 고정행을 설정한다. 				&#13;
  ///  mySheet.SetFrozenRows(3);				&#13;
  ///  //데이터 타입을 읽어옴				&#13;
  ///  var iType = mySheet.GetCellProperty(1, 1, Type);				&#13;
  ///  //데이터 SaveName을 읽어옴				&#13;
  ///  var sSaveName = mySheet.GetCellProperty(1, 1, SaveName);				&#13;
  ///  //1번째행의 하위노드 개수				&#13;
  ///  var childCount = mySheet.GetChildNodeCount(1);				&#13;
  ///  // 2번째 행의 모든 자식행 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2);				&#13;
  ///  // 2번째 행의 자식레벨중 3레벨까지만 확인				&#13;
  ///  var childRows = mySheet.GetChildRows(2, 3);				&#13;
  ///  // 2번째 행의 레벨기준으로 하위 +2레벨까지 확인				&#13;
  ///  var myLevel = mySheet.GetRowLevel(2);				&#13;
  ///  var childRows = mySheet.GetChildRows(2, myLevel+2);				&#13;
  ///  //콤보코드와 텍스트를 가져온다.				&#13;
  ///  var sText = mySheet.GetComboInfo(0,2, Text);				&#13;
  ///  var sCode = mySheet.GetComboInfo(0,2, Code);				&#13;
  ///  //각각 배열로 구성한다.				&#13;
  ///  var arrText = sText.split(|);				&#13;
  ///  var arrCode = sCode.split(|);				&#13;
  ///  //2행의 2컬럼의 콤보 코드를 이용하여 콤보텍스트를 가져온다.				&#13;
  ///  for(i=0; i&amp;lt;arrCode.length; i++) {				&#13;
  ///      if(mySheet.GetCellValue(2,2) == arrCode[i]) {				&#13;
  ///          alert(arrText[i]);				&#13;
  ///          break;				&#13;
  ///      }				&#13;
  ///  }				&#13;
  ///  // 현재 페이지 넘버.				&#13;
  ///  var pageNum = mySheet.GetCurrentPage();				&#13;
  ///  // 단위데이터행의 개수를 확인한다.				&#13;
  ///  var dataRows = mySheet.GetDataRows();.				&#13;
  ///  // 편집중인 글자를 확인한다.				&#13;
  ///  function mySheet_OnKeyUp(Row, Col, KeyCode, Shift){				&#13;
  ///  var editTxt= Edit중인 글자 =  + mySheet.GetEditText();				&#13;
  ///  editTxt += 실제글자 =  + mySheet.GetCellValue(Row,Col);				&#13;
  ///  alert(editTxt);				&#13;
  ///  }				&#13;
  ///  //필터행 전체 컬럼을 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(1);				&#13;
  ///  //필터링 된 컬럼들만 Param 형식의 스트링으로 구해오기.				&#13;
  ///  var FilterStr = mySheet.GetFilterParam(0);				&#13;
  ///  // 2번째 행의 첫번째 자식 행을 확인한다.				&#13;
  ///  var firstChild = mySheet.GetFirstChildRow(2);				&#13;
  ///  // 그룹행을 설정한다.				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 현재 설정되어 있는 그룹 기준 컬럼을 확인한다				&#13;
  ///  var Cols = mySheet.GetGroupCol();				&#13;
  ///  // 2번째 행의 마지막 자식 행을 확인한다.				&#13;
  ///  var lastChild = mySheet.GetLastChildRow(2);				&#13;
  ///  var endMergeCell = mySheet.GetMergedEndCell(4,5);				&#13;
  ///  var startMergeCell = mySheet.GetMergedStartCell(4,5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 다음 행을 확인한다.				&#13;
  ///  var next = mySheet.GetNextSiblingRow(6);				&#13;
  ///  // 5번째 행의 부모행을 확인한다.				&#13;
  ///  var parent = mySheet.GetParentRow(5);				&#13;
  ///  // 6번째 행의 동일레벨 상의 이전 행을 확인한다.				&#13;
  ///  var previous = mySheet.GetPrevSiblingRow(6);				&#13;
  ///  //저장 String 가져오기 – 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString();				&#13;
  ///  //필수 입력과 같은 확인이 이루어짐				&#13;
  ///  if (mySheet.IsDataModified &amp;&amp; SaveStr == ") return;				&#13;
  ///  //저장 처리 결과 읽어오기				&#13;
  ///  var rtnData = mySheet.GetSaveData(save.jsp, SaveStr);				&#13;
  ///  //돌아온 결과를 시트에 반영				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //모든 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({AllSave:1});				&#13;
  ///  //저장 대상의 데이터를 객체로 받기 (트랜잭션이 발생한 행) 				&#13;
  ///  var SaveJson = mySheet.GetSaveJson();				&#13;
  ///  // 4번째 컬럼이 Check된 행의 데이터를 객체로 받기				&#13;
  ///  var SaveJson = mySheet.GetSaveJson({StdCol:4});				&#13;
  ///  //DoAllSave 함수 사용과 동일한 저장 String 가져오기				&#13;
  ///  var SaveStr = mySheet.GetSaveString(1);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 트랜잭션이 발생한 것만 저장할 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  //– 4컬럼이 Check된 것만 저장하는 경우				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 4);				&#13;
  ///  //DoSave 함수 사용과 동일한 저장 String 가져오기 				&#13;
  ///  // 돌아오는 값은 pre_AA=1&amp;pre_BB=2&amp;pre_CC=3 형태가 된다.				&#13;
  ///  var SaveStr = mySheet.GetSaveString(0, 1, 1, “pre_”);				&#13;
  ///  //설정할 선택인자 json형식으로 속성 설정하기				&#13;
  ///  mySheet.GetSaveString({AllSave : 1, UrlEncode:0, Mode:2, Delim:$})				&#13;
  ///  see also 				&#13;
  ///  GetSaveJson Method				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData(list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 구분자로 연결하여 선택된 열번 가져오기				&#13;
  ///  var sColStr = mySheet.GetSelectionCols(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sColStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  컬럼이 선택되었음);				&#13;
  ///  }				&#13;
  ///  /// 구분자로 연결하여 선택된 행번 가져오기				&#13;
  ///  var sRowStr = mySheet.GetSelectionRows(/);				&#13;
  ///  //자바 스크립트 배열로 만들기				&#13;
  ///  var arr = sRowStr.split(/);				&#13;
  ///  for (i=0; i&amp;lt;arr.length(); i++) {				&#13;
  ///      alert(arr[i] +  행이 선택되었음);				&#13;
  ///  }				&#13;
  ///  // 시트 Html 가져오기				&#13;
  ///  var code = mySheet.GetSheetHtml();				&#13;
  ///  document.getElementById(styleText).value = code.style;				&#13;
  ///  document.getElementById(htmlText).value += code.body; 				&#13;
  ///  // 피벗 테이블의 원본 시트로 이동				&#13;
  ///  mySheet.GoToBaseSheet();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 처음 페이지로 이동				&#13;
  ///  mySheet.GoToFirstPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 맨 마지막 페이지로 이동				&#13;
  ///  mySheet.GoToLastPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 다음 페이지로 이동				&#13;
  ///  mySheet.GoToNextPage();				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 5번째 페이지로 이동				&#13;
  ///  mySheet.GoToPageNum(5);				&#13;
  ///  // 페이징 모드 설정				&#13;
  ///  var cfg = {SearchMode:1, Page:10};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 이전 페이지로 이동				&#13;
  ///  mySheet.GoToPrevPage();				&#13;
  ///  // 설정된 헤더메뉴 확인				&#13;
  ///  var menu = mySheet.GetHeaderActionMenu();				&#13;
  ///  alert(menu.MenuText); // 설정된 MenuText 확인				&#13;
  ///  alert(menu.MenuCode); // 설정된 MenuCode 확인				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetHeaderActionMenu = function(MenuText, MenuCode)		{
	  /// <summary>&#13;
	  ///  헤더 컨텍스트 메뉴를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // aaa 메뉴 클릭시 필터를 출력하고, bbb 메뉴 클릭시 필터를 숨기는 헤더 메뉴를 설정한다.				&#13;
  ///  mySheet.SetHeaderActionMenu(aaa|*-|bbb, _ibShowFilter||_ibHideFilter);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='MenuText' type='String' >&#13;
	 ///       | 문자로 연결한 메뉴명 문자열&#13;
	 /// </param>&#13;
	 /// <param name='MenuCode' type='String' >&#13;
	 ///       | 문자로 연결한 메뉴코드 문자열. 시트에서 제공하는 고정 코드를 설정하는 경우 제품내에서 해당 기능을 처리한다.&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetHeaderBackColor = function()		{
	  /// <summary>&#13;
	  ///  헤더 행의 바탕색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // aaa 메뉴 클릭시 필터를 출력하고, bbb 메뉴 클릭시 필터를 숨기는 헤더 메뉴를 설정한다.				&#13;
  ///  mySheet.SetHeaderActionMenu(aaa|*-|bbb, _ibShowFilter||_ibHideFilter);				&#13;
  ///  //헤더의 배경색 확인한다.				&#13;
  ///  mySheet.GetHeaderBackColor();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetHeaderBackColor = function(Color)		{
	  /// <summary>&#13;
	  ///  헤더 행의 바탕색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //헤더의 배경색을 빨간색으로 설정한다.				&#13;
  ///  mySheet.SetHeaderBackColor(#FF0000);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       헤더행의 배경 색상&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetHeaderCheck = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  헤더의 전체체크박스 값을 확인 및 설정 한다&#13;
	  /// Example : 
  ///  //헤더의 배경색을 빨간색으로 설정한다.				&#13;
  ///  mySheet.SetHeaderBackColor(#FF0000);				&#13;
  ///  // 헤더의 3번째 컬럼의 전체 체크박스 값을 확인 한다.				&#13;
  ///  var CheckValue = mySheet.GetHeaderCheck(0, 3);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       대상 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetHeaderCheck = function(Row, Col, Value)		{
	  /// <summary>&#13;
	  ///  헤더의 전체체크박스 값을 확인 및 설정 한다&#13;
	  /// Example : 
  ///  // 헤더의 3번째 컬럼의 전체 체크박스 값을 언체크 설정 한다..				&#13;
  ///  mySheet.SetHeaderCheck(0, 3, 0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       대상 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='Boolean' >&#13;
	 ///       체크박스에 설정하고자 하는 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetHeaderFontBold = function()		{
	  /// <summary>&#13;
	  ///  헤더 행의 글자 볼드 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 헤더의 3번째 컬럼의 전체 체크박스 값을 언체크 설정 한다..				&#13;
  ///  mySheet.SetHeaderCheck(0, 3, 0);				&#13;
  ///  //헤더의 글자 Bold 설정 확인한다.				&#13;
  ///  mySheet.GetHeaderFontBold();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetHeaderFontBold = function(Bold)		{
	  /// <summary>&#13;
	  ///  헤더 행의 글자 볼드 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //헤더의 글자를 Bold로 설정한다.				&#13;
  ///  mySheet.SetHeaderFontBold(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Bold' type='Boolean' >&#13;
	 ///       Header행의 Font Bold 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetHeaderFontColor = function()		{
	  /// <summary>&#13;
	  ///  헤더 행의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //헤더의 글자를 Bold로 설정한다.				&#13;
  ///  mySheet.SetHeaderFontBold(1);				&#13;
  ///  //헤더의 글자색을 검은색으로 설정한다.				&#13;
  ///  mySheet.GetHeaderFontColor();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetHeaderFontColor = function(Color)		{
	  /// <summary>&#13;
	  ///  헤더 행의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //헤더의 글자색을 검은색으로 설정한다.				&#13;
  ///  mySheet.SetHeaderFontColor(#000000);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       설정하고자 하는 WebColor&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.HeaderRows = function()			{
	  /// <summary>&#13;
	  ///  헤더행의 개수를 확인한다&#13;
	  /// Example : 
  ///  //헤더의 글자색을 검은색으로 설정한다.				&#13;
  ///  mySheet.SetHeaderFontColor(#000000);				&#13;
  ///  //헤더 행의 개수를 확인한다.				&#13;
  ///  alert(헤더 행의 개수는  + mySheet.HeaderRows() + 개 입니다.);				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetHeaderRowHeight = function()		{
	  /// <summary>&#13;
	  ///  헤더 행의 행높이를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //헤더의 글자색을 검은색으로 설정한다.				&#13;
  ///  mySheet.SetHeaderFontColor(#000000);				&#13;
  ///  //헤더 행의 개수를 확인한다.				&#13;
  ///  alert(헤더 행의 개수는  + mySheet.HeaderRows() + 개 입니다.);				&#13;
  ///  //헤더 행의 높이를 확인				&#13;
  ///  mySheet.GetHeaderRowHeight();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetHeaderRowHeight = function(Height)		{
	  /// <summary>&#13;
	  ///  헤더 행의 행높이를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //헤더 행의 높이를 30 픽셀로 설정.				&#13;
  ///  mySheet.SetHeaderRowHeight(30);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Height' type='Integer' >&#13;
	 ///       설정하고자 하는 픽셀값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.HideFilterRow = function()			{
	  /// <summary>&#13;
	  ///  IBSheet 상단 고정행의 필터행을 삭제한다&#13;
	  /// Example : 
  ///  //헤더 행의 높이를 30 픽셀로 설정.				&#13;
  ///  mySheet.SetHeaderRowHeight(30);				&#13;
  ///  //필터행 삭제하기				&#13;
  ///  mySheet.HideFilterRow();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.HideProcessDlg = function()			{
	  /// <summary>&#13;
	  ///  시트에 표시되어 있는 대기중 이미지를 닫는다&#13;
	  /// Example : 
  ///  //헤더 행의 높이를 30 픽셀로 설정.				&#13;
  ///  mySheet.SetHeaderRowHeight(30);				&#13;
  ///  //필터행 삭제하기				&#13;
  ///  mySheet.HideFilterRow();				&#13;
  ///  // 대기중 이미지 닫기				&#13;
  ///  mySheet.HideProcessDlg();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.HideSubSum = function(StdCol)			{
	  /// <summary>&#13;
	  ///  ShowSubSum 함수를 호출하면 다음 조회시 조회 데이터 사이에 소계행이 삽입된다&#13;
	  /// Example : 
  ///  //헤더 행의 높이를 30 픽셀로 설정.				&#13;
  ///  mySheet.SetHeaderRowHeight(30);				&#13;
  ///  //필터행 삭제하기				&#13;
  ///  mySheet.HideFilterRow();				&#13;
  ///  // 대기중 이미지 닫기				&#13;
  ///  mySheet.HideProcessDlg();				&#13;
  ///  //1컬럼을 중심으로 소계 계산하여 표시하기				&#13;
  ///  var info = [{StdCol:1, SumCols:3|4|5}];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  //표시된 소계 숨기기				&#13;
  ///  mySheet.HideSubSum();				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='StdCol' type='Long/String' >&#13;
	 ///       소계를 표시한 기준 컬럼의 컬럼Index 또는 SaveName. Default="(전체컬럼)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetHighlightAfterSort = function()		{
	  /// <summary>&#13;
	  ///  소트 후 하이라이트 처리 방법을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //헤더 행의 높이를 30 픽셀로 설정.				&#13;
  ///  mySheet.SetHeaderRowHeight(30);				&#13;
  ///  //필터행 삭제하기				&#13;
  ///  mySheet.HideFilterRow();				&#13;
  ///  // 대기중 이미지 닫기				&#13;
  ///  mySheet.HideProcessDlg();				&#13;
  ///  //1컬럼을 중심으로 소계 계산하여 표시하기				&#13;
  ///  var info = [{StdCol:1, SumCols:3|4|5}];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  //표시된 소계 숨기기				&#13;
  ///  mySheet.HideSubSum();				&#13;
  ///  //소트 이후 설정 확인				&#13;
  ///  mySheet.GetHighlightAfterSort();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetHighlightAfterSort = function(Sort)		{
	  /// <summary>&#13;
	  ///  소트 후 하이라이트 처리 방법을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //소트 이후 기존에 선택하고 있던 데이터를 찾아감.				&#13;
  ///  mySheet.SetHighlightAfterSort(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Sort' type='Integer' >&#13;
	 ///       Sort 설정방법 (Default=1)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.IBCloseCalendar = function()			{
	  /// <summary>&#13;
	  ///  외부의 컨트롤에서 사용한 달력팝업을 닫도록 설정한다&#13;
	  /// Example : 
  ///  //소트 이후 기존에 선택하고 있던 데이터를 찾아감.				&#13;
  ///  mySheet.SetHighlightAfterSort(1);				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.IBShowCalendar = function(val, obj)			{
	  /// <summary>&#13;
	  ///  달력 팝업을 외부의 컨트롤에서 사용하도록 설정한다&#13;
	  /// Example : 
  ///  //소트 이후 기존에 선택하고 있던 데이터를 찾아감.				&#13;
  ///  mySheet.SetHighlightAfterSort(1);				&#13;
  ///  // 날짜데이터값 입력 				&#13;
  ///  var val = document.getElementById(DateText).value;				&#13;
  ///  // 달력 팝업 Dialog 위치 : X, Y 좌표값 사용시 				&#13;
  ///  1.var obj = { Format: Ymd, X:300, Y:600, CallBack: Test };				&#13;
  ///  // 달력 팝업 Dialog 위치 : 마우스 마지막 위치 사용시				&#13;
  ///  2.var obj = { Format: Ymd, Target:Mouse, CallBack: Test };				&#13;
  ///  // 달력 팝업 Dialog 위치 : 달력 버튼 위치 사용시				&#13;
  ///  3.var obj = { Format:Ymd, Target:document.getElementById(DateBtn), CallBack: Test };				&#13;
  ///  // CalButtons 속성 : 달력 닫기 버튼 옵션 설정 사용시				&#13;
  ///  3.var obj = { Format:Ymd, Target:document.getElementById(DateBtn), CallBack: Test , CalButtons : Close};				&#13;
  ///  // 달력 닫기 버튼 옵션 설정 사용시 정렬 설정: 왼쪽 정렬				&#13;
  ///  4.var obj = { Format:Ymd, Target:document.getElementById(DateBtn), CallBack: Test, CalButtons : Close, CalButtonAlign : Left };				&#13;
  ///  // fnName : 함수명으로 function 생성				&#13;
  ///  function Test (date){				&#13;
  ///  // 달력 팝업 Dialog서 날짜 선택시 리턴값				&#13;
  ///  document.getElementById(DateText).value = date;				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='val' type='String' >&#13;
	 ///       날짜데이터값 (Default=현재날짜)&#13;
	 /// </param>&#13;
	 /// <param name='obj' type='  Object' >&#13;
	 ///       기능을 json 형태로 설정한다.&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetImageList = function(Index)		{
	  /// <summary>&#13;
	  ///  N번째 이미지 파일의 웹서버 경로를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //소트 이후 기존에 선택하고 있던 데이터를 찾아감.				&#13;
  ///  mySheet.SetHighlightAfterSort(1);				&#13;
  ///  // 날짜데이터값 입력 				&#13;
  ///  var val = document.getElementById(DateText).value;				&#13;
  ///  // 달력 팝업 Dialog 위치 : X, Y 좌표값 사용시 				&#13;
  ///  1.var obj = { Format: Ymd, X:300, Y:600, CallBack: Test };				&#13;
  ///  // 달력 팝업 Dialog 위치 : 마우스 마지막 위치 사용시				&#13;
  ///  2.var obj = { Format: Ymd, Target:Mouse, CallBack: Test };				&#13;
  ///  // 달력 팝업 Dialog 위치 : 달력 버튼 위치 사용시				&#13;
  ///  3.var obj = { Format:Ymd, Target:document.getElementById(DateBtn), CallBack: Test };				&#13;
  ///  // CalButtons 속성 : 달력 닫기 버튼 옵션 설정 사용시				&#13;
  ///  3.var obj = { Format:Ymd, Target:document.getElementById(DateBtn), CallBack: Test , CalButtons : Close};				&#13;
  ///  // 달력 닫기 버튼 옵션 설정 사용시 정렬 설정: 왼쪽 정렬				&#13;
  ///  4.var obj = { Format:Ymd, Target:document.getElementById(DateBtn), CallBack: Test, CalButtons : Close, CalButtonAlign : Left };				&#13;
  ///  // fnName : 함수명으로 function 생성				&#13;
  ///  function Test (date){				&#13;
  ///  // 달력 팝업 Dialog서 날짜 선택시 리턴값				&#13;
  ///  document.getElementById(DateText).value = date;				&#13;
  ///  }				&#13;
  ///  // 해당 인덱스에 설정한 이미지경로 확인 				&#13;
  ///  mySheet.GetImageList(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Index' type='Integer' >&#13;
	 ///       Image 인덱스&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetImageList = function(Index, Url)		{
	  /// <summary>&#13;
	  ///  N번째 이미지 파일의 웹서버 경로를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 0 인덱스에 이미지경로 설정 				&#13;
  ///  mySheet.SetImageList(0, ../image/btn_search.gif”);				&#13;
  ///  // 0 인덱스에 저장된 이미지 사용(Type:Image)				&#13;
  ///  mySheet.SetCellValue(3, 5, 0);				&#13;
  ///  mySheet.SetCellImage(3, 5, 0);				&#13;
  ///  mySheet.SetSearchingImage(0);				&#13;
  ///  mySheet.SetSavingImage(0);				&#13;
  ///  mySheet.SetWaitImage(0);				&#13;
  ///  mySheet.SetKeyFieldImage(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Index' type='Integer' >&#13;
	 ///       Image 인덱스&#13;
	 /// </param>&#13;
	 /// <param name='Url ' type='String' >&#13;
	 ///       설정할 Image 경로&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.InitCellProperty = function(Row, Col, info)			{
	  /// <summary>&#13;
	  ///  조회 또는 행 추가 후 특정 셀의 속성 정의를 기본 컬럼 속성 정의와 다르게 하고자 하는 경우에 이 함수를 사용한다&#13;
	  /// Example : 
  ///  // 0 인덱스에 이미지경로 설정 				&#13;
  ///  mySheet.SetImageList(0, ../image/btn_search.gif”);				&#13;
  ///  // 0 인덱스에 저장된 이미지 사용(Type:Image)				&#13;
  ///  mySheet.SetCellValue(3, 5, 0);				&#13;
  ///  mySheet.SetCellImage(3, 5, 0);				&#13;
  ///  mySheet.SetSearchingImage(0);				&#13;
  ///  mySheet.SetSavingImage(0);				&#13;
  ///  mySheet.SetWaitImage(0);				&#13;
  ///  mySheet.SetKeyFieldImage(0);				&#13;
  ///  // Text 컬럼 타입으로 변경				&#13;
  ///  var info = {Type: Text, Align: Center, Edit: 0};				&#13;
  ///  mySheet.InitCellProperty(2, sCombo, info);				&#13;
  ///  // 허용키, 제외키 설정				&#13;
  ///  var info = {Type:Text,AcceptKeys:N|[abcd!@#], ExceptKeys:[890!]};				&#13;
  ///  mySheet.InitCellProperty(3, 4 ,info);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       대상이 되는 컬럼 Index&#13;
	 /// </param>&#13;
	 /// <param name='info' type='Object' >&#13;
	 ///       셀의 속성 정의 객체&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.InitColumns = function(cols)			{
	  /// <summary>&#13;
	  ///  각 컬럼의 데이터 타입, 포맷 및 기능들을 설정한다&#13;
	  /// Example : 
  ///  // 0 인덱스에 이미지경로 설정 				&#13;
  ///  mySheet.SetImageList(0, ../image/btn_search.gif”);				&#13;
  ///  // 0 인덱스에 저장된 이미지 사용(Type:Image)				&#13;
  ///  mySheet.SetCellValue(3, 5, 0);				&#13;
  ///  mySheet.SetCellImage(3, 5, 0);				&#13;
  ///  mySheet.SetSearchingImage(0);				&#13;
  ///  mySheet.SetSavingImage(0);				&#13;
  ///  mySheet.SetWaitImage(0);				&#13;
  ///  mySheet.SetKeyFieldImage(0);				&#13;
  ///  // Text 컬럼 타입으로 변경				&#13;
  ///  var info = {Type: Text, Align: Center, Edit: 0};				&#13;
  ///  mySheet.InitCellProperty(2, sCombo, info);				&#13;
  ///  // 허용키, 제외키 설정				&#13;
  ///  var info = {Type:Text,AcceptKeys:N|[abcd!@#], ExceptKeys:[890!]};				&#13;
  ///  mySheet.InitCellProperty(3, 4 ,info);				&#13;
  ///  //각 컬럼의 기능을 설정한다.				&#13;
  ///  var cols = [				&#13;
  ///  {Type:Status,Width:60,SaveName:sStatus,Align:Center},				&#13;
  ///  {Type:DelCheck,Width:60,SaveName:sDelete,Align:Center},				&#13;
  ///  {Type:Text,Width:100,SaveName:JOB,Align:Center},				&#13;
  ///  {Type:Combo,Width:100,SaveName:DEPTNO,Align:Center				&#13;
  ///  ,ComboText:comboDataArr[0],ComboCode:comboDataArr[1]},				&#13;
  ///  {Type:Text,Width:60,SaveName:EMPNO,Align:Center},				&#13;
  ///  {Type:Text,Width:150,SaveName:ENAME,Align:"},				&#13;
  ///  {Type:Date,Width:120,SaveName:HIREDATE,Format:Ymd				&#13;
  ///  ,Align:Center,EditLen:8},				&#13;
  ///  {Type:Text,Width:120,SaveName:MGR,Align:Center},				&#13;
  ///  {Type:Int,Width:120,SaveName:SAL,Align:Right,Format:NullInteger},				&#13;
  ///  {Type:Int,Width:60,SaveName:COMM,Align:Right,Format:Integer}				&#13;
  ///  ];				&#13;
  ///  mySheet.InitColumns(cols);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='cols' type='json' >&#13;
	 ///       각 컬럼의 기능을 json 형태로 설정한다.&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.InitComboNoMatchText = function(Show, ShowText, InsertItem)			{
	  /// <summary>&#13;
	  ///  Combo 항목을 표시 시, Combo 항목에 없는 항목을 설정하거나 조회 하였을 경우 보여지는 글자를 설정한다&#13;
	  /// Example : 
  ///  // 0 인덱스에 이미지경로 설정 				&#13;
  ///  mySheet.SetImageList(0, ../image/btn_search.gif”);				&#13;
  ///  // 0 인덱스에 저장된 이미지 사용(Type:Image)				&#13;
  ///  mySheet.SetCellValue(3, 5, 0);				&#13;
  ///  mySheet.SetCellImage(3, 5, 0);				&#13;
  ///  mySheet.SetSearchingImage(0);				&#13;
  ///  mySheet.SetSavingImage(0);				&#13;
  ///  mySheet.SetWaitImage(0);				&#13;
  ///  mySheet.SetKeyFieldImage(0);				&#13;
  ///  // Text 컬럼 타입으로 변경				&#13;
  ///  var info = {Type: Text, Align: Center, Edit: 0};				&#13;
  ///  mySheet.InitCellProperty(2, sCombo, info);				&#13;
  ///  // 허용키, 제외키 설정				&#13;
  ///  var info = {Type:Text,AcceptKeys:N|[abcd!@#], ExceptKeys:[890!]};				&#13;
  ///  mySheet.InitCellProperty(3, 4 ,info);				&#13;
  ///  //각 컬럼의 기능을 설정한다.				&#13;
  ///  var cols = [				&#13;
  ///  {Type:Status,Width:60,SaveName:sStatus,Align:Center},				&#13;
  ///  {Type:DelCheck,Width:60,SaveName:sDelete,Align:Center},				&#13;
  ///  {Type:Text,Width:100,SaveName:JOB,Align:Center},				&#13;
  ///  {Type:Combo,Width:100,SaveName:DEPTNO,Align:Center				&#13;
  ///  ,ComboText:comboDataArr[0],ComboCode:comboDataArr[1]},				&#13;
  ///  {Type:Text,Width:60,SaveName:EMPNO,Align:Center},				&#13;
  ///  {Type:Text,Width:150,SaveName:ENAME,Align:"},				&#13;
  ///  {Type:Date,Width:120,SaveName:HIREDATE,Format:Ymd				&#13;
  ///  ,Align:Center,EditLen:8},				&#13;
  ///  {Type:Text,Width:120,SaveName:MGR,Align:Center},				&#13;
  ///  {Type:Int,Width:120,SaveName:SAL,Align:Right,Format:NullInteger},				&#13;
  ///  {Type:Int,Width:60,SaveName:COMM,Align:Right,Format:Integer}				&#13;
  ///  ];				&#13;
  ///  mySheet.InitColumns(cols);				&#13;
  ///  //Combo 항목이 없는 경우 항목 없음 표시하기				&#13;
  ///  mySheet.InitComboNoMatchText(1, 항목없음);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Show' type='Boolean' >&#13;
	 ///       콤보 항목 이외의 글자를 보여줄지 여부를 설정&#13;
	 /// </param>&#13;
	 /// <param name='ShowText' type='String' >&#13;
	 ///       콤보 항목 이외인 경우 표시할 글자, Default ="&#13;
	 /// </param>&#13;
	 /// <param name='InsertItem' type='Boolean' >&#13;
	 ///       콤보 항목 이외의 값이 오는 경우 그 값을 해당 셀에 아이템으로 삽입한다.&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.InitHeaders = function(Headers, Info)			{
	  /// <summary>&#13;
	  ///  헤더에 들어갈 타이틀과 헤더기능을 지정한다&#13;
	  /// Example : 
  ///  // 0 인덱스에 이미지경로 설정 				&#13;
  ///  mySheet.SetImageList(0, ../image/btn_search.gif”);				&#13;
  ///  // 0 인덱스에 저장된 이미지 사용(Type:Image)				&#13;
  ///  mySheet.SetCellValue(3, 5, 0);				&#13;
  ///  mySheet.SetCellImage(3, 5, 0);				&#13;
  ///  mySheet.SetSearchingImage(0);				&#13;
  ///  mySheet.SetSavingImage(0);				&#13;
  ///  mySheet.SetWaitImage(0);				&#13;
  ///  mySheet.SetKeyFieldImage(0);				&#13;
  ///  // Text 컬럼 타입으로 변경				&#13;
  ///  var info = {Type: Text, Align: Center, Edit: 0};				&#13;
  ///  mySheet.InitCellProperty(2, sCombo, info);				&#13;
  ///  // 허용키, 제외키 설정				&#13;
  ///  var info = {Type:Text,AcceptKeys:N|[abcd!@#], ExceptKeys:[890!]};				&#13;
  ///  mySheet.InitCellProperty(3, 4 ,info);				&#13;
  ///  //각 컬럼의 기능을 설정한다.				&#13;
  ///  var cols = [				&#13;
  ///  {Type:Status,Width:60,SaveName:sStatus,Align:Center},				&#13;
  ///  {Type:DelCheck,Width:60,SaveName:sDelete,Align:Center},				&#13;
  ///  {Type:Text,Width:100,SaveName:JOB,Align:Center},				&#13;
  ///  {Type:Combo,Width:100,SaveName:DEPTNO,Align:Center				&#13;
  ///  ,ComboText:comboDataArr[0],ComboCode:comboDataArr[1]},				&#13;
  ///  {Type:Text,Width:60,SaveName:EMPNO,Align:Center},				&#13;
  ///  {Type:Text,Width:150,SaveName:ENAME,Align:"},				&#13;
  ///  {Type:Date,Width:120,SaveName:HIREDATE,Format:Ymd				&#13;
  ///  ,Align:Center,EditLen:8},				&#13;
  ///  {Type:Text,Width:120,SaveName:MGR,Align:Center},				&#13;
  ///  {Type:Int,Width:120,SaveName:SAL,Align:Right,Format:NullInteger},				&#13;
  ///  {Type:Int,Width:60,SaveName:COMM,Align:Right,Format:Integer}				&#13;
  ///  ];				&#13;
  ///  mySheet.InitColumns(cols);				&#13;
  ///  //Combo 항목이 없는 경우 항목 없음 표시하기				&#13;
  ///  mySheet.InitComboNoMatchText(1, 항목없음);				&#13;
  ///  //2줄 헤더타이틀을 설정한다.				&#13;
  ///  var headers = [ 				&#13;
  ///  {Text:상태|삭제|직원정보|직원정보|직원정보, Align: Center} ,				&#13;
  ///  {Text:상태|삭제|직원명 |직원번호|입사일, Align: Center}				&#13;
  ///  ];				&#13;
  ///  var info = {Sort:1, ColMove:1, ColResize:0, HeaderCheck:0};				&#13;
  ///  mySheet.InitHeaders(headers,info);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Headers' type='Object[]' >&#13;
	 ///       헤더의 행별 정보를 설정&#13;
	 /// </param>&#13;
	 /// <param name='Info' type='Object' >&#13;
	 ///       헤더의 공통 정보를 설정&#13;
	 /// </param>&#13;
	 /// <param name='설정변수' type='' >&#13;
	 ///       설명&#13;
	 /// </param>&#13;
	 /// <param name='Headers' type='Text' >&#13;
	 ///       헤더에 표시할 Text를 |로 연결한 문자열&#13;
	 /// </param>&#13;
	 /// <param name='Info' type='Sort' >&#13;
	 ///       헤더 클릭을 통한 컬럼 Sort 허용 여부 Default=1&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.IsDataModified = function()			{
	  /// <summary>&#13;
	  ///  데이터 행의 트랜잭션 여부를 확인한다&#13;
	  /// Example : 
  ///  // 0 인덱스에 이미지경로 설정 				&#13;
  ///  mySheet.SetImageList(0, ../image/btn_search.gif”);				&#13;
  ///  // 0 인덱스에 저장된 이미지 사용(Type:Image)				&#13;
  ///  mySheet.SetCellValue(3, 5, 0);				&#13;
  ///  mySheet.SetCellImage(3, 5, 0);				&#13;
  ///  mySheet.SetSearchingImage(0);				&#13;
  ///  mySheet.SetSavingImage(0);				&#13;
  ///  mySheet.SetWaitImage(0);				&#13;
  ///  mySheet.SetKeyFieldImage(0);				&#13;
  ///  // Text 컬럼 타입으로 변경				&#13;
  ///  var info = {Type: Text, Align: Center, Edit: 0};				&#13;
  ///  mySheet.InitCellProperty(2, sCombo, info);				&#13;
  ///  // 허용키, 제외키 설정				&#13;
  ///  var info = {Type:Text,AcceptKeys:N|[abcd!@#], ExceptKeys:[890!]};				&#13;
  ///  mySheet.InitCellProperty(3, 4 ,info);				&#13;
  ///  //각 컬럼의 기능을 설정한다.				&#13;
  ///  var cols = [				&#13;
  ///  {Type:Status,Width:60,SaveName:sStatus,Align:Center},				&#13;
  ///  {Type:DelCheck,Width:60,SaveName:sDelete,Align:Center},				&#13;
  ///  {Type:Text,Width:100,SaveName:JOB,Align:Center},				&#13;
  ///  {Type:Combo,Width:100,SaveName:DEPTNO,Align:Center				&#13;
  ///  ,ComboText:comboDataArr[0],ComboCode:comboDataArr[1]},				&#13;
  ///  {Type:Text,Width:60,SaveName:EMPNO,Align:Center},				&#13;
  ///  {Type:Text,Width:150,SaveName:ENAME,Align:"},				&#13;
  ///  {Type:Date,Width:120,SaveName:HIREDATE,Format:Ymd				&#13;
  ///  ,Align:Center,EditLen:8},				&#13;
  ///  {Type:Text,Width:120,SaveName:MGR,Align:Center},				&#13;
  ///  {Type:Int,Width:120,SaveName:SAL,Align:Right,Format:NullInteger},				&#13;
  ///  {Type:Int,Width:60,SaveName:COMM,Align:Right,Format:Integer}				&#13;
  ///  ];				&#13;
  ///  mySheet.InitColumns(cols);				&#13;
  ///  //Combo 항목이 없는 경우 항목 없음 표시하기				&#13;
  ///  mySheet.InitComboNoMatchText(1, 항목없음);				&#13;
  ///  //2줄 헤더타이틀을 설정한다.				&#13;
  ///  var headers = [ 				&#13;
  ///  {Text:상태|삭제|직원정보|직원정보|직원정보, Align: Center} ,				&#13;
  ///  {Text:상태|삭제|직원명 |직원번호|입사일, Align: Center}				&#13;
  ///  ];				&#13;
  ///  var info = {Sort:1, ColMove:1, ColResize:0, HeaderCheck:0};				&#13;
  ///  mySheet.InitHeaders(headers,info);				&#13;
  ///  // 트랜잭션이 발생하지 않은 경우 메시지 표시 후 저장 취소 처리				&#13;
  ///  if(!mySheet.IsDataModified()) {				&#13;
  ///      alert(저장할 내역이 없습니다. 저장은 취소합니다.);				&#13;
  ///  // 트랜잭션이 발생한 경우 저장 처리				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSave(sheet_save.jsp);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.IsHaveChild = function(Row, IncludeDelRow)			{
	  /// <summary>&#13;
	  ///  트리형 데이터에서 특정 행에 Child 레벨의 행이 존재하는지 여부를 확인한다&#13;
	  /// Example : 
  ///  // 0 인덱스에 이미지경로 설정 				&#13;
  ///  mySheet.SetImageList(0, ../image/btn_search.gif”);				&#13;
  ///  // 0 인덱스에 저장된 이미지 사용(Type:Image)				&#13;
  ///  mySheet.SetCellValue(3, 5, 0);				&#13;
  ///  mySheet.SetCellImage(3, 5, 0);				&#13;
  ///  mySheet.SetSearchingImage(0);				&#13;
  ///  mySheet.SetSavingImage(0);				&#13;
  ///  mySheet.SetWaitImage(0);				&#13;
  ///  mySheet.SetKeyFieldImage(0);				&#13;
  ///  // Text 컬럼 타입으로 변경				&#13;
  ///  var info = {Type: Text, Align: Center, Edit: 0};				&#13;
  ///  mySheet.InitCellProperty(2, sCombo, info);				&#13;
  ///  // 허용키, 제외키 설정				&#13;
  ///  var info = {Type:Text,AcceptKeys:N|[abcd!@#], ExceptKeys:[890!]};				&#13;
  ///  mySheet.InitCellProperty(3, 4 ,info);				&#13;
  ///  //각 컬럼의 기능을 설정한다.				&#13;
  ///  var cols = [				&#13;
  ///  {Type:Status,Width:60,SaveName:sStatus,Align:Center},				&#13;
  ///  {Type:DelCheck,Width:60,SaveName:sDelete,Align:Center},				&#13;
  ///  {Type:Text,Width:100,SaveName:JOB,Align:Center},				&#13;
  ///  {Type:Combo,Width:100,SaveName:DEPTNO,Align:Center				&#13;
  ///  ,ComboText:comboDataArr[0],ComboCode:comboDataArr[1]},				&#13;
  ///  {Type:Text,Width:60,SaveName:EMPNO,Align:Center},				&#13;
  ///  {Type:Text,Width:150,SaveName:ENAME,Align:"},				&#13;
  ///  {Type:Date,Width:120,SaveName:HIREDATE,Format:Ymd				&#13;
  ///  ,Align:Center,EditLen:8},				&#13;
  ///  {Type:Text,Width:120,SaveName:MGR,Align:Center},				&#13;
  ///  {Type:Int,Width:120,SaveName:SAL,Align:Right,Format:NullInteger},				&#13;
  ///  {Type:Int,Width:60,SaveName:COMM,Align:Right,Format:Integer}				&#13;
  ///  ];				&#13;
  ///  mySheet.InitColumns(cols);				&#13;
  ///  //Combo 항목이 없는 경우 항목 없음 표시하기				&#13;
  ///  mySheet.InitComboNoMatchText(1, 항목없음);				&#13;
  ///  //2줄 헤더타이틀을 설정한다.				&#13;
  ///  var headers = [ 				&#13;
  ///  {Text:상태|삭제|직원정보|직원정보|직원정보, Align: Center} ,				&#13;
  ///  {Text:상태|삭제|직원명 |직원번호|입사일, Align: Center}				&#13;
  ///  ];				&#13;
  ///  var info = {Sort:1, ColMove:1, ColResize:0, HeaderCheck:0};				&#13;
  ///  mySheet.InitHeaders(headers,info);				&#13;
  ///  // 트랜잭션이 발생하지 않은 경우 메시지 표시 후 저장 취소 처리				&#13;
  ///  if(!mySheet.IsDataModified()) {				&#13;
  ///      alert(저장할 내역이 없습니다. 저장은 취소합니다.);				&#13;
  ///  // 트랜잭션이 발생한 경우 저장 처리				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSave(sheet_save.jsp);				&#13;
  ///  }				&#13;
  ///  //4행의 Child 존재 여부를 확인한다.				&#13;
  ///  if(mySheet.IsHaveChild(4)) {				&#13;
  ///     alert(4행에 자식 레벨이 존재합니다.);				&#13;
  ///  }else{				&#13;
  ///    alert(4행에 자식 레벨이 존재하지 않습니다.);				&#13;
  ///  }				&#13;
  ///  //4행의 삭제된 Child도 포함하여 확인한다.				&#13;
  ///  var bResult = mySheet.IsHaveChild(4, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       특정 행의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='IncludeDelRow' type='Boolean' >&#13;
	 ///       Child 레벨의 행 중 삭제 상태의 행을 포함할것인가 여부, Default=0&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetKeyFieldImage = function()		{
	  /// <summary>&#13;
	  ///  필수 입력 항목에 대한 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 0 인덱스에 이미지경로 설정 				&#13;
  ///  mySheet.SetImageList(0, ../image/btn_search.gif”);				&#13;
  ///  // 0 인덱스에 저장된 이미지 사용(Type:Image)				&#13;
  ///  mySheet.SetCellValue(3, 5, 0);				&#13;
  ///  mySheet.SetCellImage(3, 5, 0);				&#13;
  ///  mySheet.SetSearchingImage(0);				&#13;
  ///  mySheet.SetSavingImage(0);				&#13;
  ///  mySheet.SetWaitImage(0);				&#13;
  ///  mySheet.SetKeyFieldImage(0);				&#13;
  ///  // Text 컬럼 타입으로 변경				&#13;
  ///  var info = {Type: Text, Align: Center, Edit: 0};				&#13;
  ///  mySheet.InitCellProperty(2, sCombo, info);				&#13;
  ///  // 허용키, 제외키 설정				&#13;
  ///  var info = {Type:Text,AcceptKeys:N|[abcd!@#], ExceptKeys:[890!]};				&#13;
  ///  mySheet.InitCellProperty(3, 4 ,info);				&#13;
  ///  //각 컬럼의 기능을 설정한다.				&#13;
  ///  var cols = [				&#13;
  ///  {Type:Status,Width:60,SaveName:sStatus,Align:Center},				&#13;
  ///  {Type:DelCheck,Width:60,SaveName:sDelete,Align:Center},				&#13;
  ///  {Type:Text,Width:100,SaveName:JOB,Align:Center},				&#13;
  ///  {Type:Combo,Width:100,SaveName:DEPTNO,Align:Center				&#13;
  ///  ,ComboText:comboDataArr[0],ComboCode:comboDataArr[1]},				&#13;
  ///  {Type:Text,Width:60,SaveName:EMPNO,Align:Center},				&#13;
  ///  {Type:Text,Width:150,SaveName:ENAME,Align:"},				&#13;
  ///  {Type:Date,Width:120,SaveName:HIREDATE,Format:Ymd				&#13;
  ///  ,Align:Center,EditLen:8},				&#13;
  ///  {Type:Text,Width:120,SaveName:MGR,Align:Center},				&#13;
  ///  {Type:Int,Width:120,SaveName:SAL,Align:Right,Format:NullInteger},				&#13;
  ///  {Type:Int,Width:60,SaveName:COMM,Align:Right,Format:Integer}				&#13;
  ///  ];				&#13;
  ///  mySheet.InitColumns(cols);				&#13;
  ///  //Combo 항목이 없는 경우 항목 없음 표시하기				&#13;
  ///  mySheet.InitComboNoMatchText(1, 항목없음);				&#13;
  ///  //2줄 헤더타이틀을 설정한다.				&#13;
  ///  var headers = [ 				&#13;
  ///  {Text:상태|삭제|직원정보|직원정보|직원정보, Align: Center} ,				&#13;
  ///  {Text:상태|삭제|직원명 |직원번호|입사일, Align: Center}				&#13;
  ///  ];				&#13;
  ///  var info = {Sort:1, ColMove:1, ColResize:0, HeaderCheck:0};				&#13;
  ///  mySheet.InitHeaders(headers,info);				&#13;
  ///  // 트랜잭션이 발생하지 않은 경우 메시지 표시 후 저장 취소 처리				&#13;
  ///  if(!mySheet.IsDataModified()) {				&#13;
  ///      alert(저장할 내역이 없습니다. 저장은 취소합니다.);				&#13;
  ///  // 트랜잭션이 발생한 경우 저장 처리				&#13;
  ///  } else {				&#13;
  ///      mySheet.DoSave(sheet_save.jsp);				&#13;
  ///  }				&#13;
  ///  //4행의 Child 존재 여부를 확인한다.				&#13;
  ///  if(mySheet.IsHaveChild(4)) {				&#13;
  ///     alert(4행에 자식 레벨이 존재합니다.);				&#13;
  ///  }else{				&#13;
  ///    alert(4행에 자식 레벨이 존재하지 않습니다.);				&#13;
  ///  }				&#13;
  ///  //4행의 삭제된 Child도 포함하여 확인한다.				&#13;
  ///  var bResult = mySheet.IsHaveChild(4, 1);				&#13;
  ///  // 필수 입력 항목 이미지를 확인한다.				&#13;
  ///  mySheet.GetKeyFieldImage();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetKeyFieldImage = function(imgUrl)		{
	  /// <summary>&#13;
	  ///  필수 입력 항목에 대한 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 필수 입력 항목 이미지를 변경한다.				&#13;
  ///  mySheet.SetKeyFieldImage(“/sheet/imgKeyField.gif”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='imgUrl' type='String' >&#13;
	 ///       설정할 Url&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.LastCol = function()			{
	  /// <summary>&#13;
	  ///  마지막 컬럼의 index를 반환한다&#13;
	  /// Example : 
  ///  // 필수 입력 항목 이미지를 변경한다.				&#13;
  ///  mySheet.SetKeyFieldImage(“/sheet/imgKeyField.gif”);				&#13;
  ///  //마지막 컬럼의 index를 확인한다.				&#13;
  ///  alert(마지막 컬럼의 index는  + mySheet.LastCol() +  번 입니다.);				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.LastRow = function(Mode=0)			{
	  /// <summary>&#13;
	  ///  마지막 행의 index를 반환한다&#13;
	  /// Example : 
  ///  // 필수 입력 항목 이미지를 변경한다.				&#13;
  ///  mySheet.SetKeyFieldImage(“/sheet/imgKeyField.gif”);				&#13;
  ///  //마지막 컬럼의 index를 확인한다.				&#13;
  ///  alert(마지막 컬럼의 index는  + mySheet.LastCol() +  번 입니다.);				&#13;
  ///  //마지막 행의 인덱스를 확인한다.				&#13;
  ///  alert(마지막 행의 index는  + mySheet.LastRow() +  번 입니다.);				&#13;
  ///  // 화면에 보여지는 마지막 행의 인덱스를 확인한다.				&#13;
  ///  alert(화면상 마지막 행의 index는  + mySheet.LastRow(1) +  번 입니다.);				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetLeftCol = function()		{
	  /// <summary>&#13;
	  ///  가장 좌측에 표시되는 컬럼을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 필수 입력 항목 이미지를 변경한다.				&#13;
  ///  mySheet.SetKeyFieldImage(“/sheet/imgKeyField.gif”);				&#13;
  ///  //마지막 컬럼의 index를 확인한다.				&#13;
  ///  alert(마지막 컬럼의 index는  + mySheet.LastCol() +  번 입니다.);				&#13;
  ///  //마지막 행의 인덱스를 확인한다.				&#13;
  ///  alert(마지막 행의 index는  + mySheet.LastRow() +  번 입니다.);				&#13;
  ///  // 화면에 보여지는 마지막 행의 인덱스를 확인한다.				&#13;
  ///  alert(화면상 마지막 행의 index는  + mySheet.LastRow(1) +  번 입니다.);				&#13;
  ///  //컬럼으로 설정됨을 확인				&#13;
  ///  mySheet.GetLeftCol();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetLeftCol = function(Col)		{
	  /// <summary>&#13;
	  ///  가장 좌측에 표시되는 컬럼을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //고정컬럼이 설정되어 있을경우 				&#13;
  ///  //4컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(4); 				&#13;
  ///  //고정컬럼이 설정되어 있지 않을경우 				&#13;
  ///  //6컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(6); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long/' >&#13;
	 ///       특정컬럼의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.LoadSaveData = function(Content)			{
	  /// <summary>&#13;
	  ///  저장 데이터를 함수의 인자로 전달 받아 결과를 IBSheet 내부에 처리한다&#13;
	  /// Example : 
  ///  //고정컬럼이 설정되어 있을경우 				&#13;
  ///  //4컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(4); 				&#13;
  ///  //고정컬럼이 설정되어 있지 않을경우 				&#13;
  ///  //6컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(6); 				&#13;
  ///  //저장 작업 Ajax 처리				&#13;
  ///  var rtnData = mySheet.GetSaveData(Action.do,param);				&#13;
  ///  //저장 결과 표현하기				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Content' type='String' >&#13;
	 ///       저장XML 또는 저장JSON 문자열&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.LoadSearchChildData = function(Row, Data, Opt)			{
	  /// <summary>&#13;
	  ///  DoSearchChild 메소드의 기능을 url이 아닌 객체 또는 문자열로 처리하는 기능으로 트리구조에서 자식노드 조회 데이터(xml or json)를 함수의 인자로 전달 받아 아이비시트에 로딩한다&#13;
	  /// Example : 
  ///  //고정컬럼이 설정되어 있을경우 				&#13;
  ///  //4컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(4); 				&#13;
  ///  //고정컬럼이 설정되어 있지 않을경우 				&#13;
  ///  //6컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(6); 				&#13;
  ///  //저장 작업 Ajax 처리				&#13;
  ///  var rtnData = mySheet.GetSaveData(Action.do,param);				&#13;
  ///  //저장 결과 표현하기				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var Row = mySheet.GetSelectRow();				&#13;
  ///  var Data; 				&#13;
  ///  Data=mySheet.GetSearchData('list2_Child_Json.jsp', 'ChildLevel='+(parseInt(mySheet.GetRowLevel(Row))+1));				&#13;
  ///  var Opt = {Append: 1, WaitDlg: 1};				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchChildData(Row, Data, Opt);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 부모의 행 인덱스&#13;
	 /// </param>&#13;
	 /// <param name='Data' type='String' >&#13;
	 ///       조회 데이터 문자열 또는 JSON 객체&#13;
	 /// </param>&#13;
	 /// <param name='Opt' type=' Object' >&#13;
	 ///       옵션 인자&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.LoadSearchData = function(Content, Opt)			{
	  /// <summary>&#13;
	  ///  조회 데이터(xml or json)를 함수의 인자로 전달 받아 아이비시트에 로딩한다&#13;
	  /// Example : 
  ///  //고정컬럼이 설정되어 있을경우 				&#13;
  ///  //4컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(4); 				&#13;
  ///  //고정컬럼이 설정되어 있지 않을경우 				&#13;
  ///  //6컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(6); 				&#13;
  ///  //저장 작업 Ajax 처리				&#13;
  ///  var rtnData = mySheet.GetSaveData(Action.do,param);				&#13;
  ///  //저장 결과 표현하기				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var Row = mySheet.GetSelectRow();				&#13;
  ///  var Data; 				&#13;
  ///  Data=mySheet.GetSearchData('list2_Child_Json.jsp', 'ChildLevel='+(parseInt(mySheet.GetRowLevel(Row))+1));				&#13;
  ///  var Opt = {Append: 1, WaitDlg: 1};				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchChildData(Row, Data, Opt);				&#13;
  ///  // 아래 두줄은 DoSearch() 함수를 사용하는 것을 두개로 나눈 경우임 				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData( list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 조회 결과 내용을 기존데이터에 Append 하여 표현하기				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.LoadSearchData(sXml, opt);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Content' type='String' >&#13;
	 ///       조회XML 또는 조회JSON 문자열&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Append' type='Boolean' >&#13;
	 ///       Append 조회 여부, Default=0&#13;
	 /// </param>&#13;
	 /// <param name='Opt.AppendRow' type='Number' >&#13;
	 ///       Append 조회 시 데이터를 붙여넣을 위치 설정&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Fx' type='Boolean' >&#13;
	 ///       포맷팅된 데이터 조회 처리 여부,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.LoadExcel = function(parameters)			{
	  /// <summary>&#13;
	  ///  엑셀로부터 데이터를 읽어 들여 데이터 영역에 표시한다&#13;
	  /// Example : 
  ///  //고정컬럼이 설정되어 있을경우 				&#13;
  ///  //4컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(4); 				&#13;
  ///  //고정컬럼이 설정되어 있지 않을경우 				&#13;
  ///  //6컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(6); 				&#13;
  ///  //저장 작업 Ajax 처리				&#13;
  ///  var rtnData = mySheet.GetSaveData(Action.do,param);				&#13;
  ///  //저장 결과 표현하기				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var Row = mySheet.GetSelectRow();				&#13;
  ///  var Data; 				&#13;
  ///  Data=mySheet.GetSearchData('list2_Child_Json.jsp', 'ChildLevel='+(parseInt(mySheet.GetRowLevel(Row))+1));				&#13;
  ///  var Opt = {Append: 1, WaitDlg: 1};				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchChildData(Row, Data, Opt);				&#13;
  ///  // 아래 두줄은 DoSearch() 함수를 사용하는 것을 두개로 나눈 경우임 				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData( list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 조회 결과 내용을 기존데이터에 Append 하여 표현하기				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.LoadSearchData(sXml, opt);				&#13;
  ///  // 엑셀로 로딩하기				&#13;
  ///  mySheet.LoadExcel();         				&#13;
  ///  // 헤더타이틀을 서로 비교하여 동일한 컬럼끼리 로딩을 하되 7행부터 9 행까지만 읽어들인다.				&#13;
  ///  mySheet.LoadExcel({Mode:'HeaderMatch',StartRow:'7',EndRow:'9'});				&#13;
  ///  // IBSheet의 첫번째 컬럼에 엑셀의 5번째 컬럼의 값을 로딩하고, IBSheet 의 5번째 컬럼에 엑셀의 1번째 컬럼의 값을 로딩함.				&#13;
  ///  mySheet.LoadExcel({ColumnMapping:'5|4|3|2|1'});				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Append' type='Boolean' >&#13;
	 ///       기존 데이터에 추가 여부&#13;
	 /// </param>&#13;
	 /// <param name='ColumnMapping' type='String' >&#13;
	 ///       엑셀 컬럼 번호&#13;
	 /// </param>&#13;
	 /// <param name='EndRow' type='String' >&#13;
	 ///       엑셀 로딩완료 행번호&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParam' type='String' >&#13;
	 ///       서버로 전달할 추가 파라메터들을 a=1&b=2 형태로 넣어준다. Default="&#13;
	 /// </param>&#13;
	 /// <param name='FileExt' type='String' >&#13;
	 ///       업로드 가능한 파일 확장자&#13;
	 /// </param>&#13;
	 /// <param name='Mode' type='String' >&#13;
	 ///       로딩 방식 (헤더매칭등)&#13;
	 /// </param>&#13;
	 /// <param name='StartRow' type='String' >&#13;
	 ///       엑셀 로딩 행번호&#13;
	 /// </param>&#13;
	 /// <param name='StartCol' type='String' >&#13;
	 ///       엑셀 로딩 컬럼번호&#13;
	 /// </param>&#13;
	 /// <param name='WorkSheetNo' type='String' >&#13;
	 ///       엑셀WorkSheet번호&#13;
	 /// </param>&#13;
	 /// <param name='WorkSheetName' type='String' >&#13;
	 ///       엑셀WorkSheet이름&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.LoadExcelBuffer = function(IsBuffer)			{
	  /// <summary>&#13;
	  ///  1개의 엑셀 문서로부터 여러 개의 시트에 로딩한다&#13;
	  /// Example : 
  ///  //고정컬럼이 설정되어 있을경우 				&#13;
  ///  //4컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(4); 				&#13;
  ///  //고정컬럼이 설정되어 있지 않을경우 				&#13;
  ///  //6컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(6); 				&#13;
  ///  //저장 작업 Ajax 처리				&#13;
  ///  var rtnData = mySheet.GetSaveData(Action.do,param);				&#13;
  ///  //저장 결과 표현하기				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var Row = mySheet.GetSelectRow();				&#13;
  ///  var Data; 				&#13;
  ///  Data=mySheet.GetSearchData('list2_Child_Json.jsp', 'ChildLevel='+(parseInt(mySheet.GetRowLevel(Row))+1));				&#13;
  ///  var Opt = {Append: 1, WaitDlg: 1};				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchChildData(Row, Data, Opt);				&#13;
  ///  // 아래 두줄은 DoSearch() 함수를 사용하는 것을 두개로 나눈 경우임 				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData( list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 조회 결과 내용을 기존데이터에 Append 하여 표현하기				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.LoadSearchData(sXml, opt);				&#13;
  ///  // 엑셀로 로딩하기				&#13;
  ///  mySheet.LoadExcel();         				&#13;
  ///  // 헤더타이틀을 서로 비교하여 동일한 컬럼끼리 로딩을 하되 7행부터 9 행까지만 읽어들인다.				&#13;
  ///  mySheet.LoadExcel({Mode:'HeaderMatch',StartRow:'7',EndRow:'9'});				&#13;
  ///  // IBSheet의 첫번째 컬럼에 엑셀의 5번째 컬럼의 값을 로딩하고, IBSheet 의 5번째 컬럼에 엑셀의 1번째 컬럼의 값을 로딩함.				&#13;
  ///  mySheet.LoadExcel({ColumnMapping:'5|4|3|2|1'});				&#13;
  ///  // 엑셀 파일 즉시 로딩하기				&#13;
  ///  mySheet.LoadExcel();         				&#13;
  ///  //이후로는 버퍼링한다. 아무 동작 안함.				&#13;
  ///  mySheet.LoadExcelBuffer(true);  				&#13;
  ///  // mySheet에 엑셀파일의 첫번째 시트의 헤더타이틀을 서로 비교하여 동일한 컬럼끼리 로딩을 하되 7행부터 9 행까지만 로딩하기로 예약함				&#13;
  ///  mySheet.LoadExcel({Mode:'HeaderMatch',StartRow:'7',EndRow:'9', WorkSheetNo:1});				&#13;
  ///  // mySheet2에 엑셀파일의 두번째 시트를 IBSheet의 첫번째 컬럼에 엑셀의 5번째 컬럼의 값을 로딩하고, IBSheet 의 5번째 컬럼에 엑셀의 1번째 컬럼의 값을로딩하기로 예약함				&#13;
  ///  mySheet2.LoadExcel({ColumnMapping:'5|4|3|2|1', WorkSheetNo:2});				&#13;
  ///  // 버퍼링된 모든 엑셀 로딩 자료와 파일을 서버로 보내기 위해 파일 업로드창을 띄운다				&#13;
  ///  mySheet.LoadExcelBuffer(false); 				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='IsBuffer' type='bool' >&#13;
	 ///       버퍼링 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetLoadExcelUrl = function()		{
	  /// <summary>&#13;
	  ///  엑셀 업로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  //고정컬럼이 설정되어 있을경우 				&#13;
  ///  //4컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(4); 				&#13;
  ///  //고정컬럼이 설정되어 있지 않을경우 				&#13;
  ///  //6컬럼을 수평스크롤 가장 좌측에 보이는 컬럼으로 설정 				&#13;
  ///  mySheet.SetLeftCol(6); 				&#13;
  ///  //저장 작업 Ajax 처리				&#13;
  ///  var rtnData = mySheet.GetSaveData(Action.do,param);				&#13;
  ///  //저장 결과 표현하기				&#13;
  ///  mySheet.LoadSaveData(rtnData);				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var Row = mySheet.GetSelectRow();				&#13;
  ///  var Data; 				&#13;
  ///  Data=mySheet.GetSearchData('list2_Child_Json.jsp', 'ChildLevel='+(parseInt(mySheet.GetRowLevel(Row))+1));				&#13;
  ///  var Opt = {Append: 1, WaitDlg: 1};				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchChildData(Row, Data, Opt);				&#13;
  ///  // 아래 두줄은 DoSearch() 함수를 사용하는 것을 두개로 나눈 경우임 				&#13;
  ///  //조회 데이터 읽어오기				&#13;
  ///  var sXml = mySheet.GetSearchData( list.jsp);				&#13;
  ///  //조회 결과 내용을 표현하기				&#13;
  ///  mySheet.LoadSearchData(sXml);				&#13;
  ///  // 조회 결과 내용을 기존데이터에 Append 하여 표현하기				&#13;
  ///  var opt = { Append : 1 };				&#13;
  ///  mySheet.LoadSearchData(sXml, opt);				&#13;
  ///  // 엑셀로 로딩하기				&#13;
  ///  mySheet.LoadExcel();         				&#13;
  ///  // 헤더타이틀을 서로 비교하여 동일한 컬럼끼리 로딩을 하되 7행부터 9 행까지만 읽어들인다.				&#13;
  ///  mySheet.LoadExcel({Mode:'HeaderMatch',StartRow:'7',EndRow:'9'});				&#13;
  ///  // IBSheet의 첫번째 컬럼에 엑셀의 5번째 컬럼의 값을 로딩하고, IBSheet 의 5번째 컬럼에 엑셀의 1번째 컬럼의 값을 로딩함.				&#13;
  ///  mySheet.LoadExcel({ColumnMapping:'5|4|3|2|1'});				&#13;
  ///  // 엑셀 파일 즉시 로딩하기				&#13;
  ///  mySheet.LoadExcel();         				&#13;
  ///  //이후로는 버퍼링한다. 아무 동작 안함.				&#13;
  ///  mySheet.LoadExcelBuffer(true);  				&#13;
  ///  // mySheet에 엑셀파일의 첫번째 시트의 헤더타이틀을 서로 비교하여 동일한 컬럼끼리 로딩을 하되 7행부터 9 행까지만 로딩하기로 예약함				&#13;
  ///  mySheet.LoadExcel({Mode:'HeaderMatch',StartRow:'7',EndRow:'9', WorkSheetNo:1});				&#13;
  ///  // mySheet2에 엑셀파일의 두번째 시트를 IBSheet의 첫번째 컬럼에 엑셀의 5번째 컬럼의 값을 로딩하고, IBSheet 의 5번째 컬럼에 엑셀의 1번째 컬럼의 값을로딩하기로 예약함				&#13;
  ///  mySheet2.LoadExcel({ColumnMapping:'5|4|3|2|1', WorkSheetNo:2});				&#13;
  ///  // 버퍼링된 모든 엑셀 로딩 자료와 파일을 서버로 보내기 위해 파일 업로드창을 띄운다				&#13;
  ///  mySheet.LoadExcelBuffer(false); 				&#13;
  ///  // 엑셀 업로드 설정 경로를 확인한다.				&#13;
  ///  var url = mySheet.GetLoadExcelUrl();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetLoadExcelUrl = function(Url)		{
	  /// <summary>&#13;
	  ///  엑셀 업로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  // 엑셀 업로드 경로를 설정한다.				&#13;
  ///  mySheet.SetLoadExcelUrl(/jsp/LoadExcel.jsp);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       설정할 서버 페이지 Url&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.LoadText = function(parameters)			{
	  /// <summary>&#13;
	  ///  텍스트 파일로부터 데이터를 읽어 들여 데이터 영역에 표시한다&#13;
	  /// Example : 
  ///  // 엑셀 업로드 경로를 설정한다.				&#13;
  ///  mySheet.SetLoadExcelUrl(/jsp/LoadExcel.jsp);				&#13;
  ///  // 텍스트 파일로 로딩하기				&#13;
  ///  mySheet. LoadText();				&#13;
  ///  // 헤더타이틀을 서로 비교하여 동일한 컬럼끼리 로딩을 하며, 컬럼 구분자는'\t' 로 구분되어 있다				&#13;
  ///  mySheet.Load Text({Mode:'HeaderMatch', Deli:'\t'});				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='String' >&#13;
	 ///       로딩 방식 (헤더매칭등)&#13;
	 /// </param>&#13;
	 /// <param name='Deli' type='String' >&#13;
	 ///       데이터의 컬럼 구분자.&#13;
	 /// </param>&#13;
	 /// <param name='Append' type='Boolean' >&#13;
	 ///       기존 데이터에 추가 여부&#13;
	 /// </param>&#13;
	 /// <param name='FileExt' type='String' >&#13;
	 ///       업로드 가능한 파일 확장자&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetLoadTextUrl = function()		{
	  /// <summary>&#13;
	  ///  텍스트 업로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  // 엑셀 업로드 경로를 설정한다.				&#13;
  ///  mySheet.SetLoadExcelUrl(/jsp/LoadExcel.jsp);				&#13;
  ///  // 텍스트 파일로 로딩하기				&#13;
  ///  mySheet. LoadText();				&#13;
  ///  // 헤더타이틀을 서로 비교하여 동일한 컬럼끼리 로딩을 하며, 컬럼 구분자는'\t' 로 구분되어 있다				&#13;
  ///  mySheet.Load Text({Mode:'HeaderMatch', Deli:'\t'});				&#13;
  ///  // 텍스트 업로드 설정 경로를 확인한다.				&#13;
  ///  var url = mySheet.GetLoadTextUrl();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetLoadTextUrl = function(Url)		{
	  /// <summary>&#13;
	  ///  텍스트 업로드 기능을 처리할 서버 페이지 경로를 확인 및 설정한다&#13;
	  /// Example : 
  ///  // 텍스트 업로드 경로를 설정한다.				&#13;
  ///  mySheet.SetLoadTextUrl(/jsp/LoadText.jsp);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       설정할 서버 페이지 Url&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetMergeSheet = function()		{
	  /// <summary>&#13;
	  ///  전체적인 머지 종류를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 텍스트 업로드 경로를 설정한다.				&#13;
  ///  mySheet.SetLoadTextUrl(/jsp/LoadText.jsp);				&#13;
  ///  //머지 방식 확인				&#13;
  ///  mySheet.GetMergeSheet();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetMergeSheet = function(Merge)		{
	  /// <summary>&#13;
	  ///  전체적인 머지 종류를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //초기 로드 시 전체 머지 종류를 설정				&#13;
  ///  mySheet.SetMergeSheet( msHeaderOnly);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Merge' type='Integer' >&#13;
	 ///       머지 종류&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetMaximumValue = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  Format이 숫자와 관련된 포멧인 Integer, Float, NullInteger, NullFloat 일때, 편집시 입력할 수 있는 최대값을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //초기 로드 시 전체 머지 종류를 설정				&#13;
  ///  mySheet.SetMergeSheet( msHeaderOnly);				&#13;
  ///  //설정된 숫자포멧의 최대값을 확인한다.				&#13;
  ///  mySheet.GetMaximumValue(1, 12);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long/' >&#13;
	 ///       해당 셀의 컬럼 Index 또는&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetMaximumValue = function(Row, Col, Value)		{
	  /// <summary>&#13;
	  ///  Format이 숫자와 관련된 포멧인 Integer, Float, NullInteger, NullFloat 일때, 편집시 입력할 수 있는 최대값을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //숫자포멧의 최대값을 설정한다.				&#13;
  ///  mySheet.SetMaximumValue(1, 12, 5000);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long/' >&#13;
	 ///       해당 셀의 컬럼 Index 또는&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='Long' >&#13;
	 ///       설정할 최대값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetMinimumValue = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  Format이 숫자와 관련된 포멧인 Integer, Float, NullInteger, NullFloat 일때, 편집시 입력할 수 있는 최소값을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //숫자포멧의 최대값을 설정한다.				&#13;
  ///  mySheet.SetMaximumValue(1, 12, 5000);				&#13;
  ///  //설정된 숫자포멧의 최소값을 확인한다.				&#13;
  ///  mySheet.GetMinimumValue(1, 12);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 데이터의 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long/' >&#13;
	 ///       해당 데이터의 컬럼 Index 또는&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetMinimumValue = function(Row, Col, Value)		{
	  /// <summary>&#13;
	  ///  Format이 숫자와 관련된 포멧인 Integer, Float, NullInteger, NullFloat 일때, 편집시 입력할 수 있는 최소값을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 숫자포멧의 최소값을 설정한다.				&#13;
  ///  mySheet.SetMinimumValue(1, 12, 1000);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 데이터의 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long/' >&#13;
	 ///       해당 데이터의 컬럼 Index 또는&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='Long' >&#13;
	 ///       설정할 최소값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.MouseCol = function()			{
	  /// <summary>&#13;
	  ///  마우스가 눌려졌을 때 선택된 컬럼 번호를 반환한다&#13;
	  /// Example : 
  ///  // 숫자포멧의 최소값을 설정한다.				&#13;
  ///  mySheet.SetMinimumValue(1, 12, 1000);				&#13;
  ///  // 마우스가 눌러졌을 때 컬럼 번호를 가져온다.				&#13;
  ///  function mySheet_OnMouseDown(Button, Shift, X, Y) {				&#13;
  ///      // 눌린 컬럼 확인				&#13;
  ///      alert(mySheet.MouseRow() + 행  + mySheet.MouseCol() + 컬럼이 눌림);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetMousePointer = function()		{
	  /// <summary>&#13;
	  ///  마우스의 모양을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 숫자포멧의 최소값을 설정한다.				&#13;
  ///  mySheet.SetMinimumValue(1, 12, 1000);				&#13;
  ///  // 마우스가 눌러졌을 때 컬럼 번호를 가져온다.				&#13;
  ///  function mySheet_OnMouseDown(Button, Shift, X, Y) {				&#13;
  ///      // 눌린 컬럼 확인				&#13;
  ///      alert(mySheet.MouseRow() + 행  + mySheet.MouseCol() + 컬럼이 눌림);				&#13;
  ///  }				&#13;
  ///  //마우스의 모양을 확인한다.				&#13;
  ///  mySheet.GetMousePointer(Default);				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetMousePointer = function(Pointer)		{
	  /// <summary>&#13;
	  ///  마우스의 모양을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  function mySheet_OnMouseMove(Button, Shift, X, Y) { 				&#13;
  ///  //마우스 위치가 2컬럼 일때만 마우스 손가락 모양				&#13;
  ///    if(mySheet.MouseCol() == 2) {				&#13;
  ///      mySheet.SetMousePointer(Hand);				&#13;
  ///    } else {				&#13;
  ///      mySheet.SetMousePointer(Default);				&#13;
  ///    }				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Pointer' type='String' >&#13;
	 ///       설정할 마우스 모양&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.MouseRow = function()			{
	  /// <summary>&#13;
	  ///  마우스가 눌려졌을 때 선택된 행 번호를 반환한다&#13;
	  /// Example : 
  ///  function mySheet_OnMouseMove(Button, Shift, X, Y) { 				&#13;
  ///  //마우스 위치가 2컬럼 일때만 마우스 손가락 모양				&#13;
  ///    if(mySheet.MouseCol() == 2) {				&#13;
  ///      mySheet.SetMousePointer(Hand);				&#13;
  ///    } else {				&#13;
  ///      mySheet.SetMousePointer(Default);				&#13;
  ///    }				&#13;
  ///  }				&#13;
  ///  //마우스가 눌러졌을 때 행 번호를 가져온다.				&#13;
  ///  function mySheet_OnMouseDown(Button, Shift, X, Y){				&#13;
  ///   //눌린 행 확인				&#13;
  ///      alert(mySheet.MouseRow() + 행이 눌림);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.GetMouseToolTipText = function()		{
	  /// <summary>&#13;
	  ///  마우스에 표시될 풍선도움말을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  function mySheet_OnMouseMove(Button, Shift, X, Y) { 				&#13;
  ///  //마우스 위치가 2컬럼 일때만 마우스 손가락 모양				&#13;
  ///    if(mySheet.MouseCol() == 2) {				&#13;
  ///      mySheet.SetMousePointer(Hand);				&#13;
  ///    } else {				&#13;
  ///      mySheet.SetMousePointer(Default);				&#13;
  ///    }				&#13;
  ///  }				&#13;
  ///  //마우스가 눌러졌을 때 행 번호를 가져온다.				&#13;
  ///  function mySheet_OnMouseDown(Button, Shift, X, Y){				&#13;
  ///   //눌린 행 확인				&#13;
  ///      alert(mySheet.MouseRow() + 행이 눌림);				&#13;
  ///  }				&#13;
  ///  //설정된 MouseToolTipText 값을 확인한다.				&#13;
  ///  mySheet.GetMouseToolTipText();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetMouseToolTipText = function(Value)		{
	  /// <summary>&#13;
	  ///  마우스에 표시될 풍선도움말을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // MouseMove 이벤트에서 마우스 위치의 X, Y 좌표값을 ToopTip으로 설정 한다.				&#13;
  ///  function mySheet_OnMouseMove(button, shift, x, y) {				&#13;
  ///    var value = 마우스 좌표 =  + x + , + y;				&#13;
  ///    mySheet.SetMouseToolTipText(value);				&#13;
  ///  }.				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Value' type='String' >&#13;
	 ///       설정할 문자열&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.MoveColumnFail = function(Flag)			{
	  /// <summary>&#13;
	  ///  OnBeforeColumnMove 이벤트 안에서 사용하는 속성이며, 컬럼이동 실패 여부를 설정한다&#13;
	  /// Example : 
  ///  // MouseMove 이벤트에서 마우스 위치의 X, Y 좌표값을 ToopTip으로 설정 한다.				&#13;
  ///  function mySheet_OnMouseMove(button, shift, x, y) {				&#13;
  ///    var value = 마우스 좌표 =  + x + , + y;				&#13;
  ///    mySheet.SetMouseToolTipText(value);				&#13;
  ///  }.				&#13;
  ///  //0컬럼이 3컬럼 이후의 위치로 이동하고자 할때 컬럼 이동을 취소한다				&#13;
  ///  function mySheet_OnBeforeColumnMove(Col, NewPos) { 				&#13;
  ///  if(Col==0 &amp;&amp; NewPos &amp;gt; 3) {				&#13;
  ///  mySheet.MoveColumnFail(1);				&#13;
  ///  }else{				&#13;
  ///  mySheet.MoveColumnFail(0);				&#13;
  ///  }				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Flag' type='Boolean' >&#13;
	 ///       컬럼이동실패여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.MoveColumnPos = function(Col, NewPos, Event)			{
	  /// <summary>&#13;
	  ///  특정 컬럼을 새로운 컬럼 위치로 이동한다&#13;
	  /// Example : 
  ///  // MouseMove 이벤트에서 마우스 위치의 X, Y 좌표값을 ToopTip으로 설정 한다.				&#13;
  ///  function mySheet_OnMouseMove(button, shift, x, y) {				&#13;
  ///    var value = 마우스 좌표 =  + x + , + y;				&#13;
  ///    mySheet.SetMouseToolTipText(value);				&#13;
  ///  }.				&#13;
  ///  //0컬럼이 3컬럼 이후의 위치로 이동하고자 할때 컬럼 이동을 취소한다				&#13;
  ///  function mySheet_OnBeforeColumnMove(Col, NewPos) { 				&#13;
  ///  if(Col==0 &amp;&amp; NewPos &amp;gt; 3) {				&#13;
  ///  mySheet.MoveColumnFail(1);				&#13;
  ///  }else{				&#13;
  ///  mySheet.MoveColumnFail(0);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  //1컬럼을 9컬럼으로 이동한다.				&#13;
  ///  mySheet.MoveColumnPos(1, 9);				&#13;
  ///  //각 컬럼의 SaveName으로 설정한 경우				&#13;
  ///  mySheet.MoveColumnPos(stockNm, payAmt);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long/String' >&#13;
	 ///       이동할 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='NewPos' type='Long/String' >&#13;
	 ///       이동될 위치의 컬럼 Index 또는&#13;
	 /// </param>&#13;
	 /// <param name='Event' type='Boolean' >&#13;
	 ///       이동되면서 발생하는 이벤트인&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetPagingPosition = function()		{
	  /// <summary>&#13;
	  ///  페이지 네비게이션을 사용여부를 설정하거나 확인 한다&#13;
	  /// Example : 
  ///  // MouseMove 이벤트에서 마우스 위치의 X, Y 좌표값을 ToopTip으로 설정 한다.				&#13;
  ///  function mySheet_OnMouseMove(button, shift, x, y) {				&#13;
  ///    var value = 마우스 좌표 =  + x + , + y;				&#13;
  ///    mySheet.SetMouseToolTipText(value);				&#13;
  ///  }.				&#13;
  ///  //0컬럼이 3컬럼 이후의 위치로 이동하고자 할때 컬럼 이동을 취소한다				&#13;
  ///  function mySheet_OnBeforeColumnMove(Col, NewPos) { 				&#13;
  ///  if(Col==0 &amp;&amp; NewPos &amp;gt; 3) {				&#13;
  ///  mySheet.MoveColumnFail(1);				&#13;
  ///  }else{				&#13;
  ///  mySheet.MoveColumnFail(0);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  //1컬럼을 9컬럼으로 이동한다.				&#13;
  ///  mySheet.MoveColumnPos(1, 9);				&#13;
  ///  //각 컬럼의 SaveName으로 설정한 경우				&#13;
  ///  mySheet.MoveColumnPos(stockNm, payAmt);				&#13;
  ///  // 현재 설정된 페이지 네비게이션 설정 위치값을 확인 한다.				&#13;
  ///  mySheet.GetPagingPosition()				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetPagingPosition = function(Position)		{
	  /// <summary>&#13;
	  ///  페이지 네비게이션을 사용여부를 설정하거나 확인 한다&#13;
	  /// Example : 
  ///  // 페이지 네이게이션을 좌측 상단, 건수 정보를 우측 상단에 표시 한다.				&#13;
  ///  mySheet.SetCountPosition(2);				&#13;
  ///  mySheet.SetPagingPosition(1)				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Position' type='Number' >&#13;
	 ///       설정할 페이지 네비게이션 위치 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetPageCount = function()		{
	  /// <summary>&#13;
	  ///  조회 모드(SearchMode)에서 사용되는 Page 속성의 값을 설정하거나 확인 한다&#13;
	  /// Example : 
  ///  // 페이지 네이게이션을 좌측 상단, 건수 정보를 우측 상단에 표시 한다.				&#13;
  ///  mySheet.SetCountPosition(2);				&#13;
  ///  mySheet.SetPagingPosition(1)				&#13;
  ///  // 현재 설정된 페이지 개수를 확인 한다..				&#13;
  ///  mySheet.GetPageCount()				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetPageCount = function(Page)		{
	  /// <summary>&#13;
	  ///  조회 모드(SearchMode)에서 사용되는 Page 속성의 값을 설정하거나 확인 한다&#13;
	  /// Example : 
  ///  // 페이지 개수를  50으로 설정 한다.				&#13;
  ///  mySheet.SetPageCount(50);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Page' type='Number' >&#13;
	 ///       설정할 페이지 개수&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.PopupButtonImage = function(Row, Col, Image)			{
	  /// <summary>&#13;
	  ///  Popup/PopupEdit 타입 컬럼의 특정 셀 팝업버튼 이미지를 변경한다&#13;
	  /// Example : 
  ///  // 페이지 개수를  50으로 설정 한다.				&#13;
  ///  mySheet.SetPageCount(50);				&#13;
  ///  // 셀의 팝업버튼 이미지를 변경				&#13;
  ///  mySheet.PopupButtonImage(2, 10, /image/ic_popup.gif); 				&#13;
  ///  // sPopup 컬럼의 팝업버튼 이미지를 이미지리스트에 설정한 이미지로 변경				&#13;
  ///  mySheet. PopupButtonImage (4, sPopup, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       설정할 셀의 행 인덱스&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long/String' >&#13;
	 ///       설정할 셀의 컬럼 인덱스 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Image' type='Long/String' >&#13;
	 ///       설정할 이미지 Url 또는 이미지인덱스&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRangeBackColor = function(Row1,Col1,Row2,Col2)		{
	  /// <summary>&#13;
	  ///  셀의 범위 영역의 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 페이지 개수를  50으로 설정 한다.				&#13;
  ///  mySheet.SetPageCount(50);				&#13;
  ///  // 셀의 팝업버튼 이미지를 변경				&#13;
  ///  mySheet.PopupButtonImage(2, 10, /image/ic_popup.gif); 				&#13;
  ///  // sPopup 컬럼의 팝업버튼 이미지를 이미지리스트에 설정한 이미지로 변경				&#13;
  ///  mySheet. PopupButtonImage (4, sPopup, 1);				&#13;
  ///  //영역에 배경색 확인하기				&#13;
  ///  mySheet.GetRangeBackColor(1,0,10,10);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRangeBackColor = function(Row1,Col1,Row2,Col2,Color)		{
	  /// <summary>&#13;
	  ///  셀의 범위 영역의 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //영역에 배경색 설정하기				&#13;
  ///  mySheet.SetRangeBackColor(1,0,10,10, #FFFF00);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       WebColor&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRangeFontBold = function(Row1, Col1, Row2, Col2)		{
	  /// <summary>&#13;
	  ///  셀의 범위 영역의 글자볼드 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //영역에 배경색 설정하기				&#13;
  ///  mySheet.SetRangeBackColor(1,0,10,10, #FFFF00);				&#13;
  ///  //영역 글자 볼드 확인하기				&#13;
  ///  mySheet.GetRangeFontBold(1, 0, 2, 2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRangeFontBold = function(Row1, Col1, Row2, Col2, Bold)		{
	  /// <summary>&#13;
	  ///  셀의 범위 영역의 글자볼드 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //영역 글자 볼드 설정하기				&#13;
  ///  mySheet.SetRangeFontBold(1, 0, 2, 2, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Bold' type='Boolean' >&#13;
	 ///       볼드 설정 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRangeFontColor = function(Row1, Col1, Row2, Col2)		{
	  /// <summary>&#13;
	  ///  셀의 범위 영역의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //영역 글자 볼드 설정하기				&#13;
  ///  mySheet.SetRangeFontBold(1, 0, 2, 2, 1);				&#13;
  ///  //영역에 글자색 확인하기				&#13;
  ///  mySheet.GetRangeFontColor(1,0,10,10);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRangeFontColor = function(Row1, Col1, Row2, Col2, Color)		{
	  /// <summary>&#13;
	  ///  셀의 범위 영역의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //영역에 글자색 설정하기				&#13;
  ///  mySheet.SetRangeFontColor(1,0,10,10, FF0000);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       WebColor&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRangeText = function(Row1,Col1,Row2,Col2,ColSeparator, RowSeparator)		{
	  /// <summary>&#13;
	  ///  특정 영역의 셀값을 Format이 적용된 형태로 화면에 보여지는 값 그대로 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //영역에 글자색 설정하기				&#13;
  ///  mySheet.SetRangeFontColor(1,0,10,10, FF0000);				&#13;
  ///  //특정 영역의 셀값을 Format이 적용된 형태로 화면에 보여지는 값 그대로 확인한다.				&#13;
  ///  mySheet.GetRangeText(1, 1, 2, 2, |, ^);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='ColSeparator' type='String' >&#13;
	 ///       컬럼과 컬럼 사이를 구분하는 구분자. Default=|&#13;
	 /// </param>&#13;
	 /// <param name='RowSeparator' type='String' >&#13;
	 ///       행과 행 사이를 구분하는 구분자. Default=^&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRangeText = function(sData,Row1,Col1,Row2,Col2, ColSeparator, RowSeparator)		{
	  /// <summary>&#13;
	  ///  특정 영역의 셀값을 Format이 적용된 형태로 화면에 보여지는 값 그대로 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //1,1 셀에 A 를 2,2셀에 D를 설정한다.				&#13;
  ///  mySheet.SetRangeText(A|B^C|D, 1, 1, 2, 2, |, ^);				&#13;
  ///  //1,7 셀부터 5,10 셀까지 ** 로 설정한다.				&#13;
  ///    mySheet.SetRangeText(**, 1, 7, 5, 10);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='sData' type='String' >&#13;
	 ///       문자열&#13;
	 /// </param>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='ColSeparator' type='String' >&#13;
	 ///       컬럼과 컬럼 사이를 구분하는 구분자. Default=|&#13;
	 /// </param>&#13;
	 /// <param name='RowSeparator' type='String' >&#13;
	 ///       행과 행 사이를 구분하는 구분자. Default=^&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRangeValue = function(Row1,Col1,Row2,Col2,ColSeparator,RowSeparator)		{
	  /// <summary>&#13;
	  ///  특정 영역의 셀값을 Format이 적용되지 않은 실제로 저장 시 사용하는 값으로 확인하고, 설정한다&#13;
	  /// Example : 
  ///  //1,1 셀에 A 를 2,2셀에 D를 설정한다.				&#13;
  ///  mySheet.SetRangeText(A|B^C|D, 1, 1, 2, 2, |, ^);				&#13;
  ///  //1,7 셀부터 5,10 셀까지 ** 로 설정한다.				&#13;
  ///    mySheet.SetRangeText(**, 1, 7, 5, 10);				&#13;
  ///  // 특정 영역의 셀값을 Format이 적용되지 않은 실제로 저장 시 사용하는 값으로 확인한다.				&#13;
  ///  mySheet.GetRangeValue(A|B^C|D, 1, 1, 2, 2, |, ^);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='ColSeparator' type='String' >&#13;
	 ///       컬럼과 컬럼 사이를 구분하는 구분자. Default=|&#13;
	 /// </param>&#13;
	 /// <param name='RowSeparator' type='String' >&#13;
	 ///       행과 행 사이를 구분하는 구분자. Default=^&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRangeValue = function(sData,Row1,Col1,Row2,Col2, ColSeparator,RowSeparator)		{
	  /// <summary>&#13;
	  ///  특정 영역의 셀값을 Format이 적용되지 않은 실제로 저장 시 사용하는 값으로 확인하고, 설정한다&#13;
	  /// Example : 
  ///  //1,1 셀에 A 를 2,2셀에 D를 설정한다.				&#13;
  ///  mySheet.SetRangeValue(A|B^C|D, 1, 1, 2, 2, |, ^);				&#13;
  ///  //1,7 셀부터 5,10 셀까지 ** 로 설정한다.				&#13;
  ///  mySheet.SetRangeValue(**, 1, 7, 5, 10);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='sData' type='String' >&#13;
	 ///       문자열&#13;
	 /// </param>&#13;
	 /// <param name='Row1' type='Long' >&#13;
	 ///       범위 시작 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col1' type='Long' >&#13;
	 ///       범위 시작 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Row2' type='Long' >&#13;
	 ///       범위 종료 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col2' type='Long' >&#13;
	 ///       범위 종료 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='ColSeparator' type='String' >&#13;
	 ///       컬럼과 컬럼 사이를 구분하는 구분자. Default=|&#13;
	 /// </param>&#13;
	 /// <param name='RowSeparator' type='String' >&#13;
	 ///       행과 행 사이를 구분하는 구분자. Default=^&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRedrawSum = function()		{
	  /// <summary>&#13;
	  ///  합계 내용 계산 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //1,1 셀에 A 를 2,2셀에 D를 설정한다.				&#13;
  ///  mySheet.SetRangeValue(A|B^C|D, 1, 1, 2, 2, |, ^);				&#13;
  ///  //1,7 셀부터 5,10 셀까지 ** 로 설정한다.				&#13;
  ///  mySheet.SetRangeValue(**, 1, 7, 5, 10);				&#13;
  ///  //합계 내용 계산 여부를 확인한다.				&#13;
  ///  mySheet.GetRedrawSum();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetRedrawSum = function(Redraw)		{
	  /// <summary>&#13;
	  ///  합계 내용 계산 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Redraw' type='Boolean' >&#13;
	 ///       합계행 계산 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.RemoveAll = function()			{
	  /// <summary>&#13;
	  ///  헤더 행을 제외한 모든 데이터 행을 지운다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.RenderSheet = function(Render)			{
	  /// <summary>&#13;
	  ///  행 추가 또는 컬럼 숨김 기능을 동시에 여러 개 사용하는 경우 속도개선을 위해 랜더링을 마지막에 한꺼번에 처리 하기 위한 기능을 한다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 30개의 행추가를 RenderSheet를 이용하여 속도개선 처리				&#13;
  ///  mySheet.RenderSheet(0);				&#13;
  ///  for (var i = 0; i &amp;lt;30; i++) {				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.RenderSheet(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Render' type='Boolean' >&#13;
	 ///       렌더링 여부 (Default=1)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.RemoveEtcData = function()			{
	  /// <summary>&#13;
	  ///  EtcData 객체에 설정되 키와 값을 모두 제가 한다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 30개의 행추가를 RenderSheet를 이용하여 속도개선 처리				&#13;
  ///  mySheet.RenderSheet(0);				&#13;
  ///  for (var i = 0; i &amp;lt;30; i++) {				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.RenderSheet(1);				&#13;
  ///  //EtcData에 설정된 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveEtcData();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.ReNumberSeq = function()			{
	  /// <summary>&#13;
	  ///  데이터 타입이 Seq인 데이터의 순번을 다시 매긴다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 30개의 행추가를 RenderSheet를 이용하여 속도개선 처리				&#13;
  ///  mySheet.RenderSheet(0);				&#13;
  ///  for (var i = 0; i &amp;lt;30; i++) {				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.RenderSheet(1);				&#13;
  ///  //EtcData에 설정된 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveEtcData();				&#13;
  ///  //컬럼의 Type이 Seq인 컬럼의 숫자를 1부터 다시 메긴다.				&#13;
  ///  mySheet.ReNumberSeq();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.Reset = function(KeepTheme)			{
	  /// <summary>&#13;
	  ///  IBSheet에 설정된 모든 기본 속성을 제거하고 초기상태로 변경한다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 30개의 행추가를 RenderSheet를 이용하여 속도개선 처리				&#13;
  ///  mySheet.RenderSheet(0);				&#13;
  ///  for (var i = 0; i &amp;lt;30; i++) {				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.RenderSheet(1);				&#13;
  ///  //EtcData에 설정된 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveEtcData();				&#13;
  ///  //컬럼의 Type이 Seq인 컬럼의 숫자를 1부터 다시 메긴다.				&#13;
  ///  mySheet.ReNumberSeq();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.Reset();				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='KeepTheme' type='Boolean' >&#13;
	 ///       적용되어 있는 테마 유지 여부,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ReturnCellData = function(Row,Col)			{
	  /// <summary>&#13;
	  ///  조회된 데이터의 특정 셀의 값을 트랜잭션이 발생하기 이전의 조회된 데이터 되돌린다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 30개의 행추가를 RenderSheet를 이용하여 속도개선 처리				&#13;
  ///  mySheet.RenderSheet(0);				&#13;
  ///  for (var i = 0; i &amp;lt;30; i++) {				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.RenderSheet(1);				&#13;
  ///  //EtcData에 설정된 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveEtcData();				&#13;
  ///  //컬럼의 Type이 Seq인 컬럼의 숫자를 1부터 다시 메긴다.				&#13;
  ///  mySheet.ReNumberSeq();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.Reset();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.ReturnCellData(Row,Col);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       데이터 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       데이터 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ReturnColumnPos = function()			{
	  /// <summary>&#13;
	  ///  이동된 컬럼의 위치를 처음 위치로 되돌린다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 30개의 행추가를 RenderSheet를 이용하여 속도개선 처리				&#13;
  ///  mySheet.RenderSheet(0);				&#13;
  ///  for (var i = 0; i &amp;lt;30; i++) {				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.RenderSheet(1);				&#13;
  ///  //EtcData에 설정된 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveEtcData();				&#13;
  ///  //컬럼의 Type이 Seq인 컬럼의 숫자를 1부터 다시 메긴다.				&#13;
  ///  mySheet.ReNumberSeq();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.Reset();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.ReturnCellData(Row,Col);				&#13;
  ///  //초기 위치로 되돌린다.				&#13;
  ///  mySheet.ReturnColumnPos();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.ReturnData = function(Row)			{
	  /// <summary>&#13;
	  ///  특정 행의 데이터를 조회 상태의 문자열로 변경한다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 30개의 행추가를 RenderSheet를 이용하여 속도개선 처리				&#13;
  ///  mySheet.RenderSheet(0);				&#13;
  ///  for (var i = 0; i &amp;lt;30; i++) {				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.RenderSheet(1);				&#13;
  ///  //EtcData에 설정된 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveEtcData();				&#13;
  ///  //컬럼의 Type이 Seq인 컬럼의 숫자를 1부터 다시 메긴다.				&#13;
  ///  mySheet.ReNumberSeq();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.Reset();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.ReturnCellData(Row,Col);				&#13;
  ///  //초기 위치로 되돌린다.				&#13;
  ///  mySheet.ReturnColumnPos();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.ReturnData(2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       데이터 행의 Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowBackColor = function(Row)		{
	  /// <summary>&#13;
	  ///  행 전체의 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //변경해야 할 데이터가 많은 경우 사용				&#13;
  ///  mySheet.SetRedrawSum(0);				&#13;
  ///  for(var i=1; i&amp;lt;100; i++) mySheet.SetCellValue(i,1, 10000, 0);				&#13;
  ///  //RedrawSum 가 1가 되는 순간 합계와 데이터가 한꺼번에 표시				&#13;
  ///  mySheet.SetRedrawSum(1);				&#13;
  ///  // 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveAll();				&#13;
  ///  // 30개의 행추가를 RenderSheet를 이용하여 속도개선 처리				&#13;
  ///  mySheet.RenderSheet(0);				&#13;
  ///  for (var i = 0; i &amp;lt;30; i++) {				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  }				&#13;
  ///  mySheet.RenderSheet(1);				&#13;
  ///  //EtcData에 설정된 모든 데이터 지우기				&#13;
  ///  mySheet.RemoveEtcData();				&#13;
  ///  //컬럼의 Type이 Seq인 컬럼의 숫자를 1부터 다시 메긴다.				&#13;
  ///  mySheet.ReNumberSeq();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.Reset();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.ReturnCellData(Row,Col);				&#13;
  ///  //초기 위치로 되돌린다.				&#13;
  ///  mySheet.ReturnColumnPos();				&#13;
  ///  //초기 상태로 변경하기				&#13;
  ///  mySheet.ReturnData(2);				&#13;
  ///  //1행의 배경색을 확인한다.				&#13;
  ///  mySheet.GetRowBackColor(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowBackColor = function(Row,BackColor)		{
	  /// <summary>&#13;
	  ///  행 전체의 배경색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //1행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColor(1,#C0C0C0);				&#13;
  ///  //3행의 배경색을 빨강색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColor(1,#FF0000);				&#13;
  ///  //2행 배경색을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColor(2, mySheet.GetRowBackColor(1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       Row Index&#13;
	 /// </param>&#13;
	 /// <param name='BackColor' type='String' >&#13;
	 ///       WebColor 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowBackColorD = function()		{
	  /// <summary>&#13;
	  ///  각행의 트렌젝션 상태가 삭제인 행의 배경색을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //1행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColor(1,#C0C0C0);				&#13;
  ///  //3행의 배경색을 빨강색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColor(1,#FF0000);				&#13;
  ///  //2행 배경색을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColor(2, mySheet.GetRowBackColor(1));				&#13;
  ///  //트렌젝션상태가 삭제인 행의 배경색을 확인한다.				&#13;
  ///  mySheet.GetRowBackColorD();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetRowBackColorD = function(BackColor)		{
	  /// <summary>&#13;
	  ///  각행의 트렌젝션 상태가 삭제인 행의 배경색을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //트렌젝션상태가 삭제인 행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorD(#C0C0C0);				&#13;
  ///  //트렌젝션상태가 삭제인 행을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorD(mySheet.GetRowBackColor(1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='BackColor' type='String' >&#13;
	 ///       WebColor값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowBackColorI = function()		{
	  /// <summary>&#13;
	  ///  각행의 트랜잭션 상태가 입력인 행의 배경색을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //트렌젝션상태가 삭제인 행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorD(#C0C0C0);				&#13;
  ///  //트렌젝션상태가 삭제인 행을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorD(mySheet.GetRowBackColor(1));				&#13;
  ///  //트렌젝션상태가 입력인 행의 배경색을 확인한다.				&#13;
  ///  mySheet.GetRowBackColorI();				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='BackColor' type='String' >&#13;
	 ///       WebColor 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowBackColorI = function(BackColor)		{
	  /// <summary>&#13;
	  ///  각행의 트랜잭션 상태가 입력인 행의 배경색을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //트렌젝션상태가 입력인 행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorI(#C0C0C0);				&#13;
  ///  //트렌젝션상태가 입력인 행을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorI(mySheet.GetRowBackColor(1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='BackColor' type='String' >&#13;
	 ///       WebColor 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowBackColorU = function()		{
	  /// <summary>&#13;
	  ///  각행의 트랜잭션 상태가 수정인 행의 배경색을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //트렌젝션상태가 입력인 행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorI(#C0C0C0);				&#13;
  ///  //트렌젝션상태가 입력인 행을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorI(mySheet.GetRowBackColor(1));				&#13;
  ///  //트렌젝션상태가 수정인 행의 배경색을 확인한다.				&#13;
  ///  mySheet.GetRowBackColorU();				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='BackColor' type='String' >&#13;
	 ///       WebColor 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowBackColorU = function(BackColor)		{
	  /// <summary>&#13;
	  ///  각행의 트랜잭션 상태가 수정인 행의 배경색을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //트렌젝션상태가 수정인 행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorU(#C0C0C0);				&#13;
  ///  //트렌젝션상태가 수정인 행을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorU(mySheet.GetRowBackColor(1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='BackColor' type='String' >&#13;
	 ///       WebColor 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.RowCount = function(Status)			{
	  /// <summary>&#13;
	  ///  전체 데이터 행 개수를 확인한다&#13;
	  /// Example : 
  ///  //트렌젝션상태가 수정인 행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorU(#C0C0C0);				&#13;
  ///  //트렌젝션상태가 수정인 행을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorU(mySheet.GetRowBackColor(1));				&#13;
  ///  alert(전체 건수 는  + mySheet.RowCount() +  건입니다. );				&#13;
  ///  alert(조회 건수 는  + mySheet.RowCount(R) +  건입니다. );				&#13;
  ///  alert(입력 건수 는  + mySheet.RowCount(I) +  건입니다. );				&#13;
  ///  alert(수정 건수 는  + mySheet.RowCount(U) +  건입니다. );				&#13;
  ///  alert(삭제 건수 는  + mySheet.RowCount(D) +  건입니다. );				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Status' type='String' >&#13;
	 ///       트랜잭션 코드. Default=전체건수&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.RowDelete = function(Row,Confirm)			{
	  /// <summary>&#13;
	  ///  특정의 단일 또는 다중 데이터 행을 삭제 한다&#13;
	  /// Example : 
  ///  //트렌젝션상태가 수정인 행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorU(#C0C0C0);				&#13;
  ///  //트렌젝션상태가 수정인 행을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorU(mySheet.GetRowBackColor(1));				&#13;
  ///  alert(전체 건수 는  + mySheet.RowCount() +  건입니다. );				&#13;
  ///  alert(조회 건수 는  + mySheet.RowCount(R) +  건입니다. );				&#13;
  ///  alert(입력 건수 는  + mySheet.RowCount(I) +  건입니다. );				&#13;
  ///  alert(수정 건수 는  + mySheet.RowCount(U) +  건입니다. );				&#13;
  ///  alert(삭제 건수 는  + mySheet.RowCount(D) +  건입니다. );				&#13;
  ///  //확인 메시지 없이 1행 삭제하기				&#13;
  ///  mySheet.RowDelete(1, 0);				&#13;
  ///  // 3, 7, 10번 행 삭제하기				&#13;
  ///  mySheet.RowDelete(3|7|10);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number/String' >&#13;
	 ///       삭제할 행의 Row Index, 또는 행의 Index를 | 구분자로 연결한 문자열&#13;
	 /// </param>&#13;
	 /// <param name='Confirm' type='Boolean' >&#13;
	 ///       삭제 전 메세지 표시 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowDraggable = function(row)		{
	  /// <summary>&#13;
	  ///  특정 행의 마우스 드래그 가능여부를 설정하거나 확인 한다&#13;
	  /// Example : 
  ///  //트렌젝션상태가 수정인 행의 배경색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorU(#C0C0C0);				&#13;
  ///  //트렌젝션상태가 수정인 행을 1행 배경색으로 설정한다.				&#13;
  ///  mySheet.SetRowBackColorU(mySheet.GetRowBackColor(1));				&#13;
  ///  alert(전체 건수 는  + mySheet.RowCount() +  건입니다. );				&#13;
  ///  alert(조회 건수 는  + mySheet.RowCount(R) +  건입니다. );				&#13;
  ///  alert(입력 건수 는  + mySheet.RowCount(I) +  건입니다. );				&#13;
  ///  alert(수정 건수 는  + mySheet.RowCount(U) +  건입니다. );				&#13;
  ///  alert(삭제 건수 는  + mySheet.RowCount(D) +  건입니다. );				&#13;
  ///  //확인 메시지 없이 1행 삭제하기				&#13;
  ///  mySheet.RowDelete(1, 0);				&#13;
  ///  // 3, 7, 10번 행 삭제하기				&#13;
  ///  mySheet.RowDelete(3|7|10);				&#13;
  ///  // Drag 가능여부 설정 값 확인				&#13;
  ///  var drag = mySheet.GetRowDraggable(3);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='row' type='Long' >&#13;
	 ///       행의 Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowDraggable = function(row, drag)		{
	  /// <summary>&#13;
	  ///  특정 행의 마우스 드래그 가능여부를 설정하거나 확인 한다&#13;
	  /// Example : 
  ///  // 3행의 Drag 가능여부 설정 (마우스 드래깅시 행 드래깅 가능여부 설정)				&#13;
  ///  mySheet.SetRowDraggable(3, 1); // 드래그 가능				&#13;
  ///  mySheet.SetRowDraggable(3, 0); // 드래그 불가				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='row' type='Long' >&#13;
	 ///       행의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='drag' type='Boolean' >&#13;
	 ///       드래그 가능여부 설정 값 (Default=1)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowEditable = function(Row)		{
	  /// <summary>&#13;
	  ///  특정 행의 Edit 가능 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 3행의 Drag 가능여부 설정 (마우스 드래깅시 행 드래깅 가능여부 설정)				&#13;
  ///  mySheet.SetRowDraggable(3, 1); // 드래그 가능				&#13;
  ///  mySheet.SetRowDraggable(3, 0); // 드래그 불가				&#13;
  ///  //1행의 Edit 가능 여부를 확인한다.				&#13;
  ///  mySheet.GetRowEditable(1,0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowEditable = function(Row, Editable)		{
	  /// <summary>&#13;
	  ///  특정 행의 Edit 가능 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //1행의 Edit 가능 여부를 0으로 설정한다.				&#13;
  ///  mySheet.SetRowEditable(1,0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Editable' type='Boolean' >&#13;
	 ///       행의 Edit 가능 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowExpanded = function(Row)		{
	  /// <summary>&#13;
	  ///  트리 형태 일 때 행의 Child Level이 펼쳐져 있는 상태인지 여부를 확인하거나 펼침 여부를 설정한다&#13;
	  /// Example : 
  ///  //1행의 Edit 가능 여부를 0으로 설정한다.				&#13;
  ///  mySheet.SetRowEditable(1,0);				&#13;
  ///  //2행의 펼쳐져 있지 않다면, 2행의 트리를 펼친다.				&#13;
  ///  if(mySheet.GetRowExpanded(2) == 0){				&#13;
  ///      mySheet.SetRowExpanded(2, 1);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowExpanded = function(Row, Expand, Event)		{
	  /// <summary>&#13;
	  ///  트리 형태 일 때 행의 Child Level이 펼쳐져 있는 상태인지 여부를 확인하거나 펼침 여부를 설정한다&#13;
	  /// Example : 
  ///  //2행의 펼쳐져 있지 않다면, 2행의 트리를 펼친다.				&#13;
  ///  if(mySheet.GetRowExpanded(2) == 0){				&#13;
  ///      mySheet.SetRowExpanded(2, 1);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Expand' type='Boolean' >&#13;
	 ///       자식행의 펼쳐짐 여부&#13;
	 /// </param>&#13;
	 /// <param name='Event' type='Boolean' >&#13;
	 ///       관련 이벤트 발생여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowFontColor = function(Row)		{
	  /// <summary>&#13;
	  ///  행 전체의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //2행의 펼쳐져 있지 않다면, 2행의 트리를 펼친다.				&#13;
  ///  if(mySheet.GetRowExpanded(2) == 0){				&#13;
  ///      mySheet.SetRowExpanded(2, 1);				&#13;
  ///  }				&#13;
  ///  //1행의 글자색을 확인한다.				&#13;
  ///  mySheet.GetRowFontColor(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowFontColor = function(Row,Color)		{
	  /// <summary>&#13;
	  ///  행 전체의 글자색을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //1행의 글자색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowFontColor(1, 192,192,192);				&#13;
  ///  //2행 글자색을 1행 글자색으로 설정한다.				&#13;
  ///  mySheet.SetRowFontColor(2,mySheet.GetRowFontColor(1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       WebColor 색상 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowHeight = function(Row)		{
	  /// <summary>&#13;
	  ///  특정 행의 높이를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //1행의 글자색을 회색으로 설정한다.				&#13;
  ///  mySheet.SetRowFontColor(1, 192,192,192);				&#13;
  ///  //2행 글자색을 1행 글자색으로 설정한다.				&#13;
  ///  mySheet.SetRowFontColor(2,mySheet.GetRowFontColor(1));				&#13;
  ///  //1행의 높이를 확인한다.				&#13;
  ///  mySheet.GetRowHeight(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       설정할 행 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowHeight = function(Row, Height)		{
	  /// <summary>&#13;
	  ///  특정 행의 높이를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //50 픽셀로 높이 수정				&#13;
  ///  mySheet.SetRowHeight(1, 50);				&#13;
  ///  //3행의 높이를 2행의 높이와 동일하게 변경				&#13;
  ///  mySheet.SetRowHeight(3, mySheet.GetRowHeight(2));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       설정할 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Height' type='Integer' >&#13;
	 ///       설정할 행 높이&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowHeightMax = function()		{
	  /// <summary>&#13;
	  ///  모든 데이터 행의 최대 높이를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //50 픽셀로 높이 수정				&#13;
  ///  mySheet.SetRowHeight(1, 50);				&#13;
  ///  //3행의 높이를 2행의 높이와 동일하게 변경				&#13;
  ///  mySheet.SetRowHeight(3, mySheet.GetRowHeight(2));				&#13;
  ///  //설정한 최소 높이값 확인한다.				&#13;
  ///  mySheet.GetRowHeightMax();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetRowHeightMax = function(MaxHeight)		{
	  /// <summary>&#13;
	  ///  모든 데이터 행의 최대 높이를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //최소 높이를 50픽셀로 설정한다.				&#13;
  ///  mySheet.SetRowHeightMax(50);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='MaxHeight' type='Integer' >&#13;
	 ///       해당 행에 설정 할 최대 높이값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowHeightMin = function()		{
	  /// <summary>&#13;
	  ///  모든 행의 최소 높이를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //최소 높이를 50픽셀로 설정한다.				&#13;
  ///  mySheet.SetRowHeightMax(50);				&#13;
  ///  //설정한 최소 높이값 확인한다.				&#13;
  ///  mySheet.GetRowHeightMin();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetRowHeightMin = function(MinHeight)		{
	  /// <summary>&#13;
	  ///  모든 행의 최소 높이를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //최소 높이를 10픽셀로 설정한다.				&#13;
  ///  mySheet.SetRowHeightMin(10);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='MinHeight' type='Integer' >&#13;
	 ///       행에 설정 할 최소 높이값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowHidden = function(Row)		{
	  /// <summary>&#13;
	  ///  행의 숨기여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //최소 높이를 10픽셀로 설정한다.				&#13;
  ///  mySheet.SetRowHeightMin(10);				&#13;
  ///  //1행이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetRowHidden(1)){				&#13;
  ///   mySheet.SetRowHidden(1,0);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long /String' >&#13;
	 ///       특정 행의 Row Index 혹은&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowHidden = function(Row,Hidden)		{
	  /// <summary>&#13;
	  ///  행의 숨기여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //1행이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetRowHidden(1)){				&#13;
  ///   mySheet.SetRowHidden(1,0);				&#13;
  ///  }				&#13;
  ///  //다수의 행을 동시에 숨기는 경우				&#13;
  ///  mySheet.SetRowHidden(2|5|7|10, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long /String' >&#13;
	 ///       특정 행의 Row Index 혹은&#13;
	 /// </param>&#13;
	 /// <param name='Hidden' type='Boolean' >&#13;
	 ///       숨김여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowJson = function(Row)			{
	  /// <summary>&#13;
	  ///  행의 데이터를 각 컬럼의 SaveName을 이용하여 Json 객체로 생성하여 반환하거나 설정한다&#13;
	  /// Example : 
  ///  //1행이 숨겨진 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetRowHidden(1)){				&#13;
  ///   mySheet.SetRowHidden(1,0);				&#13;
  ///  }				&#13;
  ///  //다수의 행을 동시에 숨기는 경우				&#13;
  ///  mySheet.SetRowHidden(2|5|7|10, 1);				&#13;
  ///  // 1행의 Json 객체를 가져온다.				&#13;
  ///  var rowJosn = mySheet.GetRowJson(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowJson = function(Row, Data)			{
	  /// <summary>&#13;
	  ///  행의 데이터를 각 컬럼의 SaveName을 이용하여 Json 객체로 생성하여 반환하거나 설정한다&#13;
	  /// Example : 
  ///  // 1행을 해당 Json 객체로 설정한다.				&#13;
  ///  var data = {Data:[[ {sName:”홍길동”, sAge:20} ]]};				&#13;
  ///  var rowJosn = mySheet.SetRowJson(1, data);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Data' type='Object' >&#13;
	 ///       조회JSON 문자열&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowLevel = function(Row)		{
	  /// <summary>&#13;
	  ///  행의 트리 레벨을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 1행을 해당 Json 객체로 설정한다.				&#13;
  ///  var data = {Data:[[ {sName:”홍길동”, sAge:20} ]]};				&#13;
  ///  var rowJosn = mySheet.SetRowJson(1, data);				&#13;
  ///  //1행의 트리 레벨을 확인한다.				&#13;
  ///  mySheet.GetRowLevel(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowLevel = function(Row,Level)		{
	  /// <summary>&#13;
	  ///  행의 트리 레벨을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //트리 레벨을 1 증가 시킨다.				&#13;
  ///  mySheet.SetRowLevel(1,mySheet.GetRowLevel(1) +1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Level' type='Integer' >&#13;
	 ///       해당 행의 트리 레벨값(Set)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowMerge = function(Row)		{
	  /// <summary>&#13;
	  ///  행의 가로 머지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //트리 레벨을 1 증가 시킨다.				&#13;
  ///  mySheet.SetRowLevel(1,mySheet.GetRowLevel(1) +1);				&#13;
  ///  // 첫번째 행의 가로 머지를 허용여부를 확인한다.				&#13;
  ///  mySheet.GetRowMerge(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowMerge = function(Row, Merge)		{
	  /// <summary>&#13;
	  ///  행의 가로 머지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 첫번째 행의 가로 머지를 허용하도록 설정한다.				&#13;
  ///  mySheet.SetRowMerge(1, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Merge' type='Boolean' >&#13;
	 ///       가로머지 허용 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.RowSaveStr = function(Row)			{
	  /// <summary>&#13;
	  ///  행의 데이터를 각 컬럼의 SaveName을 이용하여 저장 시 사용되는 Query String 형태로 조합하여 반환한다&#13;
	  /// Example : 
  ///  // 첫번째 행의 가로 머지를 허용하도록 설정한다.				&#13;
  ///  mySheet.SetRowMerge(1, 1);				&#13;
  ///  // 1행의 SaveString을 가져온다.				&#13;
  ///  var RowParam = mySheet.RowSaveStr(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 행의 Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetRowSumable = function(Row)		{
	  /// <summary>&#13;
	  ///  행의 합계 계산 대상인지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 첫번째 행의 가로 머지를 허용하도록 설정한다.				&#13;
  ///  mySheet.SetRowMerge(1, 1);				&#13;
  ///  // 1행의 SaveString을 가져온다.				&#13;
  ///  var RowParam = mySheet.RowSaveStr(1);				&#13;
  ///  //1행에 대한 합계 계산 대상 여부를 확인 한다..				&#13;
  ///  var sumable = mySheet.GetRowSumable(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowSumable = function(Row, Sum)		{
	  /// <summary>&#13;
	  ///  행의 합계 계산 대상인지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //5행을 합계계산에서 제외 한다.				&#13;
  ///  mySheet.SetRowSumable(5, 0);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Sum' type='Boolean' >&#13;
	 ///       합계 계산 포함 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.RowTop = function(Row)			{
	  /// <summary>&#13;
	  ///  특정 행의 상단 시작위치의 offsetTop 값을 확인 한다&#13;
	  /// Example : 
  ///  //5행을 합계계산에서 제외 한다.				&#13;
  ///  mySheet.SetRowSumable(5, 0);				&#13;
  ///  }				&#13;
  ///  //행의 상단 위치를 파악한다.				&#13;
  ///  var iTop = mySheet.RowTop(1);				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SaveNameCol = function(SaveName)			{
	  /// <summary>&#13;
	  ///  InitColumns에서 설정된 SaveName을 이용하여 해당하는 컬럼 번호를 확인한다&#13;
	  /// Example : 
  ///  //5행을 합계계산에서 제외 한다.				&#13;
  ///  mySheet.SetRowSumable(5, 0);				&#13;
  ///  }				&#13;
  ///  //행의 상단 위치를 파악한다.				&#13;
  ///  var iTop = mySheet.RowTop(1);				&#13;
  ///  // 변수명으로 컬럼 번호를 가져온다.				&#13;
  ///  var Col = mySheet.SaveNameCol(stockNm);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='SaveName' type='String' >&#13;
	 ///       저장 변수명&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSavingImage = function()		{
	  /// <summary>&#13;
	  ///  저장 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //5행을 합계계산에서 제외 한다.				&#13;
  ///  mySheet.SetRowSumable(5, 0);				&#13;
  ///  }				&#13;
  ///  //행의 상단 위치를 파악한다.				&#13;
  ///  var iTop = mySheet.RowTop(1);				&#13;
  ///  // 변수명으로 컬럼 번호를 가져온다.				&#13;
  ///  var Col = mySheet.SaveNameCol(stockNm);				&#13;
  ///  //현재 설정되어있는 저장 중 대기 이미지 경로를 확인한다.				&#13;
  ///  alert(mySheet.GetSavingImage());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSavingImage = function(Url)		{
	  /// <summary>&#13;
	  ///  저장 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //저장 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetSavingImage( /sheet/imgSave.gif);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       이미지 URL&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSearchingImage = function()		{
	  /// <summary>&#13;
	  ///  조회 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //저장 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetSavingImage( /sheet/imgSave.gif);				&#13;
  ///  //현재 설정되어있는 조회 중 대기 이미지 경로를 확인한다.				&#13;
  ///  alert(mySheet.GetSearchingImage());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSearchingImage = function(Url)		{
	  /// <summary>&#13;
	  ///  조회 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //저장 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetSearchingImage( /sheet/imgSearch.gif);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       이미지 URL&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SearchRows = function()			{
	  /// <summary>&#13;
	  ///  조회 XML을 통해서 조회된 전체 행 개수를 확인한다&#13;
	  /// Example : 
  ///  //저장 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetSearchingImage( /sheet/imgSearch.gif);				&#13;
  ///  //행 개수 확인				&#13;
  ///  alert(mySheet.SearchRows());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SelectCell = function(Row, Col, Opt)			{
	  /// <summary>&#13;
	  ///  특정 셀을 선택한다&#13;
	  /// Example : 
  ///  //저장 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetSearchingImage( /sheet/imgSearch.gif);				&#13;
  ///  //행 개수 확인				&#13;
  ///  alert(mySheet.SearchRows());				&#13;
  ///  // 2행을 선택하고 그 행 아래에 새로운 행 생성하기				&#13;
  ///  mySheet.SelectCell(2, 0);  				&#13;
  ///  mySheet.DataInsert();				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       선택할 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       선택할 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Edit' type='Boolean' >&#13;
	 ///       셀 선택시 편집모드 여부를 설정&#13;
	 /// </param>&#13;
	 /// <param name='Opt.EditText' type='String' >&#13;
	 ///       Edit 속성이 1일때 편집상태의 문자열 설정.&#13;
	 /// </param>&#13;
	 /// <param name='Opt.SelectEditText' type='Boolean' >&#13;
	 ///       편집시 기존 값에 대한 select 처리 여부&#13;
	 /// </param>&#13;
	 /// <param name='Opt.Event' type='Boolean' >&#13;
	 ///       OnSelectCell 이벤트 발생 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSelectCol = function()		{
	  /// <summary>&#13;
	  ///  현재 선택된 셀의 컬럼 Index를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //저장 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetSearchingImage( /sheet/imgSearch.gif);				&#13;
  ///  //행 개수 확인				&#13;
  ///  alert(mySheet.SearchRows());				&#13;
  ///  // 2행을 선택하고 그 행 아래에 새로운 행 생성하기				&#13;
  ///  mySheet.SelectCell(2, 0);  				&#13;
  ///  mySheet.DataInsert();				&#13;
  ///  //선택된 컬럼을 확인한다.				&#13;
  ///  alert(mySheet.GetSelectCol());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSelectCol = function(Col, UseEvent)		{
	  /// <summary>&#13;
	  ///  현재 선택된 셀의 컬럼 Index를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //인덱스가  2인 컬럼을 선택한다.				&#13;
  ///  mySheet.SetSelectCol(2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       현재 선택된 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='UseEvent' type='Boolean' >&#13;
	 ///       OnSelectCell 이벤트 발생 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSelectionMode = function()		{
	  /// <summary>&#13;
	  ///  셀 선택 모드를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //인덱스가  2인 컬럼을 선택한다.				&#13;
  ///  mySheet.SetSelectCol(2);				&#13;
  ///  // 현재 설정되어 있는 선택 모드를 확인한다.				&#13;
  ///  alert(mySheet.GetSelectionMode());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSelectionMode = function(Mode)		{
	  /// <summary>&#13;
	  ///  셀 선택 모드를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //셀 단위 선택으로 설정한다.				&#13;
  ///  mySheet.SetSelectionMode(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Integer' >&#13;
	 ///       선택 모드 종류&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSelectionSummaryInfoElement = function()		{
	  /// <summary>&#13;
	  ///  선택 요약 정보를 시트 외부의 DOM 엘리먼트에 표현하기 위한 설정을 하거나 설정된 엘리먼트를 확인 한다&#13;
	  /// Example : 
  ///  //셀 단위 선택으로 설정한다.				&#13;
  ///  mySheet.SetSelectionMode(0);				&#13;
  ///  // 선택요약정보를 표시할 DOM 엘리먼트 객체를 확인 한다.				&#13;
  ///  Var elem = mySheet.GetSelectionSummaryInfoElement();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSelectionSummaryInfoElement = function(Element)		{
	  /// <summary>&#13;
	  ///  선택 요약 정보를 시트 외부의 DOM 엘리먼트에 표현하기 위한 설정을 하거나 설정된 엘리먼트를 확인 한다&#13;
	  /// Example : 
  ///  // 선택요약정보를 표시할 DOM 엘리먼트를 설정한다.				&#13;
  ///  // (summaryElem 아이디의 DOM 엘리먼트가 생성되어 있어야 함)				&#13;
  ///  mySheet.SetSelectionSummaryInfoElement(summaryElem);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Element' type='Object/' >&#13;
	 ///       설정할 DOM 엘리먼트 객체 또는 Id&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSelectRow = function()		{
	  /// <summary>&#13;
	  ///  현재 선택된 셀의 행 Index를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 선택요약정보를 표시할 DOM 엘리먼트를 설정한다.				&#13;
  ///  // (summaryElem 아이디의 DOM 엘리먼트가 생성되어 있어야 함)				&#13;
  ///  mySheet.SetSelectionSummaryInfoElement(summaryElem);				&#13;
  ///  }				&#13;
  ///  //선택된 행을 확인한다.				&#13;
  ///  alert(mySheet.GetSelectRow());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSelectRow = function(Row, UseEvent)		{
	  /// <summary>&#13;
	  ///  현재 선택된 셀의 행 Index를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //인덱스가 2인 행을 선택한다.				&#13;
  ///  mySheet.SetSelectRow(2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       선택할 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='UseEvent' type='Boolean' >&#13;
	 ///       OnSelectCell 이벤트 발생 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSendComboData = function(DataRow, Col)		{
	  /// <summary>&#13;
	  ///  데이터 타입이 Combo일때 서버로 전송되는 데이터를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //인덱스가 2인 행을 선택한다.				&#13;
  ///  mySheet.SetSelectRow(2);				&#13;
  ///  //3컬럼에 대해서 저장시 콤보 전송 형식을 알아온다.				&#13;
  ///    mySheet.GetSendComboData(0,3);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DataRow' type='Number' >&#13;
	 ///       단위 데이터 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       대상 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetSendComboData = function(DataRow, Col, Type)		{
	  /// <summary>&#13;
	  ///  데이터 타입이 Combo일때 서버로 전송되는 데이터를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DataRow' type='Long' >&#13;
	 ///       단위 데이터 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       특정 컬럼의 Column Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Type' type='String' >&#13;
	 ///       서버 전송 옵션 설정&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetBlur = function()			{
	  /// <summary>&#13;
	  ///  시트에 포커스를 뺀다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetCellImageStyle = function(Row, Col, Style)			{
	  /// <summary>&#13;
	  ///  Image 속성을 사용하는 경우 해당 셀의 이미지에 대한 설정을 한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Logn/String' >&#13;
	 ///       대상 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Style' type='Object' >&#13;
	 ///       셀의 이미지관련 속성 객체&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetColProperty = function(DataRow, Col, Prop)			{
	  /// <summary>&#13;
	  ///  InitColums Method를 통해 정의후 특정 컬럼의 속성 정의를 동적으로 변경하여 사용 하고자 하는 경우에 이 함수를 사용한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DataRow' type='Number' >&#13;
	 ///       단위데이터행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       대상 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Prop' type='Object' >&#13;
	 ///       컬럼의 속성 정의 객체&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetConfig = function(cfg)			{
	  /// <summary>&#13;
	  ///  시트 초기화시 조회 방식와 틀고정 위치 및 기본적인 설정을 처리한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='cfg' type='Object' >&#13;
	 ///       전달되는 인자의 형식은 JSON 타입으로 설정 하고자 하는 정보를 JSON 형태로 구성하여 전달한다.&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetDown2ExcelConfig = function(cfg)			{
	  /// <summary>&#13;
	  ///  엑셀 다운시 기본적인 설정을 처리한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='cfg' type='json' >&#13;
	 ///       전달되는 인자의 형식은 JSON 타입으로 설정 하고자 하는 정보를 JSON 형태로 구성하여 전달한다.&#13;
	 /// </param>&#13;
	 /// <param name='AutoSizeColumn' type='bool' >&#13;
	 ///       Default=0(컬럼 넓이 자동 조절 안함)&#13;
	 /// </param>&#13;
	 /// <param name='CheckBoxOffValue' type='String' >&#13;
	 ///       체크박스의 체크 해제시의 값&#13;
	 /// </param>&#13;
	 /// <param name='CheckBoxOnValue' type='String' >&#13;
	 ///       체크박스의 체크시의 값&#13;
	 /// </param>&#13;
	 /// <param name='ComboValidation' type='bool' >&#13;
	 ///       콤보의 드롭다운 형식 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownCols' type='String' >&#13;
	 ///       다운로드 받을 열들을 | 로 연결. Default=””(모두 받음)&#13;
	 /// </param>&#13;
	 /// <param name='DownCombo' type='String' >&#13;
	 ///       콤보의 TEXT/CODE 형태의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownHeader' type='bool' >&#13;
	 ///       헤더의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='DownRows' type='String' >&#13;
	 ///       다운로드 받을 행들을 | 로 연결. Default=””(모두 받음)&#13;
	 /// </param>&#13;
	 /// <param name='DownSum' type='bool' >&#13;
	 ///       합계의 다운로드 여부&#13;
	 /// </param>&#13;
	 /// <param name='ExcelFontSize' type='Integer' >&#13;
	 ///       폰트크기 설정&#13;
	 /// </param>&#13;
	 /// <param name='ExcelRowHeight' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParam' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='ExtendParamMethod' type='String' >&#13;
	 ///       Default=GET&#13;
	 /// </param>&#13;
	 /// <param name='FileName' type='String' >&#13;
	 ///       저장할 파일 명&#13;
	 /// </param>&#13;
	 /// <param name='HiddenColumn' type='bool' >&#13;
	 ///       열숨김 반영 여부.&#13;
	 /// </param>&#13;
	 /// <param name='KeyFieldMark' type='bool' >&#13;
	 ///       KeyField 마크(*)를 다운 여부&#13;
	 /// </param>&#13;
	 /// <param name='Merge' type='bool' >&#13;
	 ///       머지의 다운로드 적용 여부&#13;
	 /// </param>&#13;
	 /// <param name='NumberTypeToText' type='bool' >&#13;
	 ///       숫자타입 셀 데이터를 문자 타입으로 다운로드 받을지 여부.&#13;
	 /// </param>&#13;
	 /// <param name='OnlyHeaderMerge' type='bool' >&#13;
	 ///       헤더만 머지할지의 여부&#13;
	 /// </param>&#13;
	 /// <param name='SheetDesign' type='bool' >&#13;
	 ///       디자인 다운로드 적용 여부&#13;
	 /// </param>&#13;
	 /// <param name='SheetName' type='String' >&#13;
	 ///       엑셀WorkSheet이름, Default=”Sheet”&#13;
	 /// </param>&#13;
	 /// <param name='SheetNo' type='Integer' >&#13;
	 ///       템플릿으로 사용할 엑셀 WorkSheet 번호.&#13;
	 /// </param>&#13;
	 /// <param name='StartCol' type='Integer' >&#13;
	 ///       템플릿 적용 다운로드 시 엑셀 파일내 데이터를 쓰기 시작할 컬럼 번호&#13;
	 /// </param>&#13;
	 /// <param name='StartRow' type='Integer' >&#13;
	 ///       템플릿 적용 다운로드 시 엑셀 파일내 데이터를 쓰기 시작할 행 번호&#13;
	 /// </param>&#13;
	 /// <param name='TempFile' type='String' >&#13;
	 ///       템플릿으로 사용할 엑셀 파일명파일명&#13;
	 /// </param>&#13;
	 /// <param name='TextToGeneral' type='bool' >&#13;
	 ///       Text 타입의 엑셀 서식 형식&#13;
	 /// </param>&#13;
	 /// <param name='TitleText' type='String' >&#13;
	 ///       Default=””(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='TreeLevel' type='bool' >&#13;
	 ///       Default=0(다운 안받음)&#13;
	 /// </param>&#13;
	 /// <param name='URL' type='String' >&#13;
	 ///       Default="(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='UserMerge' type='String' >&#13;
	 ///       Default=””(사용안함)&#13;
	 /// </param>&#13;
	 /// <param name='WordWrap' type='bool' >&#13;
	 ///       Default=1(줄바꿈 허용)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetEndEdit = function(Save)			{
	  /// <summary>&#13;
	  ///  셀 편집을 종료 한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Save' type='Boolean' >&#13;
	 ///       편집중인 내용 저장 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetFilterOption = function(Col, Option)			{
	  /// <summary>&#13;
	  ///  필터행 사용시 컬럼의 필터 옵션값을 설정할 때 사용한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long' >&#13;
	 ///       Column Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Option' type='Integer' >&#13;
	 ///       설정 할 Option 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetFilterValue = function(Col, Value, Option)			{
	  /// <summary>&#13;
	  ///  필터행 사용시 컬럼의 필터값을 설정할 때 사용한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;
  ///  // 5컬럼에 “서울”이 포함된 문자열 필터링하기				&#13;
  ///  mySheet.SetFilterValue(5, “서울”, 11);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Col' type='Long' >&#13;
	 ///       Column Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='String' >&#13;
	 ///       필터에 설정할 값&#13;
	 /// </param>&#13;
	 /// <param name='Option' type='Integer' >&#13;
	 ///       설정 할 Option 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetFindDialog = function(Show,Col,FullMatch,FirstStart,CaseSensitive, KeepDialog)			{
	  /// <summary>&#13;
	  ///  단축키 Ctrl+Shift+F 를 이용한 찾기 다이얼로그의 기본 정보를 설정 한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;
  ///  // 5컬럼에 “서울”이 포함된 문자열 필터링하기				&#13;
  ///  mySheet.SetFilterValue(5, “서울”, 11);				&#13;
  ///  //찾기창 사용, 대상 컬럼:5, 시작위치:포커스행 다음, 일치종류:가운데일치				&#13;
  ///  mySheet.SetFindDialog(1, 5, 2, 0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Show' type='Boolean' >&#13;
	 ///       찾기 다이얼로그 사용 여부&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long/String' >&#13;
	 ///       찾을 컬럼의 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='FullMatch' type='Integer' >&#13;
	 ///       텍스트 일치 종류 설정, Default=-1&#13;
	 /// </param>&#13;
	 /// <param name='FirstStart' type='Boolean' >&#13;
	 ///       시작 위치 설정, Default=1&#13;
	 /// </param>&#13;
	 /// <param name='CaseSensitive' type='Boolean' >&#13;
	 ///       대소 구분 설정, Default=0&#13;
	 /// </param>&#13;
	 /// <param name='KeepDialog' type='Boolean' >&#13;
	 ///       찾기 후 창 닫기 여부 설정,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetFocus = function()			{
	  /// <summary>&#13;
	  ///  시트에 포커스를 설정 한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;
  ///  // 5컬럼에 “서울”이 포함된 문자열 필터링하기				&#13;
  ///  mySheet.SetFilterValue(5, “서울”, 11);				&#13;
  ///  //찾기창 사용, 대상 컬럼:5, 시작위치:포커스행 다음, 일치종류:가운데일치				&#13;
  ///  mySheet.SetFindDialog(1, 5, 2, 0);				&#13;
  ///  // 시트에 포커스를 설정한다.				&#13;
  ///  mySheet.SetFocus();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetHeaderMode = function(Mode)			{
	  /// <summary>&#13;
	  ///  헤더의 모드를 설정한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;
  ///  // 5컬럼에 “서울”이 포함된 문자열 필터링하기				&#13;
  ///  mySheet.SetFilterValue(5, “서울”, 11);				&#13;
  ///  //찾기창 사용, 대상 컬럼:5, 시작위치:포커스행 다음, 일치종류:가운데일치				&#13;
  ///  mySheet.SetFindDialog(1, 5, 2, 0);				&#13;
  ///  // 시트에 포커스를 설정한다.				&#13;
  ///  mySheet.SetFocus();				&#13;
  ///  // 헤더의 마우스 드래그를 이용한 컬럼 이동 및 리사이즈 기능을 제한한다.				&#13;
  ///  mySheet.SetHeaderMode({				&#13;
  ///  ColResize:0,				&#13;
  ///  ColMode:0				&#13;
  ///  });				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode.ColMove' type='Boolean' >&#13;
	 ///       헤더 컬럼 이동 가능 여부&#13;
	 /// </param>&#13;
	 /// <param name='Mode.ColResize' type='Boolean' >&#13;
	 ///       컬럼 너비 ReSize 여부&#13;
	 /// </param>&#13;
	 /// <param name='Mode.HeaderCheck' type='Boolean' >&#13;
	 ///       헤더에 전체 체크 표시 여부&#13;
	 /// </param>&#13;
	 /// <param name='Mode.Sort' type='Boolean' >&#13;
	 ///       헤더 클릭 시 소트 가능 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetMergeCell = function(Row, Col, Rows, Cols)			{
	  /// <summary>&#13;
	  ///  특정 셀을 기준으로 인접한 셀과 강제로 머지한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;
  ///  // 5컬럼에 “서울”이 포함된 문자열 필터링하기				&#13;
  ///  mySheet.SetFilterValue(5, “서울”, 11);				&#13;
  ///  //찾기창 사용, 대상 컬럼:5, 시작위치:포커스행 다음, 일치종류:가운데일치				&#13;
  ///  mySheet.SetFindDialog(1, 5, 2, 0);				&#13;
  ///  // 시트에 포커스를 설정한다.				&#13;
  ///  mySheet.SetFocus();				&#13;
  ///  // 헤더의 마우스 드래그를 이용한 컬럼 이동 및 리사이즈 기능을 제한한다.				&#13;
  ///  mySheet.SetHeaderMode({				&#13;
  ///  ColResize:0,				&#13;
  ///  ColMode:0				&#13;
  ///  });				&#13;
  ///  // (1,10)부터(2,11)까지 2x2 창문형태의 셀을 강제로 머지하여 표시한다.				&#13;
  ///  mySheet.SetMergeCell(1, 10, 2, 2);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       강제머지할 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long' >&#13;
	 ///       강제머지할 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Rows' type='Long' >&#13;
	 ///       강제머지할 셀의 Row 개수&#13;
	 /// </param>&#13;
	 /// <param name='Cols' type='Long' >&#13;
	 ///       강제머지할 셀의 Col 개수&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetRowHaveChildValue = function(Row, HaveChild)			{
	  /// <summary>&#13;
	  ///  트리구조에서 조회시 HaveChild 속성 설정값을 변경한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;
  ///  // 5컬럼에 “서울”이 포함된 문자열 필터링하기				&#13;
  ///  mySheet.SetFilterValue(5, “서울”, 11);				&#13;
  ///  //찾기창 사용, 대상 컬럼:5, 시작위치:포커스행 다음, 일치종류:가운데일치				&#13;
  ///  mySheet.SetFindDialog(1, 5, 2, 0);				&#13;
  ///  // 시트에 포커스를 설정한다.				&#13;
  ///  mySheet.SetFocus();				&#13;
  ///  // 헤더의 마우스 드래그를 이용한 컬럼 이동 및 리사이즈 기능을 제한한다.				&#13;
  ///  mySheet.SetHeaderMode({				&#13;
  ///  ColResize:0,				&#13;
  ///  ColMode:0				&#13;
  ///  });				&#13;
  ///  // (1,10)부터(2,11)까지 2x2 창문형태의 셀을 강제로 머지하여 표시한다.				&#13;
  ///  mySheet.SetMergeCell(1, 10, 2, 2);				&#13;
  ///  // 3행의 HaveChild 속성을 0으로 변경한다.				&#13;
  ///  mySheet.SetRowHaveChildValue(3, 0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       대상 행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='HaveChild' type='Boolean' >&#13;
	 ///       속성 설정값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetSplitMergeCell = function(Row, Col)			{
	  /// <summary>&#13;
	  ///  셀 병합(머지) 되어 있는 셀 영역을 취소(분할) 처리 한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;
  ///  // 5컬럼에 “서울”이 포함된 문자열 필터링하기				&#13;
  ///  mySheet.SetFilterValue(5, “서울”, 11);				&#13;
  ///  //찾기창 사용, 대상 컬럼:5, 시작위치:포커스행 다음, 일치종류:가운데일치				&#13;
  ///  mySheet.SetFindDialog(1, 5, 2, 0);				&#13;
  ///  // 시트에 포커스를 설정한다.				&#13;
  ///  mySheet.SetFocus();				&#13;
  ///  // 헤더의 마우스 드래그를 이용한 컬럼 이동 및 리사이즈 기능을 제한한다.				&#13;
  ///  mySheet.SetHeaderMode({				&#13;
  ///  ColResize:0,				&#13;
  ///  ColMode:0				&#13;
  ///  });				&#13;
  ///  // (1,10)부터(2,11)까지 2x2 창문형태의 셀을 강제로 머지하여 표시한다.				&#13;
  ///  mySheet.SetMergeCell(1, 10, 2, 2);				&#13;
  ///  // 3행의 HaveChild 속성을 0으로 변경한다.				&#13;
  ///  mySheet.SetRowHaveChildValue(3, 0);				&#13;
  ///  // (1,1)부터(2,2)까지 2x2 셀 병합 영역을 분할 한다.				&#13;
  ///  mySheet.SetSplitMergeCell(1, 1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       대상 셀의 행 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number/' >&#13;
	 ///       대상 셀의 컬럼 Index 또는 SaveName&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSheetWidth = function()		{
	  /// <summary>&#13;
	  ///  전체 너비를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //3컬럼에 대해서 저장시 Code 와 Text 값이 같이 전달되도록 한다.				&#13;
  ///    mySheet.SetSendComboData(0,3,Code|Text);				&#13;
  ///    //Dept 컬럼에 대해서 저장시 Code 대신 Text 값이 전달되도록 한다.				&#13;
  ///    mySheet.SendComboData(0,Dept,Text);				&#13;
  ///  // 시트에서 포커스를 뺀다.				&#13;
  ///  mySheet.SetBlur();				&#13;
  ///  //3번째 행의 3번째 컬럼에 이미지를 왼쪽에 표시.				&#13;
  ///  var style = {Image: myImage.gif, ImgHeight:20, ImgAlign:Left};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  //3번째 행의 3번째 컬럼에 ImageList의 1번째 이미지를 오른쪽에 표시.				&#13;
  ///  mySheet.SetImageList(0, image0.gif);				&#13;
  ///  mySheet.SetImageList(1. image1.gif);				&#13;
  ///  var style = {Image: 1, ImgAlign:Right};				&#13;
  ///  mySheet.SetCellImageStyle(3, 3, style);				&#13;
  ///  // 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(0, 3, info);				&#13;
  ///  // 단위데이터행 1번째, 3번째 컬럼의 콤보 목록을 변경				&#13;
  ///  var info = {ComboText: “신규|진행중|완료 “, ComboCode: “ 01|02|03” };				&#13;
  ///  mySheet.SetColProperty(1, 3, info);				&#13;
  ///  // 4번째 컬럼에 허용키, 제외키 설정				&#13;
  ///  var info = {AcceptKeys:N|E|[!$%],ExceptKeys:[123ab]};				&#13;
  ///  mySheet.SetColProperty(0, 4 ,info);				&#13;
  ///  //페이징 모드 조회 예제				&#13;
  ///  cfg= {SearchMode:1, Page:20};				&#13;
  ///  mySheet.SetConfig(cfg);				&#13;
  ///  // 기본설정				&#13;
  ///  cfg= {FileName:”DownExcel.xls”, Merge:1};				&#13;
  ///  mySheet.SetDown2ExcelConfig(cfg);				&#13;
  ///  mySheet.Down2Excel();				&#13;
  ///  // 저장 관련 로직 처리 함수				&#13;
  ///  var result = mySheet.SetEndEdit(1);				&#13;
  ///  if (!result) {				&#13;
  ///      return;				&#13;
  ///  }				&#13;
  ///  // 저장 처리 로직 진행				&#13;
  ///  // 필터행이 1행일 경우 2컬럼의 필터링 할 값 설정				&#13;
  ///  mySheet.SetCellValue(1, 2, “포함”);				&#13;
  ///  // 필터행 2컬럼의 필터 설정 – 문자열 ‘포함’ 과 같은 단어 필터링.				&#13;
  ///  mySheet.SetFilterOption (2, 1);				&#13;
  ///  // 5컬럼에 “서울”이 포함된 문자열 필터링하기				&#13;
  ///  mySheet.SetFilterValue(5, “서울”, 11);				&#13;
  ///  //찾기창 사용, 대상 컬럼:5, 시작위치:포커스행 다음, 일치종류:가운데일치				&#13;
  ///  mySheet.SetFindDialog(1, 5, 2, 0);				&#13;
  ///  // 시트에 포커스를 설정한다.				&#13;
  ///  mySheet.SetFocus();				&#13;
  ///  // 헤더의 마우스 드래그를 이용한 컬럼 이동 및 리사이즈 기능을 제한한다.				&#13;
  ///  mySheet.SetHeaderMode({				&#13;
  ///  ColResize:0,				&#13;
  ///  ColMode:0				&#13;
  ///  });				&#13;
  ///  // (1,10)부터(2,11)까지 2x2 창문형태의 셀을 강제로 머지하여 표시한다.				&#13;
  ///  mySheet.SetMergeCell(1, 10, 2, 2);				&#13;
  ///  // 3행의 HaveChild 속성을 0으로 변경한다.				&#13;
  ///  mySheet.SetRowHaveChildValue(3, 0);				&#13;
  ///  // (1,1)부터(2,2)까지 2x2 셀 병합 영역을 분할 한다.				&#13;
  ///  mySheet.SetSplitMergeCell(1, 1);				&#13;
  ///  // 현재 설정되어있는 전체 너비를 확인한다.				&#13;
  ///  alert(mySheet.GetSheetWidth());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSheetWidth = function(Width)		{
	  /// <summary>&#13;
	  ///  전체 너비를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //전체 너비를 800px로 설정한다.				&#13;
  ///  mySheet.SetSheetWidth(800);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Width' type='Integer' >&#13;
	 ///       설정하고자 하는 시트 너비 픽셀값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSheetHeight = function()		{
	  /// <summary>&#13;
	  ///  전체 높이를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //전체 너비를 800px로 설정한다.				&#13;
  ///  mySheet.SetSheetWidth(800);				&#13;
  ///  // 현재 설정되어있는 전체 높이를 확인한다.				&#13;
  ///  alert(mySheet.GetSheetHeight());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSheetHeight = function(Height)		{
	  /// <summary>&#13;
	  ///  전체 높이를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //전체 높이를 800px로 설정한다.				&#13;
  ///  mySheet.SetSheetHeight(800);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Height' type='Integer' >&#13;
	 ///       설정하고자 하는 시트 높이 픽셀값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetShowButtonImage = function()		{
	  /// <summary>&#13;
	  ///  팝업과 콤보의 버튼 이미지를 표시하는 종류를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //전체 높이를 800px로 설정한다.				&#13;
  ///  mySheet.SetSheetHeight(800);				&#13;
  ///  // 팝업과 콤보의 버튼 이미지를 표시하는 종류를 확인한다.				&#13;
  ///  mySheet.GetShowButtonImage();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetShowButtonImage = function(type)		{
	  /// <summary>&#13;
	  ///  팝업과 콤보의 버튼 이미지를 표시하는 종류를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // Focus가 있을경우만 콤보와, 팝업이미지 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(0);				&#13;
  ///  // Edit가 가능할 때 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(1);				&#13;
  ///  // 항상 팝업이미지가 표시 된다.				&#13;
  ///  mySheet.SetShowButtonImage(2);				&#13;
  ///  // Edit 가능할때 콤보와 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(3);				&#13;
  ///  // 항상 콤보와 팝업 이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(4);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='type' type='Integer' >&#13;
	 ///       설정 값 (Default =3)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ShowCalendar = function()			{
	  /// <summary>&#13;
	  ///  Text 타입의 컬럼에 포맷으로 날짜 포맷을 설정한 경우 OnClick 이벤트에서 ShowCalendar()를 실행하면 해당 컬럼 클릭 시 달력팝업을 출력해준다&#13;
	  /// Example : 
  ///  // Focus가 있을경우만 콤보와, 팝업이미지 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(0);				&#13;
  ///  // Edit가 가능할 때 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(1);				&#13;
  ///  // 항상 팝업이미지가 표시 된다.				&#13;
  ///  mySheet.SetShowButtonImage(2);				&#13;
  ///  // Edit 가능할때 콤보와 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(3);				&#13;
  ///  // 항상 콤보와 팝업 이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(4);				&#13;
  ///  // 텍스트 타입 컬럼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnClick(Row, Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  // Popup, PopupEdit 컬럼의 OnPopup 버튼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnPopupClick(Row,Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.ShowDebugMsg = function(Msg)			{
	  /// <summary>&#13;
	  ///  디버깅용 메시지의 표시여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // Focus가 있을경우만 콤보와, 팝업이미지 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(0);				&#13;
  ///  // Edit가 가능할 때 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(1);				&#13;
  ///  // 항상 팝업이미지가 표시 된다.				&#13;
  ///  mySheet.SetShowButtonImage(2);				&#13;
  ///  // Edit 가능할때 콤보와 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(3);				&#13;
  ///  // 항상 콤보와 팝업 이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(4);				&#13;
  ///  // 텍스트 타입 컬럼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnClick(Row, Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  // Popup, PopupEdit 컬럼의 OnPopup 버튼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnPopupClick(Row,Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  //저장 처리 과정을 디버깅 메시지를 팝업으로 표시				&#13;
  ///  mySheet.ShowDebugMsg(-1);				&#13;
  ///  //조회				&#13;
  ///  mySheet.DoSearch(“list.xml”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Msg' type='Integer' >&#13;
	 ///       디버깅용 메시지 표시여부 설정&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ShowColumnPopup = function(Row, Col, MousePos)			{
	  /// <summary>&#13;
	  ///  InitColumns 함수를 이용하여 컬럼 팝업 기능이 설정된 컬럼에서 함수를 이용하여 강제로 팝업을 열어주는 기능이다&#13;
	  /// Example : 
  ///  // Focus가 있을경우만 콤보와, 팝업이미지 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(0);				&#13;
  ///  // Edit가 가능할 때 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(1);				&#13;
  ///  // 항상 팝업이미지가 표시 된다.				&#13;
  ///  mySheet.SetShowButtonImage(2);				&#13;
  ///  // Edit 가능할때 콤보와 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(3);				&#13;
  ///  // 항상 콤보와 팝업 이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(4);				&#13;
  ///  // 텍스트 타입 컬럼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnClick(Row, Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  // Popup, PopupEdit 컬럼의 OnPopup 버튼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnPopupClick(Row,Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  //저장 처리 과정을 디버깅 메시지를 팝업으로 표시				&#13;
  ///  mySheet.ShowDebugMsg(-1);				&#13;
  ///  //조회				&#13;
  ///  mySheet.DoSearch(“list.xml”);				&#13;
  ///  //현재 셀 위치에 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4, 0)				&#13;
  ///  //마우스를 클릭한 마지막 위치에서 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4,1)				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Number' >&#13;
	 ///       선택할 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       선택할 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='MousePos' type='Boolean' >&#13;
	 ///       마지막 마우스 위치 사용 여부,&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ShowFilterRow = function()			{
	  /// <summary>&#13;
	  ///  IBSheet 상단 고정행으로 필터행을 추가한다&#13;
	  /// Example : 
  ///  // Focus가 있을경우만 콤보와, 팝업이미지 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(0);				&#13;
  ///  // Edit가 가능할 때 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(1);				&#13;
  ///  // 항상 팝업이미지가 표시 된다.				&#13;
  ///  mySheet.SetShowButtonImage(2);				&#13;
  ///  // Edit 가능할때 콤보와 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(3);				&#13;
  ///  // 항상 콤보와 팝업 이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(4);				&#13;
  ///  // 텍스트 타입 컬럼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnClick(Row, Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  // Popup, PopupEdit 컬럼의 OnPopup 버튼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnPopupClick(Row,Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  //저장 처리 과정을 디버깅 메시지를 팝업으로 표시				&#13;
  ///  mySheet.ShowDebugMsg(-1);				&#13;
  ///  //조회				&#13;
  ///  mySheet.DoSearch(“list.xml”);				&#13;
  ///  //현재 셀 위치에 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4, 0)				&#13;
  ///  //마우스를 클릭한 마지막 위치에서 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4,1)				&#13;
  ///  //필터행 추가하기				&#13;
  ///  mySheet.ShowFilterRow();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.ShowFindDialog = function()			{
	  /// <summary>&#13;
	  ///  사용자가 시트에서 ctrl+shift+F 입력시 표시되는 찾기 창을 표시한다&#13;
	  /// Example : 
  ///  // Focus가 있을경우만 콤보와, 팝업이미지 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(0);				&#13;
  ///  // Edit가 가능할 때 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(1);				&#13;
  ///  // 항상 팝업이미지가 표시 된다.				&#13;
  ///  mySheet.SetShowButtonImage(2);				&#13;
  ///  // Edit 가능할때 콤보와 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(3);				&#13;
  ///  // 항상 콤보와 팝업 이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(4);				&#13;
  ///  // 텍스트 타입 컬럼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnClick(Row, Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  // Popup, PopupEdit 컬럼의 OnPopup 버튼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnPopupClick(Row,Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  //저장 처리 과정을 디버깅 메시지를 팝업으로 표시				&#13;
  ///  mySheet.ShowDebugMsg(-1);				&#13;
  ///  //조회				&#13;
  ///  mySheet.DoSearch(“list.xml”);				&#13;
  ///  //현재 셀 위치에 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4, 0)				&#13;
  ///  //마우스를 클릭한 마지막 위치에서 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4,1)				&#13;
  ///  //필터행 추가하기				&#13;
  ///  mySheet.ShowFilterRow();				&#13;
  ///  //찾기창을 표시한다.				&#13;
  ///  mySheet.ShowFindDialog();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.ShowGroupRow = function(Cols)			{
	  /// <summary>&#13;
	  ///  IBSheet 헤더 상단에 그룹행을 추가한다&#13;
	  /// Example : 
  ///  // Focus가 있을경우만 콤보와, 팝업이미지 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(0);				&#13;
  ///  // Edit가 가능할 때 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(1);				&#13;
  ///  // 항상 팝업이미지가 표시 된다.				&#13;
  ///  mySheet.SetShowButtonImage(2);				&#13;
  ///  // Edit 가능할때 콤보와 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(3);				&#13;
  ///  // 항상 콤보와 팝업 이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(4);				&#13;
  ///  // 텍스트 타입 컬럼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnClick(Row, Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  // Popup, PopupEdit 컬럼의 OnPopup 버튼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnPopupClick(Row,Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  //저장 처리 과정을 디버깅 메시지를 팝업으로 표시				&#13;
  ///  mySheet.ShowDebugMsg(-1);				&#13;
  ///  //조회				&#13;
  ///  mySheet.DoSearch(“list.xml”);				&#13;
  ///  //현재 셀 위치에 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4, 0)				&#13;
  ///  //마우스를 클릭한 마지막 위치에서 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4,1)				&#13;
  ///  //필터행 추가하기				&#13;
  ///  mySheet.ShowFilterRow();				&#13;
  ///  //찾기창을 표시한다.				&#13;
  ///  mySheet.ShowFindDialog();				&#13;
  ///  //그룹행 추가하기				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 인덱스가 1, 3 인 컬럼 기준 그룹행 추가하기				&#13;
  ///  mySheet.ShowGroupRow(“1|3”);				&#13;
  ///  // SaveName이 sName, sDept 인 컬럼 기준 그룹행 추가하기				&#13;
  ///  mySheet.ShowGroupRow(“sName|sDept”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Cols' type='Long/' >&#13;
	 ///       그룹핑 하고자 하는 컬럼의 Index 또는 SaveName을 “|”로 연결한 문자열&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetShowMsgMode = function()		{
	  /// <summary>&#13;
	  ///  Sheet에서 발생하는 각종 메시지를 시스템 팝업 형태로 사용할것인지 이벤트 방식을 사용할것인지 설정한다&#13;
	  /// Example : 
  ///  // Focus가 있을경우만 콤보와, 팝업이미지 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(0);				&#13;
  ///  // Edit가 가능할 때 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(1);				&#13;
  ///  // 항상 팝업이미지가 표시 된다.				&#13;
  ///  mySheet.SetShowButtonImage(2);				&#13;
  ///  // Edit 가능할때 콤보와 팝업이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(3);				&#13;
  ///  // 항상 콤보와 팝업 이미지가 표시된다.				&#13;
  ///  mySheet.SetShowButtonImage(4);				&#13;
  ///  // 텍스트 타입 컬럼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnClick(Row, Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  // Popup, PopupEdit 컬럼의 OnPopup 버튼 클릭시 달력 팝업 출력하기				&#13;
  ///  function mySheet_OnPopupClick(Row,Col) {				&#13;
  ///  mySheet.ShowCalendar();				&#13;
  ///  }				&#13;
  ///  //저장 처리 과정을 디버깅 메시지를 팝업으로 표시				&#13;
  ///  mySheet.ShowDebugMsg(-1);				&#13;
  ///  //조회				&#13;
  ///  mySheet.DoSearch(“list.xml”);				&#13;
  ///  //현재 셀 위치에 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4, 0)				&#13;
  ///  //마우스를 클릭한 마지막 위치에서 팝업 열기				&#13;
  ///  mySheet.ShowColumnPopup(1, 4,1)				&#13;
  ///  //필터행 추가하기				&#13;
  ///  mySheet.ShowFilterRow();				&#13;
  ///  //찾기창을 표시한다.				&#13;
  ///  mySheet.ShowFindDialog();				&#13;
  ///  //그룹행 추가하기				&#13;
  ///  mySheet.ShowGroupRow();				&#13;
  ///  // 인덱스가 1, 3 인 컬럼 기준 그룹행 추가하기				&#13;
  ///  mySheet.ShowGroupRow(“1|3”);				&#13;
  ///  // SaveName이 sName, sDept 인 컬럼 기준 그룹행 추가하기				&#13;
  ///  mySheet.ShowGroupRow(“sName|sDept”);				&#13;
  ///  //메시지 모드를 확인한다.				&#13;
  ///  mySheet.GetShowMsgMode();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetShowMsgMode = function(Mode)		{
	  /// <summary>&#13;
	  ///  Sheet에서 발생하는 각종 메시지를 시스템 팝업 형태로 사용할것인지 이벤트 방식을 사용할것인지 설정한다&#13;
	  /// Example : 
  ///  //메시지 모드를 설정한다.				&#13;
  ///  mySheet.SetShowMsgMode(0);				&#13;
  ///  //OnMessage 이벤트를 처리한다.				&#13;
  ///  function mySheet_OnMessage(Msg, Level, IsConfirm) {				&#13;
  ///  //메시지 표시하기				&#13;
  ///      var win_result = window.showModalDialog(				&#13;
  ///   “sheet_message.jsp?Msg=” + Msg + “&amp;IsConfirm=” + IsConfirm, 				&#13;
  ///          ‘modalResult’, 				&#13;
  ///          ‘dialogWidth:200px;dialogHeight:200px;center:yes;help:no;status:no;’);				&#13;
  ///      //Sheet로 메시지 결과를 반환한다.				&#13;
  ///      if(IsConfirm) mySheet.ConfirmOK( win_result);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Boolean' >&#13;
	 ///       메시지 표시 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ShowPivotDialog = function()			{
	  /// <summary>&#13;
	  ///  사용자가 시트에서 ctrl+alt+T 입력시 표시되는 피벗 테이블 설정 팝업을 호출 한다&#13;
	  /// Example : 
  ///  //메시지 모드를 설정한다.				&#13;
  ///  mySheet.SetShowMsgMode(0);				&#13;
  ///  //OnMessage 이벤트를 처리한다.				&#13;
  ///  function mySheet_OnMessage(Msg, Level, IsConfirm) {				&#13;
  ///  //메시지 표시하기				&#13;
  ///      var win_result = window.showModalDialog(				&#13;
  ///   “sheet_message.jsp?Msg=” + Msg + “&amp;IsConfirm=” + IsConfirm, 				&#13;
  ///          ‘modalResult’, 				&#13;
  ///          ‘dialogWidth:200px;dialogHeight:200px;center:yes;help:no;status:no;’);				&#13;
  ///      //Sheet로 메시지 결과를 반환한다.				&#13;
  ///      if(IsConfirm) mySheet.ConfirmOK( win_result);				&#13;
  ///  }				&#13;
  ///  //피벗 테이블 설정 팝업을 호출한다.				&#13;
  ///  mySheet.ShowPivotDialog();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.ShowProcessDlg = function(Type)			{
	  /// <summary>&#13;
	  ///  시트 중앙에 대기중 이미지를 표시 한다&#13;
	  /// Example : 
  ///  //메시지 모드를 설정한다.				&#13;
  ///  mySheet.SetShowMsgMode(0);				&#13;
  ///  //OnMessage 이벤트를 처리한다.				&#13;
  ///  function mySheet_OnMessage(Msg, Level, IsConfirm) {				&#13;
  ///  //메시지 표시하기				&#13;
  ///      var win_result = window.showModalDialog(				&#13;
  ///   “sheet_message.jsp?Msg=” + Msg + “&amp;IsConfirm=” + IsConfirm, 				&#13;
  ///          ‘modalResult’, 				&#13;
  ///          ‘dialogWidth:200px;dialogHeight:200px;center:yes;help:no;status:no;’);				&#13;
  ///      //Sheet로 메시지 결과를 반환한다.				&#13;
  ///      if(IsConfirm) mySheet.ConfirmOK( win_result);				&#13;
  ///  }				&#13;
  ///  //피벗 테이블 설정 팝업을 호출한다.				&#13;
  ///  mySheet.ShowPivotDialog();				&#13;
  ///  // 저장중 대기이미지를 표시 한다..				&#13;
  ///  mySheet.ShowProcessDlg(Search);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Type' type='String' >&#13;
	 ///       대기 이미지 종류 (Default:Search)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetShowSortArrow = function()		{
	  /// <summary>&#13;
	  ///  헤더를 눌러 소트를 할 때 소트되는 방향을 화살표 이미지로 표시할지 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //메시지 모드를 설정한다.				&#13;
  ///  mySheet.SetShowMsgMode(0);				&#13;
  ///  //OnMessage 이벤트를 처리한다.				&#13;
  ///  function mySheet_OnMessage(Msg, Level, IsConfirm) {				&#13;
  ///  //메시지 표시하기				&#13;
  ///      var win_result = window.showModalDialog(				&#13;
  ///   “sheet_message.jsp?Msg=” + Msg + “&amp;IsConfirm=” + IsConfirm, 				&#13;
  ///          ‘modalResult’, 				&#13;
  ///          ‘dialogWidth:200px;dialogHeight:200px;center:yes;help:no;status:no;’);				&#13;
  ///      //Sheet로 메시지 결과를 반환한다.				&#13;
  ///      if(IsConfirm) mySheet.ConfirmOK( win_result);				&#13;
  ///  }				&#13;
  ///  //피벗 테이블 설정 팝업을 호출한다.				&#13;
  ///  mySheet.ShowPivotDialog();				&#13;
  ///  // 저장중 대기이미지를 표시 한다..				&#13;
  ///  mySheet.ShowProcessDlg(Search);				&#13;
  ///  // 설정되어 있는 소트 방향 표시여부를 확인한다.				&#13;
  ///  alert(mySheet.GetShowSortArrow());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetShowSortArrow = function(Arrow)		{
	  /// <summary>&#13;
	  ///  헤더를 눌러 소트를 할 때 소트되는 방향을 화살표 이미지로 표시할지 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 소트 방향을 표시한다.				&#13;
  ///  mySheet.SetShowSortArrow(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Arrow' type='Boolean' >&#13;
	 ///       화살표 표시 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ShowSubSum = function(info)			{
	  /// <summary>&#13;
	  ///  특정 컬럼의 데이터를 기준으로 소계와 누계를 계산하여 표시한다&#13;
	  /// Example : 
  ///  // 소트 방향을 표시한다.				&#13;
  ///  mySheet.SetShowSortArrow(1);				&#13;
  ///  //1컬럼(용량)을 중심으로 소계만 계산하여 표시하기				&#13;
  ///  var info = [				&#13;
  ///  {StdCol:1, SumCols:”2|3|4|5|6|7”,  Sort:1}				&#13;
  ///  ];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  // 누계 까지 표시하기				&#13;
  ///  var info = [				&#13;
  ///   {StdCol:1, SumCols:”2|3|4|5|6|7”, ShowCumulate:1,  Sort:1}				&#13;
  ///  ];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='StdCol' type='Long/String' >&#13;
	 ///       기준 컬럼 Index 또는 SaveName&#13;
	 /// </param>&#13;
	 /// <param name='SumCols' type='String' >&#13;
	 ///       소계가 계산되어야 할 컬럼 Index를 “|”로 연결한 문자열&#13;
	 /// </param>&#13;
	 /// <param name='Sort' type='Boolean' >&#13;
	 ///       기준 컬럼의 Sort 처리 여부. 소계를 표시 하기 위해 기준 컬럼의 값이 반드시 Sort 되어 있어야 함.&#13;
	 /// </param>&#13;
	 /// <param name='ShowCumulate' type='Boolean' >&#13;
	 ///       소계에 대한 누계 표시 여부.&#13;
	 /// </param>&#13;
	 /// <param name='CaptionCol' type='Long' >&#13;
	 ///       소계 대표 글자인 “소계:” + 기준값을 설정할 컬럼&#13;
	 /// </param>&#13;
	 /// <param name='CaptionText' type='String' >&#13;
	 ///       소계 대표 글자 포맷을 설정&#13;
	 /// </param>&#13;
	 /// <param name='AvgCols' type='String' >&#13;
	 ///       소계 행에 평균으로 계산되어야 할 컬럼 Index를 “|”로 연결한 문자열. Defuault=””&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ShowToolTip = function(ToolTip)			{
	  /// <summary>&#13;
	  ///  마우스 커서가 위치한 셀의 내용을 툴팁으로 표현한다&#13;
	  /// Example : 
  ///  // 소트 방향을 표시한다.				&#13;
  ///  mySheet.SetShowSortArrow(1);				&#13;
  ///  //1컬럼(용량)을 중심으로 소계만 계산하여 표시하기				&#13;
  ///  var info = [				&#13;
  ///  {StdCol:1, SumCols:”2|3|4|5|6|7”,  Sort:1}				&#13;
  ///  ];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  // 누계 까지 표시하기				&#13;
  ///  var info = [				&#13;
  ///   {StdCol:1, SumCols:”2|3|4|5|6|7”, ShowCumulate:1,  Sort:1}				&#13;
  ///  ];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  //툴팁 설정				&#13;
  ///  mySheet.ShowToolTip(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='ToolTip' type='Boolean' >&#13;
	 ///       툴팁 표시 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ShowTreeSubSum = function(Info)			{
	  /// <summary>&#13;
	  ///  트리구조에서 특정 컬럼의 데이터를 기준으로 소계를 계산하여 표시한다&#13;
	  /// Example : 
  ///  // 소트 방향을 표시한다.				&#13;
  ///  mySheet.SetShowSortArrow(1);				&#13;
  ///  //1컬럼(용량)을 중심으로 소계만 계산하여 표시하기				&#13;
  ///  var info = [				&#13;
  ///  {StdCol:1, SumCols:”2|3|4|5|6|7”,  Sort:1}				&#13;
  ///  ];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  // 누계 까지 표시하기				&#13;
  ///  var info = [				&#13;
  ///   {StdCol:1, SumCols:”2|3|4|5|6|7”, ShowCumulate:1,  Sort:1}				&#13;
  ///  ];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  //툴팁 설정				&#13;
  ///  mySheet.ShowToolTip(1);				&#13;
  ///  //2번째 컬럼에 대한 트리 소계 표현				&#13;
  ///  var info = SumCols:”2};				&#13;
  ///  mySheet.ShowTreeSubSum(info);				&#13;
  ///  // 삭제행은 계산에서 제외하기				&#13;
  ///  var info = {SumCols:”2, SumEx:1};				&#13;
  ///  mySheet. ShowTreeSubSum (info);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='SumCols' type='String' >&#13;
	 ///       합계가 계산되어야 할 컬럼의 Index또는 SaveName을 “|”로 연결한 문자열. Defuault=””&#13;
	 /// </param>&#13;
	 /// <param name='AvgCols' type='String' >&#13;
	 ///       평균이 계산되어야 할 컬럼의 Index 또는 SaveName을 “|”로 연결한 문자열. Defuault=””&#13;
	 /// </param>&#13;
	 /// <param name='CountCols' type='String' >&#13;
	 ///       개수가 계산되어야 할 컬럼의 Index 또는 SaveName을 “|”로 연결한 문자열. Default=””&#13;
	 /// </param>&#13;
	 /// <param name='SumEx' type='Boolean' >&#13;
	 ///       상태값이 “삭제”인 행에 대한 계산 포함 여부. Default=0&#13;
	 /// </param>&#13;
	 /// <param name='ExceptNull' type='Boolean' >&#13;
	 ///       평균 컬럼에서 Null 값 포함 계산 여부. Default=0&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSubSumBackColor = function()		{
	  /// <summary>&#13;
	  ///  소계 행의 배경 색상을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 소트 방향을 표시한다.				&#13;
  ///  mySheet.SetShowSortArrow(1);				&#13;
  ///  //1컬럼(용량)을 중심으로 소계만 계산하여 표시하기				&#13;
  ///  var info = [				&#13;
  ///  {StdCol:1, SumCols:”2|3|4|5|6|7”,  Sort:1}				&#13;
  ///  ];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  // 누계 까지 표시하기				&#13;
  ///  var info = [				&#13;
  ///   {StdCol:1, SumCols:”2|3|4|5|6|7”, ShowCumulate:1,  Sort:1}				&#13;
  ///  ];				&#13;
  ///  mySheet.ShowSubSum(info);				&#13;
  ///  //툴팁 설정				&#13;
  ///  mySheet.ShowToolTip(1);				&#13;
  ///  //2번째 컬럼에 대한 트리 소계 표현				&#13;
  ///  var info = SumCols:”2};				&#13;
  ///  mySheet.ShowTreeSubSum(info);				&#13;
  ///  // 삭제행은 계산에서 제외하기				&#13;
  ///  var info = {SumCols:”2, SumEx:1};				&#13;
  ///  mySheet. ShowTreeSubSum (info);				&#13;
  ///  //소계 행 배경색상을 확인한다.				&#13;
  ///  mySheet.GetSubSumBackColor();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSubSumBackColor = function(Color)		{
	  /// <summary>&#13;
	  ///  소계 행의 배경 색상을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //소계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetSubSumBackColor(“#00FF00”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       설정하고자 하는 WebColor 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ShowSum = function()			{
	  /// <summary>&#13;
	  ///  속도개선등의 이유로 합계를 계산하지 않은 경우 AutoSum 컬럼의 합계를 계산하여 한번만 보여주거나 재계산을 한다&#13;
	  /// Example : 
  ///  //소계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetSubSumBackColor(“#00FF00”);				&#13;
  ///  mySheet.ShowSum();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.ShowTreeLevel = function(Level, ChildStatus)			{
	  /// <summary>&#13;
	  ///  데이터가 트리 형태일 때 보여질 트리 레벨을 설정한다&#13;
	  /// Example : 
  ///  //소계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetSubSumBackColor(“#00FF00”);				&#13;
  ///  mySheet.ShowSum();				&#13;
  ///  //모두 접기				&#13;
  ///  mySheet.ShowTreeLevel(0, 1);				&#13;
  ///  //모두 펼치기				&#13;
  ///  mySheet.ShowTreeLevel(-1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Level' type='Integer' >&#13;
	 ///       보여질 트리 레벨 수준. Default=-1&#13;
	 /// </param>&#13;
	 /// <param name='ChildStatus' type='Integer' >&#13;
	 ///       보여질 트리 레벨 이하 레벨의 펼침 상태를 설정한다. Default=0&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSumBackColor = function()		{
	  /// <summary>&#13;
	  ///  합계 행의 배경 색상을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //소계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetSubSumBackColor(“#00FF00”);				&#13;
  ///  mySheet.ShowSum();				&#13;
  ///  //모두 접기				&#13;
  ///  mySheet.ShowTreeLevel(0, 1);				&#13;
  ///  //모두 펼치기				&#13;
  ///  mySheet.ShowTreeLevel(-1);				&#13;
  ///  //합계행 배경색상 구하기				&#13;
  ///  mySheet.GetSumBackColor();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSumBackColor = function(Color)		{
	  /// <summary>&#13;
	  ///  합계 행의 배경 색상을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //합계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetSumBackColor(“#00FF00”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       WebColor 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSumFontBold = function()		{
	  /// <summary>&#13;
	  ///  합계 행의 글자를 굵게 할지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //합계 행 배경색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetSumBackColor(“#00FF00”);				&#13;
  ///  //합계행 글자 볼드 설정 확인한다.				&#13;
  ///  mySheet.GetSumFontBold();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSumFontBold = function(Bold)		{
	  /// <summary>&#13;
	  ///  합계 행의 글자를 굵게 할지 여부를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //합계 행의 글자 볼드를 설정한다. 				&#13;
  ///  mySheet.SetSumFontBold(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Bold' type='Boolean' >&#13;
	 ///       폰트 굵기 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSumFontColor = function()		{
	  /// <summary>&#13;
	  ///  합계 행의 글자 색상을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //합계 행의 글자 볼드를 설정한다. 				&#13;
  ///  mySheet.SetSumFontBold(1);				&#13;
  ///  //합계행 폰트색상을 확인한다.				&#13;
  ///  mySheet.GetSumFontColor();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSumFontColor = function(Color)		{
	  /// <summary>&#13;
	  ///  합계 행의 글자 색상을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //합계 행 폰트색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetSumFontColor(“#00FF00”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Color' type='String' >&#13;
	 ///       WebColor 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSumRowHidden = function()		{
	  /// <summary>&#13;
	  ///  합계행의 숨기여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //합계 행 폰트색상을 녹색으로 설정 				&#13;
  ///  mySheet.SetSumFontColor(“#00FF00”);				&#13;
  ///  //합계행의 숨김 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetSumRowHidden() == 1) {				&#13;
  ///  mySheet.SetSumRowHidden(0);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetSumRowHidden = function(Hidden)		{
	  /// <summary>&#13;
	  ///  합계행의 숨기여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //합계행의 숨김 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetSumRowHidden() == 1) {				&#13;
  ///  mySheet.SetSumRowHidden(0);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Hidden' type='Boolean' >&#13;
	 ///       숨김여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetSumValue = function(DataRow, Col)		{
	  /// <summary>&#13;
	  ///  합계 셀의 값을 Format이 적용되지 않은 형태로 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //합계행의 숨김 여부를 확인하여 숨겨진 경우 표시되도록 설정한다.				&#13;
  ///  if(mySheet.GetSumRowHidden() == 1) {				&#13;
  ///  mySheet.SetSumRowHidden(0);				&#13;
  ///  }				&#13;
  ///  //첫번째 합계 행의 2컬럼의 값을 읽어온다. 값이 1,234.56 이면 				&#13;
  ///  //1234.56이 반환된다..				&#13;
  ///  alert(“합계는 “ + mySheet.GetSumValue(0, 2) + “입니다.”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DataRow' type='Number' >&#13;
	 ///       단위 데이터행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       합계 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetSumValue = function(DataRow, Col, Value)		{
	  /// <summary>&#13;
	  ///  합계 셀의 값을 Format이 적용되지 않은 형태로 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //첫번째 합계 행의 2컬럼의 값을 5432.12 로 바꾼다.				&#13;
  ///  mySheet.SetSumValue(0, 2, 5432.12);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='DataRow' type='Number' >&#13;
	 ///       단위 데이터행의 Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Number / String' >&#13;
	 ///       합계 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='Value' type='Number / String' >&#13;
	 ///       포맷 적용 안된 형태의 CellValue 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetTabBehavior = function()		{
	  /// <summary>&#13;
	  ///  셀 선택 상태에서 Tab 키를 눌렀을 때의 동작 모드를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //첫번째 합계 행의 2컬럼의 값을 5432.12 로 바꾼다.				&#13;
  ///  mySheet.SetSumValue(0, 2, 5432.12);				&#13;
  ///  // Tab키의 동작을 확인한다.				&#13;
  ///  mySheet.GetTabBehavior();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetTabBehavior = function(Mode)		{
	  /// <summary>&#13;
	  ///  셀 선택 상태에서 Tab 키를 눌렀을 때의 동작 모드를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 편집 가능한 셀에 대해서만 탭 이동을 설정 한다.				&#13;
  ///  mySheet.SetTabBehavior(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Mode' type='Boolean' >&#13;
	 ///       Tab key 입력시 설정할 속성 값. Default= 1&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetTheme = function()		{
	  /// <summary>&#13;
	  ///  IBSheet 의 테마 디자인을 확인 하거나 설정한다&#13;
	  /// Example : 
  ///  // 편집 가능한 셀에 대해서만 탭 이동을 설정 한다.				&#13;
  ///  mySheet.SetTabBehavior(0);				&#13;
  ///  //현재 설정되어 있는 테마를 확인				&#13;
  ///  var Prefix = mySheet.GetTheme();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetTheme = function(Prefix, Folder)		{
	  /// <summary>&#13;
	  ///  IBSheet 의 테마 디자인을 확인 하거나 설정한다&#13;
	  /// Example : 
  ///  //Gray 테마를 적용한다.				&#13;
  ///  mySheet.SetTheme(“GG”, “Gray”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Prefix' type='String' >&#13;
	 ///       테마의 Prefix 값&#13;
	 /// </param>&#13;
	 /// <param name='Folder' type='String' >&#13;
	 ///       테마의 폴더 명&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetToolTipText = function(Row, Col)		{
	  /// <summary>&#13;
	  ///  셀의 풍선도움말을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //Gray 테마를 적용한다.				&#13;
  ///  mySheet.SetTheme(“GG”, “Gray”);				&#13;
  ///  // 풍선 도움말 설정값을 확인				&#13;
  ///  alert(mySheet.GetToolTipText(1, 1));				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.SetToolTipText = function(Row, Col, ToolTip)		{
	  /// <summary>&#13;
	  ///  셀의 풍선도움말을 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //셀에 풍선 도움말 설정				&#13;
  ///  mySheet.SetToolTipText(1,1, “셀의 금액은 “ + mySheet.GetCellText(1,1) + “입니다. “);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       해당 셀의 Row Index&#13;
	 /// </param>&#13;
	 /// <param name='Col' type='Long / String' >&#13;
	 ///       해당 셀의 Column Index&#13;
	 /// </param>&#13;
	 /// <param name='ToolTip' type='String' >&#13;
	 ///       풍선 도움말 설정 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetTopRow = function()		{
	  /// <summary>&#13;
	  ///  최상단의 행 번호를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //셀에 풍선 도움말 설정				&#13;
  ///  mySheet.SetToolTipText(1,1, “셀의 금액은 “ + mySheet.GetCellText(1,1) + “입니다. “);				&#13;
  ///  //최상단 행 번호를 확인한다.				&#13;
  ///  mySheet.GetTopRow();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetTopRow = function(Row)		{
	  /// <summary>&#13;
	  ///  최상단의 행 번호를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //최상단 행 번호를 설정한다.				&#13;
  ///  mySheet.SetTopRow(100);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Row' type='Long' >&#13;
	 ///       Row Index&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetTotalRows = function()		{
	  /// <summary>&#13;
	  ///  조회 조건에 따라 전체 조회해야 할 DB의 레코드 건수를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //최상단 행 번호를 설정한다.				&#13;
  ///  mySheet.SetTopRow(100);				&#13;
  ///  //전체 데이터 건수를 확인한다.				&#13;
  ///  alert(“전체 데이터 건수는 “ + mySheet.GetTotalRows() + “입니다. “);				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetTotalRows = function(Count)		{
	  /// <summary>&#13;
	  ///  조회 조건에 따라 전체 조회해야 할 DB의 레코드 건수를 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //전체 데이터 건수를 1000으로 설정한다.				&#13;
  ///  mySheet.SetTotalRows(1000);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Count' type='Long' >&#13;
	 ///       전체 건수 설정값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetTreeActionMode = function()		{
	  /// <summary>&#13;
	  ///  트리 형태일때 각종 기능 처리 관련 속성을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //전체 데이터 건수를 1000으로 설정한다.				&#13;
  ///  mySheet.SetTotalRows(1000);				&#13;
  ///  //현재 설정되어 있는 TreeActionMode 값 확인한다.				&#13;
  ///  alert(mySheet.GetTreeActionMode());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetTreeActionMode = function(Value)		{
	  /// <summary>&#13;
	  ///  트리 형태일때 각종 기능 처리 관련 속성을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //삭제 체크를 눌렀을 때 자식레벨까지 삭제되도록 한다.				&#13;
  ///  mySheet.SetTreeActionMode(1);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Value' type='Integer' >&#13;
	 ///       TreeActionMode 값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetUnicodeByte = function()		{
	  /// <summary>&#13;
	  ///  한글 1자리의 바이트 수를 확인하거나 설정 한다&#13;
	  /// Example : 
  ///  //삭제 체크를 눌렀을 때 자식레벨까지 삭제되도록 한다.				&#13;
  ///  mySheet.SetTreeActionMode(1);				&#13;
  ///  // 설정된 바이트 수를 확인한다.				&#13;
  ///  mySheet. GetUnicodeByte();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetUnicodeByte = function(byte)		{
	  /// <summary>&#13;
	  ///  한글 1자리의 바이트 수를 확인하거나 설정 한다&#13;
	  /// Example : 
  ///  // 한글 1자리의 바이트수를 3으로 설정한다.				&#13;
  ///  mySheet. SetUnicodeByte(3);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='byte' type='Integer' >&#13;
	 ///       설정할 바이트 수 (Default=1)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetUseDefaultTime = function()		{
	  /// <summary>&#13;
	  ///  Format이 “Hms”, “Hm” 인 경우 셀의 값이 공백인 상태에서 편집을 처음 시작하고자 할때 기본적으로 시스템 현재시간을 표시한다&#13;
	  /// Example : 
  ///  // 한글 1자리의 바이트수를 3으로 설정한다.				&#13;
  ///  mySheet. SetUnicodeByte(3);				&#13;
  ///  //현재 시간을 표시 설정 확인				&#13;
  ///  mySheet.GetUseDefaultTime();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetUseDefaultTime = function(Value)		{
	  /// <summary>&#13;
	  ///  Format이 “Hms”, “Hm” 인 경우 셀의 값이 공백인 상태에서 편집을 처음 시작하고자 할때 기본적으로 시스템 현재시간을 표시한다&#13;
	  /// Example : 
  ///  //현재 시간을 표시하지 않도록 설정				&#13;
  ///  mySheet.SetUseDefaultTime(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Value' type='Boolean' >&#13;
	 ///       현재시간 표시 유무 (Default=1)&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetUserAgent = function()		{
	  /// <summary>&#13;
	  ///  조회나 저장시 HTTP 헤더 정보에 포함되어 넘어가는 IBUserAgent의 값을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //현재 시간을 표시하지 않도록 설정				&#13;
  ///  mySheet.SetUseDefaultTime(0);				&#13;
  ///  // IBUserAgent의 값을 확인한다.				&#13;
  ///  mySheet.GetUserAgent();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetUserAgent = function(Value)		{
	  /// <summary>&#13;
	  ///  조회나 저장시 HTTP 헤더 정보에 포함되어 넘어가는 IBUserAgent의 값을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // HTTP 헤더정보의 IBUserAgent 값을 My Agent Name 으로 전송				&#13;
  ///  mySheet.SetUserAgent(“My Agent Name”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Value' type='String' >&#13;
	 ///       User-Agent 설정값&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetUploadingImage = function()		{
	  /// <summary>&#13;
	  ///  파일 업로드 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // HTTP 헤더정보의 IBUserAgent 값을 My Agent Name 으로 전송				&#13;
  ///  mySheet.SetUserAgent(“My Agent Name”);				&#13;
  ///  //현재 설정되어있는 업로드 중 대기 이미지 경로를 확인한다.				&#13;
  ///  alert(mySheet.GetUploadingImage());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetUploadingImage = function(Url)		{
	  /// <summary>&#13;
	  ///  파일 업로드 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //업로드 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetUploadingImage( “/sheet/imgUpload.gif”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       이미지 URL&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.ValidateFail = function(Fail, Message)			{
	  /// <summary>&#13;
	  ///  저장 함수를 호출하여 저장 처리 전에 저장할 각 데이터의 Validation 확인을 위한 OnValidation 이벤트에서 유효하지 않은 데이터를 발견하여 저장처리를 중단하고자 할 때 이 속성을 설정하여 처리를 중단한다&#13;
	  /// Example : 
  ///  //업로드 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetUploadingImage( “/sheet/imgUpload.gif”);				&#13;
  ///  // OnValidation 이벤트에서의 사용				&#13;
  ///  function mySheet_OnValidation(Row, Col, Value) {				&#13;
  ///  if(Col == 2)    {				&#13;
  ///  if(Value==”원화” &amp;&amp; mySheet.GetCellValue(Row,Col+1) &amp;gt;= 10000000) {				&#13;
  ///  alert(“통화가 원화일 때 금액은 천만원 이상일수없습니다. “);				&#13;
  ///  mySheet.ValidateFail(1);				&#13;
  ///  mySheet.SelectCell(Row, Col+1);				&#13;
  ///  } else if(Value==”외화” &amp;&amp; mySheet.GetCellValue(Row,Col+1) &amp;lt; 10000000) {				&#13;
  ///  alert(“통화가 외화일 때 금액은 천만원 이상이여야 합니다. “);				&#13;
  ///  mySheet.ValidateFail(1);				&#13;
  ///  mySheet.SelectCell(Row, Col+1);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // OnEditValidation 이벤트에서의 사용				&#13;
  ///  function mySheet_OnEditValidation(Row, Col, Value) {				&#13;
  ///   if(Col == 2 &amp;&amp; Value &amp;gt; 100) {				&#13;
  ///     // alert 으로 메시지를 표시하고 편집상태를 유지한다.				&#13;
  ///   mySheet.ValidateFail(2, 금액 최대값은 100입니다);				&#13;
  ///  }				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Fail' type='Number' >&#13;
	 ///       저장 처리 중단 여부&#13;
	 /// </param>&#13;
	 /// <param name='Message' type='String' >&#13;
	 ///       Fail 인자 설정이 2인 경우 표시할 메시지&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetVisible = function()		{
	  /// <summary>&#13;
	  ///  IBSheet의 표시 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //업로드 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetUploadingImage( “/sheet/imgUpload.gif”);				&#13;
  ///  // OnValidation 이벤트에서의 사용				&#13;
  ///  function mySheet_OnValidation(Row, Col, Value) {				&#13;
  ///  if(Col == 2)    {				&#13;
  ///  if(Value==”원화” &amp;&amp; mySheet.GetCellValue(Row,Col+1) &amp;gt;= 10000000) {				&#13;
  ///  alert(“통화가 원화일 때 금액은 천만원 이상일수없습니다. “);				&#13;
  ///  mySheet.ValidateFail(1);				&#13;
  ///  mySheet.SelectCell(Row, Col+1);				&#13;
  ///  } else if(Value==”외화” &amp;&amp; mySheet.GetCellValue(Row,Col+1) &amp;lt; 10000000) {				&#13;
  ///  alert(“통화가 외화일 때 금액은 천만원 이상이여야 합니다. “);				&#13;
  ///  mySheet.ValidateFail(1);				&#13;
  ///  mySheet.SelectCell(Row, Col+1);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // OnEditValidation 이벤트에서의 사용				&#13;
  ///  function mySheet_OnEditValidation(Row, Col, Value) {				&#13;
  ///   if(Col == 2 &amp;&amp; Value &amp;gt; 100) {				&#13;
  ///     // alert 으로 메시지를 표시하고 편집상태를 유지한다.				&#13;
  ///   mySheet.ValidateFail(2, 금액 최대값은 100입니다);				&#13;
  ///  }				&#13;
  ///  }				&#13;
  ///  // 시트 표시 여부를 확인				&#13;
  ///  if(mySheet.GetVisible()){				&#13;
  ///      alert(“IBSheet를 표시함”);				&#13;
  ///  }else{				&#13;
  ///  alert(“숨겨져 있음”);				&#13;
  ///  }				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetVisible = function(Visible)		{
	  /// <summary>&#13;
	  ///  IBSheet의 표시 여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 시트를 안보이게 설정				&#13;
  ///  mySheet.SetVisible(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Visible' type='Boolean' >&#13;
	 ///       화면에 시트 표시 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetWaitImage = function()		{
	  /// <summary>&#13;
	  ///  처리 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  // 시트를 안보이게 설정				&#13;
  ///  mySheet.SetVisible(0);				&#13;
  ///  //처리 중 대기 이미지 위치를 확인한다.				&#13;
  ///  mySheet.GetWaitImage();				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetWaitImage = function(Url)		{
	  /// <summary>&#13;
	  ///  처리 중 대기 이미지 파일의 위치를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //처리 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetWaitImage(“/sheet/imgWait.gif”);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Url' type='String' >&#13;
	 ///       이미지 Url&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetWaitImageVisible = function()		{
	  /// <summary>&#13;
	  ///  각종 처리 중 대기 이미지의 표시여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //처리 중 대기 이미지를 변경한다.				&#13;
  ///  mySheet.SetWaitImage(“/sheet/imgWait.gif”);				&#13;
  ///  //처리 중 대기 이미지 표시 여부를 확인한다.				&#13;
  ///  alert(mySheet.GetWaitImageVisible());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetWaitImageVisible = function(Visible)		{
	  /// <summary>&#13;
	  ///  각종 처리 중 대기 이미지의 표시여부를 설정하거나 확인한다&#13;
	  /// Example : 
  ///  //처리 중 대기 이미지를 표시하지 않도록 설정한다..				&#13;
  ///  mySheet.SetWaitImageVisible(0);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='Visible' type='Boolean' >&#13;
	 ///       각종 대기 이미지 표시 여부&#13;
	 /// </param>&#13;
	}
	ibsheetObject.prototype.GetWaitTimeOut = function()		{
	  /// <summary>&#13;
	  ///  서버에 연결하여 응답을 대기하는 시간을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  //처리 중 대기 이미지를 표시하지 않도록 설정한다..				&#13;
  ///  mySheet.SetWaitImageVisible(0);				&#13;
  ///  // 서버에 연결하여 응답을 대기하는 시간을 확인				&#13;
  ///  alert(mySheet.GetWaitTimeOut());				&#13;&#13;
	  /// </summary>&#13;
	}
	ibsheetObject.prototype.SetWaitTimeOut = function(time)		{
	  /// <summary>&#13;
	  ///  서버에 연결하여 응답을 대기하는 시간을 확인하거나 설정한다&#13;
	  /// Example : 
  ///  // 서버에 연결하여 응답을 대기하는 시간을 확인하거나 설정				&#13;
  ///  mySheet.SetWaitTimeOut(120);				&#13;&#13;
	  /// </summary>&#13;
	 /// <param name='time' type='Integer' >&#13;
	 ///       설정할 초시간 (Default=60)&#13;
	 /// </param>&#13;
	}
	