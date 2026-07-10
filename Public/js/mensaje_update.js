function confirmarActualizacion(modo) {
    if (modo) {
        return confirm("¿Estás seguro de que deseas realizar esta actualización?");
    }
    return true;
}

