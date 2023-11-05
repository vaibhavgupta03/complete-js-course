// Array

const myHeroes = ["shaktiman", "spiderman", "batman", "ironman"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr2)

//Array Methods
myHeroes.push("superman");
myHeroes.push("Thor")
//console.log(myHeroes)
myHeroes.pop()
//console.log(myHeroes)

myHeroes.unshift("Vaibhav")//Add element at index 0
myHeroes.shift() //Remove element from index 0
//console.log(myHeroes)

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr)
// console.log(myArr[1]);

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(8)) //If element not present then indexof returns -1 of that element.
//console.log(myArr.indexOf(3)) //If element present then indexof returns index of that element.

const newArr = myArr.join()//converts array into string
/*
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)
*/
//Slice,Splice
//Slice
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newArr1 = arr.slice(2, 5)
console.log("A",arr)
console.log(newArr1)

//Splice
const newArr2 = arr.splice(2, 5)
console.log(newArr2)
console.log("B",arr)
