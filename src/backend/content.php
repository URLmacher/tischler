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
  include 'dbconnect.php';

    $sql = 'SELECT * FROM ' . $area;
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $content = $stmt->fetchAll();
    return $content;
}


echo json_encode($answer);
