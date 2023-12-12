/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let simbolo_carta = ["♦", "♥", "♠", "♣"];
let valor_carta = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

function cartasAleatorias() {
  function elementoArray(e) {
    return e[Math.floor(Math.random() * e.length)];
  }

  let numeroAleatorio = document.getElementById("numeroCentro");
  let simboloCarta = document.querySelector("#elementoArriba");
  let simboloCarta2 = document.getElementById("elementoAbajo");

  numeroAleatorio.innerHTML = elementoArray(valor_carta);
  simboloCarta.innerHTML = elementoArray(simbolo_carta);
  simboloCarta2.innerHTML = simboloCarta.innerHTML;

  if (simboloCarta.innerHTML == "♦" || simboloCarta.innerHTML == "♥") {
    document.getElementById("elementoArriba").classList.add("rojo");
    document.getElementById("elementoAbajo").classList.add("rojo");
    document.getElementById("numeroCentro").classList.add("rojo");
  } else {
    document.getElementById("elementoArriba").classList.remove("rojo");
    document.getElementById("elementoAbajo").classList.remove("rojo");
    document.getElementById("numeroCentro").classList.remove("rojo");
  }
}

cartasAleatorias();
