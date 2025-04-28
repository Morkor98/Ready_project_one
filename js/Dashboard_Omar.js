document.addEventListener('DOMContentLoaded', function() {
    // Elementi grid
    const omarGridCard = document.querySelector('#Dashboard_Omar_grid .card');
    const omarGridDashboard = document.querySelector('#Dashboard_Omar_grid');
    const omarGridText = document.querySelector('#Dashboard_Omar_grid #cardText_Omar');

    // Elementi carousel
    const omarCarouselCard = document.querySelector('#Dashboard_Omar_carousel .card');
    const omarCarouselDashboard = document.querySelector('#Dashboard_Omar_carousel');
    const omarCarouselText = document.querySelector('#Dashboard_Omar_carousel #text_carousel');

    // Elementi comuni
    const overlay = document.getElementById('overlay');
    let isExpanded = false;

    // Funzione per gestire il click
    function handleCardClick(dashboard, textElement) {
        return function(e) {
            e.stopPropagation();
            isExpanded = !isExpanded;
            if (isExpanded) {
                dashboard.classList.add('expanded');
                overlay.classList.add('visible');
                if (textElement) textElement.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                dashboard.classList.remove('expanded');
                overlay.classList.remove('visible');
                if (textElement) textElement.style.display = 'none';
                document.body.style.overflow = '';
            }
        };
    }

    //Listener alla card desktop (grid)
    if (omarGridCard) {

        omarGridCard.addEventListener('click', handleCardClick(omarGridDashboard, omarGridText));
        omarGridText.classList.remove("disappear");
    }
    //Listener alla card mobile/tablet (carousel)
    if (omarCarouselCard) {
        omarCarouselCard.addEventListener('click', handleCardClick(omarCarouselDashboard, omarCarouselText));
    }
    // Listener per overlay (comune a entrambe)
    overlay.addEventListener('click', function() {
        if (isExpanded) {
            // Chiudi entrambe le dashboard (solo quella attiva sarà effettivamente chiusa)
            if (omarGridDashboard) omarGridDashboard.classList.remove('expanded');
            if (omarCarouselDashboard) omarCarouselDashboard.classList.remove('expanded');
            overlay.classList.remove('visible');
            if (omarGridText) omarGridText.style.display = 'none';
            if (omarCarouselText) omarCarouselText.style.display = 'none';
            document.body.style.overflow = '';
            isExpanded = false;
        }
    });
});