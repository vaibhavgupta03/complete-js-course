//Dates
//Date is a built-in object in JavaScript. It stores the date, time and provides methods for date/time management.
//Date objects are created with the new Date() constructor.

let myDate = new Date();
/* console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate) */

//let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 0, 23, 3, 5)

//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
/*console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);*/

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))