"use strict";

//global scope function scope block scope

// const calcAge = function (birthYear) {
//   const age = 2022 - birthYear;
//   const firstName = "Rubie"; //You can have the same name for two variables as long as they in different scope
//   const printAge = function () {
//     console.log(
//       `Hello ${firstName}! You are ${age} years old (you were born in ${birthYear})!`
//     );
//     console.log(
//       birthYear <= 1196 && birthYear >= 1981
//         ? `You are a Millenial!`
//         : `You are NOT a Millenial`
//     );
//   };
//   printAge();
//   return age;
// };

// const firstName = "Chris";
// calcAge(1997);

// const me = {
//   firstName: "lucas",
//   age: 21,
// };
// const you = me;
// you.age = 40;
// console.log(me.firstName, me.age, you.firstName, you.age);

const me = {
  firstName: "lucas",
  age: 21,
};

const you = Object.assign({}, me);
you.age = 40;
