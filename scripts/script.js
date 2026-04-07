'use strict';

///////////////////////////////////////////////////////////////////////////
// VARIABILI
///////////////////////////////////////////////////////////////////////////
const bottoneUpgrade = document.querySelector('#upgrades');
const bottoneAutoClicker = document.querySelector('#autoClicker');

const counterBiscotti = document.querySelector('#biscottoCounter');

const biscottoClicker = document.querySelector('#biscottoGiganteClick');

// CONTENITORE PER LA CASCATA DI BISCOTTI
const contenitoreCascataBiscotti = document.querySelector('#cascataBiscotti');
///////////////////////////////////////////////////////////////////////////

let counter = 0;

let costoUpgrade = 10;
let moltiplicatore = 1;

let costoAutoClicker = 8;
let autoClicker = 0;

// LIMITATORE BISCOTTI ANIMATI
let numeroBiscottiCadenti = 0;         // quanti biscotti animati sono attualmente in vita
const maxBiscottiCadenti = 60;       // massimo totale di biscotti animati sullo schermo
const maxBiscottiPerClick = 15;     // massimo biscotti creati per singolo click
///////////////////////////////////////////////////////////////////////////
// RICHIAMO I BOTTONI E I DISPLAY DEGLI UPGRADE
///////////////////////////////////////////////////////////////////////////

counterBiscotti.textContent = `You have ${counter} cookies`;
bottoneUpgrade.innerHTML = `PROSSIMO UPGRADE COSTO: ${costoUpgrade}`;
bottoneAutoClicker.innerHTML = `PROSSIMO AUTOCLICKER UPGRADE COSTO: ${costoAutoClicker}`;

///////////////////////////////////////////////////////////////////////////
// RICHIAMO I BOTTONI CHE HANNO UNA FUNZIONE
///////////////////////////////////////////////////////////////////////////

// biscottoClicker.addEventListener('click', aumentaCounter);
bottoneUpgrade.addEventListener('click', upgradesClickerHandler);
bottoneAutoClicker.addEventListener('click', autoClickerHandler);

biscottoClicker.addEventListener('click', () => {
    aumentaCounter();          // la tua logica di incremento cookie
    generaCascataBiscotti();   // effetto grafico di biscotti che cadono
});