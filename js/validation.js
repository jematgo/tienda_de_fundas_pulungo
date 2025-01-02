document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = document.getElementById('edad').value.trim();

    // Bandera para validación del formulario
    let formularioValido = true;

    // Validar el campo nombre
    nombre = nombre.replace(/\s+/g, '');
    if (nombre === "" || !/^[A-Za-z]+$/.test(nombre)) {
        mostrarError('nombre', 'Por favor, ingresa solo letras en el campo de nombre y asegúrate de que no hay espacios en blanco.');
        formularioValido = false;
    } else {
        quitarError('nombre');
    }

    // Validar el campo apellido
    if (apellido === "" || !/^[A-Za-z]+$/.test(apellido)) {
        mostrarError('apellido', 'Por favor, ingresa solo letras en el campo de apellido.');
        formularioValido = false;
    } else {
        quitarError('apellido');
    }

    // Validar el campo email
    if (!validateEmail(email)) {
        mostrarError('email', 'Por favor, ingresa un correo electrónico válido.');
        formularioValido = false;
    } else {
        quitarError('email');
    }

    // Validar el campo edad
    if (edad === "" || isNaN(edad) || edad < 18 || edad > 99) {
        mostrarError('edad', 'Por favor, ingresa una edad válida entre 18 y 99 años.');
        formularioValido = false;
    } else {
        quitarError('edad');
    }

    // Si todas las validaciones son correctas, enviar el formulario
    if (formularioValido) {
        alert('Formulario enviado con éxito!');
        this.submit();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function mostrarError(campo, mensaje) {
    const input = document.getElementById(campo);
    const errorElemento = document.getElementById(`error${capitalizeFirstLetter(campo)}`);
    input.classList.add('is-invalid');
    errorElemento.textContent = mensaje;
    errorElemento.classList.remove('d-none');
}

function quitarError(campo) {
    const input = document.getElementById(campo);
    const errorElemento = document.getElementById(`error${capitalizeFirstLetter(campo)}`);
    input.classList.remove('is-invalid');
    errorElemento.classList.add('d-none');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Event listeners para quitar el mensaje de error al ingresar un carácter
document.getElementById('nombre').addEventListener('input', function() {
    quitarError('nombre');
});
document.getElementById('apellido').addEventListener('input', function() {
    quitarError('apellido');
});
document.getElementById('email').addEventListener('input', function() {
    quitarError('email');
});
document.getElementById('edad').addEventListener('input', function() {
    quitarError('edad');
});
