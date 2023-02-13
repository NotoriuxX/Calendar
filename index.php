<!DOCTYPE html>
<html>
<head>
  <title>Calendario</title>
  
  <link href="css/styles.css" rel="stylesheet" type="text/css">
</head>
<body>
  <div class="formulario">
    <form id="mi-formulario" action="#" method="post">
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
  
  <!-- Script para el funcionamiento de la página -->
  <script  type="module" src="js/script.js"></script>
</body>
</html>

