function actualizarFecha() {
    const dateMes = document.getElementsByName('dateMes')[0].value;
    const dateAño = document.getElementsByName('dateAño')[0].value;

    const diasMaximos = new Date(dateAño, dateMes, 0).getDate();
    const dateDiaSelect = document.getElementsByName('dateDia')[0];

    dateDiaSelect.innerHTML = '';
    
    const fechaHoy = new Date();
    const mesActual = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
    const añoActual = fechaHoy.getFullYear().toString();
    
    let inicio = 1;

    if (dateMes === mesActual && dateAño === añoActual) {
        inicio = fechaHoy.getDate();
    }

    for (let i = inicio; i <= diasMaximos; i++) {
        const valor = i.toString().padStart(2, '0');
        const option = document.createElement('option');
        option.value = valor;
        option.text = valor;
        if (dateMes === mesActual && dateAño === añoActual && i === fechaHoy.getDate()) {
            option.selected = true;
        }
        dateDiaSelect.appendChild(option);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const fechaHoy = new Date();
    document.getElementsByName('dateMes')[0].value = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
    document.getElementsByName('dateAño')[0].value = fechaHoy.getFullYear().toString();
    actualizarFecha();
});

// function actualizarFechaContingencia(validarDiasActuales = true) {
//     const dateMes = document.getElementsByName('dateMes')[0].value;
//     const dateAño = document.getElementsByName('dateAño')[0].value;

//     const diasMaximos = new Date(dateAño, dateMes, 0).getDate();
//     const dateDiaSelect = document.getElementsByName('dateDia')[0];

//     dateDiaSelect.innerHTML = ''; // Limpiar el contenido del selector de días
    
//     const fechaHoy = new Date();
//     const mesActual = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
//     const añoActual = fechaHoy.getFullYear().toString();
    
//     let inicio = 1;

//     // Validar si se debe mostrar solo desde el día actual
//     if (validarDiasActuales && dateMes === mesActual && dateAño === añoActual) {
//         inicio = fechaHoy.getDate();
//     }

//     // Llenar el selector de días
//     for (let i = inicio; i <= diasMaximos; i++) {
//         const valor = i.toString().padStart(2, '0');
//         const option = document.createElement('option');
//         option.value = valor;
//         option.text = valor;
//         dateDiaSelect.appendChild(option);
//     }
// }

// // Evento para cargar la fecha actual al cargar la página
// document.addEventListener('DOMContentLoaded', (event) => {
//     const fechaHoy = new Date();
//     document.getElementsByName('dateMes')[0].value = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
//     document.getElementsByName('dateAño')[0].value = fechaHoy.getFullYear().toString();
//     actualizarFecha(false); // Llamar a la función sin validar días actuales
// });