Dashboard_Omar.js

Il seguente file contenente lo script per interagire con la dashboard nel seguente modo.

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
