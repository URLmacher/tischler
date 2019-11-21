<?php
require_once __DIR__.'/src/Psr4AutoloaderClass.php';
$answer = new stdClass();
$answer->success = false;
$data = [];
$errors = [];
$json = file_get_contents('php://input');
$jsondata = json_decode($json);
$answer->json = $jsondata;

if(!empty($jsondata->name)){
    $name = filter_var(trim($jsondata->name),FILTER_SANITIZE_STRING); 
    $data['name'] = $name;
}else{
    $errors['name'] = 'Bitte Namen eingeben';
}

if(!empty($jsondata->password)){
    $password = $jsondata->password;
    $data['password'] = $password;
}else{
    $errors['password'] = 'Bitte Password eingeben';
}

    

$answer->errors = $errors;
$answer->data = $data;
echo json_encode($answer);