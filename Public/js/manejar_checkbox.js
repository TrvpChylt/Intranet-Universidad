function manejarCheckbox(checkbox) {
    console.log("Checkbox clicked:", checkbox.id); // Añadir un console.log para verificar

    // Selección única de los checkboxes
    var checkboxesOpcion = document.getElementsByName('opcion');
    checkboxesOpcion.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });

    // Manejo de checkboxes con nombre 'opcionesTemp'
    var checkboxesOtraOpcion = document.getElementsByName('opcionesTemp');
    checkboxesOtraOpcion.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });

    // Mostrar u ocultar opciones adicionales
    var opciones = document.getElementById("opcionesAdicionales");
    if (checkbox.id === "mostrarOpciones" && checkbox.checked) {
        opciones.style.display = "block";
    } else if (checkbox.id === "mostrarOpciones" && !checkbox.checked) {
        opciones.style.display = "none";
    }

    // Mostrar u ocultar el textarea cuando se selecciona "comparecencia"
    var textareaContainer = document.getElementById("textareaContainer");
    if (checkbox.id === "comparecencia" && checkbox.checked) {
        textareaContainer.style.display = "block";
    } else if (checkbox.id === "comparecencia" && !checkbox.checked) {
        textareaContainer.style.display = "none";
    }
}
