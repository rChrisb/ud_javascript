"use strict";
const moadal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");
const buttonsOpenModal = document.querySelectorAll(".show-modal");
console.log(buttonsOpenModal);

for (let i = 0; i < buttonsOpenModal.length; i++) {
  console.log(buttonsOpenModal[i].textContent);
}
