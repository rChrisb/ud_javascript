"use strict";

// console.log(Math.sqrt(13));
// console.log(Math.max(5, 2, 33, 55, "102"));
// console.log(Math.min(5, 2, 33, 55, "102"));
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.round(55.46));
// console.log(Math.ceil(55.46));
// console.log(Math.floor(55.46));
// console.log(Math.floor(55.76));
// console.log(Math.trunc(55.76));

// console.log(+(2.7).toFixed(0));
// console.log(+(2.756565).toFixed(0));
// console.log(+(2.746565).toFixed(1));
// console.log(+(2.746565).toFixed(3));

// ---------------------B A N K I S T---------------------------

//DATA;
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
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

const accounts = [account1, account2 /* , account3, account4 */];

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

const displayTransaction = function (account, sort = false) {
  containerMovements.innerHTML = "";

  const transac = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;
  transac.forEach(function (act, i) {
    const type = act < 0 ? "withdrawal" : "deposit";
    const date = new Date(account.movementsDates[i]);

    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    const displayDate = `${day}/${month}/${year}`;
    const html = `<div class="movements__row">
		  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		  <div class="movements__date">${displayDate}</div>
		  <div class="movements__value">${act.toFixed(2)}€</div>
		</div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const displayBalance = function (account) {
  account.balance = account.movements.reduce(function (accumulator, element) {
    return accumulator + element;
  }, 0);

  labelBalance.textContent = `${account.balance.toFixed(2)}€`;
};

const displaySummary = function (account) {
  const incomes = account.movements
    .filter(function (element) {
      return element > 0;
    })
    .reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  const outcomes = account.movements
    .filter(function (element) {
      return element < 0;
    })
    .reduce(function (accumulator, element) {
      return accumulator + Math.abs(element);
    }, 0);
  labelSumOut.textContent = `${outcomes.toFixed(2)}€`;
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
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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
  displayTransaction(account);
  displayBalance(account);
  displaySummary(account);
};

let currentAccount;

currentAccount = account1;
updateUserInterface(currentAccount);
containerApp.style.opacity = 100;

const now = new Date();
const day = String(now.getDate()).padStart(2, 0);
const month = String(now.getMonth() + 1).padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const minutes = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

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
  const loanAmount = Math.floor(inputLoanAmount.value);
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
  displayTransaction(currentAccount, !stateOfSort);
  stateOfSort = !stateOfSort;
});

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    {
      if (i % 2 === 0) row.style.backgroundColor = "yellow";
      else row.style.backgroundColor = "blue";
    }
  });
});

// console.log(54545_54_5_45_454_54_4);

// console.log(3n > 2);
// // console.log(3n * 2);
// console.log(3n * BigInt(2));

// const now = new Date();
// console.log(now);
// console.log(account2.movementsDates);

// console.log(new Date(22000, 0, 55, 25, 61, 61));
// let date = new Date(22000, 0, 55, 25, 61, 61);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMonth());
// console.log(date.getTime());

// date.setFullYear(3022);
// console.log(date);
