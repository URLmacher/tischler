<?php
require_once __DIR__ . '/anticors.php';
$answer = new stdClass();

// Todo : only allow content tables
if (!empty($_GET['area'])) {
    $area = filter_var(trim($_GET['area']), FILTER_SANITIZE_STRING);
    $answer->content = getContent($area);
}

function getContent($area)
{
    $host =  'localhost';
    $user = 'Admin';
    $password = '12345';
    $dbname = 'tischler';
    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbname . ';charset=utf8';
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $sql = 'SELECT * FROM ' . $area;
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $content = $stmt->fetchAll();
    return $content;
}


echo json_encode($answer);
