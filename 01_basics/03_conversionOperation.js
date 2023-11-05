let score = undefined

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1;false => 0
// " " => 0
// null => 0
// undefined => NaN

let isLoggedIn = "vaibhav";
//console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 0 => false 1 => true
// "" => false " " => true
// "vaibhav" => true
// null => false
// undefined => false

let someNumber = 33;
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"
// 33.33 => "33.33"
// [1,2,3] => "1,2,3"

//----------------------------------

//Operators

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 3);
// console.log(2 ** 3);
// console.log(2 % 3);

let str1 = "Hello"
let str2 = " Vaibhav"

//console.log(str1 + str2);

/* console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);*/ //string phle h toh bche hue saare last wale as a string treat honge
//console.log(1 + 2 + "2"); //agr string last h toh usme aage k saare operators ho jaenge aur last wale as a string treat honge


//console.log(1 + 2 + "2" - 2); //string k sath + operator hoga to woh concatenate krega otherwise wo operations perform krega in accordance with operators.

/* console.log(true);
console.log(+true);
console.log(-true);
console.log(+"");*/

let num1, num2, num3
num1 = num2 = num3 = 2 + 2;
//console.log(num1, num2, num3);//num1,num2,num3 ki value 4 hogi

let gameCounter = 100;
gameCounter++;//postfix
++gameCounter;//prefix
//console.log(gameCounter);