DarkMode.js
    Questo script implementa un pulsante tra modalità chiara e scura per la pagina web. È utile per migliorare l’accessibilità e offrire all’utente la possibilità di scegliere il tema visivo preferito.
    All'avvio, lo script seleziona tutti gli elementi coinvolti nel cambio di tema, tra cui:
        Il pulsante che attiva lo switch.
        Il corpo della pagina.
        Alcuni elementi specifici come il footer, linee decorative e paragrafi.
        Blocchi di testo animato (come quelli usati per l'effetto digitazione).
        L’icona all’interno del pulsante (usata per mostrare il sole o la luna).

Dashboard_Desktop.js
    Questo script gestisce l'interazione tra gli elementi di tipo "griglia" (grd1, grd3) su una pagina web, permettendo di espandere selettivamente uno di essi e modificare la visibilità di altri elementi della      UI.
    Espansione griglia: cliccando su grd1 o grd3, l’elemento viene espanso mentre gli altri scompaiono.
    Reset interfaccia: cliccando altrove nella pagina, tutto torna alla visualizzazione iniziale.
    Controllo visibilità: quando si espande grd3, viene mostrata anche una seconda linea (secondLine) e viene rimossa una classe specifica da un nome (Mich-name2).
    In questo script è stata esclusa la Dashboard 2 per problemi di interazione tra questo script e lo script della Dashboard_Omar.

Dashboard_Omar.js
    Questo script gestisce l'espansione di due sezioni interattive della dashboard di Omar (grid e carousel)
    Espansione a schermo intero: cliccando su una card, la relativa sezione (grid o carousel) si espande e compare un overlay oscurando lo sfondo.
    Chiusura con overlay: cliccando fuori dalla card (sull'overlay), la sezione torna allo stato normale.
    Contenuti testuali: viene mostrato del testo associato alla card espansa.
    Blocco dello scroll: il corpo della pagina è bloccato quando una sezione è espansa.

DashboardFrank.js
    Questo script gestisce alcune semplici interazioni nella sezione Frank della dashboard, con focus su visibilità di elementi e animazioni di immagine.
    Attivazione griglia Frank: cliccando su #Dashboard_Frank_grid, viene mostrato un elemento (#square) e nascosto un nome (.name).
    Animazione immagini: cliccando sul contenitore .image-wrapper, si alternano classi CSS su due immagini per creare un effetto visivo.
    Reset automatico: cliccando altrove sulla pagina, tutto torna allo stato iniziale (griglia nascosta, nome visibile).

member-JS-Michele.js
    Questo script gestisce un semplice meccanismo di sostituzione placeholder → immagine reale al clic su un bottone.
    Cliccando su #imageToggle o #imageToggle2, viene nascosto un placeholder e mostrata l'immagine corrispondente (#img, #img2).
    Le modifiche di visibilità avvengono tramite la classe CSS hidden-mich.

FloatingNav.js
    Questo script gestisce una barra di navigazione fluttuante che appare al momento giusto durante lo scroll e aggiorna dinamicamente lo stato delle sezioni attive della pagina.
    Visibilità dinamica: la barra #floatingNav appare solo durante lo scroll attivo e scompare nell'header o nel footer.
    Smooth scroll: i link .nav-link portano alle sezioni scelte in modo fluido.
    Highlight automatico: la sezione attiva si evidenzia quando la sezione corrispondente è visibile (grazie a IntersectionObserver).

text-animation-meme.js
    Questo script gestisce un effetto di scrittura animata per due testi (#meme_textStart e #meme_textEnd), attivato solo quando entrano completamente in viewport.
    Effetto scrittura: i testi vengono scritti progressivamente con l’effetto steps() e un cursore lampeggiante.
    Animazione sequenziale: il secondo testo parte solo dopo che il primo è completato.
    Attivazione solo in viewport: le animazioni partono quando il rispettivo elemento è completamente visibile (threshold: 1).
