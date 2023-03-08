"use strict";

const Player = function (team, number, position) {
  this.team = team;
  this.number = number;
  this.position = position;
};

const messi = new Player("Barça", 10, "RW");
console.log(messi);
console.log(messi.team);

messi.team = "PSG";
messi.number = 30;
console.log(messi);
