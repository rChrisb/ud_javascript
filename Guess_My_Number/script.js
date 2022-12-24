"use strict";

// document.querySelector(".guess").value = "22";
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
});
