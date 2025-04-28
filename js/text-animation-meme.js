document.addEventListener('DOMContentLoaded', function() {
    const memeTextStart = document.querySelector('#meme_textStart');

    // Reset iniziale
    memeTextStart.style.animation = 'none';
    memeTextStart.style.width = '0';
    memeTextStart.style.opacity = '0';
    memeTextStart.style.transform = 'translateY(20px)';
    memeTextStart.style.boxShadow = '1rem 0 0 black';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    // Avvia animazione
                    entry.target.style.animation = 'write 5s steps(30, end) forwards, mark .5s step-end infinite';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';

                    // Disabilita il lampeggiamento dopo il completamento
                    setTimeout(() => {
                        entry.target.style.animation = 'none';
                        entry.target.style.boxShadow = 'none';
                        entry.target.style.width = '35.5ch'; // Mantiene la larghezza finale
                    }, 5000); // Dopo la durata dell'animazione

                }, 500); // Ritardo iniziale
            }
        });
    }, { threshold: 1 });

    observer.observe(memeTextStart);
});