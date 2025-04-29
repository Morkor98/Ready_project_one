document.addEventListener('DOMContentLoaded', function() {
    const memeTextStart = document.querySelector('#meme_textStart');
    const memeTextEnd = document.querySelector('#meme_textEnd');

    // Reset iniziale
    memeTextStart.style.animation = 'none';
    memeTextStart.style.width = '0';
    memeTextStart.style.opacity = '0';
    memeTextStart.style.transform = 'translateY(20px)';
    memeTextStart.style.boxShadow = '1rem 0 0 black';

    memeTextEnd.style.animation = 'none';
    memeTextEnd.style.width = '0';
    memeTextEnd.style.opacity = '0';
    memeTextEnd.style.transform = 'translateY(20px)';
    memeTextEnd.style.boxShadow = '1rem 0 0 black';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === memeTextStart) {
                    // Avvia animazione su memeTextStart
                    setTimeout(() => {
                        entry.target.style.animation = 'write 1.75s steps(40, end) forwards, mark .5s step-end infinite';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';

                        // Dopo 1.75s termina l'effetto e fa partire memeTextEnd
                        setTimeout(() => {
                            entry.target.style.animation = 'none';
                            entry.target.style.boxShadow = 'none';
                            entry.target.style.width = '35.5ch';

                            // Ora osserva memeTextEnd
                            observer.observe(memeTextEnd);
                        }, 1750);
                    }, 500);
                }

                if (entry.target === memeTextEnd) {
                    // Avvia animazione su memeTextEnd
                    setTimeout(() => {
                        entry.target.style.animation = 'write 1.5s steps(30, end) forwards, mark .5s step-end infinite';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';

                        // Ferma il lampeggio dopo 1.5s
                        setTimeout(() => {
                            entry.target.style.animation = 'none';
                            entry.target.style.boxShadow = 'none';
                            entry.target.style.width = '35.5ch';
                        }, 1500);
                    }, 500);
                }
            }
        });
    }, { threshold: 1 });

// Osserva solo il primo inizialmente
    observer.observe(memeTextStart);
});