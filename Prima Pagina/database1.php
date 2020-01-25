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

$sql = "SELECT Id, username, parola FROM users";
$userCautat = $_POST['nume'];
$parolaCautat =$_POST['psw'] ;
$userGasit=false;
$parolaGasit=false;

if($userCautat==$row["username"]) {
   $userGasit=true;
}
if($parolaCautat==$row["parola"]) {
  $parolaGasit=true;
}



$result = $db->query($sql);


if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["Id"]. " - Name: " . $row["username"]. " " . $row["parola"]. "<br>";

       if($userCautat==$row["username"] && $parolaCautat==$row["parola"] ) {
          $userGasit=true; $parolaGasit=true;
         }
       if($userCautat==$row["username"] && $parolaCautat!=$row["parola"]) {
           $userGasit=true; $parolaGasit=false;
         }
       if($userCautat!=$row["username"]){
           $userGasit=false; 
         }


    }
} else {
    echo "0 results";
}

if($userGasit==true && $parolaGasit==true){
    header("Location: https://www.wikipedia.org/"); 
}
if($userGasit==true && $)





$db->close();

 

?>