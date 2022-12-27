"use strict";
const arra = [1, 5, 6, 7];
const [i, , , k] = arra;
console.log(i, k);
let [, b, c] = arra;
[c, b] = [b, c];
console.log(b, c, "same?");

const tab = [45, 87, [87, 89, 85], 79];
const [n, , [, x], y] = tab;
console.log(n, x, y);
