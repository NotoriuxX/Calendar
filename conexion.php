<?php
	$server = "localhost";
    $username = "root";
    $password = "";
    $database = "calendario";
    
    // Conectar a la base de datos
    $conn = mysqli_connect($server, $username, $password, $database);
  
    // Verificar si la conexión se realizó con éxito
    if (!$conn) {
     die("La conexión falló: " . mysqli_connect_error());
    }
?>