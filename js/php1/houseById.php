<?php

require_once('dbConnect.php');

//localhost:8888/php1/houseById.php?ID=1

$houseInfoId = $_GET["ID"]; //getting id from js, EG. to give an id of two 


$sql = 'SELECT * FROM HOUSE_INFO WHERE id = ?;'; // We use the question mark to allow us to supply a value when executing the statement

$stmt = $dbCon->prepare($sql);

$stmt->execute([$houseInfoId]); //Pass in an array of values. These values are used to replace the question marks in the SQL query. There must be as many array items as there are question marks. MUST GO IN AS ARRAY!!!


$houseInfo = $stmt->fetchObject(); //fetch_assoc returns as php object

$imageSql = 'SELECT * FROM HOUSE_IMAGE WHERE houseInfoId = ?';

$imageStmt = $dbCon->prepare($imageSql);

$imageStmt->execute([$houseInfoId]);

$houseImages = $imageStmt->fetchAll(PDO::FETCH_ASSOC); //these are my house images results


$houseInfo->houseImages = $houseImages; //assigning(appending) house images array to house info object



$timeSql = 'SELECT * FROM HOUSE_TIMELINE WHERE houseInfoId = ?';

$timeStmt = $dbCon->prepare($timeSql);

$timeStmt->execute([$houseInfoId]);

$houseTimeline = $timeStmt->fetchAll(PDO::FETCH_ASSOC); //these are my house images results


$houseInfo->houseTimeline = $houseTimeline; //assigning(appending) house images array to house info object


header("Access-Control-Allow-Origin: *"); //security

//print(json_encode($results[0]));

//print(json_encode($houseImages));

print(json_encode($houseInfo));
