document.getElementById("mostrarOculto").addEventListener("click", function() {
    const divOculto = document.querySelector(".table-oculta");

    // Alternar entre mostrar y ocultar
    if (divOculto.style.display === "none" || divOculto.style.display === "") {
        divOculto.style.display = "block"; // Mostrar contenido
        this.textContent = "OCULTAR"; // Cambiar texto del botón
    } else {
        divOculto.style.display = "none"; // Ocultar contenido
        this.textContent = "MOSTRAR"; // Cambiar texto del botón
    }
});

function manejarCheckbox(checkbox) {
        // console.log("Checkbox clicked:", checkbox.id); // Añadir un console.log para verificar
        // Selección única de los checkboxes
        
        // Manejo de checkboxes con nombre 'terminacion'
        var checkboxesOpcion = document.getElementsByName('terminacion');
        checkboxesOpcion.forEach((item) => {
            if (item !== checkbox) item.checked = false;
        });

        // Manejo de checkboxes con nombre 'tipoFun'
        var checkboxesOtraOpcion = document.getElementsByName('tipoFun');
        checkboxesOtraOpcion.forEach((item) => {
            if (item !== checkbox) item.checked = false;
        });
    }

    // Añade el evento onchange a tus checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
        checkbox.onchange = function() {
            manejarCheckbox(this);
        };
    });