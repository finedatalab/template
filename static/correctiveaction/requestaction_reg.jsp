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

</script>
<body>
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
					<li>Home</li><li><fmt:message>menu.correctiveaction</fmt:message></li><li><fmt:message>menu.reqeustaction</fmt:message></li><li><fmt:message>menu.requestaction_i</fmt:message></li>
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
								<header>
									<span class="widget-icon"> <i class="fa fa-info-circle"></i> </span>
									<h2><fmt:message>widget.requestaction.info</fmt:message></h2>	
								</header>
				
								<!-- widget div-->
								<div>									
									<!-- widget edit box -->									
									<div class="jarviswidget-editbox">
										<!-- This area used as dropdown edit box -->
										<!-- <input class="form-control" type="text" > -->	
									</div>								
									<!-- end widget edit box -->
									
									<!-- widget content -->
									<div class="widget-body">	
										<form id="checkout-form">											
												<div class="row">
													<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											 <input type='text'  id="txtOccurPlace" name="txtOccurPlace"  class="form-control pull-right""  placeholder="<fmt:message>header.req.OccurPlace</fmt:message>" />
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											 <input type='text'  id="txtItem" name="txtItem"  class="form-control pull-right""  placeholder="<fmt:message>header.req.ItemCd </fmt:message>/<fmt:message>header.req.ItemNm</fmt:message>" />
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-car"></i>
										                  		 </div>              		 
	                  											 <select name="cboCarType" id="cboCarType"  class="form-control"  >
	                  											 		<option value="0" selected="" disabled="" ><fmt:message>header.req.CarType</fmt:message></option>		
	                  											 		<option value="DM"> DM : 싼타페 </option>
	                  											 		<option value="AD"> AD : 아반떼 </option>
	                  											 </select>
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											<select name="cboCustomerReg" class="form-control"  >
																	<option value="0" selected="" disabled="" ><fmt:message>header.req.CustomerReg</fmt:message></option>																	
																	<option value="Y">등록</option>
																	<option value="N">미등록</option>
																</select>
									        				</div>
									        			</div>	
									        		</div>									        														
												</div>
												
												<div class="row">
													<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-mail-reply"></i>
										                  		 </div>              		 
	                  											 <select name="txtDutyGbn" class="form-control"  >
																	<option value="0" selected="" disabled=""><fmt:message>header.req.DutyGbn</fmt:message></option>																	
																	<option value="239">Zimbabwe</option>
																</select>
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-mail-reply"></i>
										                  		 </div>              		 
	                  											 <select name="txtDutyDept" class="form-control"  >
																	<option value="0" selected="" disabled="" ><fmt:message>header.req.DutyDept</fmt:message></option>																	
																	<option value="239">Zimbabwe</option>
																</select><i></i>
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-trash-o"></i>
										                  		 </div>              		 
	                  											<input type="text" name="txtBadQty"  class="form-control pull-right""  placeholder="<fmt:message>header.req.BadQty</fmt:message>" >
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											<input type="text" name="txtSubItem"  class="form-control pull-right""  placeholder="<fmt:message>header.req.SubItemCd</fmt:message>/<fmt:message>header.req.SubItemNm</fmt:message>">
									        				</div>
									        			</div>	
									        		</div>									        														
												</div>
												<!--  라인 3 -->
												<div class="row">
													<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											 <input type="text" name="txtLotNo" class="form-control pull-right"" placeholder="<fmt:message>header.req.LotNo </fmt:message>" >
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											 <input type="text" name="txtBadPhenCd" class="form-control pull-right"" placeholder="<fmt:message>header.req.BadPhenCd</fmt:message>">
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="icon-append fa fa-calendar"></i>
										                  		 </div>              		 
	                  											<input type="text" name="txtOccurDate" id="txtOccurDate" class="form-control pull-right"" placeholder="<fmt:message>header.req.OccurDate</fmt:message>">
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="icon-append fa fa-calendar"></i>
										                  		 </div>              		 
	                  											<input type="text" name="txtReplyDate" id="txtReplyDate" class="form-control pull-right"" placeholder="<fmt:message>header.req.ReplyDate</fmt:message>">
									        				</div>
									        			</div>	
									        		</div>									        														
												</div>
												
												<!--  라인 4 -->
												<div class="row">
													<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											 <select name="cboProblemStep" class="form-control"  >
																	<option value="0" selected="" disabled=""><fmt:message>header.req.ProblemStep</fmt:message></option>																	
																	<option value="239">Zimbabwe</option>
																</select>
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											 <select name="cboGoodsGbn" class="form-control"  >
																	<option value="0" selected="" disabled="" ><fmt:message>header.req.GoodsGbn</fmt:message></option>																	
																	<option value="239">Zimbabwe</option>
																</select>
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											<select name="cboOccurCauseCd" class="form-control" >
																	<option value="0" selected="" disabled=""><fmt:message>header.req.OccurCauseCd</fmt:message></option>																	
																	<option value="239">Zimbabwe</option>
																</select>
									        				</div>
									        			</div>	
									        		</div>
									        		
									        		<div class="col-sm-3">
									        			<div class="form-group">
									        				<div class="input-group">    
									        					<div class="input-group-addon">
										                    	 	<i class="fa fa-dot-circle-o"></i>
										                  		 </div>              		 
	                  											<input type="text" name="txtProblem" class="form-control pull-right"" placeholder="<fmt:message>header.req.TheProblem</fmt:message>" >
									        				</div>
									        			</div>	
									        		</div>									        														
												</div>
																																			
												<div class="row">
													<div class="col-sm-12">
														<div class="form-group">															
																<textarea name="ckeditor">
																
									                			</textarea>								                			
							                			</div>
						                			</div>
												</div>
												
												<div class="row">
													<div class="col-sm-6">
														<div class="form-group">
										        			<div class="smart-form">									        				        		 
		                  											<div class="input input-file">
																		<span class="button"><input id="file1" type="file" name="file1"  onchange="this.parentNode.nextSibling.value = this.value">Browse</span><input type="text" placeholder="<fmt:message>header.req.file1</fmt:message>" readonly="">
																	</div>									        			
										        			</div>
									        			</div>	
									        		</div>
									        		<div class="col-sm-6">
									        			<div class="form-group">
										        			<div class="smart-form">									        				        		 
		                  											<div class="input input-file">
																		<span class="button"><input id="file2" type="file" name="file1"  onchange="this.parentNode.nextSibling.value = this.value">Browse</span><input type="text" placeholder="<fmt:message>header.req.file2</fmt:message>" readonly="">
																	</div>									        			
										        			</div>
									        			</div>	
									        		</div>
												</div>
												<div class="row">
														<div class="col-sm-6">															
										        			<div class="form-group">
										        				<div class="input-group">    
										        					<div class="input-group-addon">
											                    	 	<i class="fa fa-user"></i>
											                  		 </div>              		 
		                  											<input type="text" name="txtQcStaff" class="form-control pull-right"" placeholder="<fmt:message>header.req.staff1</fmt:message>" >
										        				</div>
										        			</div>	
										        		</div>
										        		<div class="col-sm-6">
										        			<div class="form-group">
										        				<div class="input-group">										        					 
										        					<div class="input-group-addon">
											                    	 	<i class="fa fa-user"></i>
											                  		 </div>              		 
		                  											<input type="text" name="txtChargeStaff" class="form-control pull-right"" placeholder="<fmt:message>header.req.staff2</fmt:message>" >
										        				</div>
										        			</div>	
										        		</div>	
												</div>
												<div class="form-group">
													<label><fmt:message>header.req.group1</fmt:message></label>
													<select multiple style="width:100%" class="select2" >
														<optgroup label="Alaskan/Hawaiian Time Zone">
															<option value="AK" selected="selected">Alaska</option>
															<option value="HI">Hawaii</option>
														</optgroup>
														<optgroup label="Pacific Time Zone">
															<option value="CA">California</option>
															<option value="NV" selected="selected">Nevada</option>
															<option value="OR">Oregon</option>
															<option value="WA">Washington</option>
														</optgroup>
													</select>
												</div>										
												<div class="form-group">
													<label><fmt:message>header.req.group2</fmt:message></label>
													<select multiple style="width:100%" class="select2" >
														<optgroup label="Alaskan/Hawaiian Time Zone">
															<option value="AK" selected="selected">Alaska</option>
															<option value="HI">Hawaii</option>
														</optgroup>
														<optgroup label="Pacific Time Zone">
															<option value="CA">California</option>
															<option value="NV" selected="selected">Nevada</option>
															<option value="OR">Oregon</option>
															<option value="WA">Washington</option>
														</optgroup>
													</select>
												</div>
												<div class="form-group">
													<label><fmt:message>header.req.group3</fmt:message></label>
													<select multiple style="width:100%" class="select2" >
														<optgroup label="Alaskan/Hawaiian Time Zone">
															<option value="AK" selected="selected">Alaska</option>
															<option value="HI">Hawaii</option>
														</optgroup>
														<optgroup label="Pacific Time Zone">
															<option value="CA">California</option>
															<option value="NV" selected="selected">Nevada</option>
															<option value="OR">Oregon</option>
															<option value="WA">Washington</option>
														</optgroup>
													</select>
												</div>											
											</fieldset>
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
				</section>					
				<!-- end widget grid -->

			</div>
			<!-- END MAIN CONTENT -->			
			
		
		<script type="text/javascript">
		
		// DO NOT REMOVE : GLOBAL FUNCTIONS!
		
		$(document).ready(function() {
			
			pageSetUp();
			var errorClass = 'invalid';
			var errorElement = 'em';
			
			var $checkoutForm = $('#checkout-form').validate({
				errorClass		: errorClass,
				errorElement	: errorElement,
				highlight: function(element) {
			        $(element).parent().removeClass('state-success').addClass("state-error");
			        $(element).removeClass('valid');
			    },
			    unhighlight: function(element) {
			        $(element).parent().removeClass("state-error").addClass('state-success');
			        $(element).addClass('valid');
			    },

			// Rules for form validation
				rules : {
					fname : {
						required : true
					},
					lname : {
						required : true
					},
					email : {
						required : true,
						email : true
					},
					phone : {
						required : true
					},
					country : {
						required : true
					},
					city : {
						required : true
					},
					code : {
						required : true,
						digits : true
					},
					address : {
						required : true
					},
					name : {
						required : true
					},
					card : {
						required : true,
						creditcard : true
					},
					cvv : {
						required : true,
						digits : true
					},
					month : {
						required : true
					},
					year : {
						required : true,
						digits : true
					}
				},
		
				// Messages for form validation
				messages : {
					fname : {
						required : 'Please enter your first name'
					},
					lname : {
						required : 'Please enter your last name'
					},
					email : {
						required : 'Please enter your email address',
						email : 'Please enter a VALID email address'
					},
					phone : {
						required : 'Please enter your phone number'
					},
					country : {
						required : 'Please select your country'
					},
					city : {
						required : 'Please enter your city'
					},
					code : {
						required : 'Please enter code',
						digits : 'Digits only please'
					},
					address : {
						required : 'Please enter your full address'
					},
					name : {
						required : 'Please enter name on your card'
					},
					card : {
						required : 'Please enter your card number'
					},
					cvv : {
						required : 'Enter CVV2',
						digits : 'Digits only'
					},
					month : {
						required : 'Select month'
					},
					year : {
						required : 'Enter year',
						digits : 'Digits only please'
					}
				},
		
				// Do not change code below
				errorPlacement : function(error, element) {
					error.insertAfter(element.parent());
				}
			});
					
			var $registerForm = $("#smart-form-register").validate({
				errorClass		: errorClass,
				errorElement	: errorElement,
				highlight: function(element) {
			        $(element).parent().removeClass('state-success').addClass("state-error");
			        $(element).removeClass('valid');
			    },
			    unhighlight: function(element) {
			        $(element).parent().removeClass("state-error").addClass('state-success');
			        $(element).addClass('valid');
			    },
	
				// Rules for form validation
				rules : {
					username : {
						required : true
					},
					email : {
						required : true,
						email : true
					},
					password : {
						required : true,
						minlength : 3,
						maxlength : 20
					},
					passwordConfirm : {
						required : true,
						minlength : 3,
						maxlength : 20,
						equalTo : '#password'
					},
					firstname : {
						required : true
					},
					lastname : {
						required : true
					},
					gender : {
						required : true
					},
					terms : {
						required : true
					}
				},
	
				// Messages for form validation
				messages : {
					login : {
						required : 'Please enter your login'
					},
					email : {
						required : 'Please enter your email address',
						email : 'Please enter a VALID email address'
					},
					password : {
						required : 'Please enter your password'
					},
					passwordConfirm : {
						required : 'Please enter your password one more time',
						equalTo : 'Please enter the same password as above'
					},
					firstname : {
						required : 'Please select your first name'
					},
					lastname : {
						required : 'Please select your last name'
					},
					gender : {
						required : 'Please select your gender'
					},
					terms : {
						required : 'You must agree with Terms and Conditions'
					}
				},
	
				// Do not change code below
				errorPlacement : function(error, element) {
					error.insertAfter(element.parent());
				}
			});
	
			var $reviewForm = $("#review-form").validate({
				errorClass		: errorClass,
				errorElement	: errorElement,
				highlight: function(element) {
			        $(element).parent().removeClass('state-success').addClass("state-error");
			        $(element).removeClass('valid');
			    },
			    unhighlight: function(element) {
			        $(element).parent().removeClass("state-error").addClass('state-success');
			        $(element).addClass('valid');
			    },
				// Rules for form validation
				rules : {
					name : {
						required : true
					},
					email : {
						required : true,
						email : true
					},
					review : {
						required : true,
						minlength : 20
					},
					quality : {
						required : true
					},
					reliability : {
						required : true
					},
					overall : {
						required : true
					}
				},
	
				// Messages for form validation
				messages : {
					name : {
						required : 'Please enter your name'
					},
					email : {
						required : 'Please enter your email address',
						email : '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
					},
					review : {
						required : 'Please enter your review'
					},
					quality : {
						required : 'Please rate quality of the product'
					},
					reliability : {
						required : 'Please rate reliability of the product'
					},
					overall : {
						required : 'Please rate the product'
					}
				},
	
				// Do not change code below
				errorPlacement : function(error, element) {
					error.insertAfter(element.parent());
				}
			});
			
			var $commentForm = $("#comment-form").validate({
				errorClass		: errorClass,
				errorElement	: errorElement,
				highlight: function(element) {
			        $(element).parent().removeClass('state-success').addClass("state-error");
			        $(element).removeClass('valid');
			    },
			    unhighlight: function(element) {
			        $(element).parent().removeClass("state-error").addClass('state-success');
			        $(element).addClass('valid');
			    },
				// Rules for form validation
				rules : {
					name : {
						required : true
					},
					email : {
						required : true,
						email : true
					},
					url : {
						url : true
					},
					comment : {
						required : true
					}
				},
	
				// Messages for form validation
				messages : {
					name : {
						required : 'Enter your name',
					},
					email : {
						required : 'Enter your email address',
						email : 'Enter a VALID email'
					},
					url : {
						email : 'Enter a VALID url'
					},
					comment : {
						required : 'Please enter your comment'
					}
				},
	
				// Ajax form submition
				submitHandler : function(form) {
					$(form).ajaxSubmit({
						success : function() {
							$("#comment-form").addClass('submited');
						}
					});
				},
	
				// Do not change code below
				errorPlacement : function(error, element) {
					error.insertAfter(element.parent());
				}
			});
	
			var $contactForm = $("#contact-form").validate({
				errorClass		: errorClass,
				errorElement	: errorElement,
				highlight: function(element) {
			        $(element).parent().removeClass('state-success').addClass("state-error");
			        $(element).removeClass('valid');
			    },
			    unhighlight: function(element) {
			        $(element).parent().removeClass("state-error").addClass('state-success');
			        $(element).addClass('valid');
			    },
				// Rules for form validation
				rules : {
					name : {
						required : true
					},
					email : {
						required : true,
						email : true
					},
					message : {
						required : true,
						minlength : 10
					}
				},
	
				// Messages for form validation
				messages : {
					name : {
						required : 'Please enter your name',
					},
					email : {
						required : 'Please enter your email address',
						email : 'Please enter a VALID email address'
					},
					message : {
						required : 'Please enter your message'
					}
				},
	
				// Ajax form submition
				submitHandler : function(form) {
					$(form).ajaxSubmit({
						success : function() {
							$("#contact-form").addClass('submited');
						}
					});
				},
	
				// Do not change code below
				errorPlacement : function(error, element) {
					error.insertAfter(element.parent());
				}
			});
	
			var $loginForm = $("#login-form").validate({
				errorClass		: errorClass,
				errorElement	: errorElement,
				highlight: function(element) {
			        $(element).parent().removeClass('state-success').addClass("state-error");
			        $(element).removeClass('valid');
			    },
			    unhighlight: function(element) {
			        $(element).parent().removeClass("state-error").addClass('state-success');
			        $(element).addClass('valid');
			    },
				// Rules for form validation
				rules : {
					email : {
						required : true,
						email : true
					},
					password : {
						required : true,
						minlength : 3,
						maxlength : 20
					}
				},
	
				// Messages for form validation
				messages : {
					email : {
						required : 'Please enter your email address',
						email : 'Please enter a VALID email address'
					},
					password : {
						required : 'Please enter your password'
					}
				},
	
				// Do not change code below
				errorPlacement : function(error, element) {
					error.insertAfter(element.parent());
				}
			});
	
			var $orderForm = $("#order-form").validate({
				errorClass		: errorClass,
				errorElement	: errorElement,
				highlight: function(element) {
			        $(element).parent().removeClass('state-success').addClass("state-error");
			        $(element).removeClass('valid');
			    },
			    unhighlight: function(element) {
			        $(element).parent().removeClass("state-error").addClass('state-success');
			        $(element).addClass('valid');
			    },
				// Rules for form validation
				rules : {
					name : {
						required : true
					},
					email : {
						required : true,
						email : true
					},
					phone : {
						required : true
					},
					interested : {
						required : true
					},
					budget : {
						required : true
					}
				},
	
				// Messages for form validation
				messages : {
					name : {
						required : 'Please enter your name'
					},
					email : {
						required : 'Please enter your email address',
						email : 'Please enter a VALID email address'
					},
					phone : {
						required : 'Please enter your phone number'
					},
					interested : {
						required : 'Please select interested service'
					},
					budget : {
						required : 'Please select your budget'
					}
				},
	
				// Do not change code below
				errorPlacement : function(error, element) {
					error.insertAfter(element.parent());
				}
			});
	
			// START AND FINISH DATE
			$('#txtOccurDate').datepicker({
				dateFormat : 'yy.mm.dd',
				prevText : '<i class="fa fa-chevron-left"></i>',
				nextText : '<i class="fa fa-chevron-right"></i>',
				onSelect : function(selectedDate) {
					$('#txtReplyDate').datepicker('option', 'minDate', selectedDate);
				}
			});
			
			$('#txtReplyDate').datepicker({
				dateFormat : 'yy.mm.dd',
				prevText : '<i class="fa fa-chevron-left"></i>',
				nextText : '<i class="fa fa-chevron-right"></i>',
				onSelect : function(selectedDate) {
					$('#txtOccurDate').datepicker('option', 'maxDate', selectedDate);
				}
			});
		
		})
		</script>				
		
		<!-- PAGE RELATED PLUGIN(S) -->
		<script src="js/plugin/ckeditor/ckeditor.js"></script>	
		<script type="text/javascript">		
			// DO NOT REMOVE : GLOBAL FUNCTIONS!		
			$(document).ready(function() {			
				CKEDITOR.replace( 'ckeditor', { height: '350px', startupFocus : true} );		
			})
		</script>	
		
		
		</div>
</body>
</fmt:bundle>

