
  const startInput = document.querySelector("#start");
  const horaSelect = document.querySelector("#hora");
  const horas = {};
  const dias = ['20', '21', '22', '23', '24', '26', '27', '28', '29', '30', '31', '2', '3'];
  const meses = ['2', '3'];
  const horasDisponibles = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'];
  const horasDisponibles24 = ['15:00', '15:30', '16:00', '16:30'];
  let calendario = []; // Declarar la variable calendario aquí

  meses.forEach(mes => {
    dias.forEach(dia => {
      if (dia === '24' || dia === '31') {
        horas[`${mes}-${dia}`] = [...horasDisponibles, ...horasDisponibles24];
      } else {
        horas[`${mes}-${dia}`] = horasDisponibles;
      }
    });
  });
    // Hacer una llamada AJAX para recuperar los datos en formato JSON
    fetch("fechasDisponibles.php")
    .then(response => response.json())
    .then(data => {
      const calendario = data;
  
      startInput.addEventListener("change", function() {
        const selectedDate = new Date(this.value);
        const month = selectedDate.getMonth();
        const day = selectedDate.getDate();
        horaSelect.innerHTML = "";
        const horasDisponibles = horas[`${month}-${day}`];
        if (horasDisponibles) {
          horaSelect.innerHTML = "<option value=''>Seleccione una hora</option>";
          let todasHorasDesabilitadas = true;
          horasDisponibles.forEach(function(hora) {
            // Verificar si la hora está registrada en la base de datos
            const horaRegistrada = calendario.filter(function(item) {
              return item.fecha === startInput.value && item.hora === hora;
            });

            // Verificar si la fecha es 25-03-2023 o 01-04-2023 y si tienen 4 o más horas registradas
            if (startInput.value === "2023-03-25" || startInput.value === "2023-04-01") {
              if (horaRegistrada.length >= 4) {
                const option = document.createElement("option");
                option.value = hora;
                option.innerHTML = hora;
                option.disabled = true;
                horaSelect.appendChild(option);
              } else {
                const option = document.createElement("option");
                option.value = hora;
                option.innerHTML = hora;
                horaSelect.appendChild(option);
                todasHorasDesabilitadas = false;
              }
            } else {
              if (horaRegistrada.length >= 1) {
                const option = document.createElement("option");
                option.value = hora;
                option.innerHTML = hora;
                option.disabled = true;
                horaSelect.appendChild(option);
              } else {
                const option = document.createElement("option");
                option.value = hora;
                option.innerHTML = hora;
                horaSelect.appendChild(option);
                todasHorasDesabilitadas = false;
              }
            }
          });

          if (todasHorasDesabilitadas) {
            horaSelect.innerHTML = "<option value=''>Sin horas disponibles</option>";
          }

        } else {
          horaSelect.innerHTML = "<option value=''>Sin horas disponibles</option>";
        }
      });
    });


  //--------------------alertas----------------------------------
  const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const fecha = form.elements.fecha.value;
  const hora = form.elements.hora.value;

  fetch("subir_datos.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `fecha=${fecha}&hora=${hora}`
  })
    .then(response => response.text())
    .then(text => {
      if (text === "Creado con éxito") {
        alert("Creado con éxito");
      } else if (fecha === "2023-03-25" || fecha === "2023-04-01") {
        // Verificar si la hora seleccionada ya está registrada más de 4 veces
        const horaRegistrada = calendario.filter(function(item) {
          return item.fecha === fecha && item.hora === hora;
        });
        if (horaRegistrada.length >= 4) {
          alert("La hora seleccionada ya no se encuentra disponible");
          location.reload();
        } else {
          alert("La hora seleccionada ya se encuentra registrada");
          location.reload();
        }
      } else {
        alert("La hora seleccionada ya se encuentra registrada");
        location.reload();
      }
    })
    .catch(error => {
      console.error(error);
      alert("Ha ocurrido un error inesperado. Por favor, inténtelo más tarde.");
    });
});
  
