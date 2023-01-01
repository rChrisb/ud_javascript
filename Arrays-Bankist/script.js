"use strict";
console.log("Happy New Yearrrrr!!!!");

// const arr = [-10, 20, -30, 40, -50];
// console.log("-----FOR OF LOOP-------------");
// for (const [i, action] of arr.entries()) {
//   if (action < 0) {
//     console.log(`${i}:You took ${Math.abs(action)}$`);
//   } else console.log(`${i}:You put ${action}$ in the bank`);
// }
// console.log("------------FOR EACH METHOD--------");
// arr.forEach(function (act, i) {
//   if (act < 0) {
//     console.log(`${i}:You just took ${Math.abs(act)}£`);
//   } else console.log(`${i}:You just put ${act}£ in the bank`);
// });

// const currencies = new Map([
//   ["USD", "USA Dollar"],
//   ["EUR", "euro"],
//   ["GBP", "Pound Sterling"],
// ]);
// console.log(currencies);
// currencies.forEach(function (value, key, map) {
//   console.log(value + ": " + key);
// });

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
