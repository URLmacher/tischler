<?php
require_once __DIR__.'/src/Psr4AutoloaderClass.php';
$answer = new stdClass();
$answer->success = false;
$data = [];
$errors = [];
$json = file_get_contents('php://input');
$jsondata = json_decode($json);
$objLoader = new \app\Psr4AutoloaderClass;
$objLoader->register();
$objLoader->addNamespace('PHPMailer\PHPMailer','vendor/phpmailer/phpmailer/src/');
$objMailer = new PHPMailer\PHPMailer\PHPMailer(TRUE);

    $answer->json = $jsondata;

if(!empty($jsondata->name)){
    $name = filter_var(trim($jsondata->name),FILTER_SANITIZE_STRING); 
    $data['name'] = $name;
}else{
    $errors['name'] = 'Bitte Namen eingeben';
}

if(!empty($jsondata->email)){
    $email = filter_var(trim($jsondata->email),FILTER_SANITIZE_EMAIL);
    $data['email'] = $email;
}else{
    $errors['email'] = 'Bitte Email Adresse eingeben';
}

if(!empty($jsondata->msg)){
    $nachricht = $jsondata->msg;
    $data['msg'] = $nachricht;
}else{
    $errors['msg'] = 'Bitte Nachricht eingeben';
}


// if (empty($errors)) { 
//     //Einstellungen für Gmail 
//     //Zugriff durch weniger sichere Apps: an
//     //https://myaccount.google.com/lesssecureapps 
//     $objMailer->isSMTP();                        
//     $objMailer->Host = 'smtp.gmail.com';            
//     $objMailer->SMTPAuth = true;                     
//     $objMailer->Username = 'urlmacher@gmail.com'; //Login      
//     $objMailer->Password = 'w3rbBRXj_R5-YCs='; //Passwort
//     $objMailer->SMTPSecure = 'tls';                  
//     $objMailer->Port = 587;          

//     $objMailer->setFrom($email, $name);
//     $objMailer->addAddress('urlmacher@gmail.com'); //Empfänger
//     $objMailer->Subject = 'Nachricht von der Website';
//     $objMailer->Body = "$name schrieb:\n\n" . $nachricht;
//     $objMailer->AltBody = "$name schrieb:\n\n" . $nachricht;

//     try{
//         if(!$objMailer->send()) {
//             $errors['send'] = $mail->ErrorInfo;
//         } else {
//             $answer->success = true;
//         }
//     }catch(Exception $e) {
//         $errors['process'] = $e->getMessage();
//     }
// }
    

$answer->errors = $errors;
$answer->data = $data;
echo json_encode($answer);