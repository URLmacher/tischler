<?php
require_once __DIR__ . '/anticors.php';

$answer = new stdClass();
$answer->success = false;
session_start();

if(isset($_SESSION['username'])){
    $answer->username = $_SESSION['username'];
    $answer->sessionId = session_id();
    $answer->success = true;
}

echo json_encode($answer); 