function toggleSelect(selectedIndex) {
    // Deshabilita todos los selects
    for (var i = 1; i <= 5; i++) {
        var checkbox = document.getElementById('opcion' + i);
        var select = document.getElementById('opcionSelect' + i);

        if (i === selectedIndex) {
            // Si el checkbox seleccionado está marcado, habilita el select
            select.disabled = !checkbox.checked;
        } else {
            // Deshabilita todos los otros selects y desmarca los otros checkboxes
            select.disabled = true;
            checkbox.checked = false;
            select.selectedIndex = 0; // Limpia el select
        }
    }
}
