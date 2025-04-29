member-JS-Michele.js

Questo script permette di mostrare un'immagine al clic su un pulsante, nascondendo un elemento segnaposto. È utile per rivelare contenuti visivi in modo controllato e progressivo, migliorando l'interattività della pagina.
    All'avvio vengono selezionati:
        Due elementi (Placeholder e Placeholder2) che rappresentano immagini e contenuti nascosti inizialmente.
        Due immagini (img e img2) da mostrare quando richiesto.
        Due pulsanti (imageToggle e imageToggle2) che gestiscono ciascuna coppia di placeholder/immagine.
    Al clic sul primo pulsante:
        L'elemento Placeholder viene nascosto applicando la classe hidden-mich.
        L'immagine img viene mostrata rimuovendo la stessa classe hidden-mich.
    Al clic sul secondo pulsante:
        Si ripete lo stesso processo per la seconda coppia (Placeholder2 e img2).

Dashboard_Omar.js

Il file contiene lo script per interagire con la dashboard nel seguente modo:
Comportamento dettagliato:
1. Click sulla card
    Quando l’utente clicca sulla card (sia desktop che mobile):
      Viene aggiunta la classe expanded al contenitore della dashboard
      L’overlay diventa visibile (classe visible)
      Il relativo testo (#text_grid o #text_carousel) viene mostrato
      Lo scrolling della pagina viene disabilitato (document.body.style.overflow = 'hidden')
   
3. Click sull’overlay
  Quando l’utente clicca sull’overlay, viene ripristinato lo stato iniziale:
  Rimozione della classe expanded dalle dashboard
  Scomparsa dell’overlay (visible → rimosso)
  I testi vengono nascosti
  Lo scrolling viene riattivato

Struttura degli elementi coinvolti
    #Dashboard_Omar_grid: contenitore della dashboard desktop
    #Dashboard_Omar_carousel: contenitore della dashboard mobile/tablet
    .card: elemento cliccabile che attiva l’espansione
    #overlay: sfondo scuro che compare quando una dashboard è espansa
    #text_grid e #text_carousel: testi mostrati quando la dashboard è espansa

🔄 Funzione riutilizzabile

La funzione handleCardClick(dashboard, textElement) incapsula la logica di espansione e chiusura per entrambi i layout. Viene assegnata agli elementi .card sia per la griglia (desktop) sia per il carosello (mobile), rendendo il codice pulito e modulare.
Lo script garantisce una navigazione coerente su dispositivi diversi, gestendo l'interazione in modo fluido e centralizzato. È progettato per essere semplice da integrare in pagine web con layout responsivi.





FloatingNav.js

Comportamento dettagliato:
1. Visualizzazione della barra di navigazione durante lo scroll
    Quando l’utente effettua uno scroll verticale sulla pagina:
        Se la posizione non è né in cima né in fondo, viene aggiunta la classe visible all’elemento di navigazione (#floatingNav)
        In tutti gli altri casi, la classe visible viene rimossa
        Questo effetto consente di mostrare la barra solo mentre si sta scrollando la pagina

2. Scroll fluido al clic sui link
    Ogni link nella barra (.nav-link) è associato a una sezione specifica tramite l’attributo data-target
    Quando l’utente clicca su un link:
        Il comportamento predefinito del link viene annullato
        La pagina effettua uno scroll fluido verso la sezione corrispondente

3. Evidenziazione del link attivo
    Uno IntersectionObserver monitora la visibilità delle sezioni nella viewport
    Quando una sezione è visibile almeno al 60%, viene:
        Rimossa la classe active da tutti i link
        Aggiunta la classe active al link corrispondente alla sezione attualmente visibile
        Questo effetto permette di evidenziare in tempo reale il link relativo alla sezione attiva nella navigazione

Struttura degli elementi coinvolti:
    #floatingNav: contenitore della barra di navigazione flottante
    .nav-link: link all’interno della barra di navigazione; ognuno deve avere data-target corrispondente all’id di una sezione
    Sezioni principali osservate:
        #header
        #dashboard
        #footer
    Ogni sezione deve avere un attributo id per poter essere monitorata dallo script
    
🔄 Funzionalità riutilizzabile e integrabile

Lo script è progettato per:
    Offrire un’esperienza utente fluida e interattiva
    Essere facilmente integrato in qualsiasi pagina con struttura one-page o scroll-based
    Funzionare correttamente su tutti i dispositivi grazie all’utilizzo di API moderne (IntersectionObserver, scrollIntoView)
    Gestire in modo centralizzato:
        La visibilità della barra
        L’interazione al clic
        L’aggiornamento dinamico dello stato attivo dei link


text-animation-meme.js
    Comportamento dettagliato:
    Questo script gestisce l'animazione di due testi con un effetto di digitazione simulata, come una macchina da scrivere, attivata quando i testi entrano nel campo visivo dell'utente (viewport).
    All'avvio della pagina, lo script imposta entrambi i testi in uno stato iniziale invisibile: non sono ancora visibili, hanno larghezza zero e sono leggermente spostati verso il basso.
    Viene utilizzato un IntersectionObserver, che rileva quando i testi entrano completamente nella schermata. Questo serve per far partire l’animazione solo quando i testi sono effettivamente visibili all’utente.
    Il primo testo (memeTextStart) viene osservato per primo. Quando entra nella viewport:
        Dopo un breve ritardo, inizia un’animazione che simula la scrittura lettera per lettera.
        Durante l’animazione, appare anche un cursore lampeggiante.
        Una volta completata la scrittura, l’animazione viene interrotta, il cursore rimosso e il testo viene mantenuto visibile.
        Solo a questo punto, lo script comincia a osservare il secondo testo (memeTextEnd).
        Il secondo testo (memeTextEnd) si comporta in modo analogo, ma inizia solo dopo che il primo ha completato l’animazione. Anche qui viene mostrata la digitazione simulata, seguita dalla rimozione del cursore            lampeggiante.

DarkMode.js

Questo script implementa un pulsante tra modalità chiara e scura per la pagina web. È utile per migliorare l’accessibilità e offrire all’utente la possibilità di scegliere il tema visivo preferito.
    All'avvio, lo script seleziona tutti gli elementi coinvolti nel cambio di tema, tra cui:
        Il pulsante che attiva lo switch.
        Il corpo della pagina.
        Alcuni elementi specifici come il footer, linee decorative e paragrafi.
        Blocchi di testo animato (come quelli usati per l'effetto digitazione).
        L’icona all’interno del pulsante (usata per mostrare il sole o la luna).
    Al clic sul pulsante:
        Viene alternata (toggle) la classe dark-mode su tutti gli elementi selezionati. Questo consente di applicare gli stili definiti per il tema scuro tramite CSS.
        In parallelo, l’icona nel pulsante viene aggiornata dinamicamente:
            Se si attiva la modalità scura, l’icona passa dalla luna al sole.
            Se si torna alla modalità chiara, l’icona torna a essere la luna.
