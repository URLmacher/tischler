<?php
require_once __DIR__ . '/anticors.php';

$answer = new stdClass();
$answer->success = false;
session_start();

if (isset($_SESSION['username'])) {
    $_SESSION = [];
    $answer->success = true;
}

echo json_encode($answer);
