function manejarCheckbox(checkbox) {
    console.log("Checkbox clicked:", checkbox.id); // Añadir un console.log para verificar

    // Selección única de los checkboxes
    var checkboxesOpcion = document.getElementsByName('opcion');
    checkboxesOpcion.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });

    // Manejo de checkboxes con nombre 'opcionesTemp'
    var checkboxesOtraOpcion = document.getElementsByName('opcionesTemp');
    checkboxesOtraOpcion.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });

    // Mostrar u ocultar opciones adicionales
    var opciones = document.getElementById("opcionesAdicionales");
    if (checkbox.id === "mostrarOpciones" && checkbox.checked) {
        opciones.style.display = "block";
    } else {
        opciones.style.display = "none";
    }
    
    // SE DESABILITO POR ORDENES DE GUSTAVO LEON 24/02/20205 YA QUE NECESITAN AGREGAR UN MOTIVO
    // Mostrar u ocultar el textarea cuando se selecciona "comparecenciaTextarea" 
    // var textareaContainer = document.getElementById("textareaContainer");
    // var textarea = document.getElementById("comparecenciaTextarea");
    
    // if (checkbox.id === "comparecencia" && checkbox.checked) {
    //     textareaContainer.style.display = "block";
    // } else {
    //     textareaContainer.style.display = "none";
    //     textarea.value = ""; // Limpiar el contenido del textarea
    // }
}

// ****************************************************************************************************

// 🚦 Obtiene el permiso seleccionado
function obtenerPermisoSeleccionado() {
    const seleccionadoCheckboxOrRadio = document.querySelector('input[name="opcion"]:checked, input[name="opcionesTemp"]:checked');
    const valorRadio = seleccionadoCheckboxOrRadio ? seleccionadoCheckboxOrRadio.value.trim() : null;

    const select = document.getElementById('motivo_permiso');
    const valorSelect = select && select.value ? select.value.trim() : null;

    return valorRadio || valorSelect || null;
}

// 🧠 Verifica si el permiso es hábil según el input oculto
function esPermisoHabil(nombrePermiso) {
    if (nombrePermiso && nombrePermiso.toLowerCase().includes("fallecimiento")) return true;

    const el = document.getElementById("permisoHabiles");
    if (!el) return false;

    try {
        const lista = JSON.parse(el.value || '[]').map(p => p.trim().toLowerCase());
        return lista.includes(nombrePermiso.trim().toLowerCase());
    } catch (e) {
        console.error("permisoHabiles tiene un formato inválido:", e);
        return false;
    }
}

const permisosSinCalculoAutomatico = [
    'ENFERMEDAD O ACCIDENTE GRAVE DE UN FAMILIAR (10 DÍAS HÁBILES)',
    'ENFERMEDAD O ACCIDENTE GRAVE DE FAMILIAR (HASTA 15 DÍAS HÁBILES)',
    'ZONA METROPOLITANA DE CARACAS (8 DÍAS HÁBILES)',
    'ENFERMEDAD O ACCIDENTE GRAVE (ASCENDIENTES, DESCENDIENTES A CARGO O CÓNYUGE: 15 DÍAS HÁBILES)',
    'ENFERMEDAD O ACCIDENTE GRAVE DE UN FAMILIAR (5 DÍAS HÁBILES DENTRO LA MISMA ENTIDAD FEDERAL)',
    'DILIGENCIA DE INTERÉS PERSONAL (3 DÍAS HÁBILES EN UN AÑO NO ACOMULABLE)'
];

function esPermisoCalculable(nombrePermiso) {
    return !permisosSinCalculoAutomatico.includes(nombrePermiso);
}

// 🧱 Constructor de fechas compatible con Chrome
function construirFechaDesdeInputs(fechaStr, horaStr) {
    const [yyyy, mm, dd] = fechaStr.split('-').map(Number);
    const [hh, min] = horaStr.split(':').map(Number);
    return new Date(yyyy, mm - 1, dd, hh, min);
}

// 📆 Calcula la fecha hasta, sumando solo días hábiles
function calcularFechaHasta(fechaInicioStr, diasHabiles) {
    // 1. Crea el objeto Date de forma robusta
    // Añadir 'T00:00:00' es crucial para evitar problemas de zona horaria y asegurar el inicio del día.
    const fechaActual = new Date(`${fechaInicioStr}T00:00:00`);

    // Valida si la fecha de inicio es válida
    if (isNaN(fechaActual.getTime())) {
        console.error("Fecha de inicio inválida en calcularFechaHasta:", fechaInicioStr);
        return '';
    }

    let diasHabilesContados = 0;

    // Si se piden 0 días, simplemente devolvemos la fecha de inicio (formateada)
    if (diasHabiles === 0) {
        const finalYYYY = String(fechaActual.getFullYear());
        const finalMM = String(fechaActual.getMonth() + 1).padStart(2, '0');
        const finalDD = String(fechaActual.getDate()).padStart(2, '0');
        return `${finalYYYY}-${finalMM}-${finalDD}`;
    }

    // 2. Ajusta la fecha inicial para que sea un día hábil, si no lo es
    while (fechaActual.getDay() === 0 || fechaActual.getDay() === 6) { // 0 = Domingo, 6 = Sábado
        fechaActual.setDate(fechaActual.getDate() + 1);
    }

    // 3. Cuenta el día de inicio como el primer día hábil
    // Esto solo ocurre si la fecha inicial (después del ajuste si fue fin de semana) es hábil.
    // Como ya nos aseguramos que no sea fin de semana, este es el día 1.
    diasHabilesContados = 1;

    // 4. Itera hasta que se hayan contado todos los días hábiles necesarios
    // Si solo se pidió 1 día hábil, este bucle no se ejecutará.
    while (diasHabilesContados < diasHabiles) {
        fechaActual.setDate(fechaActual.getDate() + 1); // Avanza al siguiente día

        // Verifica si el día es hábil (no es domingo ni sábado)
        const diaDeLaSemana = fechaActual.getDay();
        if (diaDeLaSemana !== 0 && diaDeLaSemana !== 6) {
            diasHabilesContados++;
        }
    }

    // 5. Formatea la fecha final a YYYY-MM-DD
    const finalYYYY = String(fechaActual.getFullYear());
    const finalMM = String(fechaActual.getMonth() + 1).padStart(2, '0'); // getMonth() es 0-index, sumamos 1
    const finalDD = String(fechaActual.getDate()).padStart(2, '0');

    return `${finalYYYY}-${finalMM}-${finalDD}`;
}

// 🔧 Calcula duración por tipo de funcionario
function calcularDuracionPorTipo(desde, hasta, tipoFunc) {
    const msPorHora = 1000 * 60 * 60;
    const diferenciaMs = hasta - desde;
    if (diferenciaMs <= 0) return { error: 'Rango de fechas/hora no válido.' };

    const totalHoras = diferenciaMs / msPorHora;
    const diasCompletos = Math.floor(totalHoras / 24);
    const horasRestantes = totalHoras % 24;
    const horasNum = parseFloat(horasRestantes);

    let dias = diasCompletos;
    let horas = 0;

    switch (tipoFunc) {
        case "1":
        case "2":
            if (horasNum >= 8) {
                dias += 1;
                horas = 0; // Día completo sumado, no mostrar horas
            } else {
                horas = horasNum.toFixed(2);
            }
            break;

        case "0":
            if (horasNum >= 12 && horasNum <= 24) {
                dias += 1;
                horas = 0; // Día completo para tipo "0"
            } else {
                horas = horasNum.toFixed(2);
            }
            break;

        default:
            return { error: "Tipo de funcionario no reconocido." };
    }

    console.log("Resultado calculado:", { dias, horas });
    return { dias, horas };
}

// Handler global para gestionarlo correctamente
let fechaDesdeHandler = null;

function enviarPermiso(valorPermiso) {
    fetch('../../rrhh/permisos/consultar_permiso.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'permiso=' + encodeURIComponent(valorPermiso)
    })
    .then(res => res.json())
    .then(data => {
        const diasDelPermiso = data.dias;
        const tipoDiasBD = (data.tipo_dias || '').trim().toLowerCase();
        const diasNumericos = parseInt(diasDelPermiso);

        const fechaDesde = document.getElementById('fechaDesde');
        const fechaHasta = document.getElementById('fechaHasta');
        const horaDesde = document.getElementById('horaDesde');
        const horaHasta = document.getElementById('horaHasta');

        fechaDesde.value = '';
        fechaHasta.value = '';
        horaDesde.value = '';
        horaHasta.value = '';
        limpiarResultado();

        if (fechaDesdeHandler) {
            fechaDesde.removeEventListener('input', fechaDesdeHandler);
            fechaDesdeHandler = null;
        }

        const esExcluido = permisosSinCalculoAutomatico.includes(valorPermiso);
        const esCalculable = esPermisoCalculable(valorPermiso);

        const tratarComoContinuo = tipoDiasBD === 'continuo' || esExcluido;
        window.tipoPermisoActual = tratarComoContinuo ? 'continuo' : 'hábiles';

        if (isNaN(diasNumericos) || !esCalculable) {
            fechaDesde.readOnly = false;
            fechaHasta.readOnly = false;
            horaDesde.readOnly = false;
            horaHasta.readOnly = false;
            return;
        }

        fechaDesde.readOnly = false;
        fechaHasta.readOnly = true;
        horaDesde.readOnly = false;
        horaHasta.readOnly = false;

        fechaDesdeHandler = function () {
            if (fechaDesde.value) {
                const fechaCalculada = calcularFechaHasta(fechaDesde.value, diasNumericos);
                fechaHasta.value = fechaCalculada;
                calcularPermisoDesdeInputs();
            }
        };

        fechaDesde.addEventListener('input', fechaDesdeHandler);

        if (fechaDesde.value) {
            fechaDesdeHandler();
        }
    })
    .catch(err => console.error('Error al consultar el permiso:', err));
}

// 🎯 Calcula desde inputs
function calcularPermisoDesdeInputs() {
    const desdeFecha = document.getElementById('fechaDesde').value;
    const hastaFecha = document.getElementById('fechaHasta').value;
    const tipoFunc = document.getElementById('tipoPersonal').value;
    const horaDesdeInput = document.getElementById('horaDesde');
    const horaHastaInput = document.getElementById('horaHasta');
    const permisoSeleccionado = obtenerPermisoSeleccionado();
    const infoDias = document.getElementById('infoDias');
    const infoHoras = document.getElementById('infoHoras');
    const resumen = document.getElementById('resumenPermiso');
    const inputHoras = document.getElementById('duracionHoras');

    if (!desdeFecha || !hastaFecha || !tipoFunc || !permisoSeleccionado) {
        limpiarResultado();
        return;
    }

    const esHabilReal = esPermisoHabil(permisoSeleccionado);
    const calcularAutomatico = esPermisoCalculable(permisoSeleccionado);

    if (!calcularAutomatico) {
        horaDesdeInput.readOnly = false;
        horaHastaInput.readOnly = false;
    } else {
        const horasAsignadas = horaDesdeInput.dataset.asignado === 'true';

        if (esHabilReal && !horasAsignadas) {
            horaDesdeInput.readOnly = true;
            horaHastaInput.readOnly = true;

            if (tipoFunc === "1" || tipoFunc === "2") {
                horaDesdeInput.value = "08:30";
                horaHastaInput.value = "16:30";
            } else if (tipoFunc === "0") {
                horaDesdeInput.value = "07:00";
                horaHastaInput.value = "19:00";
            }

            horaDesdeInput.dataset.asignado = "true";
            setTimeout(calcularPermisoDesdeInputs, 0);
            return;
        }
    }

    const desdeHora = horaDesdeInput.value;
    const hastaHora = horaHastaInput.value;

    if (!desdeHora || !hastaHora) {
        limpiarResultado();
        return;
    }

    const desde = construirFechaDesdeInputs(desdeFecha, desdeHora);
    const hasta = construirFechaDesdeInputs(hastaFecha, hastaHora);

    if (!desde || !hasta || isNaN(desde) || isNaN(hasta)) {
        mostrarError('Fechas u horas incompletas o inválidas.');
        limpiarResultado();
        return;
    }

    if (esHabilReal) {
        const diaInicio = desde.getDay();
        if (diaInicio === 0 || diaInicio === 6) {
            mostrarToast("⚠️ La fecha de inicio no puede ser sábado ni domingo para permisos hábiles.");
            limpiarResultado();
            return;
        }
    }

    const resultado = calcularDuracionPorTipo(desde, hasta, tipoFunc);
    if (resultado.error || resultado.dias === undefined) {
        mostrarError(resultado.error || 'Error calculando duración.');
        limpiarResultado();
        return;
    }

    const { dias, horas } = resultado;

    const contarComoContinuo = window.tipoPermisoActual === 'continuo';
    const tipoTexto = contarComoContinuo ? 'Días continuos' : 'Días hábiles';

    // Mostrar días visuales (solo informativo, no usado en resumen)
    let contadorDias = 0;
    const fDesde = new Date(desde.toDateString());
    const fHasta = new Date(hasta.toDateString());

    for (let d = new Date(fDesde); d <= fHasta; d.setDate(d.getDate() + 1)) {
        const dia = d.getDay();
        if (contarComoContinuo || (dia !== 0 && dia !== 6)) contadorDias++;
    }

    infoDias.textContent = `${tipoTexto}: ${contadorDias}`;
    infoHoras.textContent = horas > 0 ? `Horas: ${horas}` : '';

    // Mostrar resumen basado en cálculo real, no en contador visual
    if (dias === 0 && horas > 0) {
        resumen.textContent = `Duración de Permiso: ${Math.floor(horas)} hora(s)`;
        inputHoras.value = Math.floor(horas);
        inputHoras.disabled = false;
    } else {
        resumen.textContent = dias === 0 && horas > 0
            ? `Duración de Permiso: ${Math.floor(horas)} hora(s)`
            : `Duración de Permiso: ${dias} ${contarComoContinuo ? 'Día(s) Continuo(s)' : 'Día(s) Hábil(es)'}${horas > 0 ? ` y ${Math.floor(horas)} hora(s)` : ''}`;
        inputHoras.value = '';
        inputHoras.disabled = true;
    }

    horaDesdeInput.dataset.asignado = "";
}

// 🧽 Limpieza
function limpiarResultado() {
    document.getElementById("infoDias").textContent = '';
    document.getElementById("infoHoras").textContent = '';
    document.getElementById("resumenPermiso").textContent = '';
    document.getElementById("duracionHoras").value = '';
}

function mostrarError(mensaje) {
    limpiarResultado();

    // Mostrar en el resumen de forma fija
    const resumen = document.getElementById("resumenPermiso");
    resumen.textContent = mensaje;
    resumen.style.color = "red";
    resumen.style.fontWeight = "bold";

    // Mostrar como toast flotante
    mostrarToast("⚠️ " + mensaje);
}

function mostrarToast(mensaje) {
    let toast = document.getElementById('mensajeFlotante');

    // Si no existe el contenedor aún, lo creamos dinámicamente
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'mensajeFlotante';
        toast.style.position = 'fixed';
        toast.style.top = '40px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#ff4d4d';
        toast.style.color = 'black';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '6px';
        toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        toast.style.fontSize = '13px'; // o el tamaño que prefieras
        toast.style.fontWeight = 'bold';
        toast.style.zIndex = '9999';
        toast.style.transition = 'opacity 0.5s ease-in-out';
        toast.style.opacity = '0';
        toast.style.pointerEvents = 'none'; // evita clics

        document.body.appendChild(toast);
    }

    toast.textContent = mensaje;
    toast.style.opacity = '1';
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 500);
    }, 3000);
}

// 🧲 Listeners
document.querySelectorAll('input[name="opcion"], input[name="opcionesTemp"]').forEach(input => {
    input.addEventListener('change', () => {
        if (input.checked) enviarPermiso(input.value);
    });
});

const selectMotivo = document.getElementById('motivo_permiso');
if (selectMotivo) {
    selectMotivo.addEventListener('change', () => {
        if (selectMotivo.value) {
            enviarPermiso(selectMotivo.value);
        }
    });
}

['fechaDesde', 'horaDesde', 'fechaHasta', 'horaHasta', 'tipoPersonal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', calcularPermisoDesdeInputs);
});