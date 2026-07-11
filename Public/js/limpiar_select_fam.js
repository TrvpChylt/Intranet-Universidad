// Obtener referencias a los dos elementos select específicos
const opcionSelect1 = document.getElementById('opcionSelect1');
const opcionSelect2 = document.getElementById('opcionSelect2');
const opcionSelect3 = document.getElementById('opcionSelect3');
const opcionSelect4 = document.getElementById('opcionSelect4');
const opcionSelect5 = document.getElementById('opcionSelect5');

// Añadir un evento 'change' a cada select específico
opcionSelect1.addEventListener('change', function() {
    // Cuando se selecciona una opción en select1, limpiar y cerrar select2
    opcionSelect1.selectedIndex = 0; // Restablecer a la opción predeterminada
});

opcionSelect2.addEventListener('change', function() {
    // Cuando se selecciona una opción en select2, limpiar y cerrar select1
    opcionSelect2.selectedIndex = 0; // Restablecer a la opción predeterminada
});

opcionSelect3.addEventListener('change', function() {
    // Cuando se selecciona una opción en select2, limpiar y cerrar select1
    opcionSelect3.selectedIndex = 0; // Restablecer a la opción predeterminada
});

opcionSelect4.addEventListener('change', function() {
    // Cuando se selecciona una opción en select2, limpiar y cerrar select1
    opcionSelect4.selectedIndex = 0; // Restablecer a la opción predeterminada
});

opcionSelect5.addEventListener('change', function() {
    // Cuando se selecciona una opción en select2, limpiar y cerrar select1
    opcionSelect5.selectedIndex = 0; // Restablecer a la opción predeterminada
});