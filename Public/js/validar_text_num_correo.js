function validarEntrada(event) {
    var charCode = event.which || event.keyCode;
    // Permitir letras (mayúsculas y minúsculas) y espacio
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 32) {
        return true;
    }
    return false;
}

function validarSoloNumeros(event) {
    var charCode = event.which || event.keyCode;

    // Permitir solo números (0-9) o la tecla Enter (13)
    if ((charCode >= 48 && charCode <= 57) || charCode === 13) {
        return true; // Permite la tecla
    }
    // Bloquear cualquier otra tecla
    event.preventDefault();
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    var inputCredencial = document.querySelector('input[name="credFuncioanrio"]');

    // Agregar el evento keypress al input
    inputCredencial.addEventListener("keypress", validarSoloNumeros);
});

function validarCorreo() {
    var email = document.getElementById("email").value.trim(); 
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === "") {
        return true; // Retorna true (válido) si no se escribió nada.
    }

    if (regex.test(email)) {
        return true; // Retorna true si el formato es correcto.
    } else {
        // Alerta y retorna false si el formato es incorrecto.
        alert("Correo electrónico no válido. Por favor, ingrese una dirección válida.");
        return false; 
    }
}

function validarCorreoAlt() {
    var email = document.getElementById("email_alt").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        return true; // Retorna true (válido) si no se escribió nada.
    }

    if (regex.test(email)) {
        return true;
    } else {
        // Alerta y retorna false si el formato es incorrecto.
        alert("Correo electrónico alternativo no válido. Por favor, ingrese una dirección válida.");
        return false;
    }
}
