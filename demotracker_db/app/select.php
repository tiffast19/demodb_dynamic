<?php

//connect to db

require_once "_includes/db_connect.php";
//prepare the statement passing the db $link and the SQL
$stmt = mysqli_prepare($link, "SELECT id, first_name, last_name, department, today_date, total_hours_worked, rate_per_hour, total_earnings FROM db_tracker");
// execute the statement /query from above
mysqli_stmt_execute($stmt);
//get result
$result = mysqli_stmt_get_result($stmt);
//loop throught creating an array of resultS
while ($row = mysqli_fetch_assoc($result)) {
    $results[] = $row;
}
//encode &display json
echo json_encode($results);
//close the link to the db
mysqli_close($link);
//echo json_encode($db_response);
