"use strict";

// document.querySelector(".guess").value = "22";

let secret = Math.trunc(Math.random() * 20) + 1; // random num between 0 & 20
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//if user clicks on 'Again'
document.querySelector(".again").addEventListener("click", function () {
  /* document.location.reload(); */
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.background = "#eee";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").style.color = "#eee";
  document.querySelector(".number").style.fontSize = "6rem";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when no answer
  if (!guess) {
    displayMessage("You have to type a guess number!");
  }

  //when right answer
  else if (guess === secret) {
    document.querySelector(".number").textContent = secret;
    displayMessage("CONGRATULATIONS !!");
    document.querySelector(".message").style.color = "yellow";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".number").style.fontSize = "8rem";
    document.querySelector(".number").style.backgroundColor = "yellow";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when wrong answer
  else if (guess !== secret) {
    if (score > 1) {
      displayMessage(
        guess < secret ? "Your guess is too low" : "Your guess is too high"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost bro! it's OVER");
      document.querySelector(".score").textContent = 0;
    }
  }
  /*  //when answer is too low
  else if (guess < secret) {
    /* document.querySelector(".guess").value = ""; */
  // if (score > 1) {
  //   document.querySelector(".message").textContent = "Your guess is too low";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // } else {
  //   document.querySelector(".message").textContent =
  //     "You lost bro! it's OVER";
  //   document.querySelector(".score").textContent = 0;
  // }

  //   //when answer is too high
  // } else if (guess > secret) {
  //   /* document.querySelector(".guess").value = ""; */
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Your guess is too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "You lost bro! it's OVER";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
