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

// const rest1 = {
//   name: "One",
//   numGuests: 5,
// };
// const rest2 = {
//   name: "Two",
//   owner: "Christiano",
// };

// // rest1.numGuests = rest1.numGuests || 12;
// // rest2.numGuests = rest2.numGuests || 12;
// rest2.numGuests ||= 15;
// rest1.numGuests &&= 0;
// console.log(rest1, rest2);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(playersFinal);

// // const team1 = game.odds.team1;
// // const team2 = game.odds.team2;
// // const draw = game.odds.x;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...num) {
//   let i;
//   for (i = 0; i < num.length; i++) {
//     console.log(num[i]);
//   }
//   console.log(i);
// };
// printGoals("Davies", "Muller", "Lewandoski", "Kimmich");
// printGoals(...game.scored);

// team1 < team2 && console.log(`${game.team1} is more likely to win`);
// team1 > team2 && console.log(`${game.team2} is more likely to win`);

// for (const [i, player] of players2.entries())
//   console.log(`${i + 1}: ${player}`);

// for (const elements of Object.keys(game)) console.log(elements);

// for (const value of Object.values(game)) console.log(value);

// for (const entries of Object.entries(game)) console.log(entries);

// for (let i = 0; i < game.scored.length; i++)
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// let oddsum = 0;
// const values = Object.values(game.odds);
// for (const odd of values) {
//   oddsum += odd;
// }
// const avg = oddsum / values.length;
// console.log("Average odd is " + avg);

// const entries = Object.entries(game.odds);
// for (const [team, odd] of entries) {
//   console.log(
//     team !== "x"
//       ? `Odd of victory ${game[team]}: ${odd}`
//       : `Odd of draw: ${odd}`
//   );
// }
// console.log(Object.entries(game.odds));

// const arr = ["chris", "rubie", "bikoy"];
// console.log(arr.entries());

// const people = new Set(["rubie", "chris", "bikoy", "rubie", "chris"]);

// console.log(new Set("ikiiko"));
// console.log(people.size);
// people.delete("bikoy");
// people.add("lamperouge");
// console.log(people.has("rubie"));
// console.log(people.has("ko"));
// console.log(people);

// const arr = [1, 2, 22, 2, 3, 3, 3];
// const set = new Set(arr);
// console.log(arr, set);
// const array = [...set];
// console.log(array);

// const mappp = new Map();
// mappp.set("time", "six");
// console.log(mappp.set("meteo", "10 °C").set("ok", 10));
// console.log(mappp.get("time"));

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// const [...events] = new Set(gameEvents.values());
// console.log(events);
// const events1 = [...new Set(gameEvents.values())];
// console.log(events1);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(
//   `An event happened, on average, every ${Math.trunc(
//     92 / gameEvents.size
//   )} minutes`
// );

// for (const [min, eve] of gameEvents) {
//   console.log(
//     min <= 45 ? `[FIRST HALF] ${min}: ${eve}` : `[SECOND HALF] ${min}: ${eve}`
//   );
// }

// const airline = "TAP Air Portugal",
//   plane = "A320";

// console.log(airline.indexOf("P"));
// console.log(airline.lastIndexOf("P"));
// console.log(airline.indexOf("Portugal"));

// console.log(airline.slice("8"));
// console.log(airline.slice(8, 10).length);
// console.log(airline.slice(airline.lastIndexOf(" "), airline.length));
// console.log(
//   airline.slice(airline.lastIndexOf(" "), airline.length).toUpperCase()
// );
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// console.log(airline.slice(-1));

// let ok = "nOtOk";
// ok = ok.toUpperCase();
// const tmp = ok.slice(1).toLowerCase();
// ok = ok[0] + tmp;
// console.log(ok);
// ok = "    ekjdke,YFEZJBFENNFREjdkejde  \n\n";
// console.log(ok);
// const okCorrect = ok.trim().toLowerCase();
// console.log(okCorrect);

// const annoucement = "Hello my friend, how are you? ";
// console.log(
//   annoucement.replace("Hello", "Good afternoon").replace("?", " doing today?")
// );

// console.log(annoucement.startsWith("Z"));
// console.log(annoucement.endsWith("?"));
// console.log(annoucement.includes("Hello"));
// console.log(annoucement.split(" "));

// const word = "coucou";
// console.log(word.replace(word[0], word[0].toUpperCase()));

// const num = 123456789;
// const hide = String(num).slice(-4);
// console.log(hide.padStart(String(num).length, "+"));

// console.log(annoucement.repeat(3));

// underscore_case;
//  first_name;
// Some_Variable;
//   calculate_AGE;
// delayed_departure;

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;

//   const arr = text.split("\n");
//   for (const [i, line] of arr.entries()) {
//     const [first, second] = line.trim().toLowerCase().split("_");
//     const secondCorrect = second.replace(second[0], second[0].toUpperCase());
//     const almost = first + secondCorrect;
//     console.log(`${almost.padEnd(20)} ${"$".repeat(i + 1)}`);
//   }
// });

// const fun = function () {
//   const
// }

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const split = flights.split("+");
console.log(split);
for (const line of split) {
  const [info1, info2, info3, info4] = line.split(";");
  const new2 = info2.slice(0, 3).toUpperCase();
  const new3 = info3.slice(0, 3).toUpperCase();
  const new1 = info1.slice(1).replace("_", " ");
  const new1Correct = new1.startsWith("Del") ? `!!! ${new1}` : `${new1}`;
  const new4 = info4.replace(":", "h");

  const output = `${new1Correct} from ${new2} to ${new3} (${new4})`;
  console.log(`${output.padStart(45)}`);

  /* console.log(info1, info2, info3, info4); */
}
