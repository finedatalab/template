var server_ip = location.hostname,
    server_port = location.port,
    page_path = location.pathname,
    chart_id ;

var IBChartType = {
        AREA: "area",
        AREA_RANGE: "arearange",
        AREA_SPLINE: "areaspline",
        BAR: "bar",
        BOXPLOT: "boxplot",
        BUBBLE: "bubble",
        COLUMN: "column",
        COLUMN_RANGE: "columnrange",
        ERRORBAR: "errorbar",
        FUNNEL: "funnel",
        GAUGE: "gauge",
        LINE: "line",
        PIE: "pie",
        SCATTER: "scatter",
        SPLINE: "spline",
        WATERFALL: "waterfall"
    },
    IBZoomType = {
        X : "x",
        Y : "y",
        X_AND_Y : "xy"
    },
    IBAlign = {
        LEFT : "left",
        CENTER : "center",
        RIGHT : "right"
    },
    IBVerticalAlign = {
        TOP : "top",
        MIDDLE : "middle",
        BOTTOM : "bottom"
    },
    IBLayout = {
        HORIZONTAL : "horizontal",
        VERTICAL : "vertical"
    },
    IBCursorType = {
        DEFAULT : "default",
        POINTER : "pointer",
        WAIT : "wait",
        HELP : "help",
        MOVE : "move",
        CROSSHAIR : "crosshair"
    },
    IBDashStyle = {
        SOLID : "Solid",
        SHORT_DASH : "ShortDash",
        SHORT_DOT : "ShortDot",
        SHORT_DASH_DOT : "ShortDashDot",
        SHORT_DASH_DOT_DOT : "ShortDashDotDot",
        DOT : "Dot",
        DASH : "Dash",
        LONG_DASH : "LongDash",
        DASH_DOT : "DashDot",
        LONG_DASH_DOT : "LongDashDot",
        LONG_DASH_DOT_DOT : "LongDashDotDot"
    },
    IBAxisType = {
        LINEAR: "linear",
        DATE_TIME: "datetime"
    },
    IBTickPosition = {
        INSIDE : "inside",
        OUTSIDE : "outside"
    },
    IBWeekDay = {
        SUNDAY : 0,
        MONDAY : 1,
        TUESDAY : 2,
        WEDNESDAY : 3,
        THURSDAY : 4,
        FRIDAY : 5,
        SATURDAY : 6
    },
    IBTickmarkPlacement = {
        ON : "on",
        BETWEEN : "between"
    },
    IBAxisTitleAlign = {
        LOW: "low",
        MIDDLE: "middle",
        HIGH: "high"
    },
    IBSymbol = {
        CIRCLE: "circle",
        SQUARE: "square",
        DIAMOND: "diamond",
        TRIANGLE: "triangle",
        TRIANGLE_DOWN: "triangle-down"
    },
    IBStacking = {
        NORMAL: "normal",
        PERCENT: "percent"
    },
    IBExportType = {
        PNG: "image/png",
        JPEG: "image/jpeg",
        PDF: "application/pdf",
        SVG: "image/svg+xml",
        EXCEL: "application/xls"
    },
    poltArr = [ "AREA", "AREASPLINE", "BAR", "COLUMN", "LINE", "PIE", "SCATTER", "SPLINE" ],
    AxisArr = [ "X", "Y" ],
    IBCHART7 = IBChart.prototype;

page_path = page_path.substr(0, page_path.lastIndexOf("/") + 1);

//모달로 열었을 때는 처음에 "/"로 시작하지 않을수 있어 아래코드 추가
if (page_path.charAt(0) != "/") {
    page_path = "/" + page_path;
}

function createIBChart(id, width, height, locale) {
    var div_str = "";

    chart_id = id ;
    div_str += "<div id='" + id + "' style='width:" + width + ";height:" + height + ";'>\n";
    div_str += "<script> IBChart('" + id  + "','" + width +  "','" +  height +  "','" +  locale +  "'); </script>"
    div_str += "</div>\n";

    //<![CDATA[
    document.write(div_str);
    //]]>
    window[id] = IBCharts[id];
}

function createIBChart2(obj, id, width, height, locale) {
    obj.id = id;
    obj.style.width = width;
    obj.style.height = height;
    IBChart(id, width, height, locale);
    window[id] = IBCharts[id];
}

function IBChart(id, width, height, locale) {
    var newClass = new IBChart7(id, width, height, locale);

    locale= locale == "undefined" ? "KO" : locale;
    IBCharts[id] = newClass;
}

/*
    sheet2chart()  함수   : 시트의 내용을 차트로 만들어 줌. (공통js 에 넣어 사용 할 것.)
    params 내부 변수
    datadirection : 데이터를 만들기 위해 시트의 내용을 읽어들이는 방향(vertical/horizontal 중 선택, default : vertical  )
    labeldirection : x축 레이블을 읽어 들이는 방향(vertical/horizontal 중 선택, default : vertical  )
    datarowcol : 데이터를 읽어들일 컬럼 혹은 로우,읽어들이는 방향이 vertical인 경우에는 col
                        ,horizontal인 경우에는 row를 구분자 "|" 연결하여 넣는다.(필수)
    labelrowcol : x축 레이블이 될 행이나 열. 하나만 선택 한다.
    startdatarowcol : 데이터가 될 시작 행 혹은 열 (default : 첫번째 행/열)
    enddatarowcol : 데이터가 될 마지막 행 혹은 열(default : 마지막 행/열)
    startlabelrowcol : x축 레이블이 될 첫번째 행이나 열
    endlabelrowcol : x축 레이블이 될 마지막 행이나 열 
    legendtitle : 범례 타이틀 (default:범례)
    legendseriesname : 범례에 나올 시리즈별 이름 (datarowcol 의 개수와 동일해야 함.)
    주의 : startlabelrowcol,endlabelrowcol,labelrowcol 중에 하나만 없어도 x축 레이블은 안만들어 진다.
*/
function sheet2chart(sheet, chart, params){
    var pdata           = parseChartDataFromSheet(sheet, chart, params),
        i               = 0,
        x               = 0,
        alen            = 0,
        dlen            = 0,
        useXlabel,
        xaxislabel,
        useSeriesName,
        seriesname,
        seriestype,
        data,
        loadData        = {
            IBChart : {
                Data : []
            }
        };
    
    if (typeof pdata === "undefined") {
        return;
    }

//  PrintArray(data);

    useXlabel     = pdata[0];
    xaxislabel    = pdata[1];
    useSeriesName = pdata[2];
    seriesname    = pdata[3];
    seriestype    = pdata[4];
    data          = pdata[5];

    for (i = 0, dlen = data.length; i < dlen; i++) {
        var rowData = {};

        if (useXlabel) {
            rowData.AxisLabel = xaxislabel[i];
        }

        rowData.Series = [];

        for (x = 0, alen = data[i].length; x < alen; x++){
            var sdata = {};

            if (useSeriesName) {
                if (i == 0) {
                    sdata.SeriesName = seriesname[x];

                    if (typeof seriestype[x] !== "undefined") {
                        sdata.SeriesType = seriestype[x];
                    }
                }
            }

            sdata.PointName = xaxislabel[i];
            sdata.Value = data[i][x];

            rowData.Series.push(sdata);
        }

        loadData.IBChart.Data.push(rowData);
    }

    // alert(JSON.stringify(loadData));
        
    // chart에 xml을 로딩
    chart.LoadSearchData(loadData);    
}

function parseChartDataFromSheet(sheet, chart, params, proPivot) {
    var isActiveX           = false,
        datadirection       = "vertical",
        labeldirection      = "vertical",
        datarowcol,
        labelrowcol,
        startdatarowcol,
        enddatarowcol,
        startlabelrowcol,
        endlabelrowcol,
        legendtitle         = "범례",
        legendseriesname,
        seriestype          = [];

    function arrayPivot(arr) {
        var res = [],
            c,
            r,
            clen,
            rlen;
        
        for(c = 0, clen = arr[0].length; c < clen; c++) {
            var temp = "";
            
            for(r = 0, rlen = arr.length; r < rlen; r++) {
                temp += arr[r][c]+"‡";
            }
            
            temp = temp.substring(0, temp.length - 1);
            res.push(temp.split("‡"));
        }

        return res;
    }

    if (sheet.classid){
        isActiveX = true;
    }

    //각 변수들 초기화 및 필수 요소 검사 
        
    //기본값 확인
    if (params.datadirection == "vertical" || params.datadirection == "horizontal") {
        datadirection = params.datadirection;
    }

    if (params.labeldirection == "vertical" || params.labeldirection == "horizontal") {
        labeldirection = params.labeldirection;
    }

    if (typeof params.datarowcol == "undefined") {
        alert("datarowcol 변수는 필수 입니다");
        return;
    } else {
        datarowcol = params.datarowcol; 
    }

    if (typeof params.startdatarowcol =="undefined") {
        if (datadirection == "vertical") {
            startdatarowcol = isActiveX?sheet.HeaderRows:sheet.HeaderRows();
        } else {
            startdatarowcol = 0
        }
    } else {
        startdatarowcol = params.startdatarowcol;   
        if (isNaN(startdatarowcol)) {
            alert("startdatarowcol 변수의 값은 정수여야 합니다.");
            return;
        }
    }

    if(typeof params.enddatarowcol == "undefined") {
        if (datadirection == "vertical") {
            enddatarowcol = isActiveX?sheet.LastRow:sheet.LastRow();
        } else {
            enddatarowcol = isActiveX?sheet.LastCol:sheet.LastCol();
        }
    } else {
        enddatarowcol = params.enddatarowcol;   
        
        if (isNaN(enddatarowcol)) {
            alert("enddatarowcol변수의 값은 정수여야 합니다.");
            return;
        }
    }

    if (typeof params.legendtitle != "undefined") {
        legendtitle = params.legendtitle;
    }

    var useSeriesName = false;
    if (typeof params.legendseriesname != "undefined") {
        legendseriesname = params.legendseriesname;
        
        if (legendseriesname.split("|").length == datarowcol.split("|").length) {
            useSeriesName = true;
        } else {
            alert("시리즈의 개수와 범례 타이틀의 개수가 일치하지 않습니다.\ndatarowcol변수와 legendseriesname변수의 값을 확인해 주세요.");
        }
    }

    var seriestypestart = 0,
        seriestypeloop  = 0,
        useXlabel = false,
        i;

    if (typeof params.seriestype != "undefined") {
        seriestype = params.seriestype;
        seriestypestart = params.seriestype.length;
        
        if (params.seriestype.length < datarowcol.split("|").length) {
            seriestypeloop = datarowcol.split("|").length;
        }

        for (i = seriestypestart; i < seriestypeloop; i++) {
            seriestype[i] = "line";
        }
    }

    labelrowcol = params.labelrowcol;
    startlabelrowcol = params.startlabelrowcol;
    endlabelrowcol = params.endlabelrowcol;
    
    if (typeof labelrowcol != "undefined" && typeof startlabelrowcol != "undefined" &&
            typeof endlabelrowcol != "undefined") {
        useXlabel  = true;
    }
    //각 변수들 초기화 및 필수 요소 검사  끝
        
    //sheet로부터 필요한 xml 생성
    var data            = [],
        seriesname      = null,
        xaxislabel      = null,
        datarowcolArr   = datarowcol.split("|"),
        rowcol          = 0,
        len             = datarowcolArr.length;

    for (rowcol = 0; rowcol < len; rowcol++) {
        if (datadirection == "vertical") {
            //세로로 열을 읽어들여 2차원 배열 생성
            var tempData = isActiveX ? sheet.GetRangeValue(startdatarowcol, datarowcolArr[rowcol], enddatarowcol, datarowcolArr[rowcol]) 
                : GetRangeText7(sheet, startdatarowcol,datarowcolArr[rowcol],enddatarowcol,datarowcolArr[rowcol]);

            tempData = tempData.split(",").join("");
            data.push(tempData.split("^"));     
        } else {
            //가로로 행을 읽어들여 2차원 배열 생성
            var tempData = isActiveX ? sheet.GetRangeValue(datarowcolArr[rowcol], startdatarowcol, datarowcolArr[rowcol], enddatarowcol)
                :GetRangeText7(sheet, datarowcolArr[rowcol],startdatarowcol,datarowcolArr[rowcol],enddatarowcol);

            tempData = tempData.split(",").join("");
            data.push(tempData.split("|"));
        }
    }

    seriesname = legendseriesname.split("|");
    if (useXlabel) {
        if (labeldirection == "vertical") {
            xaxislabel = isActiveX ? sheet.GetRangeValue(startlabelrowcol,labelrowcol,endlabelrowcol,labelrowcol).split("^"):
                GetRangeText7(sheet,startlabelrowcol,labelrowcol,endlabelrowcol,labelrowcol).split("^");
        } else {
            xaxislabel = isActiveX?sheet.GetRangeValue(labelrowcol, startlabelrowcol, labelrowcol, endlabelrowcol).split("|"):
                GetRangeText7(sheet,labelrowcol,startlabelrowcol,labelrowcol,endlabelrowcol).split("|");
        }
    }
    
    return [useXlabel, xaxislabel, useSeriesName, seriesname, seriestype, (!proPivot)?arrayPivot(data):data];
}

function GetRangeText7(sheetobj, srow, scol, erow, ecol, coldeli, rowdeli) {
    var rtnStr = "",
        r,
        c;

    if (isNaN(srow)) {
        alert("srow인자는 정수여야 합니다.");
        return;
    }

    if (isNaN(erow)) {
        alert("erow인자는 정수여야 합니다.");
        return;
    }

    if (isNaN(scol)) {
        alert("scol인자는 정수여야 합니다.");
        return;
    }

    if (isNaN(ecol)) {
        alert("ecol인자는 정수여야 합니다.");
        return;
    }

    if (srow > erow) {
        alert("srow값은 erow 값보다 작아야 합니다.");
        return;
    }

    if (scol > ecol) {
        alert("scol값은 ecol 값보다 작아야 합니다.");
        return;
    }
    
    if (coldeli == "" || typeof coldeli == "undefined" || coldeli == null) {
        coldeli = "|";
    }

    if(rowdeli == "" || typeof rowdeli == "undefined" || rowdeli == null) {
        rowdeli = "^";
    }

    for (r = srow; r <= erow; r++) {
        for (c = scol; c <= ecol; c++) {
            rtnStr += sheetobj.GetCellValue(r,c) + coldeli;
            
            if (c == ecol) {
                rtnStr = rtnStr.substring(0, rtnStr.length - 1);
            }
        }

        rtnStr += rowdeli;

        if (r == erow) {
            rtnStr = rtnStr.substring(0, rtnStr.length - 1);
        }
    }

    return rtnStr;
}

/* 
    값이 큰 수를 차트에서 빠른 속도로 표현 하기 위한 클래스 
    최대 값과 최소값을 구해 최대값=10, 최소값=0 으로 매핑후 각각의 값을 그 비율값으로 재 계산
    비율값을 그래프에 표시한 후 실제 값을 포매터로 표현하는 클래스
*/
function Flash(chartObj, pointDataArr, interval, startMin, endMax) {
    // 2013.07.04 수정 -값으로 구성된 데이타에 대해서 올바르게 표현되지 않는 버그 대응
    if (typeof chartObj['name'] !== 'undefined' && chartObj['name'] !== 'IBChart') {
        alert("차트 객체가 아닙니다.");
        return;
    }
    var me          = this,
        dataType    = checkArr(pointDataArr);

    function checkArr(dataArr) {
        var type    = 0,
            i       = 0,
            mx      = 0;

        if (dataArr instanceof Array) {
			type = 3;
            for(i = 0, mx = dataArr.length; i < mx; i++) {
                if (!(dataArr[i] instanceof Array)) {
                    if(typeof dataArr[i]["Y"] !== "undefined") {
                        type = 1;
                    }
                } else {
                    if(typeof dataArr[i][0]["Y"] !== "undefined") {
                        type = 2;
                    }
                }
            }
        }

        return type;
    }

    if (typeof chartObj === "undefined") {
        alert("차트가 존재하지 않습니다.");
        return;
    }

    if (dataType == 0) {
        alert("데이타가 배열타입이 아닙니다.");
        return;
    }

    var Yaxis   = chartObj.GetYAxis(0),
        yMax    = 0,// raw 데이타 y 최대값
        yMin    = 0,// raw 데이타 y 최소값
        zbStart = 0,// start from 0 to End value
        zbEnd = 0,// start from 0 to End value
        zbInterval  = 0,// start from 0 to End value's interval value
        dInte = 10,
        zeroPoint = 0,
        gMax    = 0,// 0-10 비율로 정했을 때 y 최대값
        gMin    = 0,// 0-10 비율로 정했을 때 y 최소값
        pMax    = 0,// raw 데이타 / 비율 최대값
        pMin    = 0,// raw 데이타 / 비율 최소값
        i       = 0,
        dispMap = {},
        rateValue = function(y) {
            // 2013.07.04 수정 -값으로 구성된 데이타에 대해서 올바르게 표현되지 않는 버그 대응
            return ( y - yMin ) / zbInterval - zeroPoint;
        },
        setMaxMinValue = function (pointData) {
            var i   = 0,
                lMx = 0,
                tVal = 0;

            for (i = 0, lMx = pointData.length; i < lMx; i++) {
                tVal = pointData[i].Y*1;
                if (tVal > yMax) {
                    yMax = tVal;
                }

                if (i == 0) {
                    yMin = tVal;
                } else if (tVal < yMin) {
                    yMin = tVal;
                }
            }
        },
        calcMaxMinInterval = function() {
            // 2013.07.04 수정 -값으로 구성된 데이타에 대해서 올바르게 표현되지 않는 버그 대응을 위해서 생성된 함수
            zbStart = yMin - yMin;      // start from 0 to End value
            zbEnd = yMax - yMin;        // start from 0 to End value
            zbInterval  = zbEnd/dInte;  // start from 0 to End value's interval value
        },
        convertMaxMinValue = function(pointData) {
            var i   = 0,
                lMx = 0;

            for (i = 0, lMx = pointData.length; i < lMx; i++) {
                pointData[i]['Disp'] = pointData[i].Y;
                pointData[i].Y = rateValue( pointData[i].Y );
                dispMap[pointData[i].Y] = pointData[i]['Disp'];

                if (pMax < pointData[i].Y) {
                    pMax = pointData[i].Y
                }

                if (pMin > pointData[i].Y) {
                    pMin = pointData[i].Y
                }
            }
        },
        setMaxMin = function (pointArr, type) {
            var i   = 0,
                mx  = 0;

            if(type === 1) {
                setMaxMinValue(pointArr);
            } else if (type === 2) {
                for (i = 0, mx = pointArr.length; i < mx; i++) {
                    setMaxMinValue(pointArr[i]);
                }
            }
            calcMaxMinInterval();
            zeroPoint = ((0 - yMin) / zbInterval);
            if (type === 1) {
                convertMaxMinValue(pointArr);
            } else if (type === 2) {
                for(i = 0, mx = pointArr.length; i < mx; i++) {
                    convertMaxMinValue(pointArr[i]);
                }
            }
            // startMin, endMax     dInte,  gMax,   gMin
            // true     , true          10,     10,     0
            // true     , false         11,     11,     0
            // false    , true          11,     10,     -1
            // false    , false         12,     11,     -1
            gMax = (endMax) ? 10 : 10.5;
            gMin = (startMin) ? 0 : -0.5;
            gMax -= zeroPoint;
            gMin -= zeroPoint;
            dInte = gMax - gMin;

            if (typeof interval == "number") {
                // 2013.07.04 수정 -값으로 구성된 데이타에 대해서 올바르게 표현되지 않는 버그 대응
                Yaxis.SetTickInterval((dInte/interval));
            }
            Yaxis.SetMax(gMax);
            Yaxis.SetMin(gMin);
        };
    
    setMaxMin(pointDataArr, dataType);
    
    me.getGraphMax = function() {
        return gMax;
    }

    me.getGraphMin = function() {
        return gMin;
    }

    me.getLabel = function(inx) {
        var v = inx * zbInterval,
            len = (""+Math.floor(v)).length,
            comp = (v > 0)? 1:-1;

        if (len > 4) {
            len -= 2;
            // 2013.07.04 수정 -값으로 구성된 데이타에 대해서 올바르게 표현되지 않는 버그 대응
            v = (Math.ceil(v / (Math.pow(10, len - 2))) + comp) * (Math.pow(10, len - 2));
        }

        return parseInt(v, 10).toLocaleString();
    }

    me.getDisp = function(inx) {
        return dispMap[inx].toLocaleString();
    }

    me.addPoint = function(par) {
        var dataType = checkArr(par);

        if (dataType == 0) {
            alert("데이타가 배열타입이 아닙니다.");
            return;
        }

        setMaxMin(par, dataType);
    }

    var _fnFormatter = function() {
            var res = "";
            res  = "<span style='color: #4572A7'>";
            res += this.point.name;
            res += "</span><br/>";
            res += this.series.name;
            res += " : ";
            res += me.getDisp(this.y);

            return res;
        };

    chartObj.SetToolTipFormatter(_fnFormatter);

    // Formatter로 Y축의 라벨값을 정상적으로 표시
    var yLabel = {
            Enabled:true,
            Rotation:0,
            Formatter:function(){
                return me.getLabel(this.value);
            }
        };

    Yaxis.SetLabel(yLabel);
}

//실제로 차트를 그리는 부분
function sheet2chartFlash(sheet, chart, params) {
    var pdata           = parseChartDataFromSheet(sheet, chart, params, true),
        fdata           = [],
        useXlabel,
        xaxislabel,
        useSeriesName,
        seriesname,
        seriestype,
        data, 
        i,
        x,
        dlen,
        ulen,
        series,
        yAxis,
        flash;

    if (pdata === 'undefined') {
        return;
    }

    useXlabel = pdata[0];
    xaxislabel = pdata[1];
    useSeriesName = pdata[2];
    seriesname = pdata[3];
    seriestype = pdata[4];
    data = pdata[5];

    for (i = 0, dlen = data.length; i < dlen; i++) {
        var tArr = data[i];
        fdata[i] = [];
        for (x = 0, ulen = tArr.length; x < ulen; x++) {
            fdata[i].push({
                X:x,
                Y:tArr[x],
                Name:xaxislabel[x]
            });
        }
    }

    flash = new Flash(chart, fdata, 2.5);

    for (i=0, dlen = fdata.length; i < dlen; i++) {
        series = chart.CreateSeries();

        // 차트 타입 설정
        if (typeof seriestype[i] !== "undefined") {
            series.SetType(seriestype[i]);
        }

        // 시리즈 명 설정(레젠드에 표시)
        if(useSeriesName && typeof seriesname[i] !== "undefined") {
            series.SetName(seriesname[i]);
        }

        series.AddPoints(fdata[i]);
        chart.AddSeries(series);
    }

    chart.SetXAxisLabelsText(0, xaxislabel);
    
    yAxis = chart.GetYAxis(0);  
    yAxis.SetAxisTitle({
        Enabled:false
    });
    
    chart.Draw();
}
