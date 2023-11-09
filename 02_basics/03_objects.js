//singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: 'Vaibhav',
    [mySym]: "key1",
    age: 20,
    email: 'vaibhav@google.com',
    isLoggedIn: false
}
//console.log(JsUser);
/*
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);
*/
//console.log(typeof JsUser[mySym]);
//Object.freeze(JsUser);//Jsuser ki value freez kr dega aur change ni hone dega

JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();