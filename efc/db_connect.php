<?php
$dsn = 'mysql:dbname=efc;host=127.0.0.1';
$user = "sec_user";
$pass = "GMwjsyuNA3CTvRDv";
try{
	$dbh = new PDO($dsn, $user, $pass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
	die("Connection failed: " . $e->getMessage());
}
?>