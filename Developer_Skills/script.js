"use strict";
// console.log(12);

// console.log();

/*temperatures amplitude between one and then two arrays*/
//One array
// const temp = ["hi", 4, 16, 12, 18, "bonjour", 44, 10, -2, "hello", -6, 0];
// const temp2 = ["hello", 1, -4, -7, 10, 8, 6];
// const temp3 = [0, "error", -10, 58, 5];
// const calcAmplitude = function (array) {
//   let max = array[0];
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "number") {
//       if (array[i] === max) max = array[i + 1];
//       if (array[i] === min) min = array[i + 1];
//       else continue;
//     }
//     if (max < array[i]) max = array[i];
//     if (min > array[i]) min = array[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// const Amp = calcAmplitude(temp2);
// console.log(`The amplitude is ${Amp}`);

// Two arrays
// const calcAmplitudeNew = function (a, b) {
//   const array = a.concat(b);
//   let max = array[0];
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "number") {
//       if (array[i] === max) max = array[i + 1];
//       if (array[i] === min) min = array[i + 1];
//       else continue;
//     }
//     if (max < array[i]) max = array[i];
//     if (min > array[i]) min = array[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// const Amp2 = calcAmplitudeNew(temp2, temp);
// console.log(`The amplitude is ${Amp2}`);

//BONUS: 3 arrays
// const calcAmplitudeNew = function (a, b, c) {
//   const array = a.concat(b).concat(c);
//   let max = array[0];
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "number") {
//       if (array[i] === max) max = array[i + 1];
//       if (array[i] === min) min = array[i + 1];
//       else continue;
//     }
//     if (max < array[i]) max = array[i];
//     if (min > array[i]) min = array[i];
//   }

//   console.log(max, min);
//   return max - min;
// };
// const Amp2 = calcAmplitudeNew(temp2, temp, temp3);
// console.log(`The amplitude is ${Amp2}`);

// const array = [17, 21, 23];
// const arrrray = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let ray = [];
//   for (let i = 0; i < arr.length; i++) {
//     ray.push(`${arr[i]}°C in ${i + 1} days ... `);
//   }
//   const str = ray.join("");
//   console.log(`... ${str}`);
// };

// printForecast(array);
// printForecast(arrrray);

// let ray = [];
// ray.push(`${array[0]} ok ${array[1]}`);
// console.log(ray);
const array = [17, 21, 23];
const arrrray = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let ray = "";
  for (let i = 0; i < arr.length; i++) {
    ray += `${arr[i]}°C in ${i + 1} days ... `;
  }
  /* const str = ray.join(""); */
  console.log(`... ${ray}`);
};

printForecast(array);
printForecast(arrrray);
