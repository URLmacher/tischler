<?php
require_once __DIR__ . '/anticors.php';
$answer = new stdClass();

// Todo : only allow content tables
if (!empty($_GET['area'])) {
  $area = filter_var(trim($_GET['area']), FILTER_SANITIZE_STRING);

  switch ($area) {
    case 'about':
      $answer->content = getContent($area);
      break;
    case 'impressum':
      $answer->content = getContent($area);
      break;
    case 'datenschutz':
      $answer->content = getContent($area);
      break;
    case 'products':
      $answer->content = getContent($area);
      break;
  }
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
