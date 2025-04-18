let currentExpanded = null;
const overlay = document.getElementById('overlay');

// Applica il click handler alle dashboard
function handleDashboardClick(dashboardElement) {
    dashboardElement.addEventListener('click', function () {
        if (!currentExpanded) {
            this.classList.add('dashboard-expanded');
            overlay.classList.remove('hidden');
            document.body.classList.add('dashboard-opened'); // aggiunge la classe al body
            currentExpanded = this;

            const card = this.querySelector('.card');
            const text = this.querySelector('.dashboard-text');
            const title = this.querySelector('.dashboard-title');

            if (card) {
                card.classList.add('hidden');
                card.classList.remove('hovered'); // forza la fine dell’hover
            }
            if (text) text.classList.remove('hidden');
            if (title) title.classList.add('hidden');
        } else {
            closeExpanded();
        }
    });
}

// Seleziona tutte le dashboard singolarmente (carousel e grid separati)
const dashboards = [
    document.getElementById('Dashboard_Omar_carousel'),
    document.getElementById('Dashboard_Omar_grid')
];

dashboards.forEach(dashboard => {
    if (dashboard) handleDashboardClick(dashboard);
});

// Overlay per chiusura
overlay.addEventListener('click', closeExpanded);

// Chiusura con transizione
function closeExpanded() {
    if (currentExpanded) {
        const card = currentExpanded.querySelector('.card');
        const text = currentExpanded.querySelector('.dashboard-text');
        const title = currentExpanded.querySelector('.dashboard-title');

        if (text) {
            text.classList.add('fade-out');
            setTimeout(() => {
                currentExpanded.classList.remove('dashboard-expanded');
                overlay.classList.add('hidden');
                document.body.classList.remove('dashboard-opened'); // rimuove la classe dal body
                if (card) {
                    card.classList.remove('hidden');
                    card.classList.remove('hovered'); // resetta l’hover
                }
                if (text) {
                    text.classList.add('hidden');
                    text.classList.remove('fade-out');
                }
                if (title) title.classList.remove('hidden');
                currentExpanded = null;
            }, 300);
        }
    }
}

// Hover (passa "this" dalla card)
function toggleHover(cardEl, isHovered) {
    if (currentExpanded) return;
    if (isHovered) {
        cardEl.classList.add('hovered');
    } else {
        cardEl.classList.remove('hovered');
    }
}
