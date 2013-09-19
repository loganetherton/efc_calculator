<?php
session_start();
$_SESSION['logged_in'] = FALSE;
header("Location: login.php");
	exit();
?>