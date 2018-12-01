<?php
    
    ini_set('display_errors', 1);
    
    $host = 'mysql4113int.cp.blacknight.com'; // 127.0.0.1 is a special address which always refers to "this computer"
    $port = 3306;
    //8889 is the port number for MySQL. Check that this matches the port used by MAMP
    $dbName = 'db1519085_dublinSquares';
    $username = 'u1519085_dsq';
    $password = 'Bz13bZOiM';
    
    $dbCon = new PDO("mysql:host=$host;port=$port;dbname=$dbName;charset=utf8;", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
