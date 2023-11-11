//Sigleton

const tinderUser = new Object() //=> singleton object

//const tinderUser = {} //not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Vaibhav"
tinderUser.age = 20
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Vaibhav",
            lastName: "Singh"
        }
    }
} //object k andr object input kr skte h jitni mrzi nesting kr kste h wo aaram se usse access aur edit kr skte h.

//Accessing Object-in-object

//console.log(regularUser.fullname?.userfullname.firstName); //?(optional-chaining)
//optional chaining
//agar userfullname nhi h to undefined return kr dega
// tells ki ye paya jata h ki nhi to check krke print krta h

const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    c: 3,
    d: 4
}

//const obj3 = {obj1, obj2} //problem is that ki object k andr object aa jayega

const obj3 = Object.assign({},obj1, obj2);//assign function returns the concatenation of two objects
const obj4 = { ...obj1, ...obj2 } //spread operator

/*
console.log(obj3)
console.log(obj4)
*/

/*
console.log(tinderUser);

console.log(Object.keys(tinderUser));//saaari keys print krne k liye

console.log(Object.values(tinderUser));//saari values print krne k liye

console.log(Object.entries(tinderUser));//saari entries key+value pair print krne k liye

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//check krta h ki property present h ki nhi

*/

//Object Destructuring
const course = {
    name: "JavaScript",
    price: 1000,
    courseInsturctor:"Hitesh"
}

//console.log(course.courseInstructor);

const { courseInsturctor: vai } = course

//console.log(vai);

/*
{
    "name": "Hitesh",
    "courseName": "Javascript",
    "price": "free"
}

*/

