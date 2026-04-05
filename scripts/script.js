'use strict';

///////////////////////////////////////////////////////////////////////////
// VARIABILI
///////////////////////////////////////////////////////////////////////////
const bottoneUpgrade = document.querySelector('#upgrades');
const bottoneAutoClicker = document.querySelector('#autoClicker');

const counterBiscotti = document.querySelector('#biscottoCounter');

const biscottoClicker = document.querySelector('#biscottoGiganteClick');
const bottoneUpgradeInner = bottoneUpgrade.innerHTML;

let counter = 0;

let costoUpgrade = 10;
let moltiplicatore = 1;

let costoAutoClicker = 8;
let autoClicker = 0;

///////////////////////////////////////////////////////////////////////////
// RICHIAMO I BOTTONI E I DISPLAY DEGLI UPGRADE
///////////////////////////////////////////////////////////////////////////

counterBiscotti.textContent = `You have ${counter} cookies`;
bottoneUpgrade.innerHTML = `PROSSIMO UPGRADE COSTO: ${costoUpgrade}`;
bottoneAutoClicker.innerHTML = `PROSSIMO AUTOCLICKER UPGRADE COSTO: ${costoAutoClicker}`;

///////////////////////////////////////////////////////////////////////////
// RICHIAMO I BOTTONI CHE HANNO UNA FUNZIONE
///////////////////////////////////////////////////////////////////////////

biscottoClicker.addEventListener('click', aumentaCounter);
bottoneUpgrade.addEventListener('click', upgradesClickerHandler);
bottoneAutoClicker.addEventListener('click', autoClickerHandler);

console.log(autoClicker);
