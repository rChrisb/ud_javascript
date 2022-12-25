"use strict";
// Selecting elements
const score0_element = document.querySelector("#score--0");
const score1_element = document.getElementById("score--1");

const current0_element = document.getElementById("current--0");
const current1_element = document.getElementById("current--1");

const dice_element = document.querySelector(".dice");
const buttonRoll = document.querySelector(".btn--roll");
const buttonNew = document.querySelector(".btn--new");
const buttonHold = document.querySelector(".btn--hold");

// Starting conditions
score0_element.textContent = score1_element.textContent = 0;
dice_element.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let active_player = 0;

// Rolling dice functionnality
buttonRoll.addEventListener("click", function () {
  // 1. Genrating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  dice_element.classList.remove("hidden");
  dice_element.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${active_player}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    active_player = active_player === 0 ? 1 : 0;
  }
});
