


document.addEventListener("DOMContentLoaded", () => {  
    const cards = document.querySelectorAll('.card3');  

    const observer = new IntersectionObserver((entries) => {  
        entries.forEach(entry => {  
            if (entry.isIntersecting) {  
                entry.target.classList.add('visible'); // Añade la clase cuando entra  
            } else {  
                entry.target.classList.remove('visible'); // Quita la clase cuando sale  
            }  
        });  
    });  

    cards.forEach(card => {  
        observer.observe(card); // Configura cada tarjeta para que sea observada  
    });  
});  

// document.addEventListener("DOMContentLoaded", () => {  
//     const cards = document.querySelectorAll('.card2');  

//     const observer = new IntersectionObserver((entries) => {  
//         entries.forEach(entry => {  
//             if (entry.isIntersecting) {  
//                 entry.target.classList.add('visible'); // Añade la clase cuando entra  
//             } else {  
//                 entry.target.classList.remove('visible'); // Quita la clase cuando sale  
//             }  
//         });  
//     });  

//     cards.forEach(card => {  
//         observer.observe(card); // Configura cada tarjeta para que sea observada  
//     });  
// });  