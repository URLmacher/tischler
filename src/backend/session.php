<?php
$answer = new stdClass();
$answer->success = false;

if(isset($_SESSION['username'])){
    $answer->session = $_SESSION;
    $answer->success = true;
}
session_start();
$answer->session = $_SESSION;
echo json_encode($answer); 