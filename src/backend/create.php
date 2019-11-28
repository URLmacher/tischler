<?php
require_once __DIR__ . '/src/Psr4AutoloaderClass.php';
require_once __DIR__ . '/anticors.php';
$answer = new stdClass();
$answer->success = false;
$json = file_get_contents('php://input');
$jsondata = json_decode($json);

if (!empty($jsondata->content)) {
    session_start();
    if ($jsondata->id != session_id()) {
        return;
    } else {
        switch ($jsondata->area) {
            case 'about':
                $answer->success =  createAbout($jsondata->content);
                break;
            case 'impressum':
                $answer->success =  createImpressum($jsondata->content);
                break;
            case 'datenschutz':
                $answer->success =  createDatenschutz($jsondata->content);
                break;
            case 'products':
                $answer->success =  createProducts($jsondata->content);
                break;
        }
    }
}

function createAbout($data)
{
    include 'dbconnect.php';

    $sql = 'INSERT INTO about(img, title, text) VALUES(:img, :title, :text)';
    $stmt = $pdo->prepare($sql);
    $values = [
        'img' => $data->img,
        'title' => $data->title,
        'text' => $data->text
    ];
    $stmt->execute($values);
    return true;
}

function createImpressum($data)
{
    include 'dbconnect.php';

    $sql = 'INSERT INTO impressum(text) VALUES(:text)';
    $stmt = $pdo->prepare($sql);
    $values = [
        'text' => $data->text
    ];
    $stmt->execute($values);

    return true;
}

function createProducts($data)
{
    include 'dbconnect.php';

    $sql = 'INSERT INTO products(img, title, body_title, body_text) VALUES(:img, :title, :body_title, :body_text)';
    $stmt = $pdo->prepare($sql);
    $values = [
        'img' => $data->img,
        'title' => $data->title,
        'body_title' => $data->body_title,
        'body_text' => $data->body_text
    ];
    $stmt->execute($values);

    return true;
}

function createDatenschutz($data)
{
    include 'dbconnect.php';

    $sql = 'INSERT INTO datenschutz(title, text) VALUES(:title, :text)';
    $stmt = $pdo->prepare($sql);
    $values = [
        'title' => $data->title,
        'text' => $data->text
    ];
    $stmt->execute($values);

    return true;
}


echo json_encode($answer);
