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

// let arrJ1 = [3, 5, 2, 12, 7];
// /* arrj2 = [9, 16, 6, 8, 3]; */
// let arrK1 = [4, 1, 15, 8, 3];
// /* arrK2 = [10, 5, 6, 1, 4]; */

// const checkDogs = function (arrayJulia, arrayKate) {
//   const onlyDogsJulia = arrJ1.slice(1, -2);
//   /* console.log(onlyDogsJulia); */
//   const correctDogs = [...onlyDogsJulia, ...arrK1];
//   cor
// rectDogs.forEach(function (age, i) {
//     console.log(
//       age >= 3
//         ? `Dog number ${i + 1} is an adult and is ${age} years old`
//         : `Dog number ${i + 1} is still a puppy!`
//     );
//   });
// };

// checkDogs(arrJ1, arrK1);
// arrJ1 = [9, 16, 6, 8, 3];
// arrK1 = [10, 5, 6, 1, 4];
// checkDogs(arrJ1, arrK1);

// const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// const tab = arr.map((element) => element * euroToUsd);
// console.log(tab);
// const filtred = arr.filter(function (element) {
//   element < 5;
// });
// console.log(filtred);

//DATA;
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

//Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayTransaction = function (transactions) {
  containerMovements.innerHTML = "";
  transactions.forEach(function (act, i) {
    const type = act < 0 ? "withdrawal" : "deposit";
    const html = `<div class="movements__row">
		<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		<div class="movements__value">${act}</div>
	  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayTransaction(account1.movements);

const displayBalance = function (transactions) {
  const balance = transactions.reduce(function (accumulator, element) {
    return accumulator + element;
  }, 0);
  labelBalance.textContent = `${balance}€`;
};
displayBalance(account1.movements);

const displaySummary = function (transactions) {
  const incomes = transactions
    .filter(function (element) {
      return element > 0;
    })
    .reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = transactions
    .filter(function (element) {
      return element < 0;
    })
    .reduce(function (accumulator, element) {
      return accumulator + Math.abs(element);
    }, 0);
  labelSumOut.textContent = `${outcomes}€`;
  const interest = transactions
    .filter(function (element) {
      return element > 0;
    })
    .map(function (element) {
      return element * 0.012;
    })
    .filter(function (int) {
      return int >= 1;
    })
    .reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
};
displaySummary(account1.movements);

// const transactions = [200, -200, 340, -300, -20, 50, 400, -460];
// const double = transactions.map(function (element) {
//   return element * 2;
// });
// const withdrawal = transactions.filter(function (element) {
//   return element < 0;
// });
// console.log(double, withdrawal);

// const balance = transactions.reduce(function (accumul, element) {
//   return accumul * element;
// }, 1);
// console.log(balance);

// let julia = [5, 2, 4, 1, 15, 8, 3];
// // [16,6,10,5,6,1,4]

// const calcAverageHumanAge = (ages) => {
//   const humanAge = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, index, array) => acc + age / array.length, 0);
//   console.log(humanAge);
// };

// calcAverageHumanAge(julia);
// julia = [16, 6, 10, 5, 6, 1, 4];
// calcAverageHumanAge(julia);
console.log(accounts);
