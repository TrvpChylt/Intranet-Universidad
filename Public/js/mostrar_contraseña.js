function togglePasswordVisibility() {

    var passwordField = document.getElementById("password");
    var confirmPasswordField = document.getElementById("confirmPassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
    } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
    }    
}