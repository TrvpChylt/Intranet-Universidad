function updateInfo() {
    var select = document.getElementById("motivo_permiso");
    var info = document.getElementById("info");

    // Accede a la opción que está seleccionada actualmente.
    var selectedOption = select.options[select.selectedIndex];
    // Obtiene el valor del atributo (data-info) de la opción seleccionada.
    info.textContent = selectedOption.getAttribute("data-info");
    // [select.options] Devuelve una colección de todas las opciones [<option>] dentro del elemento [<select>].
    // [select.selectedIndex] Proporciona el índice de la opción actualmente seleccionada.
}