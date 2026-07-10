let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
        alert("Inactivo por demasiado tiempo. Cerrando la conexión...");
        window.location.href = "../rrhh/login.php";
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 600000) //10 min de inactividad
        //time = setTimeout(logout, 30 * 60 * 1000);  // 30 min de inactividad
    }
};

window.onload = function() {
    inactivityTime(); 
}