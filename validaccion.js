function validarIngreso() {
      const usuario = document.getElementById('username').value.trim();
      const contrasena = document.getElementById('password').value.trim();
      const mensaje = document.getElementById('mensaje');

      if (usuario === '' || contrasena === '') {
        mensaje.style.color = 'orange';
        mensaje.textContent = "Por favor, complete todos los campos.";
      } else if (usuario === 'tutor6TO' && contrasena === '1234') {
        mensaje.style.color = 'lightgreen';
        mensaje.textContent = "¡Ingreso exitoso!";
        setTimeout(() => {
          window.location.href = 'preguntasquintodos.html';
        }, 1500);
    
      } else {
        mensaje.style.color = 'red';
        mensaje.textContent = "Usuario o contraseña incorrectos.";
      }
    }
  
    