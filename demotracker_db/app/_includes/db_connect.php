<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

$host = 'localhost:3306';
$db = 'employee_daily_work_hours_tracker';
$user = 'employee_daily_work_hours_tracker';
$pass = 'Z7$m0fg13';

$link = mysqli_connect($host, $user, $pass, $db);

if (!$link) {
    die("Database connection failed: " . mysqli_connect_error());
}
//echo json_encode($db_response);
