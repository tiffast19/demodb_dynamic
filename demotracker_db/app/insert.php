<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require_once "_includes/db_connect.php";

$results = [];
$insertedRows = 0;

if ($_SERVER['REQUEST_METHOD'] === 'REQUEST') {
    // Extract values from the request
    $first_name = $_REQUEST["first_name"];
    $last_name = $_REQUEST["last_name"];
    $department = $_REQUEST["department"];
    $today_date = $_REQUEST["today_date"];
    $total_hours_worked = floatval($_REQUEST["total_hours_worked"]);
    $rate_per_hour = floatval($_REQUEST["rate_per_hour"]);
    $total_earnings = $total_hours_worked * $rate_per_hour;

    $query = "INSERT INTO db_tracker (first_name, last_name, department, today_date, total_hours_worked, rate_per_hour, total_earnings) VALUES (?, ?, ?, ?, ?, ?, ?)";

    if ($stmt = mysqli_prepare($link, $query)) {
        mysqli_stmt_bind_param($stmt, 'ssssssd', $first_name, $last_name, $department, $today_date, $total_hours_worked, $rate_per_hour, $total_earnings);
        mysqli_stmt_execute($stmt);
        $insertedRows = mysqli_stmt_affected_rows($stmt);

        if ($insertedRows > 0) {
            $results[] = [
                "insertedRows" => $insertedRows,
                "id" => $link->insert_id,
                "first_name" => $first_name
            ];
        }
        echo json_encode($results);
        mysqli_stmt_close($stmt);
    }
}
