"use strict";
// Selecting elements
const player0_element = document.querySelector(".player--0");
const player1_element = document.querySelector(".player--1");

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
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${active_player}`).textContent = 0;
  active_player = active_player === 0 ? 1 : 0;
  currentScore = 0;
  player0_element.classList.toggle("player--active");
  player1_element.classList.toggle("player--active");
};

// Rolling dice functionnality
buttonRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

buttonHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player(s score
    scores[active_player] += currentScore;
    document.getElementById(`score--${active_player}`).textContent =
      scores[active_player];

    // 2. Check if player's score is <= 100
    if (scores[active_player] >= 20) {
      //Finish the game
      playing = false;
      document
        .querySelector(`.player--${active_player}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove("player--active");
      dice_element.classList.add("hidden");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
