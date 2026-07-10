  
   // Obtenemos el elemento del modal  
   const modal6 = document.querySelector('.container-modal6',);  
   const modalBtn6 = document.querySelector('#btn-modal6');  
 
   // Agregamos el evento de clic en el contenedor del modal  
   modal6.addEventListener('click', (e) => {  
     // Si el clic es en el contenedor del modal y no en el contenido, cerramos el modal  
     if (e.target === modal6) {  
       modalBtn6.checked = false;  
     }  
   });
  // Obtenemos el elemento del modal  
  const modal5 = document.querySelector('.container-modal5');  
  const modalBtn5 = document.querySelector('#btn-modal5');  
  const video = document.getElementById('video-servicio'); // Agregar referencia al video 
  
  // Agregar el evento de clic en el contenedor del modal  
  modal5.addEventListener('click', (e) => {  
      // Si el clic es en el contenedor del modal y no en el contenido, cerramos el modal  
      if (e.target === modal5) {  
          modalBtn5.checked = false; // Cierra el modal  
          video.pause(); // Para el video  
          video.currentTime = 0; // Reinicia el tiempo del video  
      }  
  });  

  
  // Escuchar el evento de cambio en el checkbox (ya está incluido en el código anterior)  
  modalBtn5.addEventListener('change', function() {  
      if (!this.checked) {  
          video.pause(); // Para el video  
          video.currentTime = 0; // Reinicia el tiempo del video  
      }  
  });
  
  // Obtenemos el elemento del modal  
  const modal4 = document.querySelector('.container-modal4',);  
  const modalBtn4 = document.querySelector('#btn-modal4');  

  // Agregamos el evento de clic en el contenedor del modal  
  modal4.addEventListener('click', (e) => {  
    // Si el clic es en el contenedor del modal y no en el contenido, cerramos el modal  
    if (e.target === modal4) {  
      modalBtn4.checked = false;  
    }  
  });  

    // Obtenemos el elemento del modal  
    const modal3 = document.querySelector('.container-modal3',);  
    const modalBtn3 = document.querySelector('#btn-modal3');  
  
    // Agregamos el evento de clic en el contenedor del modal  
    modal3.addEventListener('click', (e) => {  
      // Si el clic es en el contenedor del modal y no en el contenido, cerramos el modal  
      if (e.target === modal3) {  
        modalBtn3.checked = false;  
      }  
    });  
  
    // Obtenemos el elemento del modal  
    const modal2 = document.querySelector('.container-modal2',);  
    const modalBtn2 = document.querySelector('#btn-modal2');  
  
    // Agregamos el evento de clic en el contenedor del modal  
    modal2.addEventListener('click', (e) => {  
      // Si el clic es en el contenedor del modal y no en el contenido, cerramos el modal  
      if (e.target === modal2) {  
        modalBtn2.checked = false;  
      }  
    });  
    
    // Obtenemos el elemento del modal  
    const modal = document.querySelector('.container-modal',);  
    const modalBtn = document.querySelector('#btn-modal');  
  
    // Agregamos el evento de clic en el contenedor del modal  
    modal.addEventListener('click', (e) => {  
      // Si el clic es en el contenedor del modal y no en el contenido, cerramos el modal  
      if (e.target === modal) {  
        modalBtn.checked = false;  
      }  
    });  
  
    
  

  
