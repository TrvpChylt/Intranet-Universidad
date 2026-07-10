// Función para guardar la página de inicio de la sección seleccionada
function saveHomePage(url) {
    localStorage.setItem('homePage', url);
}

// Función para ir a la página de inicio de la sección seleccionada dentro del iframe
function goHome() {
    const homePage = localStorage.getItem('homePage');
    if (homePage) {
        document.getElementById('contFrame').src = homePage;
    } else {
        console.warn('No se ha definido una página de inicio');
        window.history.back();
    }
}

// Guardar la URL de las páginas de inicio al seleccionar una opción del menú
document.querySelectorAll('.menu .item a').forEach(item => {
    item.addEventListener('click', event => {
        const url = event.target.getAttribute('onclick').match(/'(.*?)'/)[1];
        saveHomePage(url);
        document.getElementById('contFrame').src = url; // Cargar la página seleccionada en el iframe
    });
});

// Configurar el botón para ir a la página de inicio guardada
document.querySelector('.btn-float').addEventListener('click', () => {
    goHome();
});

// Limpiar localStorage y redirigir a la página de inicio por defecto al cerrar la sesión
document.querySelector('a[href="../include/logout.php"]').addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir la acción por defecto del enlace
    localStorage.setItem('homePage', 'func_exp_exped.php'); // Guardar la página de inicio por defecto
    window.location.href = '../include/logout.php'; // Redirigir al cierre de sesión
});


///////////////////////////////////////////////////////////////////////////////////////////////////
// ANTES SE LE AGREGO UNA FUNCION DE VOLVER A LA ULTIMA PAGINA ABIERTA PERO TENIA FALLAS
// function goHome() { 
//     window.history.back();
// }
