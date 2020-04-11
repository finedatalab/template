var url = location.pathname;
url = url.substr(0,url.indexOf("/",1));

document.write('<link rel="stylesheet" type="text/css" href="'+url+'/common/css/style.css">');
document.write('<link rel="stylesheet" type="text/css" href="'+url+'/common/jquery/css/jquery-layout.css">');
document.write('<link rel="stylesheet" href="'+url+'/common/jquery/css/custom-theme/jquery-ui-1.10.3.custom.min.css" />');  
document.write('<script src="'+url+'/common/jquery/js/jquery-1.9.1.js"></script>');
document.write('<script src="'+url+'/common/jquery/js/jquery-ui-1.10.3.custom.min.js"></script>');
document.write('<script src="'+url+'/common/jquery/js/jquery.layout.min.js"></script>');
