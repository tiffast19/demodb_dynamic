<?php
require_once "_includes/db_connect.php";

$results = [];
$search_name = isset($_REQUEST["search_name"]) ? $_REQUEST["search_name"] : "";
$search_date = isset($_REQUEST["search_date"]) ? $_REQUEST["search_date"] : "";

$query = "SELECT id, first_name, last_name, department, today_date, total_hours_worked, rate_per_hour, total_earnings FROM db_tracker WHERE 1";

if (!empty($search_name)) {
    $query .= " AND (first_name LIKE ? OR last_name LIKE ?)";
    $search_name_param = "%{$search_name}%";
}

if (!empty($search_date)) {
    $query .= " AND today_date = ?";
}

$stmt = mysqli_prepare($link, $query);

if ($stmt) {
    if (!empty($search_name) && !empty($search_date)) {
        mysqli_stmt_bind_param($stmt, 'sss', $search_name_param, $search_name_param, $search_date);
    } elseif (!empty($search_name)) {
        mysqli_stmt_bind_param($stmt, 'ss', $search_name_param, $search_name_param);
    } elseif (!empty($search_date)) {
        mysqli_stmt_bind_param($stmt, 's', $search_date);
    }

    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    while ($row = mysqli_fetch_assoc($result)) {
        $results[] = $row;
    }

    echo json_encode($results);
    mysqli_stmt_close($stmt);
}
mysqli_close($link);
