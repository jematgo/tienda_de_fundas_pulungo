document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;

    // Eliminar espacios en blanco y validar el campo nombre
    nombre = nombre.replace(/\s+/g, '');
    if (!/^[A-Za-z]+$/.test(nombre)) {
        alert('Por favor, ingresa solo letras en el campo de nombre.');
        return;
    }

    // Validar el campo email
    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar el campo edad
    if (isNaN(edad) || edad < 18 || edad > 99) {
        alert('Por favor, ingresa una edad válida entre 18 y 99 años.');
        return;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    alert('Formulario enviado con éxito!');
    this.submit();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
