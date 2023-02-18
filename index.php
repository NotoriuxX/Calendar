<!DOCTYPE html>
<html>
<head>
  <title>Calendario</title>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <link href="css/styles.css" rel="stylesheet" type="text/css">
</head>
<body>
  <div class="formulario">
    <form id="mi-formulario" action="subir_datos.php" method="post">
      <div class="fecha-hora">
        <!-- Sección para seleccionar una fecha -->
        <div class="fecha">
          <label for="start">Fecha</label>
          <input type="date" id="start" name="fecha" value="" min="2023-03-21" max="2023-04-04">
        </div>

        <!-- Sección para seleccionar una hora -->
        <div class="hora">
          <label for="hora">Hora:</label>
          <select  class="select-hora" id="hora" name="hora" size="auto">
            <option value="">Seleccione una hora</option>
          </select>
        </div>
      </div>

      <!-- Botón para enviar los datos -->
      <div class="verificar">
        <input type="submit" value="Recervar Hora">
      </div>
    </form>
  </div>
  
  

  <div class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">
      <i class="fas fa-check-circle icon-confirm"></i>
      <h2>¡Cita registrada con éxito!</h2>
      <button class="close-button">X</button>
    </div>
    <div class="modal-body">
      <p>Tu cita ha sido registrada con éxito.</p>
    </div>
  </div>
</div>




  
  <!-- Script para el funcionamiento de la página -->
  <script  type="module" src="js/script.js"></script>
</body>
</html>

