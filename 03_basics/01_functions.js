
function sayMyName() {
    console.log("Vaibhav");
}

//sayMyName();//ecexution
//sayMyName//reference

function addTwoNumbers(number1, number2)//parameters
{
    //let result = number1 + number2
    //return result

    return number1+number2
}

//addTwoNumbers(3, 4);//arguments
//addTwoNumbers(3, "a");

const result = addTwoNumbers(3, 3);
//console.log("Result :", result);

function loginUserMessage(username = "Sam") {
    if (!username) {
        return "Please provide a username"
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Vaibhav"));
//console.log(loginUserMessage(""));
//console.log(loginUserMessage());

function calculateCartPrice(...num1)//Rest Operator
{
    return num1
}

//console.log(calculateCartPrice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const user = 
{
    name: "Vaibhav",
    age: 21,
    address: "Mumbai"
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`)
}

//handleObject(user)

/*
handleObject({
    name: "Vaibhav",
    age: 21,
    address: "Mumbai"
})

*/

const myNewArray = [200, 300, 400]

function handleArray(anyArray) {
    return anyArray[1]
}

//console.log(handleArray(myNewArray))
//console.log(handleArray([200,400,600]));