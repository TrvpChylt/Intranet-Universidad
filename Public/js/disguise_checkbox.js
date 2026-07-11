function mostrarOpciones() {
    var checkbox = document.getElementById("mostrarOpciones");
    var opciones = document.getElementById("opcionesAdicionales");

    if (checkbox.checked) {
        opciones.style.display = "block";
    } else {
        opciones.style.display = "none";
    }
}