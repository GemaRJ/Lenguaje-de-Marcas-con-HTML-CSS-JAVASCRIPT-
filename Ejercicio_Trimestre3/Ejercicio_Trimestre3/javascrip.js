// Mostrar/Ocultar contraseña
document.getElementById('mostrar-contrasena').addEventListener('click', function () {
  const contrasena = document.getElementById('contrasena');
  const confirmar = document.getElementById('confirmarContrasena');
  const tipo = contrasena.type === 'password' ? 'text' : 'password';
  contrasena.type = tipo;
  confirmar.type = tipo;
  this.textContent = tipo === 'text' ? 'Ocultar contraseña' : 'Mostrar contraseña';
});

// Guardar input activo
let inputActivo = null;
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', function () {
    inputActivo = this;
  });
});

// Teclado virtual
document.querySelectorAll('.key').forEach(tecla => {
  tecla.addEventListener('click', function () {
    if (inputActivo) {
      const caracter = this.getAttribute('data-char');
      inputActivo.value += caracter;
    }
  });
});

// Retroceso
document.getElementById('retroceso').addEventListener('click', function () {
  if (inputActivo && inputActivo.value.length > 0) {
    inputActivo.value = inputActivo.value.slice(0, -1);
  }
});

// Validación del formulario
document.getElementById('registrarse').addEventListener('click', function (event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();
  const confirmar = document.getElementById('confirmarContrasena').value.trim();

  if (!nombre || !correo || !contrasena || !confirmar) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (contrasena !== confirmar) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!patronCorreo.test(correo)) {
    alert("El correo electrónico no tiene un formato válido.");
    return;
  }

  alert(`¡Registro exitoso! Bienvenido/a, ${nombre}`);
});
