<?php
  include('conexion.php');
  
  // Recibir los datos del formulario y validarlos
  $fecha = mysqli_real_escape_string($conn, $_POST['fecha']);
  $hora = mysqli_real_escape_string($conn, $_POST['hora']);
  
  // Definir el número máximo de veces que se permitirá tener la misma hora en una fecha específica
  $fecha_limite = "2023-03-25";
  $fecha_limite_1 = "2023-04-01";
  $max_por_fecha = 4;
  
  // Verificar si la fecha es igual a la fecha límite o fecha límite 1
  if ($fecha == $fecha_limite || $fecha == $fecha_limite_1) {
    $query = "SELECT COUNT(*) as total FROM fecha WHERE fecha='$fecha' AND hora='$hora'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);
    
    if ($row['total'] >= $max_por_fecha) {
      echo "Error: Ya existen " . $row['total'] . " registros con la misma hora en esta fecha. No se puede agregar más.";
      exit;
    }
  } else {
    $query_check = "SELECT * FROM fecha WHERE fecha='$fecha' AND hora='$hora'";
    $result = mysqli_query($conn, $query_check);
    if (mysqli_num_rows($result) > 0) {
      echo "Error: La hora seleccionada ya se encuentra registrada para la fecha seleccionada";
      exit;
    }
  }
  
  // Insertar los datos en la tabla
  $query = "INSERT INTO fecha (id, fecha, hora) VALUES (NULL,'$fecha', '$hora')";
  
  if (mysqli_query($conn, $query)) {
      echo "Creado con éxito";
  } else {
      echo "Error: Ha ocurrido un error en la consulta";
  }
  
  exit;
?>

