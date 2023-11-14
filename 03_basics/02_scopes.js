//Scopes

//var c = 300;//Global Scope

//let a = 300;

if (true) {
    let a = 10
    const b = 20
    //var c = 30 //Block scope
}


//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "Vaibhav"

    function two() {
        const website = "Github"
        console.log(username);
    }
    //console.log(website);

    two();
}

//one()


if (true) {
    const username = "Vaibhav"
    if (username==="Vaibhav") {
        const website = "Github"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


//+++++++++++++++++++++++++++++++++

console.log(addOne(5))//Hoisting 

function addOne(num) {
    return num + 1;
}


const addTwo = function (num) {
    return num + 2
}  //if function is defined and stored in a variable then hoisting not works and we can't use before definition.
addTwo(5);