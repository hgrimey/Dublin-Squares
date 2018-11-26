<?php

$host = '127.0.0.1:3306'; // 127.0.0.1 is a special address which always refers to "this computer"
//8889 is the port number for MySQL. Check that this matches the port used by MAMP
$dbName = 'codeprim_dublinsquares';
$username = 'codeprim_dublinsquares';
$password = 'Dubl1nSquares!';

$dbCon = new PDO("mysql:host=" . $host . ";dbname=" . $dbName, $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
