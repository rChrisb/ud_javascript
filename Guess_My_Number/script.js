"use strict";

// document.querySelector(".guess").value = "22";

const secret = Math.trunc(Math.random() * 20) + 1; // random num between 0 & 20
let score = 20;

//if user clicks on 'Again'
document.querySelector(".again").addEventListener("click", function () {
  document.location.reload();
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when no answer
  if (!guess) {
    document.querySelector(".message").textContent =
      "You have to type a guess number!";
  }

  //when right answer
  else if (guess === secret) {
    document.querySelector(".number").textContent = secret;
    document.querySelector(".message").textContent = "CONGRATULATIONS !!";
    document.querySelector(".message").style.color = "yellow";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".number").style.fontSize = "8rem";
    document.querySelector(".number").style.backgroundColor = "yellow";
  }
  //when answer is too low
  else if (guess < secret) {
    /* document.querySelector(".guess").value = ""; */
    if (score > 1) {
      document.querySelector(".message").textContent = "Your guess is too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost bro! it's OVER";
      document.querySelector(".score").textContent = 0;
    }

    //when answer is too high
  } else if (guess > secret) {
    /* document.querySelector(".guess").value = ""; */
    if (score > 1) {
      document.querySelector(".message").textContent = "Your guess is too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost bro! it's OVER";
      document.querySelector(".score").textContent = 0;
    }
  }
  document.querySelector(".highscore").textContent = score;
});
