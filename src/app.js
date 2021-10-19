/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");
let number = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
let suits = ["♠", "♣", "♥", "♦"];
const NUMBER_POSITION = randomItem(number);
const SUIT_POSITION = randomItem(suits);

window.onload = function() {
  Card();
};

function randomItem(array) {
  return Math.floor(Math.random() * array.length);
}

function Card() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let suitup = document.createElement("div");
  suitup.classList.add("suitup");
  card.appendChild(suitup);

  let num = document.createElement("span");
  num.classList.add("num");
  card.appendChild(num);

  let suitdown = document.createElement("div");
  suitdown.classList.add("suitdown");
  card.appendChild(suitdown);

  num.innerHTML = number[NUMBER_POSITION];
  suitup.innerHTML = suitdown.innerHTML = suits[SUIT_POSITION];

  if (suits[SUIT_POSITION] == "♠" || suits[SUIT_POSITION] == "♣") {
    suitup.classList.add("color1");
    suitdown.classList.add("color1");
  } else {
    suitup.classList.add("color2");
    suitdown.classList.add("color2");
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
