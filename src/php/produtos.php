<?php

header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$database = "tchegames";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Problemas de conexão com o banco de dados.<br> ".mysqli_connect_error());
}

$sql = "select * from produtos";
$result = $conn->query($sql);
$produtos = [];

If ($result->num_rows > 0) {
    while($rows = $result->fetch_assoc()){  
        $produtos[] = $rows;};
};

echo json_encode($produtos);

?>