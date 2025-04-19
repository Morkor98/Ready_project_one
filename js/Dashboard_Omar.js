document.addEventListener('DOMContentLoaded', function() {
    const omarCard = document.querySelector('#Dashboard_Omar_grid .card');
    const omarDashboard = document.querySelector('#Dashboard_Omar_grid');
    const overlay = document.getElementById('overlay');
    const omarText = document.querySelector('#Dashboard_Omar_grid #text_grid');
    let isExpanded = false;

    // Rimuovi gli event listener per hover se non ti servono più
    omarCard.addEventListener('click', function(e) {
        e.stopPropagation();

        isExpanded = !isExpanded;

        if (isExpanded) {
            omarDashboard.classList.add('expanded');
            overlay.classList.add('visible');
            omarText.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            omarDashboard.classList.remove('expanded');
            overlay.classList.remove('visible');
            omarText.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    overlay.addEventListener('click', function() {
        if (isExpanded) {
            omarDashboard.classList.remove('expanded');
            overlay.classList.remove('visible');
            omarText.style.display = 'none';
            document.body.style.overflow = '';
            isExpanded = false;
        }
    });
});