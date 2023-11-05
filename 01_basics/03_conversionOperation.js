let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1;false => 0
// " " => 0
// null => 0
// undefined => NaN

let isLoggedIn = "vaibhav";
console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 0 => false 1 => true
// "" => false " " => true
// "vaibhav" => true
// null => false
// undefined => false

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"
// 33.33 => "33.33"
// [1,2,3] => "1,2,3"
