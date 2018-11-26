<?php

require_once('dbConnect.php');

//localhost:8888/php1/houseById.php?ID=1

$containerId = $_GET["containerID"]; //getting id from js, NB: had issue when changing word in js? 

$sql = 'SELECT * FROM PAGE_CONTAINER WHERE ID = ?;'; // We use the question mark to allow us to supply a value when executing the statement

$stmt = $dbCon->prepare($sql);

$stmt->execute([$containerId]); //Pass in an array of values. These values are used to replace the question marks in the SQL query. There must be as many array items as there are question marks. MUST GO IN AS ARRAY!!!


$results = $stmt->fetchAll(PDO::FETCH_ASSOC); //fetch_assoc returns as php object

header("Access-Control-Allow-Origin: *"); //security

print(json_encode($results[0]));
