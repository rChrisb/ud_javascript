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



const calcAverage =(score1, score2, score3) =>
{
	return (score1+score2+score3)/3
}
// console.log(calcAverage(1, 8, 3))
const D_score = calcAverage(85, 54, 41), K_score = calcAverage(23, 34, 27);
const checkwinner = (firstteamscore, secondteamscore) =>
{
	if (firstteamscore >= secondteamscore*2)
	{
		console.log(`The winners are the Dauplhins (${firstteamscore} vs ${secondteamscore})!!`)
	} else if (secondteamscore >= firstteamscore*2)
	{
		console.log(`The winners are the Koalas (${secondteamscore} vs ${firstteamscore})!!`)
	} else {console.log("There are no winner")}
}
checkwinner(D_score, K_score);
