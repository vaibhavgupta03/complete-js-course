const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Batman", "Superman", "Flash"]

// Accessing an array

//console.log(marvel_heroes[0])

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)

//const allHeroes = marvel_heroes.concat(dc_heroes);
//console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //spread operator used to concat two arrays and return a third array

//console.log(all_new_heroes)

const another_Array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_Array = another_Array.flat(2);
//console.log(real_another_Array);

/*
console.log(Array.isArray("Vaibhav"))
console.log(Array.from("Vaibhav"))
console.log(Array.from({name:"Vaibhav"}))//interesting case
console.log(Array.from([1, 2, 3], x => x + x)) // Array.from can also be used to map an array
*/
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));