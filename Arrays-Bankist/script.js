"use strict";
// console.log("Happy New Yearrrrr!!!!");

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

const displayTransaction = function (transactions, sort = false) {
  containerMovements.innerHTML = "";

  const transac = sort
    ? transactions.slice().sort((a, b) => a - b)
    : transactions;
  transac.forEach(function (act, i) {
    const type = act < 0 ? "withdrawal" : "deposit";
    const html = `<div class="movements__row">
		<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		<div class="movements__value">${act}</div>
	  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const displayBalance = function (account) {
  account.balance = account.movements.reduce(function (accumulator, element) {
    return accumulator + element;
  }, 0);

  labelBalance.textContent = `${account.balance}€`;
};

const displaySummary = function (account) {
  const incomes = account.movements
    .filter(function (element) {
      return element > 0;
    })
    .reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = account.movements
    .filter(function (element) {
      return element < 0;
    })
    .reduce(function (accumulator, element) {
      return accumulator + Math.abs(element);
    }, 0);
  labelSumOut.textContent = `${outcomes}€`;
  const interest = account.movements
    .filter(function (element) {
      return element > 0;
    })
    .map(function (element) {
      return (element * account.interestRate) / 100;
    })
    .filter(function (int) {
      return int >= 1;
    })
    .reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUserName = function (accs) {
  accs.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserName(accounts);
const updateUserInterface = function (account) {
  displayTransaction(account.movements);
  displayBalance(account);
  displaySummary(account);
};

let currentAccount;

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  currentAccount = accounts.find(function (account) {
    return account.username === inputLoginUsername.value;
  });
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUserInterface(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(function (account) {
    return account.username === inputTransferTo.value;
  });

  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUserInterface(currentAccount);
  }
});

btnLoan.addEventListener("click", function (event) {
  event.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  inputLoanAmount.blur();
  inputLoanAmount.value = "";
  if (
    loanAmount > 0 &&
    currentAccount.movements.some((mov) => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
  }
  updateUserInterface(currentAccount);
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(function (account) {
      return account.username === currentAccount.username;
    });
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
  inputClosePin.blur();
});

let stateOfSort = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayTransaction(currentAccount.movements, !stateOfSort);
  stateOfSort = !stateOfSort;
});
//
const transactions = [200, -200, 340, -300, -20, 50, 400, -460];
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
// console.log(accounts);
// console.log(transactions.includes(200)); //checks for equality
// transactions.push(2002);
// const depositOver2000 = transactions.some(function (element) {
//   return element > 2000;
// });
// console.log(depositOver2000, transactions.at(-1));
// console.log(account4.movements.every((mov) => mov > 0));

// const arr = [[115, [20, 3], [4, 5], 80, 10]];
// console.log(arr.flat());
// console.log(arr.flat(2));
// const arr2 = arr.flat(2);
// console.log(arr2);
// arr2.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr2);
const trans = [200, -200, 340, -300, -20, 50, 400, -460];
// trans.fill("ok", 1, 4);
// console.log(trans);

// const a = Array.from({ length: 10 }, (element, i) => i * 15);
// console.log(a);
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const recommendedportion = dogs.map((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

const sarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  sarah.curFood > sarah.recommendedFood
    ? `Too much (` +
        sarah.curFood +
        ") vs recommended: " +
        sarah.recommendedFood
    : `Not enough (` +
        sarah.curFood +
        ") vs recommended: " +
        sarah.recommendedFood
);

const ownersEatToomuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatToomuch);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);
console.log(`${ownersEatToomuch.join(" and ")}'s dogs eat too much`);

const exactportion = dogs.some((dog) => dog.curFood === dog.recommendedFood);
const okayportion = dogs.some(
  (dog) =>
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9
);
const okaydogs = dogs.filter(
  (dog) =>
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9
);
console.log(okayportion, okaydogs);

if (exactportion)
  console.log(
    "There are dog(s) eating exactly their amount of recommended food"
  );
else console.log("NO dog eat exactly the amount of recommended food");

if (okayportion)
  console.log("There are dog(s) eating OKAY amount of recommended food");
else console.log("There dogs eating  a BAD amount of recommended food");

const copy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(copy);
