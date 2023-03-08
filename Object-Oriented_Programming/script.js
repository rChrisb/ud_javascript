"use strict";

// const Player = function (team, number, position, lastName) {
//   this.team = team;
//   this.number = number;
//   this.position = position;
//   this.lastName = lastName;
// };

// const messi = new Player("Barça", 10, "RW", "Messi");
// console.log(messi);
// console.log(messi.team);

// messi.team = "PSG";
// messi.number = 30;
// console.log(messi);

// Player.prototype.info = function () {
//   console.log(
//     `${this.lastName} plays for ${this.team} and wears ${this.number}`
//   );
// };
// // messi.info = function () {
// //   console.log(
// //     `${this.lastName} plays for ${this.team} and wears ${this.number}`
// //   );
// // };
// messi.info();
// console.log(messi);
// console.dir(messi);

// const arr = [1, 1, 2, 2, 2, 3, 3, 3, 3];
// console.log([...new Set(arr)]);

// Coding Challenge #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make}'s speed has been increased up to ${this.speed}`);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make}'s speed has been decreased down to ${this.speed}`);
// };

// const mercedes = new Car("Mercedes", 120);
// const peugeot = new Car("Peugeot", 95);

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// peugeot.accelerate();
// peugeot.accelerate();
// peugeot.accelerate();
// peugeot.brake();
// peugeot.brake();
// peugeot.brake();

class Player {
  constructor(name, team, number) {
    this.name = name;
    this.team = team;
    this.number = number;
  }

  information() {
    console.log(`${this.name} plays for ${this.team} and wears ${this.number}`);
  }
}

const neymar = new Player("Neymar", "PSG", 10);
console.log(neymar);
neymar.information();
