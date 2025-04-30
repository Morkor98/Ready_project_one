// selezioni nav e link
const nav = document.getElementById('floatingNav');
const links = Array.from(nav.querySelectorAll('.nav-link'));
const sections = ['header','dashboard','footer']
    .map(id => document.getElementById(id));

// mostra/nasconde nav appena scrolli
function toggleNav() {
    const scrollTop = window.scrollY;
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    const footer = sections[2];
    const footerTop = footer.offsetTop;
    const inFooter = scrollTop + window.innerHeight >= footerTop;

    if (scrollTop > 0 && scrollTop < scrollMax && !inFooter) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
}

// smooth scroll al click
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.target);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// evidenzia icona attiva via IntersectionObserver
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.id;
        const link = nav.querySelector(`[data-target="${id}"]`);

        if (entry.isIntersecting && link) {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, {
    threshold: 0.6, // 60% visibile
});

// Associa ogni sezione al suo observer
document.querySelectorAll('section[id]').forEach(section => {
    io.observe(section);
});
// avvia observer su ogni sezione
sections.forEach(sec => io.observe(sec));
window.addEventListener('scroll', toggleNav);
// init
toggleNav();