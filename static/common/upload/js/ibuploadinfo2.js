if(window["ibleaders"]==undefined){
    window["ibleaders"] = {};
}
ibleaders.ibupload = {
	
    /* 파일 추가시 자동 업로드 여부 */
    autoUpload: true,

    /* 파일 제한 설정 */
    limitFileCount: 10,
    limitFileCountOnce: 15,
    limitFileSize: 2.0 * 1024 * 1024 * 1024,
    limitFileTotalSize: 2.0 * 1024 * 1024 * 1024,
    limitFileExt: "jsp",
    limitFileExtMode: "deny",
    //userAgent
    userAgent : [{"IBUpload":"IBUpload"}],
    /* 서버 경로 설정 */
    uploadServerUrl: "./common/upload/jsp/ibupload2.jsp",
    downloadServerUrl: "./common/upload/jsp/ibdownload.jsp",

    /* 초기 컨트롤 설정 */
    viewType: "icon", //icon, ibsheet
    iconMode: "icon", //icon, list, detail
    theme: "Main", // 테마 폴더 명

    /* 업로드 엔코딩 설정(utf-8 또는 euc-kr) */
    uploadEncoding: "utf-8",

    //--------------------------------------------------------------------------------
    // 지원되는 아이콘 확장자를 나열합니다.
    // icon 폴더안에 실제로 제공되는 아이콘 확장자만 기입합니다.
    //--------------------------------------------------------------------------------
    supportIcon: "pdf doc docx xls xlsx ppt pptx zip txt jpg exe dll",

    //--------------------------------------------------------------------------------
    // 서버 업로드를 불허하는 확장자
    // 서버에서도 동일하게 다시 한번 관련 파일들의 수신을 제한해야 Client 통하지 않는 직접적인 해킹을 완벽하게 막을 수 있음
    //--------------------------------------------------------------------------------
    limitFileExtServer: "html htm php php2 php3 php4 php5 phtml pwml inc asp aspx ascx jsp cfm cfc pl bat exe com dll vbs js reg cgi htaccess asis sh shtml shtm phtm",



    /* 팝업메뉴 항목 구성 */
    contextMenuItems: {
        "download": {name: "다운로드 (D)", icon: "", accesskey: "d"},
        "sep1": "---------",
        "viewtype": {
            "name": "보기",
            "items": {
                "icon": {"name": "아이콘 (C)", accesskey: "c"},
                "list": {"name": "간단히 (L)", accesskey: "l"},
                "detail": {"name": "자세히 (D)", accesskey: "d"}
            }
        },
        "sep2": "---------",
        "add": {name: "추가 (A)", icon: "", accesskey: "a"},
        "delete": {name: "제거 (R)", icon: "delete", accesskey: "r"}
    },

	/* onMessage 이벤트 공통 설정 */
	onMessage: function(messageID, Msg){
		if (messageID.substring(0, 3) == "ERR") {
			alert(Msg + "\n\n" + "error : " + messageID); // 오류는 메세지로 표시			
		} 
	},
	/* onUploading 이벤트  공통 설정 
		업로드시 블럭 설정
	*/
    onUploading: function(percent){
    	var upID = this.opts.id;
    	if(percent<100){
    		if($("#"+upID).data()["blockUI.isBlocked"]==1){
    			document.getElementById("upPercent").value = percent;
   			document.getElementById("progressBAR").style.width = percent+"%";
    		}else{
    			$("#"+upID).block({ message: "<h4>Now File Uploading....<input id='upPercent' style='text-align:right;width:40px;border:0'>%</h4><ul style='width:100%;float:left;height:20px'><li id='progressBAR' style='height:100%;background-color:#ADADAD'></li></ul>" });
    		}
    	}else{
    		$("#"+upID).unblock();
    	}	
    
		
	},
	
	


    //--------------------------------------------------------------------------------
    // IBUpload 메세지
    //--------------------------------------------------------------------------------
    message: {
        "INFO-001": "업로드를 시도하였습니다.\n\nㆍ파일  : {0}",
        "INFO-002": "업로드가 완료되었습니다.\n\n",

        "INFO-011": "다운로드를 시도하였습니다.\n\nㆍ다운로드 시도 URL : {0}",
        "INFO-012": "다운로드가 완료되었습니다.\n\n",

        "INFO-021": "현재 업로드중 오류가 발생하여 대기중인 파일이 있습니다. 오류가 발생한 파일들을 지우고 새롭게 추가 하시겠습니까?\n\n[확인] : 대기중인 파일들 제거 + 파일 추가 하기\n[취소] : 파일 추가 취소",

        "INFO-031": "IE 8이상 사용가능합니다.",
        "INFO-041": "선택된 파일이 없습니다.",

        // 파일 추가 오류
        "ERR-001": "업로드할 파일의 개수가 너무 많습니다. \n\nㆍ현재 업로드 시도 개수 : {0}개(또는 그 이상)\nㆍ최대 가능 파일 개수 : {1}개",
        "ERR-002": "업로드할 파일의 용량이 너무 큽니다. \n\nㆍ현재 용량 : {0}\nㆍ최대 용량 : {1}",
        "ERR-003": "업로드할 파일들의 전체 용량이 너무 큽니다. \n\nㆍ현재 용량 : {0}\nㆍ최대 용량 : {1}",
        "ERR-004": "업로드가 허용되지 않는 파일 형식 입니다.\n\nㆍ업로드 파일 : {0}\nㆍ업로드 허용 파일의 확장자 : {1}",
        "ERR-005": "업로드가 제한된 파일 형식 입니다.\n\nㆍ업로드 파일 : {0}\nㆍ업로드 불가 파일의 확장자 : {1}",

        "ERR-006": "다운로드할 파일이 없습니다.",
        "ERR-007": "대기중인 파일은 다운로드 할 수 없습니다.",
        "ERR-008": "업로드할 파일의 개수가 너무 많습니다. \n\nㆍ현재 업로드 시도 개수 : {0}개(또는 그 이상)\nㆍ 한번에 업로드 할 수 있는 최대 가능 파일 개수 : {1}개",

        // 파일 업로드 응답 오류
        "ERR-011": "업로드 중에 오류가 발생하였습니다.\n\nㆍ서버 응답 코드 : {0}\nㆍ서버 오류 내용 : {1}",
        "ERR-012": "업로드 후에 서버가 보낸 응답문에 문법 오류가 있습니다.\n\nㆍ서버 응답 코드 : {0}\nㆍ서버 응답 내용 : {1}",
        "ERR-013": "실행 파일은 서버보안상 업로드가 제한된 파일 형식 입니다.\n\nㆍ업로드 파일 : {0}\nㆍ업로드 불가 파일의 확장자 : {1}",

        "ERR-999": "올바른 API 사용이 아닙니다. 매뉴얼을 확인하시고 바르게 사용하여 주십시오.\n\nㆍAPI : {0}\nㆍData : {1}",

        endline: ""
    },

    //====================================================================================================
    // 파일 확장자별 설명
    //====================================================================================================
    fileType: {
        "$$$": "임시 파일",
        "aac": "MPEG-2, 어디밴스드 오디오 코딩 파일",
        "ac3": "AC3, 오디오 파일",
        "ace": "ACE Archiver 압축 파일",
        "acf": "마이크로소프트 에이전트, HTTP 문자 파일",
        "acl": "코렐 드로우 6, 키보드 가속기 파일",
        "acm": "윈도우 시스템 디렉토리 파일",
        "acm": "인터플레이 압축 사운드 파일",
        "acs": "마이크로소프트 에이전트, 문자 구조의 저장 파일",
        "ads": "Ada source text specification",
        "ahq": "AudioHQ 플러그인 모튤",
        "ai": "어도비 일러스트레이터 파일",
        "ai": "코렐 트레이스 드로잉",
        "aif": "Audio Interchange File",
        "aiff": "Audio Interchange File",
        "ais": "ACDSee, 이미지 순서 파일",
        "albm": "HP Photosmart, 사진 출력용 앨범 파일",
        "alz": "이스트소프트 - 알집, 압축 파일",
        "app": "애플리케이션 파일",
        "apr": "apr 파일",
        "arc": "압축 아카이브",
        "arj": "Robert Jung ARJ 압축 아카이브",
        "art": "AOL, Johnson-Grace 압축 파일",
        "asd": "마이크로소프트, Word 자동 백업 파일",
        "asf": "마이크로소프트 Advanced Streaming Format 파일",
        "asm": "어셈블러 파일, 컴파일되지 않은 어셈블리어 파일",
        "asp": "Active Server Page 스크립트 파일",
        "asv": "자동저장 파일 (Auto Save File)",
        "asx": "Cheyenne 백업 스크립트",
        "asx": "마이크로소프트 Advanced Streaming Redirector 파일",
        "asx": "비디오 파일",
        "att": "AT&T 그룹 4 비트맵",
        "au": "Sun/NeXT/DEC/UNIX 등에서 쓰이는 사운드 파일",
        "avi": "윈도우즈 무비를 위한 마이크로소프트 오디오 및 비디오 파일",
        "awd": "FaxView, 문서 이미지",
        "bak": "백업파일",
        "bas": "비주얼 베이직 모듈 파일",
        "bat": "MS-DOS 일괄처리 파일",
        "bgdb": "배움닷컴 GVA, 강의 파일",
        "bh": "Unknown Apple II File 관련 압축 파일",
        "bhx": "BASE64MIME, 인코딩된 파일",
        "bin": "바이너리 파일",
        "bkf": "마이크로소프트 백업 파일",
        "bmf": "Corel, 갤러리 파일",
        "bmp": "윈도우 또는 OS/2의 비트맵 그래픽 파일",
        "bnk": "Electronic Arts 사운드 효과 뱅크 파일",
        "bnk": "애드립의 악기 뱅크 파일",
        "btr": "Btrieve 5.1, 데이터베이스 파일",
        "bz2": "UNIX용 bzip2 압축 파일",
        "b64": "BASE64MIME 형식으로 인코딩된 파일",
        "c": "C 언어 소스 코드",
        "cab": "마이크로소프트 캐비넷 배포 파일",
        "cad": "소프트데스크 드라픽스 캐드 파일",
        "cal": "윈도우 캘린더 파일",
        "cam": "카시오(Casio) 카메라 파일",
        "cap": "이야기97용 갈무리 파일",
        "cat": "dBase, 카탈로그 파일",
        "cbl": "RM-COBOL, 원시코드 파일",
        "cc": "C++ 언어 소스 코드",
        "cca": "cc:mail 아카이브 파일",
        "cct": "Macromedia Director, 쇼크웨이브 캐스트 파일",
        "cda": "CD 오디오 트랙",
        "cdb": "Pocket Access 데이터 베이스",
        "cdf": "마이크로소프트 채널 정의 형식 파일",
        "cdr": "코렐 드로우 파일",
        "cdr": "오디오 CD (공 CD) 데이터 파일",
        "cdt": "코렐 드로우 템플릿 파일",
        "cdx": "코렐 드로우 압축 파일",
        "cer": "보안 인증서",
        "cfg": "구성 파일",
        "cfm": "ColdFusion, 템플릿",
        "cfm": "비주얼 dBASE, 윈도우 커스토머 폼",
        "cfm": "코렐. 폰트마스터 파일",
        "cgi": "CGI 스크립트 파일",
        "cgm": "컴퓨터 그래픽 메타파일",
        "chk": "도스에서 CHKDSK를 써서 복원된 파일",
        "chm": "Compiled HTML 파일",
        "class": "자바 클래스 파일",
        "clp": "윈도우 클립보드 파일",
        "cls": "비주얼베이직 클래스 모듈",
        "cmd": "윈도우즈 명령 파일",
        "cnt": "Windows 콘텐츠 파일",
        "cnv": "Word for Windows, 데이터 변환 지원 파일",
        "cnv": "WordPerfect for Windows, 임시 파일",
        "cnv": "WS_FTP Pro, 변환 파일",
        "cob": "COBOL 소스 코드",
        "com": "MS-DOS용 실행 파일",
        "cpl": "윈도우 제어판 파일",
        "cpp": "비주얼 C/C++ 소스 파일",
        "cpx": "Corel Presentation Exchange, 압축된 도면 파일",
        "crc": "RZSplit, 분할된 파일에 관한 정보",
        "crw": "Canon, Raw Format",
        "csd": "드림투리얼리티, 통합 문서 포맷 파일",
        "css": "Cascading Style Sheet file (MIME)",
        "csv": "Comma-separated values file",
        "ctb": "Autodesk, AutoCAD 색상에 따른 플롯 스타일 표",
        "cue": "마이크로소프트 Cue Cards 데이터",
        "cur": "윈도우 커서",
        "cxb": "코믹구루, 만화 이미지 파일",
        "cxx": "C++ 소스코드 파일",
        "dat": "데이터 파일",
        "dbf": "dBase 파일",
        "dbf": "Oracle 8.1.x 테이블공간 파일",
        "dbi": "Borland, 데이터베이스 탐색 정보",
        "dbk": "dBase 데이터베이스 백업",
        "dbx": "Outlook Express 5, 메일 저장 파일",
        "dcr": "쇽웨이브 파일",
        "dcu": "델파이 컴파일드 유니트",
        "dft": "BullsEye 스타일 시트",
        "dft": "Metalix, cncKad2002 Drafting Tool",
        "dgn": "Microstation95 CAD 도면",
        "dib": "장치 독립적인 비트맵 (Device-independent bitmap)",
        "dir": "매크로미디어 디렉터 파일",
        "dir": "ProComm Plus 다이얼링 디렉토리",
        "dll": "Dynamic Link Library",
        "dlg": "C++, 다이얼로그 스크립트",
        "dmp": "화면이나 메모리의 덤프 파일",
        "doc": "마이크로소프트 워드 파일",
        "docx": "마이크로소프트 워드 파일",
        "dot": "마이크로소프트 서식 파일",
        "dpr": "델파이 프로젝트 파일",
        "drv": "드라이버 파일",
        "drw": "Micrografx 벡터 그래픽 파일",
        "drw": "로터스 프리랜스 이미지",
        "drw": "Pro/E 드로잉",
        "dsc": "Description 파일",
        "dsc": "오라클, 디스카드 파일",
        "dsf": "Micrografx Designer v7.x",
        "dsf": "Delusion, 디지털 사운드 파일",
        "dsn": "ODBC 데이터 소스",
        "dsp": "마이크로소프트 디벨롭퍼 스튜디오, 프로젝트 파일",
        "dsp": "시그너춰, 디스플레이 매개변수들",
        "dsp": "닥터 할로, 그래픽 디스플레이 드라이버",
        "dst": "C++/Delphi 데스크탑 설정치",
        "dst": "타지마 (Tajima) 컴퓨터자수기 파일",
        "dsw": "Borland C++ 4.5, 데스크탑 설정치",
        "dsw": "마이크로소프트 디벨롭퍼 스튜디오, 작업공간 파일",
        "dtd": "SGML의 문서형식정의(DFD) 파일",
        "dun": "마이크로소프트 윈도우 95/98, 다이얼업 네트워킹 파일",
        "dwf": "Autodesk, 벡터 그래픽",
        "dwf": "마이크로소프트 WHIP autoCAD reader, 도면 웹 파일",
        "dwg": "오토캐드 파일",
        "dwt": "드림위버 템플릿 파일",
        "dxf": "도면 교환 형식, 바이너리 DWG 형식의 텍스트 표현",
        "dxr": "디렉터 무비 파일 (편집불가)",
        "ear": "자바 엔터프라이즈 애플리케이션 패키징 유니트",
        "ear": "enterprise archive 파일",
        "ebs": "WindowsXP 스캐너 파일",
        "ebs": "Rational, Rose 98 스크립트 소스",
        "efx": "Everex EFax, 팩스 문서",
        "efx": "Efax Reader, 팩스 문서",
        "emf": "Enhanced Windows Metafile",
        "eml": "마이크로소프트 아웃룩 익스프레스, 메일 메시지 파일 (MIME RFC 822)",
        "enc": "Lotus 1-2-3 - uuencode, Encoded file - UUENCODEd 파일",
        "enc": "Encore, 음악 파일",
        "enc": "Video File, 페이지 레이아웃 파일",
        "env": "WOPR, Enveloper Macro",
        "env": "Microsoft WordPerfect for Windows, 환경 파일",
        "eps": "캡슐화된 포스트스크립트 이미지",
        "er1": "ERWin 파일",
        "erx": "ERWin 파일",
        "esp": "포스트스크립트 프린터를 위해 설계된 정보를 담고 있는 파일들",
        "etf": "Enriched Text File",
        "evt": "이벤트 로그 (마이크로소프트 윈도우NT, 2000)",
        "exe": "실행 파일",
        "exp": "저장된 대화 (ICQ에서)",
        "ext": "WS_FTP PRO, ASCII 이진전송 파일",
        "f": "FORTRAN 파일",
        "f": "FREEZE 압축파일 아카이브",
        "fcd": "가상 CD-ROM 파일",
        "fcd": "FastCAD/EasyCAD 출력 파일",
        "ffa": "마이크로소프트 find fast 파일",
        "fla": "플래시 무비 파일",
        "fli": "오토데스크의 FLIC 애니메이션",
        "flm": "오토캐드, 필름 롤",
        "flx": "DataFlex, 컴파일된 바이너리 파일",
        "fmg": "FreeMarkets 그래픽 브라우저",
        "fnt": "이야기97용 글꼴 파일",
        "fon": "시스템 글꼴 파일",
        "for": "FORTRAN 소스코드",
        "frm": "폼(form) 파일",
        "fxr": "WinFax 수신문서 (TIFF 형식)",
        "g": "APPLAUSE, 데이터 차트",
        "g723": "가공하지 않은 CCITT G.723 3 또는 5 비트 ADPCM 형식의 데이터",
        "gal": "이야기, 갈무리 파일",
        "gdb": "영산정보통신 GVA 및 GVA2000, 압축된 강의 파일",
        "gdb": "InterBase 데이터베이스 파일",
        "gid": "윈도우95 글로벌 인덱스",
        "gif": "컴퓨서브 그래픽 파일",
        "gsp": "Gnuzip, Zip 파일",
        "gul": "훈민정음 파일",
        "gz": "유닉스 gzip 압축 파일",
        "h": "C 프로그램 헤더 파일",
        "ha": "PPMC 개선 압축 파일",
        "h30": "한글 워디안, 한글97 문서를 한글 워디안으로 불러왔을 때 생기는 백업 파일",
        "hdr": "한그림97, 그림 파일",
        "hdr": "Pc-File+, 데이터베이스 헤더 파일",
        "hdr": "Egret, 데이터 파일",
        "hdr": "ProComm Plus, 메시지 헤더 텍스트",
        "hdr": "1st Reader, 메시지 헤더 텍스트",
        "hem": "AnyEQ 수식 매크로 파일",
        "hft": "아래아한글 글꼴 파일",
        "hgl": "HP Graphics Language, 도면 파일",
        "hhp": "ProComm Plus, 원격 사용자들을 위한 도움말 정보",
        "hlp": "도움말 파일",
        "hma": "한컴 글맵시 파일",
        "hml": "HWPML(Hangul Word Processor Markup Language) 파일",
        "hnt": "힌트 파일. 게임 등에서 자주 사용된다.",
        "hp": "THOR 데이터베이스, 제1 해시 파일",
        "hp": "HP/GL, HP 프린터 또는 플로터 출력용 프린트 파일",
        "hpt": "한컴 슬라이드 파일",
        "hqx": "Macintosh, 인터넷에서 문서를 주고 받을때 사용하는 파일",
        "hsm": "한컴 이지샘 파일",
        "hst": "히스토리 파일",
        "hta": "97 글맵시 파일",
        "hta": "시스템 레지스트리를 갱신하게 위해 바이러스에 의해 사용되는 HTML 파일",
        "htm": "하이퍼텍스트 문서",
        "html": "하이퍼텍스트 문서",
        "htx": "확장 HTML, 템플릿 파일",
        "hwd": "Hollywood, 프레젠테이션",
        "hwp": "아래아한글 파일",
        "hwt": "아래아한글 서식 파일",
        "ice": "ice.exe 사용 압축 파일",
        "icm": "Image Color Matching 프로필",
        "icn": "아이콘 소스코드",
        "ico": "아이콘 파일",
        "idx": "Outlook Express 4, 메일 저장 파일",
        "iff": "Interchange file, (Amiga ILBM)",
        "iff": "Image (Sun TAAC/SDSC Image Tool)",
        "igs": "CAD 오버레이 파일",
        "img": "GEM, 이미지 파일",
        "img": "Ventura Publisher, 비트맵 그래픽 파일",
        "inc": "Include 파일 (어셈블러 언어 또는 Active Server)",
        "indd": "Adobe, Indesign",
        "inf": "설치정보 파일",
        "ini": "초기화 파일, 환경설정 파일",
        "ipx": "Interactive Pictures Corporation, AV 파일",
        "iso": "ISO 9660 CD-ROM 파일시스템 표준에 기반을 둔, CD-ROM 상의 파일 목록",
        "isu": "InstallShield, 언인스톨 스크립트",
        "j6i": "Ricoh 디지털 카메라 파일",
        "jar": "자바 아카이브 (애플릿이나 관련 파일들을 위한 압축 파일)",
        "java": "자바 소스코드",
        "jnb": "Sigma Plot 5, Workbook 파일",
        "jpe": "JPEG 이미지",
        "jpeg": "JPEG 비트맵 그래픽 파일",
        "jpg": "JPEG 비트맵 그래픽 파일",
        "js": "자바스크립트 소스 파일",
        "lan": "NetWare, Loadable module (LAN DLL)",
        "lbm": "비트맵 (DeluxePaint)",
        "lbm": "Linear Bitmap graphics (XLib)",
        "lcd": "CDSpace, CD 이미지 파일",
        "ldif": "주소록 교환 형식",
        "lgc": "윈도우 애플리케이션 로그 파일",
        "lha": "LZH 파일의 또다른 확장자명",
        "lib": "라이브러리",
        "lnk": "윈도우 바로가기 파일",
        "lod": "로드 파일",
        "log": "로그 파일",
        "lzh": "LH ARC 압축 파일",
        "lwd": "LotusWorks, 텍스트 문서 파일",
        "m3u": "MPEG URL (MIME 오디오 파일) (MP3 재생 목록)",
        "mac": "이미지 (MacPaint)",
        "mak": "비주얼 베이직 또는 비주얼 C++ 프로젝트 파일",
        "max": "Kinetix 3D Studio Max, 3D 장면",
        "max": "Paperport, 문서 파일",
        "max": "OrCad, 레이아웃 파일",
        "max": "MAX, 소스코드",
        "mbx": "Outlook Express 4, 메일 저장 파일",
        "mcc": "MathCad, 구성 파일",
        "mcd": "MathCad, 문서 파일",
        "mcf": "MathCad, 글꼴 파일",
        "mcp": "Metrowerks CodeWarrior 프로젝트 파일",
        "mcp": "Capsule 애플리케이션 스크립트",
        "mcp": "Mathcad 프린터 드라이버",
        "mcr": "DataCad, 키보드 매크로 파일",
        "mdb": "마이크로소프트 액세스 데이터베이스",
        "mdf": "마이크로소프트, MS-SQL Master 데이터베이스 파일",
        "mdi": "마이크로소프트, 오피스 문서 이미지 파일",
        "mdl": "CA-Compete!, 스프레드시트",
        "mdl": "Digital Trakker, 음악 모듈",
        "mdl": "3D Design Plus, 모델",
        "mdl": "Quake, 모델 파일",
        "mdl": "Rational Rose, 모델 파일 요소",
        "mht": "마이크로소프트, MHTML 문서",
        "mhtm": "MHTML 문서 (MIME)",
        "mhtml": "MHTML 문서 (MIME)",
        "mi": "Cocreate ME10 데이터 파일",
        "mi": "잡다한(Miscellaneous) 파일들의 일반적인 총칭",
        "mid": "미디 음악 파일",
        "mim": "인터넷 문서 송수신 압축 파일",
        "mix": "Power C, 오브젝트 파일",
        "mix": "마이크로소프트 PhotoDraw 2000, 그림 파일",
        "mix": "마이크로소프트 Picture-It!, 그림 파일",
        "mix": "Command & Conquer, 패키지 파일",
        "mix": "Westwood Studios, 리소스 아카이브",
        "mmp": "MindMapor, MindManager 파일",
        "mmp": "Bravado, MMP 출력 비디오",
        "model": "CATIA, 도면 파일",
        "mov": "QuickTime for Windows 무비 파일",
        "mp2": "MPEG Audio Layer 2 파일 (MIME 비디오 파일)",
        "mp3": "MPEG Audio Layer 3 로 압축된 음악 파일",
        "mp4": "MPEG-4 비디오 파일",
        "mpeg": "MPEG 동영상 파일",
        "mpf": "MP3 Folders, 폴더 파일",
        "mpg": "MPEG 동영상 파일",
        "mpp": "마이크로소프트 프로젝트, 프로젝트 파일",
        "mpp": "CAD 도면 파일",
        "mpt": "마이크로소프트 프로젝트, 템플릿 파일",
        "mrc": "서지 데이터 (Machine-Readable Cataloging records)",
        "mrk": "Informative Graphics, 마크업 파일",
        "msc": "마이크로소프트 윈도우 2000, Common Console Document",
        "msg": "마이크로소프트, 전자우편 메시지",
        "msi": "마이크로소프트 윈도우 인스톨러 패키지",
        "mus": "Oak Road Systems, WHISTLE 데이터 파일",
        "nas": "NASTRAN 파일",
        "nfo": "Folio, Infobase 파일",
        "nil": "Norton, 아이콘 라이브러리 파일",
        "nls": "Uniscape, 현지화를 위해 사용된 국어 지원 파일",
        "nod": "Netobject Fusion, 파일",
        "nrg": "Nero, ISO 9660 이미지",
        "nxl": "한컴 넥셀 파일",
        "obd": "마이크로소프트 오피스, 바인더",
        "obz": "마이크로소프트 오피스, 바인더 마법사",
        "ocx": "마이크로소프트 OLE custom control",
        "oft": "마이크로소프트 아웃룩, 서식 파일",
        "ogg": "Vorbis, Vorbis 오디오 파일",
        "olb": "마이크로소프트 OLE, 오브젝트 라이브러리",
        "old": "백업 파일 들의 일반적인 총칭",
        "or3": "로터스 오거나이저 97 파일",
        "ost": "마이크로소프트 아웃룩, 오프라인 파일",
        "ovl": "오버레이 파일",
        "ovr": "오버레이 파일",
        "p7m": "S/MIME, 암호화와 서명, 불명료한 서명이나 일반적인 서명된 문서",
        "pab": "마이크로소프트, 개인 주소록",
        "pam": "Tonline, Ob4hbci 스마트 업데이트 파일",
        "pak": "PAK, 압축 아카이브 파일",
        "pas": "볼랜드 파스칼, 소스코드 파일",
        "pbk": "파일마이크로소프트 폰북",
        "pbr": "파워빌더 자원 파일",
        "pcd": "코닥 Photo-CD 이미지",
        "pcl": "HP 프린터 제어 언어 파일",
        "pco": "Pro*COBOL, 원시파일",
        "pct": "매킨토시 PICT drawing",
        "pcx": "ZSoft PC 페인트브로쉬 비트맵 파일",
        "pdf": "어도비 애크로뱃 문서 형식 (Portable Document Format)",
        "pdx": "ProCite, 데이터베이스 색인 파일",
        "pg": "2D Graphic",
        "pgd": "PGPdisk, 볼륨 파일",
        "pgp": "Pretty Good Privacy, 암호화된 파일",
        "php": "PHP 스크립트가 들어있는 HTML 페이지",
        "php3": "PHP 스크립트가 들어있는 HTML 페이지",
        "phtml": "PHP 스크립트가 들어있는 HTML 페이지",
        "pic": "PC Paint 비트맵",
        "pic": "Lotus picture",
        "pic": "매킨토시 PICT drawing",
        "pict": "매킨토시 PICT 이미지 파일",
        "pif": "프로그램 정보 파일(Program Information File)",
        "pjt": "마이크로소프트 비주얼 폭스프로(Visual FoxPro), 프로젝트 테이블 메모 파일",
        "pkg": "P-CAD, 데이터베이스",
        "pl": "Perl 프로그램",
        "pls": "윈앰프, MPEG 재생목록 파일",
        "plt": "HPGL Plotter, 도면 파일",
        "plt": "AutoCAD, 플롯 도면",
        "plt": "(일반적으로) 팔레트 파일",
        "pm4": "페이지메이커 4.0 문서 파일",
        "pmp": "Sony 디지털 카메라 파일",
        "png": "Portable Network Graphics 비트맵 그래픽 파일",
        "pot": "마이크로소프트 파워포인트 서식 파일",
        "ppd": "Adobe Acrobat v.4.0, 포스트스크립트 프린터 정의 파일 규격",
        "pps": "마이크로소프트 파워포인트 슬라이드 쇼",
        "pps": "Personal Producer 스토리 보드",
        "ppt": "마이크로소프트 파워포인트 파일",
        "pptx": "마이크로소프트 파워포인트 파일",
        "ppv": "Windows CE, 포켓 파워포인트 파일",
        "prf": "마이크로소프트 윈도우, 시스템 파일",
        "prf": "매크로미디어 디렉터, 설정 파일",
        "prf": "Improces-Fastgraph, Pixel Run 형식 그래픽",
        "prf": "dBase IV, 프린터 드라이버",
        "prf": "Profiler, 출력 파일",
        "prl": "Perl 스크립트",
        "prn": "프린트 테이블",
        "prn": "데이터 캐드, 윈도우 프린터 파일",
        "prn": "시그너처, 프린터 드라이버",
        "prn": "로터스123 심포니, 텍스트 파일",
        "prt": "CADKEY, 부품 파일",
        "prz": "로터스 프리랜스97, 그래픽 파일",
        "ps": "포스트스크립트 형식의 출력용 파일",
        "psd": "어도비 포토샵 비트맵 파일",
        "psp": "페인트샵 프로 이미지 파일",
        "pst": "마이크로소프트 아웃룩, 개인 폴더 파일",
        "pub": "Ventura Publisher, Publication 파일",
        "pub": "Microsoft Publisher, 문서 파일",
        "pub": "PGP, 공개키 링 파일",
        "pwi": "Windows CE, 포켓 워드 파일",
        "pwl": "윈도우95/98 패스워드 목록 파일",
        "pxl": "Windows CE, 포켓 엑셀 파일",
        "pxr": "Pixar, Pixar 이미지 형식",
        "pxt": "마이크로소프트, 포켓 엑셀 템플릿",
        "qic": "마이크로소프트, 백업 파일 (Quarter Inch Cassette)",
        "qrp": "Centura, 보고서 작성자 파일",
        "qtx": "QuickTime, 이미지 파일",
        "ra": "리얼오디오 소리 파일",
        "ram": "리얼오디오 메타 파일",
        "rar": "RAR 압축 파일",
        "raw": "Raw File Format (비트맵)",
        "rbf": "Rbase, 데이터 파일",
        "rbk": "한컴 슬라이드 서식",
        "rc": "마이크로소프트 C/C++, 리소스 스크립트",
        "rc": "Borland C++, 리소스 스크립트",
        "rc": "emacs, 구성 파일",
        "rcp": "Recomposer's MIDI 시퀀서 음악 파일",
        "rdo": "Xerox, Document Assembler Metafile",
        "reg": "윈도우 레지스트리 파일",
        "res": "마이크로소프트 Visual C++, 리소스 파일",
        "rle": "Run-Length Encoded bitmap",
        "rm": "리얼오디오 비디오 파일",
        "rmi": "MIDI 음악 파일",
        "rol": "FM 음악 Adlib 음악파일 (Roland)",
        "rom": "카트리지 기반의 홈 비디오 게임 에뮬레이터 파일",
        "rpm": "레드햇 리눅스의 패키지 매니저 파일",
        "rpt": "크리스탈 리포트 파일 (및 마이크로소프트 비주얼베이직의 서브셋)",
        "rtf": "Rich Text Format 문서",
        "s": "유닉스, 어셈블러 원시 코드 파일",
        "s3m": "Scream Tracker v 3.0, 16 채널 음악 파일",
        "sat": "ACIS, Solid 모델",
        "sav": "저장된 게임 파일 (일반 명칭)",
        "sbd": "Storyboard Editor, 스토리보드 데이터 파일",
        "sbd": "Superbase, 데이터 정의 파일",
        "sbl": "Shockwave 플래시 오브젝트",
        "scc": "마이크로소프트, 소스 세이프 파일",
        "scr": "화면보호기 파일",
        "sd2": "SAS 데이터베이스 (윈도우95/NT OS/2, 매킨토시)",
        "sea": "자체적으로 압축이 풀리는 아카이브 파일",
        "sfx": "RAR 자체-풀림 아카이브",
        "sgml": "Standard Generalized Markup Language 파일",
        "shtml": "Server Side Includes (SSI)가 포함되어 있는 HTML 파일",
        "sh3": "하바드 그래픽스 프레젠테이션 파일",
        "sib": "Sibelius, 음악 파일",
        "sit": "Stuffit, 압축된 매킨토시 아카이브 파일",
        "smi": "로터스 CC:Mail, 스마트 아이콘",
        "snd": "NeXT, 사운드 파일",
        "snd": "매킨토시, 사운드 리소스 파일",
        "sng": "롤랜드, 음악 데이터 파일",
        "snm": "넷스케이프, 메일 폴더 인덱스",
        "snp": "Computer Eyes, 출력 비디오 파일",
        "spi": "Siemens Scanner, 그래픽 파일",
        "spi": "Phillips Scanner, 그래픽 파일",
        "spl": "Macromedia, 플래쉬용 무비 파일",
        "step": "ISO-10303 STEP 제품 데이터",
        "stp": "어도비, Acrobat Exchange 플러그인",
        "stp": "ISO-10303 STEP 제품 데이터",
        "stp": "DART Pro, DART Pro 98 시스템 설정치",
        "sty": "아래아한글 스타일 파일",
        "sub": "Divx 서브타이틀",
        "sur": "AutoData Systems, Survey Plus 2000 Survey File",
        "svg": "W3C, 스케일러블 벡터 그래픽스 파일",
        "swa": "Macromedia Director, 쇽웨이브 오디오 파일",
        "swf": "쇽웨이브 플래시 객체",
        "swp": "DOS, 스왑파일",
        "syd": "QEMM, 기동 파일 백업",
        "sys": "시스템 파일",
        "tar": "테이프 아카이브",
        "tbl": "Pagemaker TableEditor, 그래픽 형식",
        "tbl": "OS/2, 표 형식의 값들",
        "tel": "이야기97용 전화걸기 정보 파일",
        "tga": "Targa 비트맵",
        "tgz": "유닉스 Gzip/테이프 아카이브",
        "thm": "비디오 썸네일 파일",
        "tif": "Tag Image File Format 비트맵 파일",
        "tiff": "Tag Image File Format 비트맵 파일",
        "tlb": "마이크로소프트 OLE type 라이브러리 파일",
        "tlb": "버블 에디터 참고 테이블",
        "tlb": "VAX 텍스트 라이브러리",
        "tlb": "비주얼 C++ Type 라이브러리",
        "tmp": "윈도우 임시 파일",
        "trm": "윈도우 터미널 파일",
        "trx": "I-Cite, 익스포트 파일",
        "tsd": "trueSpace 4, 데모 파일",
        "tsk": "Pocket PC, 스킨 파일 (테마)",
        "tsm": "OS/2용 Turbo Assembler, 설명서 파일",
        "ttc": "트루타입 컬렉션 파일",
        "ttf": "트루타입 글꼴",
        "txt": "아스키 텍스트",
        "tzz": "탑정보통신 밤톨이 압축파일",
        "ukx": "Epic Games, Inc., Unreal Tournament 2003 Animation",
        "urh": "훈넷 슬라이더, 이미지 주소 파일",
        "url": "인터넷 바로가기 파일",
        "uu": "UU-encode된 파일",
        "uue": "UU-encode된 파일",
        "vbg": "비주얼베이직, 그룹 프로젝트",
        "vbp": "비주얼베이직, 프로젝트",
        "vbr": "비주얼베이직, Remote automated registration 파일",
        "vbs": "비주얼베이직, 스크립트 파일",
        "vbw": "비주얼베이직, Workspace 파일",
        "vbx": "비주얼베이직, custom control 파일",
        "vcd": "Virtual CD-ROM",
        "vcf": "넷스케이프, 가상 카드 파일",
        "vct": "마이크로소프트 폭스프로(FoxPro) 클래스 라이브러리",
        "vcx": "마이크로소프트 폭스프로(FoxPro) 클래스 라이브러리",
        "vob": "Digital Video Disk, 현재 DVD에서 사용되는 암호화된 비디오 및 오디오 파일들",
        "voc": "크리에이티브 랩스 사운드 블라스터 오디오 파일",
        "voc": "Quartet 오디오 파일",
        "vqe": "야마하 사운드 VQ Locator 파일",
        "vqf": "야마하 사운드 VQ 파일",
        "vql": "야마하 사운드 VQ Locator 파일",
        "vrml": "VRML 파일",
        "vsd": "비지오 드로잉 파일",
        "vss": "비지오 스텐실 파일",
        "vue": "dBase IV 뷰 파일",
        "vue": "마이크로소프트 폭스프로 뷰 파일",
        "vxd": "마이크로소프트 가상 장치 드라이버",
        "w44": "dBase 임시 파일",
        "wab": "Outlook 주소록",
        "war": "Web application ARchieve 파일",
        "wav": "윈도우 웨이브 파일",
        "wcm": "WordPerfect 매크로",
        "wej": "나모 웹에디터, 프로젝트 파일",
        "wfx": "윈도우 팩스 파일",
        "wi": "코렐, Wavelet 압축 비트맵 파일",
        "wks": "Microsoft Works, 문서",
        "wma": "마이크로소프트 Windows Media 오디오 파일",
        "wmf": "윈도우 메타 파일",
        "wmv": "마이크로소프트, 윈도우 미디어 파일",
        "wp4": "WordPerfect 4 문서",
        "wp5": "WordPerfect 5 문서",
        "wp6": "WordPerfect 6 문서",
        "wpd": "WordPerfect 문서",
        "wpg": "WordPerfect 그래픽",
        "wps": "Microsoft Works, 텍스트 문서",
        "wpt": "WordPerfect 템플릿",
        "wrl": "가상현실 모델",
        "wq1": "쿼트로프로/DOS용 스프레드시트",
        "wq2": "쿼트로프로/버전5 스프레드시트",
        "wsd": "WordStar, 문서파일",
        "wsf": "Windows 스크립트 파일",
        "wsp": "Fortran PowerStation, WorkSpace file",
        "wsz": "WinAmp, 스킨파일",
        "xcf": "GIMP, 이미지 파일",
        "xdw": "제록스 DocuWorks 문서",
        "xlc": "마이크로소프트 엑셀 차트",
        "xlm": "마이크로소프트 매크로 파일",
        "xls": "마이크로소프트 엑셀 파일",
        "xlsx": "마이크로소프트 엑셀 파일",
        "xlt": "마이크로소프트 엑셀 서식 파일",
        "xml": "eXtensible Markup Language 파일",
        "xxe": "Xxencoded File, 암호화 파일",
        "xy": "XYWrite, 텍스트 파일",
        "y": "Amiga, Yabba 압축 아카이브",
        "yal": "Arts & Letters 클립아트 라이브러리",
        "z": "UNIX, compress, uncompress 파일",
        "zip": "도스, pkzip.exe, pkunzip.exe 파일",
        "zoo": "도스, zoo.exe 파일",
        "001": "rzjoin 으로 분할된 파일"
    }
};


//====================================================================================================
//IBSheet 생성
//====================================================================================================
function IBUpload_IBSheetCreate(name){
  createIBSheet2($("#"+name)[0], name + "_ibsheet", "100%", "100%");
}
//====================================================================================================
//IBSheet 의 초기화
//테마별로 이용시 추가 및 변경
//====================================================================================================

function IBSheetLoadPage_Main(sheetObject) {

  var cfg = {ToolTip: 1, DragMode: -1, AutoFitColWidth:"init|resize"};
  sheetObject.SetConfig(cfg);

  var headers = [{Text: "||파일명|크기|유형|날짜|상태|URL KEY ", Align: "Center"}];
  var info = {Sort: 1, ColMove: 1, ColResize: 1, HeaderCheck: 1};

  sheetObject.InitHeaders(headers, info);

  var cols = [

      //====================================================================================================
      // 업로드 2개의 필수 항목 (체크박스, 파일 다운로드 경로)
      //====================================================================================================
      {Type: "CheckBox", Width: 10, SaveName: "FileSelect", Align: "Center"},
      {Type: "Text", Width: 0, SaveName: "FileKey", Align: "Left", Edit: "0", Hidden: true},

      //====================================================================================================
      // 업로드 선택 항목 ( 이하의 항목은 마음대로 고치셔도 됩니다 )
      //====================================================================================================
      {Type: "Text", Width: 60, SaveName: "FileName", Align: "Left", Edit: "0"},
      {Type: "Int", Width: 48, SaveName: "FileSize", Format:"#,###,##0 KB",Align: "Right", Edit: "0"},
      {Type: "Text", Width: 80, SaveName: "FileType", Align: "Left", Edit: "0"},
      {Type: "Text", Width: 80, SaveName: "FileDate", Align: "Left", Edit: "0"},
      {Type: "Text", Width: 48, SaveName: "FileProgress", Align: "Center", Edit: "0"},
      {Type: "Text", SaveName: "FileUrl", Align: "Left", Edit: "0", Hidden: true}

  ];
  sheetObject.InitColumns(cols);

  sheetObject.SetExtendLastCol(false);
  sheetObject.SetFocusEditMode(0);
  sheetObject.SetSelectionMode(4);
  sheetObject.SetEditable(1);
  sheetObject.SetColEditable(0, true);
  sheetObject.SetEditableColorDiff(0);
  sheetObject.SetEllipsis(1);

}

//====================================================================================================
// ***** 이하 소스코드는 변경하지 마십시오.
//====================================================================================================



/*
 FormQueryString 관련 함수 정의
 */
/* FormQueryString과 FormQueryStringEnc함수에서 필수입력 체크시 메시지로 사용한다.-3.4.0.50 */
var IBS_MSG_REQUIRED = "은(는) 필수입력 항목입니다.";

/**
 * 에러메시지를 표시한다. IBS_ShowErrMsg 대신 이 함수를 사용해야 한다.
 * @param   : sMsg      - 메시지
 * @return  : 없음
 * @version : 3.4.0.50
 * @sample
 *  IBS_ShowErrMsg("에러가 발생했습니다.");
 */
function IBS_ShowErrMsg(sMsg) {
    return alert("[IBSheetInfo.js]\n" + sMsg);
}

function IBS_getName(obj) {
    if (obj.name != "") {
        return obj.name;
    } else if (obj.id != "") {
        return obj.id;
    } else {
        return "";
    }
}

function IBS_RequiredChk(obj) {
    return (obj.getAttribute("required") != null);
}

/**
 * Form오브젝트 안에 있는 컨트롤을 QueryString으로 구성한다. 이때, 한글은 인코딩하지 않는다.
 * @param   : form          - 필수,html의 Form 오브젝트 Name
 * @param   : checkRequired - 선택,필수입력 체크 여부(true,false)
 * @return  : String        - Form오브젝트 안에 Control을 QueryString으로 구성한 문자열
 *            undefined     - checkRequired인자가 true이고, 필수입력에 걸린경우 return 값
 * @version : 1.0.0.0,
 *            3.4.0.50(checkRequired 인자 추가)
 * @sample1
 *  var sCondParam=FormQueryString(document.frmSearch); //결과:"txtname=이경희&rdoYn=1&sltMoney=원화";
 * @sample2
 *  <input type="text" name="txtName" required="이름">        //필수 입력 항목이면 required="이름" 를 설정한다.
 *  var sCondParam = FormQueryString(document.mainForm, true);//필수입력까지 체크하며, 필수입력에 걸리면 리턴값은 null
 *  if (sCondParam==null) return;
 */
function FormQueryString(form, checkRequired) {
    if (typeof form != "object" || form.tagName != "FORM") {
        IBS_ShowErrMsg("FormQueryString 함수의 인자는 FORM 태그가 아닙니다.");
        return "";
    }

    if (checkRequired == null) checkRequired = false;

    var name = new Array(form.elements.length);
    var value = new Array(form.elements.length);
    var j = 0;
    var plain_text = "";

    //사용가능한 컨트롤을 배열로 생성한다.
    len = form.elements.length;
    for (i = 0; i < len; i++) {
        var prev_j = j;
        switch (form.elements[i].type) {
            case undefined:
            case "button":
            case "reset":
            case "submit":
                break;
            case "radio":
            case "checkbox":
                if (form.elements[i].checked == true) {
                    name[j] = IBS_getName(form.elements[i]);
                    value[j] = form.elements[i].value;
                    j++;
                }
                break;
            case "select-one":
                name[j] = IBS_getName(form.elements[i]);
                var ind = form.elements[i].selectedIndex;
                if (ind >= 0) {

                    value[j] = form.elements[i].options[ind].value;

                } else {
                    value[j] = "";
                }
                j++;
                break;
            case "select-multiple":
                name[j] = IBS_getName(form.elements[i]);
                var llen = form.elements[i].length;
                var increased = 0;
                for (k = 0; k < llen; k++) {
                    if (form.elements[i].options[k].selected) {
                        name[j] = IBS_getName(form.elements[i]);
                        value[j] = form.elements[i].options[k].value;

                        j++;
                        increased++;
                    }
                }
                if (increased > 0) {
                    j--;
                } else {
                    value[j] = "";
                }
                j++;
                break;
            default:
                name[j] = IBS_getName(form.elements[i]);
                value[j] = form.elements[i].value;
                j++;
        }

        if (checkRequired) {
            //html 컨트롤 태그에 required속성을 설정하면 필수입력을 확인할 수 있다.
            //<input type="text" name="txtName" required="이름">

            if (IBS_RequiredChk(form.elements[i]) && prev_j != j && value[prev_j] == "") {

                if (form.elements[i].getAttribute("required") == null ||
                    form.elements[i].getAttribute("required") == ""
                ) {
                    alert('"' + IBS_getName(form.elements[i]) + '"' + IBS_MSG_REQUIRED);
                } else {

                    alert('"' + form.elements[i].getAttribute("required") + '"' + IBS_MSG_REQUIRED);
                }
                //컨트롤이 숨겨져 있을수도 있으므로 에러 감싼다.
                try {
                    form.elements[i].focus();
                } catch (ee) {;
                }

                return;
            }
        }
    }
    //QueryString을 조합한다.
    for (i = 0; i < j; i++) {
        if (name[i] != '') plain_text += name[i] + "=" + value[i] + "&";
    }

    //마지막에 &를 없애기 위함
    if (plain_text != "") plain_text = plain_text.substr(0, plain_text.length - 1);

    return plain_text;
}

/**
 * Form오브젝트 안에 있는 컨트롤을 QueryString으로 구성한다. 이때, 한글은 인코딩한다.
 * @param   : form          - 필수,html의 Form 오브젝트 Name
 * @param   : Sheet         - 필수,IBheet의 Object id
 * @param   : checkRequired - 선택,필수입력 체크 여부(true,false)
 * @return  : String        - Form오브젝트 안에 Control을 QueryString으로 구성한 문자열
 *            undefined     - checkRequired인자가 true이고, 필수입력에 걸린경우 return 값
 * @version : 1.0.0.0,
 *            3.4.0.50(checkRequired 인자 추가)
 * @sample1
 *  var sCondParam=FormQueryStringEnc(document.frmSearch, mySheet1);
 *  원본:"txtname=이경희&rdoYn=1&sltMoney=원화";
 *  결과:"txtname=%C0%CC%B0%E6%C8%F1&rdoYn=1&sltMoney=%BF%F8%C8%AD";                //UTF16인 경우
 *  결과:"txtname=%EC%9D%B4%EA%B2%BD%ED%9D%AC&rdoYn=1&sltMoney=%EC%9B%90%ED%99%94"; //UTF8인 경우
 * @sample2
 *  <input type="text" name="txtName" required="이름">                    //필수 입력 항목이면 required="이름" 를 설정한다.
 *  var sCondParam = FormQueryStringEnc(document.mainForm, mySheet, true);//필수입력까지 체크하며, 필수입력에 걸리면 리턴값은 null
 *  if (sCondParam==null) return;
 */
function FormQueryStringEnc(form, checkRequired) {
    if (typeof form != "object" || form.tagName != "FORM") {
        IBS_ShowErrMsg("FormQueryStringEnc 함수의 form 인자는 FORM 태그가 아닙니다.");
        return "";
    }


    if (checkRequired == null) checkRequired = false;

    var name = new Array(form.elements.length);
    var value = new Array(form.elements.length);
    var j = 0;
    var plain_text = "";

    //사용가능한 컨트롤을 배열로 생성한다.
    len = form.elements.length;
    for (i = 0; i < len; i++) {
        var prev_j = j;
        switch (form.elements[i].type) {
            case "button":
            case "reset":
            case "submit":
                break;
            case "radio":
            case "checkbox":
                if (form.elements[i].checked == true) {
                    name[j] = IBS_getName(form.elements[i]);
                    value[j] = form.elements[i].value;
                    j++;
                }
                break;
            case "select-one":
                name[j] = IBS_getName(form.elements[i]);
                var ind = form.elements[i].selectedIndex;
                if (ind >= 0) {

                    value[j] = form.elements[i].options[ind].value;

                } else {
                    value[j] = "";
                }
                j++;
                break;
            case "select-multiple":
                name[j] = IBS_getName(form.elements[i]);
                var llen = form.elements[i].length;
                var increased = 0;
                for (k = 0; k < llen; k++) {
                    if (form.elements[i].options[k].selected) {
                        name[j] = IBS_getName(form.elements[i]);

                        value[j] = form.elements[i].options[k].value;

                        j++;
                        increased++;
                    }
                }
                if (increased > 0) {
                    j--;
                } else {
                    value[j] = "";
                }
                j++;
                break;
            default:

                name[j] = IBS_getName(form.elements[i]);
                value[j] = form.elements[i].value;
                j++;
        }

        if (checkRequired) {
            //html 컨트롤 태그에 required속성을 설정하면 필수입력을 확인할 수 있다.
            //<input type="text" name="txtName" required="이름">
            if (IBS_RequiredChk(form.elements[i]) && prev_j != j && value[prev_j] == "") {
                if (form.elements[i].getAttribute("required") == "") {
                    alert('"' + IBS_getName(form.elements[i]) + '"' + IBS_MSG_REQUIRED);
                } else {
                    alert('"' + form.elements[i].getAttribute("required") + '"' + IBS_MSG_REQUIRED);
                }
                //컨트롤이 숨겨져 있을수도 있으므로 에러 감싼다.
                try {
                    form.elements[i].focus();
                } catch (ee) {;
                }

                return;
            }
        }
    }

    //QueryString을 조합한다.
    for (i = 0; i < j; i++) {
        if (name[i] != '') plain_text += encodeURIComponent(name[i]) + "=" + encodeURIComponent(value[i]) + "&";
    }

    //마지막에 &를 없애기 위함
    if (plain_text != "") plain_text = plain_text.substr(0, plain_text.length - 1);

    return plain_text;
}


//====================================================================================================
// 파일 확장자별로 지원가능한 아이콘 이미지 명 얻기
//====================================================================================================
function _IBUpload_mFileType2ImageName(FileName) {

    if (FileName == undefined) {
        return "file";
    }

    var part;
    part = FileName.split(".");
    var sFileExt = part[part.length - 1];
    var result = "";

    if ((" " + ibleaders.ibupload.supportIcon + " ").indexOf(sFileExt) > -1) {
        return sFileExt;
    } else {
        return "file";
    }
}


//--------------------------------------------------------------------------------
// 용량을 콤마 KB 단위로 표시함
//--------------------------------------------------------------------------------
function _IBUpload_mNumberToKByte(size) {
    return (-(Math.floor(-(size / 1024)))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "KB";
}

//--------------------------------------------------------------------------------
// 확장자를 보고 유형 설명글 을 얻음
//--------------------------------------------------------------------------------
function _IBUpload_mFileType2Desc(FileName) {
    if (FileName == null) {
        return "파일";
    }

    var part;
    part = FileName.split(".");
    var sFileExt = part[part.length - 1];

    var result = "";

    if (ibleaders.ibupload.fileType[sFileExt] !== undefined) {
        result = ibleaders.ibupload.fileType[sFileExt];
    } else {
        result = "파일";
    }
    return result;
}

//--------------------------------------------------------------------------------
// getFiles 로 얻은 File 자료로 부터 아이콘 + 파일명 을 얻음
//--------------------------------------------------------------------------------
function _IBUpload_GetIcon_FileName(FileData, i) {

    var result = "";

    var OneFile = (FileData + "\n\n").split("\n")[i];
    var FileInfo = OneFile.split("|");  // 파일명 / 날짜 / 크기 / FileUrl KeyWord
    // trim
    FileInfo[0] = FileInfo[0].replace(/^\s+|\s+$/g, "");

    if (FileInfo[0] != "") {
        result += "&nbsp;";
        result += "<img  align=absmiddle src='icon_image/icon16/";
        result += _IBUpload_mFileType2ImageName(FileInfo[0]) + ".gif'>";
        result += " ";
        result += FileInfo[0];
    }

    return result;
}

//--------------------------------------------------------------------------------
// files 문자열로부터 간단한 파일명 리스트만 얻음
//--------------------------------------------------------------------------------
// (예)
//--------------------------------------------------------------------------------
function _IBUpload_GetFileNamesFromFiles(FileData) {

    var items = FileData.split("\"name\":\"");

    items[0] = "";
    for(var i=1; i<items.length; i++){
        items[i] = items[i].substring(0,items[i].indexOf("\""))+" ";
    }

    return items.join("");
}


//--------------------------------------------------------------------------------
// 시간 태그를 보고 날짜 시각을 얻음
//--------------------------------------------------------------------------------
function _IBUpload_mFileName2Date(FileUrl) {
    if (FileUrl == "") return;
    var result = FileUrl.substring(FileUrl.lastIndexOf("/") + 1, FileUrl.length);
    var AmPm = (result.substring(9, 11) * 1 < 12) ? "오전" : "오후";
    return result.substring(0, 4) + "-" + result.substring(4, 6) + "-" + result.substring(6, 8) + " " + AmPm + " " + result.substring(8, 10) * 1 % 12 + ":" + result.substring(10, 12);
}

//--------------------------------------------------------------------------------
// 진행율 표시
//--------------------------------------------------------------------------------
function _IBUpload_mFileProgress(iProgress, iURL) {
    if (iProgress == 0) { // 업로드 대기 상태
        return "대기중";
    } else if (iProgress == 100) { // 업로드 완료 상태
        return "업로드됨";
    } else {
        return iProgress + "%";
    }
}

//--------------------------------------------------------------------------------
// IE11 버그 용 내부 함수
//--------------------------------------------------------------------------------
function _IBUpload_Korea_Char() {
    return "가";
}

