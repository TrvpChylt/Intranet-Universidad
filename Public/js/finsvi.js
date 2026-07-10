const btnModal = document.getElementById('btn-modal5');  
const video1 = document.getElementById('video-servicio');  
const video2 = document.getElementById('video-servicio2');  

// Escuchar el evento de cambio en el checkbox  
btnModal.addEventListener('change', function() {  
    if (!this.checked) {  
        // Si el modal está cerrado, reiniciar ambos videos  
        video1.pause(); // Para el primer video  
        video1.currentTime = 0; // Reinicia el tiempo del primer video  
        video2.pause(); // Para el segundo video  
        video2.currentTime = 0; // Reinicia el tiempo del segundo video  
    }  
}); 
