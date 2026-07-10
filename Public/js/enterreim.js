
    const form = document.querySelector('form');  
    form.addEventListener('keypress', function(event) {  
        if (event.key === 'Enter') {  
            event.preventDefault(); // Evitar que el formulario se envíe inmediatamente  
            document.querySelector('.btnP').click(); // Simular el clic en el botón  
        }  
    });  
