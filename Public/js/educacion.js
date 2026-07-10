let gradoSeleccionado = null; // Variable global

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

function validarGradoInstruccion(event) {
    const checkboxes = [...document.querySelectorAll('input[type="checkbox"][name="opcion"]')];
    const seleccionado = checkboxes.find(cb => cb.checked);

    checkboxes.forEach(cb => cb.removeAttribute('required'));

    if (!seleccionado) {
        checkboxes.forEach(cb => cb.setAttribute('required', 'required'));
        checkboxes[0].reportValidity();
        event.preventDefault();
    } else {
        seleccionado.setAttribute('required', 'required');
    }
}

function validarInstituciones(event) {
    const selectPriv = document.getElementById('select1');
    const selectPub = document.getElementById('select2');

    const priv = selectPriv.value.trim();
    const pub = selectPub.value.trim();

    selectPriv.removeAttribute('required');
    selectPub.removeAttribute('required');

    if (!priv && !pub) {
        selectPriv.setAttribute('required', 'required');
        selectPub.setAttribute('required', 'required');
        selectPriv.reportValidity();
        event.preventDefault();
    } else {
        (priv ? selectPriv : selectPub).setAttribute('required', 'required');
    }
}

function seleccionarUnico(checkbox) {
    // Desmarcar todos los demás
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="opcion"]');
    checkboxes.forEach(cb => {
        if (cb !== checkbox) cb.checked = false;
    });

    gradoSeleccionado = checkbox.id;

    // Elementos a controlar
    const selectCarrera = document.getElementById('selectCarrera');
    const inputEspecialidad = document.querySelector('input[name="especialidad"]');
    const inputTitulo = document.querySelector('input[name="titulo_obtenido"]');

    // ✅ Limpiar el valor del select al cambiar de grado
    selectCarrera.value = '';

    // IDs que deshabilitan el select
    const nivelesBasicos = ['PRIMARIA', 'SECUNDARIA', 'TÉC'];

    // Deshabilitar select si corresponde
    selectCarrera.disabled = nivelesBasicos.includes(checkbox.id) && checkbox.checked;

    // Si es PRIMARIA, deshabilitar campos de texto
    if (checkbox.id === 'PRIMARIA' && checkbox.checked) {
        inputEspecialidad.disabled = true;
        inputTitulo.disabled = true;
        inputEspecialidad.value = '';
        inputTitulo.value = '';
    } else {
        inputEspecialidad.disabled = false;
        inputTitulo.disabled = false;
    }

    // ✅ Reconstruir título después de limpiar carrera
    construirTituloObtenido();
}

// Prefijos para grados superiores
const prefijosTitulo = {
    'LICENCIATURA': 'Licenciado(a) En',
    'TSU': 'Técnico Superior Universitario En',
    'ESPECIALIZACIÓN': 'Especialista En',
    'MAESTRÍA': 'Maestría En',
    'DOCTORADO': 'Doctor(a) En'
};

function construirTituloObtenido() {
    const carreraSelect = document.getElementById('selectCarrera');
    const inputEspecialidad = document.querySelector('input[name="especialidad"]');
    const inputTitulo = document.querySelector('input[name="titulo_obtenido"]');

    // PARA MOSTRAR LOS VALORES POR CONSOLA
    // console.log('Grado:', gradoSeleccionado);
    // console.log('Especialidad:', document.querySelector('input[name="especialidad"]').value);
    // console.log('Carrera:', document.getElementById('selectCarrera').value);

    const carrera = carreraSelect.value.trim();
    const especialidad = inputEspecialidad.value.trim();

    // Validar que haya grado seleccionado
    if (!gradoSeleccionado || typeof gradoSeleccionado !== 'string') {
        inputTitulo.value = '';
        inputEspecialidad.placeholder = '';
        return;
    }

    // Mostrar placeholder si aplica
    const requiereEspecialidad = ['TÉC', 'SECUNDARIA'];
    if (requiereEspecialidad.includes(gradoSeleccionado)) {
        inputEspecialidad.placeholder = '¡ Recuerde ingresar la mención o especialidad !';

        // Validación obligatoria
        if (especialidad === '') {
            inputTitulo.value = '';
            return;
        }

        const prefijo = gradoSeleccionado === 'TÉC' ? 'Técnico Medio En' : 'Bachiller en';
        inputTitulo.value = `${prefijo} ${especialidad}`;
        return;
    } else {
        inputEspecialidad.placeholder = '';
    }

    // Construcción para grados superiores
    if (prefijosTitulo.hasOwnProperty(gradoSeleccionado)) {
        if (carrera === '') {
            inputTitulo.value = '';
            return;
        }

        let titulo = `${prefijosTitulo[gradoSeleccionado]} ${carrera}`;
        if (especialidad !== '') {
            titulo += ` ${especialidad}`;
        }

        inputTitulo.value = titulo;
    } else {
        inputTitulo.value = '';
    }
}
