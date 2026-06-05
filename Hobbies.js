function toggleText(id) {

    const contenus = document.querySelectorAll('.contenu');

    contenus.forEach(contenu => {
        if (contenu.id !== id) {
            contenu.style.display = "none";
        }
    });

    const element = document.getElementById(id);

    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

let currentSlide = 0;

function changeSlide(direction) {
    const images = document.querySelectorAll('.slide-img');
    const descriptions = document.querySelectorAll('.game-desc');
    
    // Enlever la classe active de l'image et de la description actuelle
    images[currentSlide].classList.remove('active');
    descriptions[currentSlide].classList.remove('active');
    
    // Calculer le nouvel index
    currentSlide += direction;
    
    // Si on dépasse à la fin, on revient au début
    if (currentSlide >= images.length) {
        currentSlide = 0;
    }
    // Si on dépasse au début, on va à la fin
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }
    
    // Ajouter la classe active sur les nouveaux éléments correspondants
    images[currentSlide].classList.add('active');
    descriptions[currentSlide].classList.add('active');
}
