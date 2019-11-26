<?php
require_once __DIR__ . '/src/Psr4AutoloaderClass.php';
require_once __DIR__ . '/anticors.php';
$answer = new stdClass();
$answer->success = false;
$json = file_get_contents('php://input');
$jsondata = json_decode($json);

if (!empty($jsondata->content)) {
    $answer->data = $jsondata->content;
   $answer->success =  update($jsondata->content);
}


/**
 * updates database
 *
 * @param string $username
 * @param string $pass
 * @return bool
 */
function update($data)
{
    $host =  'localhost';
    $user = 'Admin';
    $password = '12345';
    $dbname = 'tischler';
    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    for($i = 0; $i < count($data); $i++) {
        $sql = 'UPDATE about SET img =:img, title = :title, text = :text WHERE id = :id';
        $stmt = $pdo->prepare($sql);
        $values = [
            'img'=>$data[$i]->img,
            'title'=> $data[$i]->title,
            'text'=> $data[$i]->text,
            'id' => $data[$i]->id
        ];
        $stmt->execute($values);
    }
    // foreach ($data as $key => $value) {
    //     $answer->$key = $value;
    //     // $sql = 'UPDATE about SET ' . $type . ' WHERE id = :id';
    // }

    return true;
}


echo json_encode($answer);
