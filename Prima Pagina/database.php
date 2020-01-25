<?php
  define("DB_HOST", "localhost");
  define("DB_USER", "root");
  define("DB_PASSWORD", "");
  define("DB_DATABASE", "gameplatform");

  $db = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
  

  if ($db) {
    echo "Connected!<br>";
  } else {
    echo "Connection Failed";
  }

$userCautat = $_POST['nume'];
$parolaCautat =$_POST['psw'] ;
$repeatCautat =$_POST['psw-repeat'];
$sql = "INSERT INTO users(username,parola)
        VALUES('".$userCautat."','".$parolaCautat."')";
echo $sql;
$result = $db->query($sql);

 echo $result;

$db->close();



?>