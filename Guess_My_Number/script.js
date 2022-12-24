"use strict";

// document.querySelector(".guess").value = "22";
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess)
    document.querySelector(".message").textContent =
      "You have to type a guess number!";
  else if (guess == 12)
    document.querySelector(".message").textContent = "CONGRATULATIONS";
  else document.querySelector(".message").textContent = "No! Guess again";
});
