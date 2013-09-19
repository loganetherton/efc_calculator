<!DOCTYPE html>
	<html lang="en">
  <head>
  <meta charset="utf-8">
    
  <title>Expected Family Contribution</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="../bootstrap-3.0.0/assets/css/bootstrap.css" rel="stylesheet">


    <style type="text/css">
      body {
        padding-top: 20px;
        padding-bottom: 40px;
      }
    </style>

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

  </head>

  <body>

	<div id="user_answers" class="hidden">
	</div>

<?php 
session_start();
?>
<script>
	window['email'] = "<?php echo $_SESSION['email'];?>";
	window['student_first_name'] = "<?php echo $_SESSION['student_first_name'];?>";
	window['student_last_name'] = "<?php echo $_SESSION['student_last_name'];?>";
	window['mother_dob'] = "<?php echo $_SESSION['mother_dob'];?>";
	window['father_dob'] = "<?php echo $_SESSION['father_dob'];?>";
	window['student_dob'] = "<?php echo $_SESSION['student_dob'];?>";
	window['street_address'] = "<?php echo $_SESSION['street_address'];?>";
	window['city'] = "<?php echo $_SESSION['city'];?>";
	window['state'] = "<?php echo $_SESSION['state'];?>";
	window['zip'] = "<?php echo $_SESSION['zip'];?>";
	window['parent_street_address'] = "<?php echo $_SESSION['street_address'];?>";
	window['parent_city'] = "<?php echo $_SESSION['city'];?>";
	window['parent_state'] = "<?php echo $_SESSION['parent_state'];?>";
	window['parent_zip'] = "<?php echo $_SESSION['parent_zip'];?>";
	window['number_in_household'] = "<?php echo $_SESSION['number_in_household'];?>";
	window['number_in_college'] = "<?php echo $_SESSION['number_in_college'];?>";
	window['married'] = "<?php echo $_SESSION['married'];?>";
	window['one_two_parent_household'] = "<?php echo $_SESSION['one_two_parent_household'];?>";
	window['number_parents_working'] = "<?php echo $_SESSION['number_parents_working'];?>";
</script>

<!--  <div class="container-narrow">  -->
		<div class="container">

          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <a class="btn pull-right btn-danger" id="btn_get_answers" href="#">Get answers</a>
							<a class="btn btn-default pull-right" id="btn_logout" href="logout.php">Logout</a>
							<a class="btn btn-danger pull-left" id="btn_back" href="logout.php">Back</a>
<!--
							<ul class="nav nav-pills pull-left">
								
                <li class="active" id="btn_back"><a href="#">Back</a></li>
              </ul>-->
              <h2 class="muted text-center">Expected Family Contribution</h2>
            </div>
          </div>
    
          <hr>
    			
					<!--BEGIN QUESTIONS CONTAINER-->
          <div class="questions_container">
            <div id="question_self_assessment_heading">
              
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <blockquote>
                    <p class="lead text-center" id="self_assessment_text">Not many people will qualify to file as an independent. Some common reasons for filing as an independent include:</p>
                    <p class="text-left">
                      <div id="common_reasons" class="col-md-offset-1">
                        <li>If you were born before 1990.</li>
                        <li>You're married</li>
                        <li>You're in advanced degree program.</li>
                        <li>You're in the military or are a veteran.</li>
                        <li>You have dependents.</li>
                        <li>Your parents are deceased.</li>
                        <li>You're homeless, or at risk of becoming homeless.</li>
                      </div>
                    </p>
										<p class="lead text-center" id="self_assessment_text_bottom">Do you think you'll be able to file as an independent?</p>
                    <div id="self_assessment_buttons" class="text-center">
                      <button type="button" class="btn btn-primary btn-success" id="btn_self_assessment_no">No</button>
                      <button type="button" class="btn btn-xs btn-warning" id="btn_self_assessment_yes">Yes</button>
										</div>
                  </blockquote>
                </div>
              </div>
            </div>
            
            <hr>
            
            <div class="questions" hidden="true">
              <div class="row">
                <div class="col-md-5 col-md-offset-1">
                  <div>
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id="born_before_1990">Were you born before January 1, 1990?</p>
                  </div>
                </div>
                
                <div class="col-md-5" rel="tooltip" data-placement="right" data-original-title="Anything beyond a Bachelor's degree, such as a Master's or Ph.D.">
                  <div>
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id="advanced_degree">Are you going to school for an advanced degree?</p>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-1 col-md-offset-1">
                  <hr>
                </div>
                <div class="col-md-1 col-md-offset-4">
                  <hr>
                </div>
              </div>
              
              <div class="row" style="margin-top: 1em">
                <div class="col-md-5 col-md-offset-1">
                  <div rel="tooltip" data-placement="left" data-original-title="Answer yes if you're a National Guard or Reserves enlistee and you've been called into federal active duty for anything other than training.">
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id="military">Are you serving on active duty in the military?</p>
                  </div>
                </div>
                
                <div class="col-md-5">
                  <div rel="tooltip" data-placement="right" data-original-title="A veteran is defined as someone who has engaged in active service in the U.S. Armed Forces or was a member of the National Guard or Reserves who was called into active duty (not for training), was a cadet or midshipman at a service academy, or attended a U.S. military preparatory school and was released under a condition other than dishonorable. Answer yes if this will apply to you before June 30, 2014.">
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id='veteran'>Are you a military veteran?</p>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-1 col-md-offset-1">
                  <hr>
                  </div>
                <div class="col-md-1 col-md-offset-4">
                  <hr>
                  </div>
              </div>                 
              
              <div class="row" style="margin-top:1em">
                <div class="col-md-5 col-md-offset-1">
                  <div rel="tooltip" data-placement="left" data-original-title="Answer yes if you were released from the control of your parent or guardian.">
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id='emancipated'>Have you ever been considered an emancipated minor?</p>
                  </div>
                </div>
                
                <div class="col-md-5">
                  <div>
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id='dependents'>Do you have any children or other dependents that receive more than half of their income from you?</p>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-1 col-md-offset-1">
                  <hr>
                  </div>
                <div class="col-md-1 col-md-offset-4">
                  <hr>
                  </div>
              </div>
              
              <div class="row">
                <div class="col-md-5 col-md-offset-1">
                  <div>
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id='legal_guardian'>Have you ever had a legal guardian other than your parents?</p>
                  </div>
                </div>
                
                <div class="col-md-5">
                  <div>
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id='homeless'>Has anyone ever determined that you were homeless or at risk of becoming homeless?</p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-1 col-md-offset-1">
                  <hr>
                  </div>
                <div class="col-md-1 col-md-offset-4">
                  <hr>
                  </div>
              </div>
              
              <div class="row">
                <div class="col-md-5 col-md-offset-1">
                  <div rel="tooltip" data-placement="left" data-original-title="Answer yes even if you're currently separated, but not divorced.">
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id='married'>Are you currently married?</p>
                  </div>
                </div>
                
                <div class="col-md-5">
                  <div>
                    <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
                    <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
                    <p id='parents_deceased'>Are both of your parents deceased, or have you been in foster care since the age of 13?</p>
                  </div>
                </div>
              </div>
        
        
      		</div>

				<div class="row" id="next_section" style="display:none">
          <div class="col-md-12">
            <hr>
						<div>
							<div class="col-md-6">
                <h4 id="next_section">Go to the next section</h4>
							</div>
							<div class="col-md-6">
                <a class="btn btn-primary pull-right" id="btn_next_independence" href="#">Next</a>
							</div>
            </div>
          </div>
        </div>

				<div class="row hidden" id="loading">
          <div>
            <img src="img/loading.gif">
          </div>
        </div>

      <!--END QUESTIONS CONTAINER-->
      </div>
          
  <!--END INDEPENDENCE QUESTIONS CONTAINER-->
  </div>

    <!-- Javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<!--<script src="../bootstrap-3.0.0/assets/js/jquery.js"></script>-->
    <script src="../bootstrap-3.0.0/assets/js/bootstrap.min.js"></script>
    <script src="../assets/js/efc_main.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2.js"></script>
		<!--Dynamically load JS--->
    <div id="js_loader"></div>
<!--		<script src="../assets/js/worksheet.js"></script> -->	

  </body>
</html>


