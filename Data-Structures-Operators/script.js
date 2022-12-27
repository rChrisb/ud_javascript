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

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 4);
add(2, 8, 12);
add(20, 100, 12, 180, 13);

const x = [24, 26, 50];
add(...x);
