let currentExpanded = null;
const dashboard = document.querySelector('.Dashboard_Omar');
const overlay = document.getElementById('overlay');
const carousel = document.querySelector('#dashboardCarousel');
const carouselInstance = new bootstrap.Carousel(carousel);
const content = document.getElementById('text');
const dashboardTitle = document.getElementById('h2');
const card = document.querySelector('.card');

dashboard.addEventListener('click', function () {
    if (!currentExpanded) {
        this.classList.add('dashboard-expanded');
        overlay.classList.remove('hidden');
        currentExpanded = this;
        card.classList.add('hidden');
        content.classList.remove('hidden');
        carouselInstance.pause();
        content.classList.remove('hidden');
        dashboardTitle.classList.add('hidden');
    } else {
        closeExpanded();
    }
});
//FIXME il carosello si muove mentre la dashboard è aperta
overlay.addEventListener('click', closeExpanded);
function closeExpanded() {
    if (currentExpanded) {

        //Avvia il fade-out del testo
        content.classList.add('fade-out');

        //Aspetta che finisca la transizione, poi si chiude la dashboard
        setTimeout(() => {
            currentExpanded.classList.remove('dashboard-expanded');
            overlay.classList.add('hidden');
            currentExpanded = null;

            card.classList.remove('hidden');
            content.classList.add('hidden');
            content.classList.remove('fade-out'); // Reset per la prossima apertura
            dashboardTitle.classList.remove('hidden');
        }, 300); // tempo uguale alla transizione in CSS
    }
}
function toggleHover(isHovered) {
    const card = document.querySelector('.card');

    // Evita l'hover se la dashboard è aperta
    if (currentExpanded) return;
    if (isHovered) {
        card.classList.add('hovered');
    } else {
        card.classList.remove('hovered');
    }
}

//FIXME Scrivere la condizione per cui si è sia da telefono e da tablet (occhio al desktop che si scazza)
//Se sono su smartphone o tablet, le animazioni saranno uguali.
if (window.matchMedia("(max-width: 767px)").matches || "(min-width: 768px) and (max-width: 1024px)".matches) {
    carousel.addEventListener('slide.bs.carousel', function (event) {
        const comingSlideIndex = event.to;
        const dashboardIndex = 1; //indice dashboard 0 based
        const fadeDuration = 2000;

        if (comingSlideIndex === dashboardIndex) {
            dashboardTitle.classList.add('hidden'); // nasconde h2
            setTimeout(() => {
                dashboardTitle.classList.add('fade-out');
            }, fadeDuration);
        } else {
            dashboardTitle.classList.remove('hidden'); // lo mostra di nuovo
        }
    });
}