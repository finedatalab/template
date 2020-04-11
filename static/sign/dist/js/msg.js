
        function successalert(title, text, type) {
            swal({
                title: title,
                text: text,
                type: type
            });           
        }
        
        function confirmalert(title, text, type, url) {   

        		    swal({
        		      title: title, 
        		      text: text, 
        		      type: type,
        		      showCancelButton: true
        		    }, function() {
        		      // Redirect the user
        		      //window.location.href = url;
        		    	mySheet.DoSave(url,  {Quest:0});		
        		    });
     
        	
        }
        