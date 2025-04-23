let currentExpanded = null;
const dashboard = document.querySelector('#Dashboard_Omar_carousel');
const overlay = document.getElementById('overlay');
const card = document.querySelector('.card');
const content = document.getElementById('text');
const dashboardTitle = document.getElementById('#h2_Omar_carousel');

//TODO aggiungi id per grid e sistema funzioni

// Aggiungi l'evento di click sulla dashboard per espanderla
dashboard.addEventListener('click', function () {
    if (!currentExpanded) {
        // Espandi la dashboard
        this.classList.add('dashboard-expanded');
        overlay.classList.remove('hidden');
        currentExpanded = this;
        card.classList.add('hidden');
        content.classList.remove('hidden');
        dashboardTitle.classList.add('hidden');
    } else {
        // Se la dashboard è già espansa, chiudi la dashboard
        closeExpanded();
    }
});

// Aggiungi l'evento di click sull'overlay per chiudere la dashboard
overlay.addEventListener('click', function () {
    closeExpanded();
});

// Funzione per chiudere la dashboard
function closeExpanded() {
    if (currentExpanded) {
        // Avvia il fade-out del testo
        content.classList.add('fade-out');

        // Aspetta che finisca la transizione, poi chiudi la dashboard
        setTimeout(() => {
            currentExpanded.classList.remove('dashboard-expanded');
            overlay.classList.add('hidden');
            currentExpanded = null;
            card.classList.remove('hidden');
            content.classList.add('hidden');
            content.classList.remove('fade-out'); // Reset per la prossima apertura
            dashboardTitle.classList.remove('hidden');
        }, 300); // tempo uguale alla durata della transizione in CSS
    }
}

// Funzione per gestire l'hover sul card
function toggleHover(isHovered) {
    if (currentExpanded) return; // Se la dashboard è aperta, non applicare l'effetto hover
    if (isHovered) {
        card.classList.add('hovered');
    } else {
        card.classList.remove('hovered');
    }
}

