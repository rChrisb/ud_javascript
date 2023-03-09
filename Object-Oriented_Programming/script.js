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

// class Player {
//   constructor(name, team, number) {
//     this.name = name;
//     this.team = team;
//     this.number = number;
//   }

//   information() {
//     console.log(`${this.name} plays for ${this.team} and wears ${this.number}`);
//   }
// }

// const neymar = new Player("Neymar", "PSG", 10);
// console.log(neymar);
// neymar.information();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make}'s speed has been increased to ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make}'s speed has been decreased to ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const mercedes = new Car("Mercedes", 95);
// const bmw = new Car("BMW", 120);

// // bmw.speedUS = 46;
// // console.log(bmw.speed);
// console.log(bmw.speed, bmw.speedUS);
// bmw.speedUS = 100;
// console.log(bmw.speed);

//inheritance between Classes using constructor function
// const Player = function (lastName, team, number) {
//   this.lastName = lastName;
//   this.team = team;
//   this.number = number;
// };

// Player.prototype.info = function () {
//   console.log(
//     `${this.lastName} plays for ${this.team} and wears number ${this.number}`
//   );
// };
// const messi = new Player("Messi", "Barcelona", 10);
// messi.info();

// const Striker = function (lastName, team, number, goals) {
//   Player.call(this, lastName, team, number);
//   this.goals = goals;
// };
// Striker.prototype = Object.create(Player.prototype);
// const giroud = new Striker("Giroud", "Milan AC", 9, 22);
// console.log(giroud);
// giroud.info();

// // Coding Challenge

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

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`${this.make} has been charged up to ${this.charge}%`);
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make}: current speed is ${this.speed} | current battery is ${this.charge}`
//   );
// };
// const testla = new EV("Tesla", 120, 23);

// testla.accelerate();
// testla.brake();
// console.log(testla);
// testla.chargeBattery(100);
// console.log(testla);
// testla.chargeBattery(45);

// console.log(testla);
// testla.accelerate();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make}'s speed has been increased to ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make}'s speed has been decreased to ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EV extends Car {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.charge--;
//     console.log(
//       `${this.make}: current speed is ${this.speed} | current battery is ${this.charge}`
//     );
//   }
// }
// const tesla = new EV("Tesla", 120, 99);
// tesla.accelerate();
// console.log(tesla.speedUS);
// tesla.speedUS = 111;
// console.log(tesla);

const PersonProto = {
  calcAge() {
    console.log(`${2023 - this.birthYear}`);
  },

  init(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  },
};

const chris = Object.create(PersonProto);
chris.birthYear = 1997;
chris.calcAge();

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstname, birthYear, favouriteCourse) {
  PersonProto.init.call(this, firstname, birthYear);
  this.favouriteCourse = favouriteCourse;
};

const bikoy = Object.create(StudentProto);
bikoy.init("chris", 2000, "Maths");
bikoy.favouriteCourse = "Programming";
console.log(bikoy);
bikoy.calcAge();
