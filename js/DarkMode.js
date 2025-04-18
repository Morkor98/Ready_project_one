const button = document.getElementById('toggle-theme');
const dark_mode_test=document.body;
const icon = button.querySelector('i');

button.addEventListener('click', () => {
    dark_mode_test.classList.toggle('dark-mode');

    // Cambia l'emoji da luna a sole
    if (dark_mode_test.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');

    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');

    }
});
