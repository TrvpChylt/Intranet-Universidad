//Esta nueva función revisa el estado de todos los checkboxes al cargar la página. 
//Si un checkbox está marcado, habilita el select correspondiente. @LIUCH

function initializeSelects() {
    for (var i = 1; i <= 5; i++) {
        var checkbox = document.getElementById('opcion' + i);
        var select = document.getElementById('opcionSelect' + i);
        if (checkbox.checked) {
            select.disabled = false;
        } else {
            select.disabled = true;
        }
    }
}

//Esto asegura que la función se ejecute cuando la página se cargue, 
//verificando el estado inicial de los checkboxes y selects. @LIUCH
window.onload = initializeSelects;