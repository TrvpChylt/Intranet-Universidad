function calcularSueldo() {
    let inputMensual = document.getElementById("sueldoMensual");

    // Evitar que se ingresen caracteres no numéricos (solo números y un único punto decimal)
    inputMensual.value = inputMensual.value.replace(/[^0-9.]/g, '');

    // Asegurar que el punto decimal solo aparezca una vez
    if ((inputMensual.value.match(/\./g) || []).length > 1) {
        inputMensual.value = inputMensual.value.replace(/\.+$/, ''); // Elimina puntos adicionales
    }

    // Evitar que el usuario ingrese solo un punto sin números
    if (inputMensual.value === "." || inputMensual.value === "") {
        inputMensual.value = "";
        return;
    }

    // Convertir el valor a número
    let sueldoMensual = parseFloat(inputMensual.value) || 0;
    let sueldoAnual = sueldoMensual * 12;

    document.getElementById("sueldoAnual").value = sueldoAnual.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("montoLetraMesual").value = convertirNumeroALetras(sueldoMensual);
    document.getElementById("montoLetraAnual").value = convertirNumeroALetras(sueldoAnual);
}

function convertirNumeroALetras(num) {
    if (num === 0) return "cero bolívares";

    let partes = num.toFixed(2).split(".");
    let parteEntera = parseInt(partes[0]);
    let centimos = parseInt(partes[1]);

    let unidades = ["", "un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    let especiales = ["diez", "once", "doce", "trece", "catorce", "quince"];
    let decenas = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    let centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    function convertirParteEntera(num) {
        if (num === 1) return "un"; // Se usa "un" en lugar de "uno" cuando corresponde
        if (num < 10) return unidades[num];
        if (num >= 10 && num < 16) return especiales[num - 10];
        if (num >= 16 && num < 20) return "dieci" + unidades[num - 10];
        if (num >= 20 && num < 30) return num === 20 ? "veinte" : "veinti" + unidades[num - 20];
        if (num >= 30 && num < 100) return decenas[Math.floor(num / 10)] + (num % 10 !== 0 ? " y " + unidades[num % 10] : "");
        if (num >= 100 && num < 200) return num === 100 ? "cien" : "ciento " + convertirParteEntera(num - 100);
        if (num >= 200 && num < 1000) return centenas[Math.floor(num / 100)] + " " + convertirParteEntera(num % 100);
        if (num >= 1000 && num < 2000) return "mil " + (num % 1000 !== 0 ? convertirParteEntera(num % 1000) : "");
        if (num >= 2000 && num < 1000000) {
            let miles = Math.floor(num / 1000);
            let resto = num % 1000;
            return convertirParteEntera(miles) + " mil " + (resto !== 0 ? convertirParteEntera(resto) : "");
        }
        if (num === 1000000) return "un millón";

        return num.toString();
    }

    let resultado = convertirParteEntera(parteEntera) + (parteEntera === 1 ? " bolívar" : " bolívares");
    if (centimos > 0) {
        resultado += " con " + convertirParteEntera(centimos) + (centimos === 1 ? " céntimo" : " céntimos");
    }

    return resultado;
}