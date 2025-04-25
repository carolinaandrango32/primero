let tiempo = 300; // 5 minutos
    let temporizador;

    function iniciarTemporizador() {
      const cronometro = document.getElementById('cronometro');
      temporizador = setInterval(() => {
        cronometro.textContent = `⏱ Tiempo restante: ${tiempo} segundos`;
        tiempo--;

        if (tiempo < 0) {
          clearInterval(temporizador);
          verResultado(); 
        }
      }, 1000);
    }

    function verResultado() {
      clearInterval(temporizador);

      const nombre = prompt("Por favor, ingrese su nombre:");

      if (!nombre) {
        alert("⚠️ Por favor, ingrese su nombre antes de enviar el cuestionario.");
        return;
      }

      // Respuestas correctas según las preguntas
      const respuestas = {
        p1: 'a', p2: 'b', p3: 'b', p4: 'a', p5: 'b',
        p6: 'b', p7: 'b', p8: 'c', p9: 'a', p10: 'b',
        p11: 'c', p12: 'b', p13: 'a', p14: 'c', p15: 'b',
        p16: 'a', p17: 'c', p18: 'b', p19: 'c', p20: 'a',
        p21: 'b', p22: 'c', p23: 'a', p24: 'b', p25: 'c',
        p26: 'b', p27: 'a', p28: 'c', p29: 'b', p30: 'a',
        p31: 'c', p32: 'a', p33: 'b', p34: 'c', p35: 'a',
        p36: 'b', p37: 'c', p38: 'a', p39: 'b', p40: 'c',
        p41: 'a', p42: 'b', p43: 'c', p44: 'a', p45: 'b',
        p46: 'c', p47: 'a', p48: 'b', p49: 'c', p50: 'a'
      };

      let respuestasCorrectas = 0;
      for (let i = 1; i <= 50; i++) {
        const seleccionada = document.querySelector(`input[name="p${i}"]:checked`);
        if (seleccionada && seleccionada.value === respuestas[`p${i}`]) {
          respuestasCorrectas++;
        }
      }

      let mensaje = "";
      if (respuestasCorrectas === 50) {
        mensaje = `🎉 ¡Perfecto, ${nombre}! Obtuviste 50/50. ¡Eres un/a genio!`;
      } else if (respuestasCorrectas >= 40) {
        mensaje = `👏 ¡Excelente, ${nombre}! Tu puntaje es ${respuestasCorrectas}/50.`;
      } else if (respuestasCorrectas >= 30) {
        mensaje = `💪 Muy bien, ${nombre}. Lograste ${respuestasCorrectas}/50. ¡Sigue así!`;
      } else if (respuestasCorrectas >= 20) {
        mensaje = `🧐 ${nombre}, tu resultado es ${respuestasCorrectas}/50. ¡Puedes mejorar!`;
      } else {
        mensaje = `😅 ${nombre}, tu resultado fue ${respuestasCorrectas}/50. ¡Ánimo, sigue practicando!`;
      }

      const divResultado = document.createElement('div');
      divResultado.className = 'resultado';
      divResultado.textContent = mensaje;

      // Crear el botón para regresar al cuestionario
      const botonRegresar = document.createElement('button');
      botonRegresar.textContent = 'Regresar al cuestionario';
      botonRegresar.onclick = () => window.location.reload();  // Recarga la página

      divResultado.appendChild(botonRegresar);
      document.body.appendChild(divResultado);

      bloquearFormulario(); // Llama a la función para bloquear el formulario sin afectar el botón de regreso
    }

    function bloquearFormulario() {
      // Deshabilitar todas las opciones de respuestas (radio buttons)
      const opciones = document.querySelectorAll('input[type="radio"]');
      opciones.forEach(opcion => {
        opcion.disabled = true;
      });

      // Deshabilitar los otros botones (excepto el botón de regresar)
      const botones = document.querySelectorAll('button');
      botones.forEach(btn => {
        // Verifica si el botón no es el de regresar
        if (btn.textContent !== 'Regresar al cuestionario') {
          btn.disabled = true;
          btn.style.opacity = '0.6';
          btn.style.cursor = 'not-allowed';
        }
      });
    }

    // Iniciar el temporizador al cargar la página
    window.onload = iniciarTemporizador;