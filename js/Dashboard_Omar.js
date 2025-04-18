let currentExpanded = null;
let originalParent = null;
const overlay = document.getElementById('overlay');

// Funzione che espande la dashboard/card
function expandDashboard(original) {
    if (currentExpanded) return;
    const card = original.querySelector('.card');
    const title = original.querySelector('h2');
    const text = original.querySelector('.dashboard-text');
    if (card) {
        card.classList.add('expanded');
    }
    if (title) title.classList.add('hidden');
    if (text) text.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.classList.add('dashboard-opened');
    currentExpanded = original;
}


// Funzione per chiudere l'espansione della dashboard
function collapseDashboard() {
    if (!currentExpanded) return;

    const card = currentExpanded.querySelector('.card');
    const title = currentExpanded.querySelector('h2');
    const text = currentExpanded.querySelector('.dashboard-text');

    if (card) card.classList.remove('expanded');
    if (title) title.classList.remove('hidden');
    if (text) text.classList.add('hidden');

    overlay.classList.add('hidden');
    document.body.classList.remove('dashboard-opened');

    currentExpanded = null;
}


// Aggiunge il comportamento di espansione al click su entrambi i layout
['Dashboard_Omar_carousel', 'Dashboard_Omar_grid'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', () => expandDashboard(element));
    }
});

// Aggiunge evento al click sull’overlay per chiudere la dashboard
overlay.addEventListener('click', collapseDashboard);
