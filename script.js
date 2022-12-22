// console.log("Il a pas dit \"Bonjour\"")
// console.log("Du coup, il s'est fait niquer sa mère!!")

// // alert("LETSGOOOO")
// currentYear = 2022;
// console.log(typeof currentYear)
// console.log(typeof "Hello")
// console.log(typeof 'Hello')

// let currentMonth;
// console.log(typeof currentMonth) /* undefined */

// const myName = "BIKOY"
// // name = "KOYBI" typeError: Assignment to constant variable.
// surname = "KOYBI";
// console.log(surname + ' '+ myName)
// let n = 1000 * 32;
// console.log(n)
// n %= 15;
// console.log(n)
// console.log(32000 % 15) // same result as n %=15
// console.log(currentYear < 2000) /*prints either 'true' or 'false" (currentYear is 2022 in line 5)*/

// TEST 1
// let heightMark, weightMark, heightJohn, weightJohn;
// heightMark = 1.69;
// weightMark = 78;
// heightJohn = 1.65;
// weightJohn = 92;

// let bmiMark = weightMark/heightMark**2
// console.log(`Mark's BMI is ${bmiMark}`)
// let bmiJohn = weightJohn/heightJohn**2
// console.log(`John's BMI is ${bmiJohn}`)
// let markHigherBMI = bmiMark > bmiJohn
// if (markHigherBMI){
// 	console.log("Mark's BMI is higher than John's")
// } else {
// 	console.log("John's BMI is higher than Mark's")
// }
// console.log(markHigherBMI)

//TEST2 (changing Mark's and John's DATAS)
/*heightMark = 1.88;
weightMark = 95;
heightJohn = 1.76;
weightJohn = 85;

bmiMark = weightMark/heightMark**2;
console.log(bmiMark)
bmiJohn = weightJohn/heightJohn**2
console.log(bmiJohn)

markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)*/

// console.log("hello\nguys")
// console.log("hello\n\
// dude")
// console.log(`hello
// guys`)

// let first = "chris", second = "rubz", third = "biks";
// let id = `Hello ${first}, my name is ${second} ${third}`;
// console.log(id)
// let age = 16;
// const majorAge = age >= 18;
// if (majorAge) {
// 	console.log(`I'm ${age} so I can drink as much as I want!!`);
// }
// else {
// 	console.log(`I am only ${age}, so my parent won't let me drink, I have to wait ${18 - age} years`);
// }



// let heightMark, weightMark, heightJohn, weightJohn;
// heightMark = 1.69;
// weightMark = 78;
// heightJohn = 1.95;
// weightJohn = 92;

// let bmiMark = weightMark/heightMark**2
// console.log(`Mark's BMI is ${bmiMark}`)
// let bmiJohn = weightJohn/heightJohn**2
// console.log(`John's BMI is ${bmiJohn}`)

// if (bmiMark > bmiJohn){
// 	console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
// } else {
// 	console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
// }

// let string = "31"
// let str_to_num = Number(string);

// console.log(str_to_num + 4)

// let n = 5;
// let num_to_str = String(n);
// console.log(25 + num_to_str)
// console.log(typeof num_to_str)

// let name = prompt("Maaan, who are you??");
// console.log(name);


/* TEST 1*/
// const D_score1 = 96, D_score2 = 108, D_score3 = 89, K_scrore1 = 88, K_scrore2 = 91, K_scrore3 = 110;
// const D_avgscore = (D_score1+D_score2+D_score3)/3, K_avgscore = (K_scrore1+K_scrore2+K_scrore3)/3;
// if (D_avgscore > K_avgscore){
// 	console.log("Dolphins are the wiinning team!! their average score is " + D_avgscore + " while Koalas averaged " + K_avgscore)
// }
// else if (D_avgscore === K_avgscore){
// 	console.log("There is a perfect draw! Both team averaged" + D_avgscore)
// }
// else {
// 	console.log("Koalas are the wiinning team!! their average score is " + K_avgscore + " while Dauplhins averaged " + D_avgscore)
// }

/*TEST 2*/
// const D_score1 = 97, D_score2 = 112, D_score3 = 101, K_scrore1 = 109, K_scrore2 = 95, K_scrore3 = 123;
// const D_avgscore = (D_score1+D_score2+D_score3)/3, K_avgscore = (K_scrore1+K_scrore2+K_scrore3)/3;
// if (D_avgscore > K_avgscore && D_avgscore >= 100){
// 	console.log("Dolphins are the wiinning team!! their average score is " + D_avgscore + " while Koalas averaged " + K_avgscore)
// }
// else if (D_avgscore === K_avgscore && D_avgscore >= 100){
// 	console.log("There is a perfect draw! Both team averaged" + D_avgscore + " so, they both win!!")
// }
// else if (D_avgscore < K_avgscore && K_avgscore >= 100){
// 	console.log("Koalas are the wiinning team!! their average score is " + K_avgscore + " while Dauplhins averaged " + D_avgscore)
// }
// else {
// 	console.log("Minimum score to win is 100, and neither team averaged that (Daulphins: " + D_avgscore +" and Koalas: "+ K_avgscore + " )" )
// }


/*TEST 3*/
const D_score1 = 97, D_score2 = 112, D_score3 = 101, K_scrore1 = 109, K_scrore2 = 95, K_scrore3 = 106;
const D_avgscore = (D_score1+D_score2+D_score3)/3, K_avgscore = (K_scrore1+K_scrore2+K_scrore3)/3;
if (D_avgscore > K_avgscore && D_avgscore >= 100){
	console.log("Dolphins are the wiinning team!! their average score is " + D_avgscore + " while Koalas averaged " + K_avgscore)
}
else if (D_avgscore === K_avgscore && D_avgscore >= 100){
	console.log("There is a perfect draw! Both team averaged " + D_avgscore + " so, they both win!!")
}
else if (D_avgscore < K_avgscore && K_avgscore >= 100){
	console.log("Koalas are the wiinning team!! their average score is " + K_avgscore + " while Dauplhins averaged " + D_avgscore)
}
else {
	console.log("Minimum score to win is 100, and neither team averaged that (Daulphins: " + D_avgscore +" and Koalas: "+ K_avgscore + " )" )
}