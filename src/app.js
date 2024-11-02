/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".boton").addEventListener("click", generaCarta);
};

// Declaracion de las variables y constantes
const palos = ["heart", "diamond", "spade", "club"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let topSuite = document.querySelector("#topSuite");
let number = document.querySelector("#numberValue");
let bottomSuite = document.querySelector("#bottomSuite");

// Funcion para seleccionar aleatoriamente el palo y el valor de la carta
function eleccionCarta(arr1, arr2) {
  let card = [];
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return card;
}

// Funcion para asignar el color a los elementos
function asignarColor(arr) {
  if (arr[0] === "heart" || arr[0] === "diamond") {
    topSuite.style.color = "red";
    number.style.color = "red";
    bottomSuite.style.color = "red";
  } else {
    topSuite.style.color = "black";
    number.style.color = "black";
    bottomSuite.style.color = "black";
  }
}

// Funcion para asignar el palo correspondiente
function asignarPalo(arr) {
  if (arr[0] === "heard") {
    topSuite.innerHTML = "♥";
    bottomSuite.innerHTML = "♥";
  } else if (arr[0] === "diamond") {
    topSuite.innerHTML = "♦";
    bottomSuite.innerHTML = "♦";
  } else if (arr[0] === "club") {
    topSuite.innerHTML = "♣";
    bottomSuite.innerHTML = "♣";
  } else {
    topSuite.innerHTML = "♠";
    bottomSuite.innerHTML = "♠";
  }
}

// Funcion para asignar el valor de la carta
function asignarValor(arr) {
  number.innerHTML = arr[1];
}

// Funcion para generar la carta aleatoria y la completa llamando a las funciones para rellenar la carta
function generaCarta() {
  let card = eleccionCarta(palos, valores);
  asignarColor(card);
  asignarPalo(card);
  asignarValor(card);
}
