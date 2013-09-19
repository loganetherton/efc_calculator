<?php
/**
 * FUNCTION betterCrypt
 * Creates a blowfish hash from input password using random letters and numbers
 * Original code by Chirp Internet: www.chirp.com.au
 * @param string input
 * @param int rounds
 * @return string
 */
function betterCrypt($input, $rounds = 7){
    $salt = "";
	// Die with error if blowfish is not available (since login can never be completed)
	if(!defined("CRYPT_BLOWFISH") || !CRYPT_BLOWFISH) {
		die("Blowfish is not enabled. Please upgrade PHP to at least version 5.3.7");
	}
	// Create 22 character salt from random characters
    $salt_chars = array_merge(range('A','Z'), range('a','z'), range(0,9));
    for($i=0; $i < 22; $i++) {
		$salt .= $salt_chars[array_rand($salt_chars)];
    }
	// Force the use of the blowfish crypt algorithm by salt selection
	// $2y$ blowfish encryption is used, rather than $2a$
	// (http://php.net/manual/en/function.crypt.php)
    return crypt($input, sprintf('$2y$%02d$', $rounds) . $salt);
}

/**
 * FUNCTION checkPassword
 * Checks entered password against the password hash in the database. Blowfish recognized hashes created using blowfish.
 * @param string password
 * @param string pass_hash
 * @return bool
 */
function checkPassword($password, $pass_hash){
	if(crypt($password, $pass_hash) == $pass_hash) {
		return TRUE;
	}else{
		return FALSE;
	}
}

/**
 * FUNCTION login
 * Pulls user from database and checks hash against entered password to initiate login
 */

function login(){
	global $dbh;
	$_SESSION['logged_in'] = FALSE;
	try{
		$sth = $dbh->prepare("SELECT uid, password FROM users WHERE email = ? LIMIT 1");
		// Execute the query with the bound parameters
		$prepared_params = array($_POST['email']);
		$sth->execute($prepared_params);
		$result = $sth->fetch(PDO::FETCH_ASSOC);
		
		// Set vars for each user entered value
		$input_password = $_POST['password'];
		$input_email = $_POST['email'];
		
		// Pull hash from database and compare against entered password
		$pass_hash = $result['password'];
		
		// If both email and password have been entered, check input password against hash
		if($input_email && $input_password){
			// If blowfish decrypts to entered password, login successful.
			if(checkPassword($input_password, $pass_hash)){
				$_SESSION['logged_in'] = TRUE;
				$_SESSION['email'] = $input_email;
				// Get all of the user details and place them into the session
				$sth = $dbh->prepare('SELECT
										student_first_name,
										student_last_name,
										mother_first_name,
										mother_last_name,
										mother_dob,
										father_first_name,
										father_last_name,
										father_dob,
										street_address,
										city,
										state,
										zip,
										parent_street_address,
										parent_city,
										parent_state,
										parent_zip,
										number_in_household,
										number_in_college,
										married,
										one_two_parent_household,
										number_parents_working,
										student_dob
									FROM user_details WHERE email = ?');
				// Execute the query with the bound parameters
				$prepared_params = array($input_email);
				$sth->execute($prepared_params);
				// Fetch the results returned from the database
				$result = $sth->fetch(PDO::FETCH_ASSOC);
				foreach($result as $k=>$v){
					$_SESSION[$k] = $v;
				}
				
				header("Location: loginsuccessful.php");
				exit();
			}else{
				// If password doesn't check out, login failed.
				echo "Login unsuccessful. Please try again.<br>";
			}
		}else{
			// If values weren't entered, login failed.
			echo "Login unsuccessful. Please try again.<br>";
		}
	}catch(PDOException $e){
		echo "Unable to execute database query.<br>Error message: " . $e->getMessage();
	}
}

/**
 * FUNCTION postToSession
 * Saves all $_POST vars to $_SESSION superglobal
 */
function postToSession(){
	foreach($_POST as $k=>$v){
		$_SESSION[$k] = $v;
		if(strtolower($_SESSION[$k]) == 'false'){
			$_SESSION[$k] = FALSE;
		}else if(strtolower($_SESSION[$k]) == 'true'){
			$_SESSION[$k] = TRUE;
		}else{
			$_SESSION[$k] = $v;
		}
	}
}

/**
 * FUNCTION registerUser
 * Creates login and user details in database
 */

function registerUser(){
	global $dbh;
	global $email_already_exists;
	if(!$_POST['password'] || !$_POST['email']){
		echo "<h1>You must enter an email address and password</h1>";
	}else{
		// Create password hash
		$pass_hash = betterCrypt($_POST['password']);
		
		// Insert user login information into database
		try{
			$sth = $dbh->prepare('INSERT INTO users (password, email) VALUES (?, ?)');
			// Execute the query with the bound parameters
			$prepared_params = array($pass_hash, $_POST['email']);
			$sth->execute($prepared_params);
		}catch(PDOException $e){
			$error_code = $e->getCode();
			if($error_code == '23000'){
				$email_already_exists = "Email address already exists in the database.";
			}
		}
		
		// Insert user details into database
		try{
			if(!$_POST['parent_street_address']){
				$_POST['parent_street_address'] = $_POST['street_address'];
			}
			
			if(!$_POST['parent_city']){
				$_POST['parent_city'] = $_POST['city'];
			}
			
			if(!$_POST['parent_state']){
				$_POST['parent_state'] = $_POST['state'];
			}
			
			if(!$_POST['parents_zip']){
				$_POST['parents_zip'] = $_POST['zip'];
			}
			
			if(isset($_POST['married'])){
				$married = true;
			}else{
				$married = false;
			}
			
			if($_POST['parent_state'] == 'undefined'){
				$_POST['parent_state'] = $_POST['state'];
			}
	
			$mother_dob = str_replace('/', '', $_POST['mother_date_of_birth']);
			$father_dob = str_replace('/', '', $_POST['father_date_of_birth']);
			$student_dob = str_replace('/', '', $_POST['student_dob']);
			$sth = $dbh->prepare('INSERT INTO user_details (email,
															student_first_name,
															student_last_name,
															mother_first_name,
															mother_last_name,
															mother_dob,
															father_first_name,
															father_last_name,
															father_dob,
															street_address,
															city,
															state,
															zip,
															parent_street_address,
															parent_city,
															parent_state,
															parent_zip,
															number_in_household,
															number_in_college,
															married,
															one_two_parent_household,
															number_parents_working),
															student_dob
															VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
			// Execute the query with the bound parameters
			$prepared_params = array($_POST['email'],
									$_POST['student_first_name'],
									$_POST['student_last_name'],
									$_POST['mothers_first_name'],
									$_POST['mother_last_name'],
									$mother_dob,
									$_POST['father_first_name'],
									$_POST['father_last_name'],
									$father_dob,
									$_POST['street_address'],
									$_POST['city'],
									$_POST['state'],
									$_POST['zip'],
									$_POST['parent_street_address'],
									$_POST['parent_city'],
									$_POST['parent_state'],
									$_POST['parents_zip'],
									$_POST['number_in_household'],
									$_POST['number_in_college'],
									$married,
									$_POST['one_two_parent_household'],
									$_POST['number_parents_working'],
									$student_dob);
			$sth->execute($prepared_params);
			header("Location: login.php");
		}catch(PDOException $e){
			$error_code = $e->getCode();
			$error_msg = $e->getMessage();
			echo "$error_code: $error_msg<br>";
			echo "Unable to update user details.<br>";
		}
	}
}

/**
 * FUNCTION set_session_start
 * Creates a secure session for efc which prevents XSS attacks
 */
function sec_session_start() {
	// Create custom session name
	$session_name = 'sec_session_id';
	// FALSE since not connecting HTTPS
	$secure = false;
	// Stop JavaScript from being able to access session information
	$httponly = true;

	// Forces sessions to only use cookies. 
	ini_set('session.use_only_cookies', 1);
	// Get cookie parameters
	$cookieParams = session_get_cookie_params();
	// Set cookies to expire in one week, keep the other parameters the same
	session_set_cookie_params(604800, $cookieParams["path"], $cookieParams["domain"], $secure, $httponly); 
	// Rename the session to the custom session name
	session_name($session_name);
	// Start the session
	session_start();
	// Regenerate the session, delete the old one.  
	session_regenerate_id(); 
}

/**
 * FUNCTION var_dump_pre
 * Formats var_dump
 * @param string var
 */
function var_dump_pre($var){
	echo "<pre>";
	var_dump($var);
	echo "</pre>";
}
?>