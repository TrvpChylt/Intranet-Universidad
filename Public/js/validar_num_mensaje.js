function validarSoloNumeros(event) {
    var codigo = (event.which) ? event.which : event.keyCode;
    if (codigo < 48 || codigo > 57) {
        document.getElementById('mensajeError').style.display = 'block';
    return false;
    } else {
        document.getElementById('mensajeError').style.display = 'none';
    return true;
    }
}