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





Header_floatingNav.js

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
