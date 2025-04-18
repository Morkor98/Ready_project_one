let currentExpanded = null;
const overlay = document.getElementById('overlay');

function expandDashboard(original) {
    if (currentExpanded) return;
    const clone = original.cloneNode(true);
    clone.classList.add('dashboard-expanded-container');
    const card = clone.querySelector('.card');
    const title = clone.querySelector('h2');
    const text = clone.querySelector('.dashboard-text');
    if (card) card.classList.add('hidden');
    if (title) title.classList.add('hidden');
    if (text) text.classList.remove('hidden');
    document.body.appendChild(clone);
    overlay.classList.remove('hidden');
    document.body.classList.add('dashboard-opened');
    currentExpanded = clone;
}

function collapseDashboard() {
    if (!currentExpanded) return;

    currentExpanded.classList.add('fade-out');
    setTimeout(() => {
        if (currentExpanded && currentExpanded.parentNode) {
            currentExpanded.parentNode.removeChild(currentExpanded);
        }
        overlay.classList.add('hidden');
        document.body.classList.remove('dashboard-opened');
        currentExpanded = null;
    }, 300);
}

['Dashboard_Omar_carousel', 'Dashboard_Omar_grid'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', () => expandDashboard(element));
    }
});

overlay.addEventListener('click', collapseDashboard);
