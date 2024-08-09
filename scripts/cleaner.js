document.addEventListener('DOMContentLoaded', function () {
    limpiarSecciones();
});

function limpiarSecciones() {
    // Intentar seleccionar el footer
    var footerSpam = document.querySelector('a[href*="mobirise.site"]').closest('section');
    // console.log('FooterSpam:', footerSpam); // Esto debería mostrar el footer en la consola si se encuentra

    if (footerSpam) {
        footerSpam.parentNode.removeChild(footerSpam);
    } else {
            console.error('Footer no encontrado');
    }
}
