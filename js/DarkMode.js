const button = document.getElementById('toggle-theme');
const dark_mode_test = document.body;
const footer = document.getElementById('footer');
const icon = button.querySelector('i');
const line=document.getElementById('separate-line');

button.addEventListener('click', () => {
    dark_mode_test.classList.toggle('dark-mode');
    footer.classList.toggle('dark_mode');
    line.classList.toggle('dark-mode');

    // Cambia l'icona da luna a sole
    if (dark_mode_test.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');

    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');

    }
});