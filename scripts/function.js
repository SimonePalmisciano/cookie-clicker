'use strict';

function displayCounter() {

    counterBiscotti.textContent = `You have ${Math.round(counter*100)/100} cookies`;

}

function aumentaCounter() {

    counter += moltiplicatore;
    displayCounter()

}

function upgradesClickerHandler() {

    if (counter >= costoUpgrade) {

        counter = counter - costoUpgrade;
        costoUpgrade *= 2;
        moltiplicatore++;
        displayCounter();
        bottoneUpgrade.innerHTML = `PROSSIMO UPGRADE COSTO: ${Math.round(costoUpgrade*100)/100}`;

    } else {
        alert('NON HAI ABBASTANZA COOKIE');
    }

}

function autoClickerHandler() {

    if (counter >= costoAutoClicker) {

        counter -= costoAutoClicker;
        costoAutoClicker *= 2;
        autoClicker++;
        displayCounter()
        bottoneAutoClicker.innerHTML = `PROSSIMO AUTOCLICKER UPGRADE COSTO: ${Math.round(costoAutoClicker*100)/100}`;

    } else {
        alert('NON HAI ABBASTANZA COOKIE');
    }
}

setInterval(function() {
    counter += autoClicker *0.1;
    displayCounter();
},1000/6)