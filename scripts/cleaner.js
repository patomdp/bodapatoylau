// <script src="scripts/cleaner.js"></script>
window.onload = function () {
    removerSpam();
};

function removerSpam() {
    // Buscar la sección en el body que contiene el enlace
    var element = document.querySelector('body section.display-7 a[href*="mobiri.se"]').closest('section');
    // console.log('element', element);

    // Verificar si se encontró el elemento y eliminarlo si es necesario
    if (element) {
        element.parentNode.removeChild(element);
    }
    // closest('section') se usa para encontrar el ancestro más cercano que sea un elemento <section>. Luego, si se encuentra la sección, se elimina del DOM. 
}