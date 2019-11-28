<?php
$config = include('config.php');

$host =  'localhost';
$user = $config['dblogin'];
$password = $config['dbpass'];
$dbname = 'tischler';
$dsn = 'mysql:host=' . $host . ';dbname=' . $dbname . ';charset=utf8';
$pdo = new PDO($dsn, $user, $password);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
