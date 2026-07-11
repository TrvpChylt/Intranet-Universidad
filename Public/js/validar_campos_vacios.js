function validarFormulario() {
    var sso = document.getElementsByName('SSO').value;
    var hcm = document.getElementsByName('HCM').value;
    var opcion = document.getElementsByName('opcion').value;
    var grado = document.getElementsByName('gradoEstu').value;
    if (sso === "" || hcm === "" || opcion === "" || grado === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita que el formulario se envíe
    }
    return true; // Permite que el formulario se envíe
}