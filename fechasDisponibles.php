<?php
// Respuesta será en formato JSON
header('Content-Type: application/json');
// Establecer conexión a la base de datos
include ('conexion.php');
// Preparar la consulta
$sql = "SELECT fecha, hora FROM fecha";
$stmt = mysqli_prepare($conn, $sql);
// Ejecutar la consulta
mysqli_stmt_execute($stmt);

// Obtener los resultados
$result = mysqli_stmt_get_result($stmt);

// Verifica si la consulta fue exitosa
if (mysqli_num_rows($result) > 0) {
    // Almacena los resultados en una variable
    $calendario = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $calendario[] = $row;
    }
} else {
    if (!$result) {
        // Imprimir un mensaje de error genérico en lugar de detalles sensibles
        echo json_encode(array("error" => "Ha ocurrido un error en la consulta"));
        exit;
    }
}
// Liberar los recursos de la consulta
mysqli_stmt_close($stmt);
// Cerrar la conexión con la base de datos
mysqli_close($conn);
// Imprimir los datos en formato JSON
echo json_encode($calendario);
?>

