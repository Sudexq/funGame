"use strict";
let start = document.getElementById("start");
var sayac = 0;
start.onmouseover = function (e) {
  sayac++;
  var xpos = parseInt(Math.random() * 1000);
  var ypos = parseInt(Math.random() * 600);
  start.style.left = xpos + "px";
  start.style.top = ypos + "px";
  start.style.width = this.clientWidth + 10 + "px";
  start.style.height = this.clientHeight + 10 + "px";
}
start.onclick = function () {
  alert(sayac + " Seferde Yakalandı");
  start.style.width = "12vh";
  start.style.height = "4vh";
  sayac = 0;
}
const blabla = document.querySelector(".blabla");

let formEnter = document.forms["enter"];
const UserName = formEnter.fname;
const submitButton = formEnter.submit;

const h1 = document.createElement("h1");
const p = document.createElement("p");
UserName.onkeyup = function () {
  h1.innerHTML = "Merhaba! " + UserName.value;
  p.innerHTML = "oyunu oynamak için aşağıdaki <b>START</b> butonuna basman lazım!"
}
blabla.appendChild(h1);
blabla.appendChild(p);

