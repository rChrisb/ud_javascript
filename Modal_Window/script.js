"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");
const buttonsOpenModal = document.querySelectorAll(".show-modal");

// console.log(buttonsOpenModal);

const openingModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// for (let i = 0; i < buttonsOpenModal.length; i++) {
//   console.log(buttonsOpenModal[i].textContent);
// }
for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener("click", openingModal);
}

const closingMod = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttonCloseModal.addEventListener("click", closingMod);
overlay.addEventListener("click", closingMod);

document.addEventListener("keydown", function (event) {
  console.log(event.key); // event(function parameter) is an object
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closingMod();
  }
});
