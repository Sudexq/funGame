"use strict";
let plus/**/, minnus, counter, pcTake;

const start = document.querySelector("#start2");
const up = document.querySelector("#up2");
const down = document.querySelector("#down2");
const confirm2 = document.querySelector("#confirm2");
const status2 = document.querySelector("#status2");

function pcGuess() {
    counter++;
    pcTake = Math.random();
    pcTake = pcTake * (plus - minnus);
    pcTake = Math.floor(pcTake) + minnus;
    status2.innerHTML = "Bilgisayarın Tahmini: " + pcTake;
}

start.onclick = function () {
    plus = 100;
    minnus = 0;
    counter = 0;
    start.disabled = true;
    pcGuess();
}
up.onclick = function () {
    minnus = pcTake;
    pcGuess();
}
down.onclick = function () {
    plus = pcTake;
    pcGuess();
}
confirm2.onclick = function () {
    status2.innerHTML = "Bilgisayar " + counter + " Tahminde Bildi!";
    start.disabled = false;
}