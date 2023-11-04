"use strict"; //treat all JS code as newer version

// 1. Primitive Data Types

// 1.1. Number
let num = 123;
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
let sym = Symbol();
console.log(sym); // Symbol()
console.log(typeof sym); // symbol

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

// 3. Type Conversion
// 3.1 String to Number
let strNum = "123";
console.log(strNum); // 123
console.log(typeof strNum); // string
let num1 = Number(strNum);
console.log(num1); // 123
console.log(typeof num1); // number

// 3.2 Number to String
let numStr = 123;
console.log(numStr); // 123
console.log(typeof numStr); // number
let str1 = String(numStr);
console.log(str1); // 123
console.log(typeof str1); // string
let str2 = numStr.toString();
console.log(str2); // 123
console.log(typeof str2); // string

// 3.3 String to Boolean
let strBool = "true";
console.log(strBool); // true
console.log(typeof strBool); // string
let bool1 = Boolean(strBool);
console.log(bool1); // true
console.log(typeof bool1); // boolean

// 3.4 Boolean to String
let boolStr = true;
console.log(boolStr); // true
console.log(typeof boolStr); // boolean
let str3 = String(boolStr);
console.log(str3); // true
console.log(typeof str3); // string
let str4 = boolStr.toString();
console.log(str4); // true
console.log(typeof str4); // string

// 3.5 Number to Boolean
let numBool = 1;
console.log(numBool); // 1
console.log(typeof numBool); // number
let bool3 = Boolean(numBool);
console.log(bool3); // true
console.log(typeof bool3); // boolean

// 3.6 Boolean to Number
let boolNum = true;
console.log(boolNum); // true
console.log(typeof boolNum); // boolean
let num3 = Number(boolNum);
console.log(num3); // 1
console.log(typeof num3); // number

// 3.7 String to Object
let strObj = "Hello World";
console.log(strObj); // Hello World
console.log(typeof strObj); // string
let obj1 = new String(strObj);
console.log(obj1); // [String: 'Hello World']
console.log(typeof obj1); // object
let obj2 = Object(strObj);
console.log(obj2); // [String: 'Hello World']
console.log(typeof obj2); // object

// 3.8 Object to String
let objStr = new String("Hello World");
console.log(objStr); // [String: 'Hello World']
console.log(typeof objStr); // object
let str5 = objStr.toString();
console.log(str5); // Hello World
console.log(typeof str5); // string
let str6 = String(objStr);
console.log(str6); // [String: 'Hello World']
console.log(typeof str6); // string

// 3.9 Number to Object
let numObj = 123;
console.log(numObj); // 123
console.log(typeof numObj); // number
let obj3 = new Number(numObj);
console.log(obj3); // [Number: 123]
console.log(typeof obj3); // object
let obj4 = Object(numObj);
console.log(obj4); // [Number: 123]
console.log(typeof obj4); // object

// 3.10 Object to Number
let objNum = new Number(123);
console.log(objNum); // [Number: 123]
console.log(typeof objNum); // object
let num5 = objNum.valueOf();
console.log(num5); // 123
console.log(typeof num5); // number
let num6 = Number(objNum);
console.log(num6); // 123
console.log(typeof num6); // number

//alert (3+3) //we are using nodejs, not browser