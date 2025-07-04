// Mostrar/Ocultar contraseña

document.getElementById('mostrar-contrasena').addEventListener('click', function () {

    let contrasena = document.getElementById('contrasena');

    let confirmar = document.getElementById('confirmarContrasena');
 
    if (contrasena.type === 'password' && confirmar.type === 'password') {

        contrasena.type = 'text';

        confirmar.type = 'text';

        this.textContent = 'Ocultar contraseña';

    } else {

        contrasena.type = 'password';

        confirmar.type = 'password';

        this.textContent = 'Mostrar contraseña';

    }

});
 
// Guardar el input activo (último input donde se hizo clic)

let inputActivo = null;

document.querySelectorAll('input').forEach(input => {

    input.addEventListener('focus', function () {

        inputActivo = this;

    });

});
 
// Teclado virtual

let teclas = document.querySelectorAll('.key');

teclas.forEach(tecla => {

    tecla.addEventListener('click', function () {

        if (inputActivo) {

            let caracter = this.getAttribute('data-char');

            inputActivo.value += caracter;

        }

    });

});
 
// Retroceso del teclado virtual

document.getElementById('retroceso').addEventListener('click', function () {

    if (inputActivo && inputActivo.value.length > 0) {

        inputActivo.value = inputActivo.value.slice(0, -1);

    }

});
 
// Validación del formulario al hacer clic en "Registrarse"

document.getElementById('registrarse').addEventListener('click', function (event) {

    event.preventDefault();
 
    let nombre = document.getElementById('nombre').value;

    let correo = document.getElementById('correo').value;

    let contrasena = document.getElementById('contrasena').value;

    let confirmar = document.getElementById('confirmarContrasena').value;
 
    if (!nombre || !correo || !contrasena || !confirmar) {

        alert("Por favor, completa todos los campos.");

        return;

    }
 
    if (contrasena !== confirmar) {

        alert("Las contraseñas no coinciden.");

        return;

    }
 
    let patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!patronCorreo.test(correo)) {

        alert("El correo electrónico no tiene un formato válido.");

        return;

    }
 
    alert(`¡Registro exitoso! Bienvenido/a, ${nombre}`);

});

 