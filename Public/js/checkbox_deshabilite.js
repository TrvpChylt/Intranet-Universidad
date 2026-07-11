        // Obtener referencias a los elementos
        const disableCheck = document.getElementById('disable');
        const enableCheck = document.getElementById('enable');
        const extraEnableCheck = document.getElementById('extra');
        const selects = document.querySelectorAll('select');
        const textarea = document.getElementById('textarea');

        // Función para deshabilitar selects y textarea
        function disableElements() {
            selects.forEach(select => select.disabled = true);
            textarea.disabled = true;
        }

        // Función para habilitar selects y textarea
        function enableElements() {
            selects.forEach(select => select.disabled = false);
            textarea.disabled = false;
        }

        // Guardar el estado del checkbox en localStorage
        disableCheck.addEventListener('change', function() {
            if (disableCheck.checked) {
                disableElements();
                enableCheck.checked = false; // Desmarcar los checkboxes de habilitar
                extraEnableCheck.checked = false;
                localStorage.setItem('disableCheck', 'true');
            } else {
                enableElements();
                localStorage.setItem('disableCheck', 'false');
            }
        });

        enableCheck.addEventListener('change', function() {
            if (enableCheck.checked) {
                enableElements();
                disableCheck.checked = false; // Desmarcar el checkbox de deshabilitar
                extraEnableCheck.checked = false;
                localStorage.setItem('disableCheck', 'false');
            } else {
                disableElements();
                localStorage.setItem('disableCheck', 'true');
            }
        });

        extraEnableCheck.addEventListener('change', function() {
            if (extraEnableCheck.checked) {
                enableElements();
                disableCheck.checked = false; // Desmarcar el checkbox de deshabilitar
                enableCheck.checked = false;
                localStorage.setItem('disableCheck', 'false');
            } else {
                disableElements();
                localStorage.setItem('disableCheck', 'true');
            }
        });

        // Verificar el estado del checkbox al cargar la página
        window.addEventListener('load', function() {
            if (localStorage.getItem('disableCheck') === 'true') {
                disableCheck.checked = true;
                disableElements();
            } else {
                disableCheck.checked = false;
                enableElements();
            }
        });