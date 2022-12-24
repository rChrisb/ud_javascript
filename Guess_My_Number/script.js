"use strict";

// document.querySelector(".guess").value = "22";

const secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secret; // random num between 0 & 20

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess)
    document.querySelector(".message").textContent =
      "You have to type a guess number!";
  else if (guess === secret)
    document.querySelector(".message").textContent = "CONGRATULATIONS";
  else if (guess < secret) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Your guess is too low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess > secret) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Your guess is too high";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
  document.querySelector(".highscore").textContent = score;
});
