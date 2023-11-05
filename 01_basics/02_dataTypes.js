"use strict"; //treat all JS code as newer version

//typeof returns the type of the variable.

// 1. Primitive Data Types

// 1.1. Number
let num = 123; //range 2 to power 53
console.log(num); // 123
console.log(typeof num); // number

// 1.2 String
let str = "Hello World";
console.log(str); // Hello World
console.log(typeof str); // string

// 1.3 Boolean 
let bool = true;
console.log(bool); // true
console.log(typeof bool); // boolean

// 1.4 Undefined
let undef;
console.log(undef); // undefined
console.log(typeof undef); // undefined

// 1.5 Null
let nul = null;
console.log(nul); // null
console.log(typeof nul); // object

// 1.6 Symbol
let sym = Symbol(); //They are unique
console.log(sym); // Symbol()
console.log(typeof sym); // symbol

// 1.7 BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n
console.log(typeof bigInt); // bigint

// 2. Non-Primitive Data Types

// 2.1 Object
let obj = {
  name: "John",
  age: 30,
};
console.log(obj); // { name: 'John', age: 30 }
console.log(typeof obj); // object

// 2.2 Array
let arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]
console.log(typeof arr); // object

// 2.3 Function
let func = function () {
  return "Hello World";
};
console.log(func); // [Function: func]
console.log(typeof func); // function

// 2.4 Date
let date = new Date();
console.log(date); // 2021-04-16T07:33:42.454Z
console.log(typeof date); // object

// 2.5 RegExp
let reg = /Hello World/;
console.log(reg); // /Hello World/
console.log(typeof reg); // object

// 2.6 Error
let err = new Error("Error Message");
console.log(err); // Error: Error Message



//alert (3+3) //we are using nodejs, not browser