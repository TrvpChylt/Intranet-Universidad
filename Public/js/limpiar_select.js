// Obtener referencias a los dos elementos select específicos
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

// Añadir un evento 'change' a cada select específico
select1.addEventListener('change', function() {
    // Cuando se selecciona una opción en select1, limpiar y cerrar select2
    select2.selectedIndex = 0; // Restablecer a la opción predeterminada
});

select2.addEventListener('change', function() {
    // Cuando se selecciona una opción en select2, limpiar y cerrar select1
    select1.selectedIndex = 0; // Restablecer a la opción predeterminada
});