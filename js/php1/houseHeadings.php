<?php

require_once('dbConnect.php');


$sql = 'SELECT * FROM HOUSE_HEADINGS;'; // We use the question mark to allow us to supply a value when executing the statement
//$houseInfoId= $_GET['houseInfoId']; //execute, always an array
 
$stmt = $dbCon->prepare($sql);

$stmt->execute(); //Pass in an array of values. These values are used to replace the question marks in the SQL query. There must be as many array items as there are question marks.

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

header("Access-Control-Allow-Origin: *");

print(json_encode($results[0]));
