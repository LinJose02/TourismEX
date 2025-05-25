
function setActive(element) {
    // Selecciona todos los elementos con la clase 'nav-link' y elimina la clase 'active' de cada uno
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    // Añade la clase 'active' al elemento que fue clicado
    element.classList.add('active');
}
