const checkbox = document.getElementById('menu-toggle');
const overlay = document.querySelector('.overlay');

// Cerrar el menú al hacer clic en el overlay
overlay.addEventListener('click', () => {
  checkbox.checked = false;
});