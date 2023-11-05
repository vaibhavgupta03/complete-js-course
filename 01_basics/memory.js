//Memories In Javascript

// Stack, Heap

// Stack:
// - Used in Primitive Data Types
// - Variable ki copy hume milti h
// - Changes made in stack memory does not affect the original value

let myName = "Vaibhav"
let copyMyName = myName
//console.log(copyMyName)
copyMyName = "Rohit"
//console.log(copyMyName)
//console.log(myName)

// Heap:
// - Used in Reference Data Types
// - Variable ki copy nhi milti h balki uska reference milta h
// - Changes made in heap memory affect the original value

const user1 = { name: "Rohit", age: 21 }
const user2 = user1
console.log(user2)
user2.name = "Vaibhav"
user1.age = 20
console.log(user2)
console.log(user1)