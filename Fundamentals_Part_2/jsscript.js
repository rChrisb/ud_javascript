// testing why use strict is important for errors
'use strict'; 
// let isGood = false;
// const withsugar = true;
// if (withsugar)
// {
// 	isGood = true; // test with mispelling isgood or isgoo or isGoodd to see how console reacts with & without use strict
// }
// if (isGood){
// 	console.log("Miam")
// }
// let if = "yes";
// console.log(if)


 /* const ballonDor = (firstname, number_goals, number_assits) => {
	return number_assits > 20 && number_goals >= 35 ? `With ${number_goals} goals & ${number_assits} assits, ${firstname} is the best in the World` : `${firstname}'s stats are not enough to win the Ballon d'Or`
 }
 const Messi = ballonDor("Leo Messi", 35, 30);
 const Mbappe = ballonDor("Kylian Mbappe", 50, 12);
 const Cristiano = ballonDor("CR7", 8, 1);

 console.log(Messi)
 console.log(Mbappe)
 console.log(Cristiano) */

//  const ballondorcheck = function stats(firstname, number_goals, number_assits)
//  {
// 	return (number_assits > 20 && number_goals >= 35) ? `With ${number_goals} goals & ${number_assits} assits, ${firstname} is the best in the World` : `${firstname}'s stats are not enough to win the Ballon d'Or`
//  }
//  const Messi = ballondorcheck("Leo Messi", 35, 30);
//  const Mbappe = ballondorcheck("Kylian Mbappe", 50, 12);
//  const Cristiano = ballondorcheck("CR7", 8, 1);

//  console.log(Messi)
//  console.log(Mbappe)
//  console.log(Cristiano)



// const calcAverage =(score1, score2, score3) =>
// {
// 	return (score1+score2+score3)/3
// }
// // console.log(calcAverage(1, 8, 3))
// const D_score = calcAverage(85, 54, 41), K_score = calcAverage(23, 34, 27);
// const checkwinner = (firstteamscore, secondteamscore) =>
// {
// 	if (firstteamscore >= secondteamscore*2)
// 	{
// 		console.log(`The winners are the Dauplhins (${firstteamscore} vs ${secondteamscore})!!`)
// 	} else if (secondteamscore >= firstteamscore*2)
// 	{
// 		console.log(`The winners are the Koalas (${secondteamscore} vs ${firstteamscore})!!`)
// 	} else {console.log("There are no winner")}
// }
// checkwinner(D_score, K_score);

// const lastchamps = ['argentina', 'france', 'germany', 'spain'];
// // console.log(lastchamps[3])
// // console.log(lastchamps.length)
// // console.log(lastchamps[lastchamps.length - 3])
// // lastchamps[5] = 'italy'
// // console.log(lastchamps, lastchamps[4])
// lastchamps.push('ITALY')
// // lastchamps.unshift('we will see')
// lastchamps.pop(); // remove last element of an array
// lastchamps.shift(); // remove first element of an array
// console.log(lastchamps)
// console.log(lastchamps.indexOf('france'))
// console.log(lastchamps.includes('cameroon'), lastchamps.includes('spain')) // includes method returns true or false
// if (!lastchamps.includes('cameroon'))
// console.log('Cameroon did NOT win any of the last WC')

// const calctip = bill =>
// {if (bill <= 300 && bill >= 50){
// 	bill = bill * 0.15;
// } else {
// 	bill = bill * 0.2;
// } return bill;
// }
// const bills = [125, 555, 44];
// console.log(bills)
// const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])]
// console.log(tips)
// const total = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]]
// console.log(total)

const jonas = {
	name : 'Jonas',
	friends: ["Mike", "Peter", "Steven"],
	job: "teacher",
	birthYear: 1997,
	/* hasDriversLicence: true, */
	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},
	getSummary: function () {
		if (this.hasDriversLicence) console.log(`${this.name} is a ${this.calcAge()}-year old ${this.job}, and he has a driver's lincence`)
	else console.log(`${this.name} is a ${this.calcAge()}-year old ${this.job}, and he has NOT a driver's lincence`)
	}

};
jonas.getSummary();
// console.log(`${jonas.name} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

