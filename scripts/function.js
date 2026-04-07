'use strict';

// FUNZIONE CEìHE MOSTRA IL DISPLAY DEL COUNTER CON UN MASSIMO DI 2 NUMERI DECIMALI
function displayCounter() {
    // questa formula del math random, il * 100 sposta la virgola di 2 posti verso destra es. 12.346 => 1234.6
    // poi math.random arrotonda all'intero più vicino es. 1235
    // il /100 riporta la virgola verso sinistra di 2 posti 12.35
    counterBiscotti.textContent = `You have ${Math.round(counter * 100) / 100} cookies`;


}

// aumenta il counter in base al moltiplicatore attualmente attivo
// in più richiama la funzione displayCounter
function aumentaCounter() {

    counter += moltiplicatore;
    displayCounter()

}

// ad ogni click sottrae il costo dell'upgrade al counter
// aumenta il costo dell'upgrade e aumenta il moltiplicatore
// mostra il costro del prossimo upgrade
function upgradesClickerHandler() {

    if (counter >= costoUpgrade) {

        counter = counter - costoUpgrade;
        costoUpgrade *= 2;
        moltiplicatore *= 1.5;
        displayCounter();
        bottoneUpgrade.innerHTML = `PROSSIMO UPGRADE COSTO: ${Math.round(costoUpgrade * 100) / 100}`;

    } else {
        alert('NON HAI ABBASTANZA COOKIE');
    }

}

// ad ogni click sottrae il costo dell'upgrade dell'autoclicker al counter
// aumenta il costo dell'upgrade e aumenta il moltiplicatore del autoclicker
// mostra il costro del prossimo upgrade
function autoClickerHandler() {

    if (counter >= costoAutoClicker) {

        counter -= costoAutoClicker;
        costoAutoClicker *= 2;
        autoClicker += 3;
        displayCounter()
        bottoneAutoClicker.innerHTML = `PROSSIMO AUTOCLICKER UPGRADE COSTO: ${Math.round(costoAutoClicker * 100) / 100}`;

    } else {
        alert('NON HAI ABBASTANZA COOKIE');
    }
}

// ogni 1secondo/6 aumenta il counter di 0.1 in automatico
setInterval(function () {
    counter += autoClicker * 0.1;
    displayCounter();
}, 1000 / 6);



///////////////////////////////////////////////////////////////////////////
// AGGIUNTA CON AI
///////////////////////////////////////////////////////////////////////////
// FUNZIONI GRAFICHE: CASCATA DI BISCOTTI
///////////////////////////////////////////////////////////////////////////
function generaCascataBiscotti() {
    // se il numero dei biscotti cadenti è maggiore o uguale a maxbiscotticadenti allora si ferma e non ne crea altri
    if (numeroBiscottiCadenti >= maxBiscottiCadenti) {
        return;
    }

    // Numero di biscotti in base al moltiplicatore MA con tetto massimo per click
    const quantiBiscotti = Math.min(moltiplicatore, MAX_BISCOTTI_PER_CLICK);

    for (let i = 0; i < quantiBiscotti; i++) {

        // Se creando altro biscotto superiamo il limite totale, ci fermiamo
        if (numeroBiscottiCadenti >= maxBiscottiCadenti) {
            break;
        }

        creaBiscottoCadente();
    }
}

function creaBiscottoCadente() {
    const biscottoCadente = document.createElement('img');
    biscottoCadente.src = './img/biscotto-cookie-clicker.png'; // stessa immagine del biscotto gigante
    biscottoCadente.alt = 'biscotto che cade';
    biscottoCadente.classList.add('biscotto-cadente');

    // posizione orizzontale casuale (0% - 100%)
    const posizioneX = Math.random() * 100;
    biscottoCadente.style.left = posizioneX + '%';

    // piccolo ritardo casuale per effetto “cascata”
    const ritardoAnimazione = Math.random() * 0.4; // 0s - 0.4s
    biscottoCadente.style.animationDelay = ritardoAnimazione + 's';

    // quando l'animazione è finita, dopo un po' rimuovo il biscotto
    biscottoCadente.addEventListener('animationend', () => {
        biscottoCadente.remove();  // lo rimuove subito a fine animazione
        // diminuiamo il contatore senza andare sotto lo zero
        numeroBiscottiCadenti = Math.max(0, numeroBiscottiCadenti - 1);
    });
    contenitoreCascataBiscotti.appendChild(biscottoCadente);
}