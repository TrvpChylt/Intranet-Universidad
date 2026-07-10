// document.addEventListener("DOMContentLoaded", () => {  
//     const buttons = document.querySelectorAll('.button-carru');  
//     const wrapperHolder = document.querySelector('.wrapper-holder');  
    
//     buttons.forEach((button) => {  
//         button.addEventListener('click', () => {  
//             const target = button.dataset.target; // Obtener el índice del botón presionado  
//             const position = target * -100; // Calcular la posición  
//             wrapperHolder.style.transform = `translateX(${position}%)`; // Desplazar la imagen  
//         });  
//     });  
// });  
// document.addEventListener("DOMContentLoaded", () => {  
//     const buttons = document.querySelectorAll('.button-carru');  
//     const wrapperHolder = document.querySelector('.wrapper-holder');  
//     const totalImages = buttons.length; // Número total de imágenes  
//     let currentIndex = 0; // Índice actual de la imagen  

//     // Función para iniciar la animación  
//     const startAnimation = () => {  
//         if (currentIndex >= totalImages) currentIndex = 0; // Reiniciar si se supera el número de imágenes  
//         wrapperHolder.style.animationPlayState = 'running'; // Reiniciar la animación  
//         wrapperHolder.style.transform = `translateX(${-currentIndex * 100}%)`; // Mover a la imagen actual  
//     };  
    
//     // Función para detener la animación  
//     const stopAnimation = () => {  
//         wrapperHolder.style.animationPlayState = 'paused'; // Detener la animación  
//     };  

//     buttons.forEach((button, index) => {  
//         button.addEventListener('click', () => {  
//             stopAnimation(); // Detener la animación al hacer clic  
//             currentIndex = index; // Actualizar el índice actual a la imagen seleccionada  
//             wrapperHolder.style.transform = `translateX(${-currentIndex * 100}%)`; // Desplazar a la imagen seleccionada  
//             startAnimation(); // Reiniciar la animación inmediatamente  
//         });  
//     });  

//     // Función para iniciar la animación al cargar  
//     const startAutoSlide = () => {  
//         currentIndex = (currentIndex + 1) % totalImages; // Mover al siguiente índice  
//         startAnimation();  
//     };  

//     setInterval(startAutoSlide, 3000); // Mover cada 5 segundos automáticamente  

//     // Inicializa la animación  
//     startAnimation();  
// });






document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.button-carru');
    const wrapperHolder = document.querySelector('.wrapper-holder');
    const totalImages = buttons.length; 
    let currentIndex = 0; 
    
    const moveToImage = (index) => {
        wrapperHolder.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    };

    // Evento al hacer clic en un botón
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            moveToImage(index);
        });
    });
    
    // Auto slide
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % totalImages;
        moveToImage(nextIndex);
    }, 3000);
});