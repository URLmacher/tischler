<?php

$answer = new stdClass();
$answer->success = true;

$json = file_get_contents('php://input');
$data = json_decode($json);
$answer->data = $data;

echo json_encode($answer);
   /*
    require_once __DIR__.'/src/Psr4AutoloaderClass.php';

    $objLoader = new \app\Psr4AutoloaderClass;
    $objLoader->register();
    $objLoader->addNamespace('PHPMailer\PHPMailer','vendor/phpmailer/phpmailer/src/');
    
    $objMailer = new PHPMailer\PHPMailer\PHPMailer(TRUE);

     
    if(isset($_POST['senden'])){
        $data = [];
        $errors = [];
        

        if(!empty($_POST['name'])){
            $name = filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING); 
            $data['name'] = $name;
        }else{
            $errors['name'] = 'Bitte Namen eingeben';
        }

        if(!empty($_POST['betreff'])){
            $betreff = filter_var(trim($_POST['betreff']),FILTER_SANITIZE_STRING); 
            $data['betreff'] = $betreff;
        }else{
            $errors['betreff'] = 'Bitte Betreff eingeben';
        }

        if(!empty($_POST['email'])){
            $email = filter_var(trim($_POST['email']),FILTER_SANITIZE_EMAIL);
            $data['email'] = $email;
        }else{
            $errors['email'] = 'Bitte Email Adresse eingeben';
        }

        if(!empty($_POST['msg'])){
            $nachricht = $_POST['msg'];
            $data['msg'] = $nachricht;
        }else{
            $errors['msg'] = 'Bitte Nachricht eingeben';
        }
        

        if (empty($errors)) { 
            //Einstellungen für Gmail 
            //Zugriff durch weniger sichere Apps: an
            //https://myaccount.google.com/lesssecureapps 
            $objMailer->isSMTP();                        
            $objMailer->Host = 'smtp.gmail.com';            
            $objMailer->SMTPAuth = true;                     
            $objMailer->Username = 'urlmacher@gmail.com'; //Login      
            $objMailer->Password = 'w3rbBRXj_R5-YCs='; //Passwort
            $objMailer->SMTPSecure = 'tls';                  
            $objMailer->Port = 587;          

            $objMailer->setFrom($email, $name);
            $objMailer->addAddress('urlmacher@gmail.com'); //Empfänger
            $objMailer->Subject = $betreff;
            $objMailer->Body = "Nachricht vom Kontaktformular:\n\n" . $nachricht;
            $objMailer->AltBody = "Nachricht vom Kontaktformular:\n\n" . $nachricht;

            try{
                if(!$objMailer->send()) {
                    echo "<p class='error'>Nachricht konnte nicht gesendet werden.</p></br>";
                    echo "<p class='error'>Fehler im System: " . $mail->ErrorInfo . "</p>";
                } else {
                    header('Location: Kontaktformular.php?success=TRUE') . $data;
                }
            }catch(Exception $e) {
                echo "<p class='error'>Fehler im System: " . $e->getMessage() . "</p>";
            }
        }
    }

    */