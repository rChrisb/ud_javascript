"use strict";
// const arra = [1, 5, 6, 7];
// const [i, , , k] = arra;
// console.log(i, k);
// let [, b, c] = arra;
// [c, b] = [b, c];
// console.log(b, c, "same?");

// const tab = [45, 87, [87, 89, 85], 79];
// const [n, , [, x], y] = tab;
// console.log(n, x, y);

// arra.unshift(101, 102);
// console.log(arra);
// console.log(...arra);

// const fun = function (a, b, c) {
//   console.log(`${(a + b + c) / 3}`);
// };
// const moy = [6, 8, 13];
// fun(...moy);
// const a = [...moy];
// console.log(a);
// console.log(...moy);
// const [f, r, s] = [...moy];
// console.log(r);

// const [z, ...others] = arra;
// console.log(z, others, arra);
// console.log([...others, ...arra]);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 4);
// add(2, 8, 12);
// add(20, 100, 12, 180, 13);

// const x = [24, 26, 50];
// add(...x);

// console.log(1 ?? "ok");
// console.log(0 || "ok");
// console.log(0 || false || "okay");
// console.log(false || null || undefined);
// console.log(null ?? null ?? undefined ?? 45);

// console.log(1 && 5 && 10);
// console.log("ok" && true && false && 12);

const rest1 = {
  name: "One",
  numGuests: 5,
};
const rest2 = {
  name: "Two",
  owner: "Christiano",
};

// rest1.numGuests = rest1.numGuests || 12;
// rest2.numGuests = rest2.numGuests || 12;
rest2.numGuests ||= 15;
rest1.numGuests &&= 0;
console.log(rest1, rest2);
