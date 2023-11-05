const name = "Vaibhav"
const repoCount = 18;
//console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const newName = new String('vaibhav')
//console.log(newName)

//console.log(newName.length);
//console.log(newName.toUpperCase());
//console.log(newName.charAt(2));
//console.log(newName.indexOf('a'));

/* console.log(newName.slice(0, 3));
console.log(newName.slice(-5));
console.log(newName.substring(0, 4));
*/

// In slice
// -ve value means from last
// 0,3 means from 0 to 3
// 0,-3 means from 0 to -3
// -3 means last three characters

// In subSTring
// 0,3 means from 0 to 3
// -ve not allowed

const newString = "  vaibhav  "
console.log(newString)
console.log(newString.trim())

// trimStart
// trimEnd

const url = "https://vaibhav.com/vaibhav%20gupta"

console.log(url.replace('%20', '-'))

console.log(url.includes('vaibhav'))

const gitName = "Vaibhav-Gupta"
console.log(gitName)
console.log(gitName.split('-'))
