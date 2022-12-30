"use strict";
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
/* numPassengers = numPassengers || 1
	price = price || 199 */

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123");
// createBooking("L564");
// createBooking("LHcd3");
// createBooking("LH12cdcdcd3", 700, 300);
// console.log(bookings);

// const string =
//   "Messi won 4 UCL, Messi won 7 BO, Messi won 1 WC. Messi is inevitable";
// const string2 = "Ronaldo, AKA CR7, is a fraud";

// const goatstring = function (str) {
//   return str.replaceAll("Messi", "The GOAT");
// };
// const penaldostring = function (str) {
//   return str.replace("Ronaldo", "PENDU");
// };
// const change = function (str, fun) {
//   console.log(str + "  ==> " + fun(str));
// };
// change(string, goatstring);
// change(string2, penaldostring);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet("Bonsoir")("Chris");

const lufthansa = {
  airLine: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

lufthansa.book(4545, "Chris");
lufthansa.book(445545, "Rubie");
lufthansa.book(45, "BIKOY");
console.log(lufthansa);

const anotherbook = lufthansa.book;

const rb = {
  iataCode: "RB",
  airLine: "RUBIEBIKOY",
  bookings: [],
};

anotherbook.call(rb, 721, "RCB");
anotherbook.call(lufthansa, 851, "RCB");
console.log(lufthansa.bookings);
