"use strict";

//global scope function scope block scope

const calcAge = function (birthYear) {
  const age = 2022 - birthYear;

  const printAge = function () {
    console.log(
      `Hello ${firstName}! You are ${age} years old (you were born in ${birthYear})!`
    );
  };
  printAge();
  return age;
};

const firstName = "Chris";
calcAge(1997);
