const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
let currentDate = new Date(); // La fecha actual
let currentMonth = currentDate.getMonth(); // El mes actual (0-11)
let currentYear = currentDate.getFullYear(); // El año actual

const currentMonthDisplay = document.getElementById('currentMonthDisplay');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const goToMonthDetailsBtn = document.getElementById('goToMonthDetailsBtn');

function renderCalendar() {
    // Solo actualizamos el texto del mes y el año
    currentMonthDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;
}

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

// Lógica para el botón "Ver Detalles del Mes Seleccionado"
goToMonthDetailsBtn.addEventListener('click', function() {
    const mesSeleccionado = monthNames[currentMonth];
    const numeroMes = currentMonth + 1; // Los meses son indexados desde 0, así que sumamos 1
    const añoSeleccionado = currentYear;

    // Pasa el nombre del mes, el número del mes y el año como parámetros URL
    window.location.href = `calendario/Cumple_Mes.php?mes=${encodeURIComponent(mesSeleccionado)}&numeroMes=${numeroMes}&año=${añoSeleccionado}`;
});

// Renderizar el mes al cargar la página
renderCalendar();