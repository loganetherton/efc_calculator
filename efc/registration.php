<?php
include_once('functions.php');
include_once('db_connect.php');

// If the user has submitted a new registration, add them to the database
if(!empty($_POST)){
	var_dump($_POST);
	registerUser();
}

/**
 * DESTROY THE OLD SESSION AND START A NEW ONE
 */
session_start();
// Unset all of the session variables.
$_SESSION = array();
// Destroy the old session every time a user comes here
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}
// Finally, destroy the session and start a new one.
session_destroy();
session_start();

/**
 * STORE EACH $_POST VARIABLE IN $_SESSION
 */
postToSession();

// If the user has a currently active session, redirect them to the home page



// If the user has selected to logut, get the session vars, populate the table, and then wipe current session
// This is so that the user can update their information

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
<!--    <link rel="shortcut icon" href="../bootstrap-3.0.0/assets/ico/favicon.png">-->

    <title>StudentAidCalculate.org Registration</title>

    <!-- Bootstrap core CSS -->
    <link href="../bootstrap-3.0.0/assets/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../bootstrap-3.0.0/assets/css/signin.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="../../assets/js/html5shiv.js"></script>
      <script src="../../assets/js/respond.min.js"></script>
    <![endif]-->
  </head>

<style>
.form-control{
	margin-bottom: 10px;
	margin-right: 0px;
	margin-left: 0px;
}
.col-md-4{
	margin: 0px;
}
.col-md-6{
	margin: 0px;
}
.btn{
	margin-top: 1em;
}
</style>

<body>
  
<?php
//echo "<h1>POST</h1>";
//var_dump_pre($_POST);
//echo "<h1>SESSION</h1>";
//var_dump_pre($_SESSION);
?>

    <div class="container">

<!--      <form class="form-signin"> -->
      <form class="form-signin form-horizontal" role="form" action="registration.php" method="post">

				<div class="form-group">
          <div class="col-md-12">
			  <?php
				if(isset($email_already_exists)){
					echo $email_already_exists;
				}
			  ?>
	          <h2 class="form-signin-heading">Registration</h2>
          </div>
				</div>
				
		  
		  		<div class="col-md-12">
            <input type="text" class="form-control" placeholder="Email address" name="email" autofocus>
          </div>
          
          <div class="col-md-12">
            <input type="text" class="form-control" placeholder="Password" name="password">
          </div>
				

				

					<!--STUDENTS NAME-->
          <div class="col-md-12">
          	<input type="student_first_name" name="student_first_name" class="form-control" placeholder="Student First Name">
          </div>
          <div class="col-md-12">
          	<input type="student_last_name" name="student_last_name" class="form-control" placeholder="Student Last Name">
          </div>
					<div class="col-md-12">
						<input type="student_dob" name="student_dob" class="form-control" placeholder="Student's Date of Birth">
					</div>

				

				<!--MOTHERS INFO-->
				
          <div class="col-md-12">
	          <input name="mothers_first_name" type="mother_first_name" class="form-control" placeholder="Mothers First Name">
					</div>
          <div class="col-md-12">
	        	<input type="mother_last_name" name="mother_last_name" class="form-control" placeholder="Mother Last Name">
					</div>
          <div class="col-md-12">
						<input type="mother_date_of_birth" name="mother_date_of_birth" class="form-control" placeholder="Mother's Date of Birth">
					</div>
			

				<!--FATHERS INFO-->

          <div class="col-md-12">
            <input type="father_first_name" name="father_first_name" class="form-control" placeholder="Father First Name">
          </div>
          <div class="col-md-12">
          	<input type="father_last_name" name="father_last_name" class="form-control" placeholder="Father Last Name">
          </div>
          <div class="col-md-12">
          	<input type="father_date_of_birth" name="father_date_of_birth" class="form-control" placeholder="Father's Date of Birth">
          </div>


				<!--ADDRESS-->

          <div class="col-md-12">
	          <input type="street_address" name="street_address" class="form-control" placeholder="Street Address">
          </div>



          <div class="col-md-12">
    	      <input type="city" name="city" class="form-control" placeholder="City">
          </div>
          <div class="col-md-12">
  	        <select name="state" class="form-control">
							<option value="undefined">Select your state</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Canada and Canadian Provinces">Canada and Canadian Provinces</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">District of Columbia</option>
              <option value="Federated States of Micronesia">Federated States of Micronesia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Guam">Guam</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Massachusettes">Massachusettes</option>
              <option value="Mexico">Mexico</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Alabama">Palau</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virgin Islands">Virgin Islands</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
              <option value="Other">Other</option>
						</select>
          </div>
          <div class="col-md-12">
	          <input type="zip" name="zip" class="form-control" placeholder="Zip Code">
          </div>


				<!--PARENTS ADDRESS-->
				

          <div class="col-md-12">
  	        <input type="parent_street_address" name="parent_street_address" class="form-control" placeholder="Parent's Street Address (if different)">
					</div>



          <div class="col-md-12">
    	      <input type="parent_city" name="parent_city" class="form-control" placeholder="Parent's City">
          </div>
          <div class="col-md-12">
  	        <select name="parent_state" class="form-control">
							<option value="undefined">Select your state</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Canada and Canadian Provinces">Canada and Canadian Provinces</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">District of Columbia</option>
              <option value="Federated States of Micronesia">Federated States of Micronesia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Guam">Guam</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Massachusettes">Massachusettes</option>
              <option value="Mexico">Mexico</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Alabama">Palau</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virgin Islands">Virgin Islands</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
              <option value="Other">Other</option>
						</select>
          </div>
          <div class="col-md-12">
	          <input type="parents_zip" name="parents_zip" class="form-control" placeholder="Parent's Zip Code">
          </div>


				<!--OTHER INFO-->

          <div class="col-md-12">
  	        <input type="number_in_household" name="number_in_household" class="form-control" placeholder="Number in household">
          </div>
          <div class="col-md-12">
	          <input type="number_in_college" name="number_in_college" class="form-control" placeholder="Number in household in college full time">
          </div>

				<!--One/two parent household-->

						<label class="col-md-12 control-label">Are you in a one or two parent household?</label>
          <div class="col-md-12">
              <select name="one_two_parent_household" class="form-control dr">
                <option>2</option>
                <option>1</option>
              </select>
            </div>

					<label class="col-md-12 control-label">How many of your parents are working?</label>
          <div class="col-md-12">
              <select name="number_parents_working" class="form-control dr">
                <option>2</option>
                <option>1</option>
              </select>
            </div>




          <div class="checkbox">
            <label class="col-md-12">
              <input type="checkbox" name="married"> Check if you're married.
            </label>
          </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Register Account</button>
				<a href="login.php">Already have an account?</a>

      </form>

    </div> <!-- /container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	<!--<script src="../bootstrap-3.0.0/assets/js/jquery.js"></script>-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="../bootstrap-3.0.0/assets/js/bootstrap.min.js"></script>

	<!--Prevent accidental form submission by the enter button-->
	<script>
	  $(document).ready(function(){
		$(".container").bind("keydown", function(e) {
			var code = e.keyCode || e.which; 
			if (code  == 13) {               
				e.preventDefault();
				return false;
			}
		});
	  });
	</script>
	<script>
		$("input[name='mother_date_of_birth']").focus(function(){
			$("input[name='mother_date_of_birth']").val('00/00/0000');
		});
		$("input[name='father_date_of_birth']").focus(function(){
			$("input[name='father_date_of_birth']").val('00/00/0000');
		});
	</script>
  </body>
</html>
