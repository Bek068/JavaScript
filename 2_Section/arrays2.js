
const marvel_heroes=["thor","ironman","hulk","captain america"];
const dc_heroes =["superman","batman","flash"];

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // ["thor", "ironman", "hulk", "captain america", ["superman", "batman","flash"]]

allHeroes =  [...marvel_heroes, ...dc_heroes] // or: marvel_heroes.concat(dc_heroes)
console.log(allHeroes) // ["thor", "ironman", "hulk", "captain america", "superman", "batman","flash"]


const numbers = [1,2,3,[4,5,6,[7,8,9],11,10],11]
const all_numbers = numbers.flat(Infinity)
console.log(all_numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10, 11]



console.log(Array.isArray("Bibek")) // false
console.log(Array.from("Bibek")) // ["B", "i", "b", "e", "k"]
console.log(Array.from({name: "Bibek"})) // [undefined] - Array.from() creates an array from an array-like or iterable object. In this case, the object {name: "Bibek"} is not iterable, so it returns an array with a single undefined element.

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300] - Array.of() creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. In this case, it creates an array containing the three score variables.