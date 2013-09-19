<?php
// Initialize the session so we can check if the user is logged in
session_start();
include('functions.php');
include('db_connect.php');

// If the user attempts login, check credentials
if(!empty($_POST)){
	login();
}

// If logged in, redirect to the main site (this can be used for persistent logins in future development)
if(isset($_SESSION['logged_in'])){
	if($_SESSION['logged_in'] == TRUE){
		header("Location: index.php");
		exit();
	}
}

// If not logged in, unset all of the session variables, destroy the session, and start a new one
$_SESSION = array();
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}
session_destroy();
session_start();
//sec_session_start();

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
<!--    <link rel="shortcut icon" href="../bootstrap-3.0.0/assets/ico/favicon.png">-->

    <title>Sign In for EFC</title>

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
.container{
	max-width: 300px;
}
</style>

<body>

    <div class="container">

<!--NEED TO EVENTUALLY IMPLEMENT SSL FOR SESSION SETTING-->
<!--      <form class="form-signin"> -->
      <form class="form-signin" role="form" action="login.php" method="post">

				<div class="form-group">
          <div class="col-md-12">
	          <h2 class="form-signin-heading">EFC Sign In</h2>
          </div>
				</div>
				<div class="form-group">
          <!--<input type="text" name="username" class="form-control" placeholder="Username" >-->
          <input type="text" class="form-control" placeholder="Email" name="email" autofocus>
		  <input type="text" class="form-control" placeholder="Password" name="password">
				</div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		<a href="registration.php"><h3>Create account</h3></a>
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
  </body>
</html>
