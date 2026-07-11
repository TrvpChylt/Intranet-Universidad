function redirectToRegister() {
    var cedula = document.getElementById("cedula").value; // Obtener el valor de la cédula
    if (cedula) {
        // Crear un formulario dinámico
        var form = document.createElement("form");
        form.method = "post";
        form.action = "register.php";

        // Crear un input oculto para enviar la cédula
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "olvidar_ced";
        input.value = cedula;
        form.appendChild(input);

        // Añadir el formulario al cuerpo y enviarlo
        document.body.appendChild(form);
        form.submit();
    } else {
        alert("Por favor, ingrese su cédula antes de continuar.");
    }
}