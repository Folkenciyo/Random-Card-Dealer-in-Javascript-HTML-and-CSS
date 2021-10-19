/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");
const number = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
const suit = ["♠", "♣", "♥", "♦"];

window.onload = function() {
  /* choosedCard(); */
  card();
};

//funcion para dar un item aleatorio
function randomItem(array) {
  for (let i in array) {
    let randomIndex = array[Math.floor(Math.random() * array.length)];
    return randomIndex;
  }
}
//función general de generar una carta con número y palo aleatorio
function card() {
  let card = document.createElement("div");
  card.classList.add("card"); //carta
  BODY.appendChild(card);

  let suitup = document.createElement("div");
  suitup.classList.add("suitup"); //palo superior
  card.appendChild(suitup);

  let num = document.createElement("span");
  num.classList.add("num"); //numero
  card.appendChild(num);

  let suitdown = document.createElement("div");
  suitdown.classList.add("suitdown"); //Palo inferior
  card.appendChild(suitdown);

  num.innerHTML = randomItem(number);
  suitup.innerHTML = suitdown.innerHTML = randomItem(suit);

  if (
    randomItem(suit) == randomItem("♠") ||
    randomItem(suit) == randomItem("♣")
  ) {
    suitup.classList.add = "black";
    suitdown.classList.add = "black";
  } else {
    suitup.classList.add = "red";
    suitdown.classList.add = "red";
  }
}

/* 
function heartCard() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let heart = document.createElement("div");
  heart.classList.add("heart");
  card.appendChild(heart);

  let num = document.createElement("span");
  num.classList.add("num");
  card.appendChild(num);

  let heart2 = document.createElement("div");
  heart2.classList.add("heart2");
  card.appendChild(heart2);

  heart2.innerHTML = "♥";
  num.innerHTML = randomItem(number);
  heart.innerHTML = "♥";

  return card;
}

function diamondCard() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let diamond = document.createElement("div");
  diamond.classList.add("diamond");
  card.appendChild(diamond);

  let num = document.createElement("span");
  num.classList.add("num");
  card.appendChild(num);

  let diamond2 = document.createElement("div");
  diamond2.classList.add("diamond2");
  card.appendChild(diamond2);

  diamond2.innerHTML = "♦";
  num.innerHTML = randomItem(number);
  diamond.innerHTML = "♦";

  return card;
}

function spadesCard() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let spades = document.createElement("div");
  spades.classList.add("spades");
  card.appendChild(spades);

  let num = document.createElement("span");
  num.classList.add("num");
  card.appendChild(num);

  let spadest2 = document.createElement("div");
  spadest2.classList.add("spades2");
  card.appendChild(spadest2);

  spadest2.innerHTML = "♠";
  num.innerHTML = randomItem(number);
  spades.innerHTML = "♠";

  return card;
}

function clubsCard() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let clubs = document.createElement("div");
  clubs.classList.add("clubs");
  card.appendChild(clubs);

  let num = document.createElement("span");
  num.classList.add("num");
  card.appendChild(num);

  let clubst2 = document.createElement("div");
  clubst2.classList.add("clubs2");
  card.appendChild(clubst2);

  clubst2.innerHTML = "♣";
  num.innerHTML = randomItem(number);
  clubs.innerHTML = "♣";

  return card;
}

function choosedCard() {
  const desk = [heartCard(), spadesCard(), clubsCard(), diamondCard()];
  for (let i in desk) {
    let randomCardIndex = desk[Math.floor(Math.random() * desk.length)];
    return randomCardIndex;
  }
}
 */
