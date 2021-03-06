<?php
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
                $answer->success =  updateAbout($jsondata->content);
                break;
            case 'impressum':
                $answer->success =  updateImpressum($jsondata->content);
                break;
            case 'datenschutz':
                $answer->success =  updateDatenschutz($jsondata->content);
                break;
            case 'products':
                $answer->success =  updateProducts($jsondata->content);
                break;
        }
    }
}


function updateAbout($data)
{
    include 'dbconnect.php';

    for ($i = 0; $i < count($data); $i++) {
        $sql = 'UPDATE about SET img =:img, title = :title, text = :text WHERE id = :id';
        $stmt = $pdo->prepare($sql);
        $values = [
            'img' => $data[$i]->img,
            'title' => $data[$i]->title,
            'text' => $data[$i]->text,
            'id' => $data[$i]->id
        ];
        $stmt->execute($values);
    }
    return true;
}

function updateImpressum($data)
{
    include 'dbconnect.php';

    for ($i = 0; $i < count($data); $i++) {
        $sql = 'UPDATE impressum SET text = :text WHERE id = :id';
        $stmt = $pdo->prepare($sql);
        $values = [
            'text' => $data[$i]->text,
            'id' => $data[$i]->id
        ];
        $stmt->execute($values);
    }
    return true;
}

function updateProducts($data)
{
    include 'dbconnect.php';

    for ($i = 0; $i < count($data); $i++) {
        $sql = 'UPDATE products SET img =:img, title = :title, body_title = :body_title, body_text = :body_text WHERE id = :id';
        $stmt = $pdo->prepare($sql);
        $values = [
            'img' => $data[$i]->img,
            'title' => $data[$i]->title,
            'body_title' => $data[$i]->body_title,
            'body_text' => $data[$i]->body_text,
            'id' => $data[$i]->id
        ];
        $stmt->execute($values);
    }
    return true;
}

function updateDatenschutz($data)
{
    include 'dbconnect.php';
    
    for ($i = 0; $i < count($data); $i++) {
        $sql = 'UPDATE datenschutz SET title = :title, text = :text WHERE id = :id';
        $stmt = $pdo->prepare($sql);
        $values = [
            'title' => $data[$i]->title,
            'text' => $data[$i]->text,
            'id' => $data[$i]->id
        ];
        $stmt->execute($values);
    }
    return true;
}


echo json_encode($answer);
