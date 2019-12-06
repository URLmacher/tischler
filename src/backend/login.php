<?php
require_once __DIR__ . '/anticors.php';
$answer = new stdClass();
$answer->success = false;
$data = [];
$errors = [];
$name;
$password;
$json = file_get_contents('php://input');
$jsondata = json_decode($json);

if (!empty($jsondata->name)) {
    $name = filter_var(trim($jsondata->name), FILTER_SANITIZE_STRING);
    $data['name'] = $name;
} else {
    $errors['name'] = 'Bitte Namen eingeben';
}

if (!empty($jsondata->password)) {
    $password = $jsondata->password;
    $data['password'] = $password;
} else {
    $errors['password'] = 'Bitte Password eingeben'; 
}

if (empty($errors)) {
    if (checkUsername($name) && checkPassword($name, $password)) {
        session_start();
        $_SESSION['username'] = $name;
        $answer->success = true;
    } else {
        $errors['password'] = 'Falsches Passwort oder Benutzername';
    }
}

/**
 * validates password
 *
 * @param string $username
 * @param string $pass
 * @return bool
 */
function checkPassword($username, $pass)
{
    include 'dbconnect.php';

    $sql = 'SELECT password FROM superuser WHERE superuser_name = ?';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$username]);
    $dbpass = $stmt->fetch();

    return password_verify($pass, $dbpass->password);
}

/**
 * checks if username exists
 *
 * @param string $username
 * @return bool
 */
function checkUsername($username)
{

    include 'dbconnect.php';

    $sql = 'SELECT 1 FROM superuser WHERE superuser_name = ?';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$username]);
    $dbuser = $stmt->fetch();
    return (bool) $dbuser;
}

$answer->errors = $errors;
$answer->data = $data;
echo json_encode($answer);
