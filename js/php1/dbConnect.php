<?php

$host = '127.0.0.1:8889'; // 127.0.0.1 is a special address which always refers to "this computer"
//8889 is the port number for MySQL. Check that this matches the port used by MAMP
$dbName = 'dublin_squares';
$username = 'dublin_squares';
$password = 'F1Tlj27E5vs6ZhHL';

$dbCon = new PDO("mysql:host=" . $host . ";dbname=" . $dbName, $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
