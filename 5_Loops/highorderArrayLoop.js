const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is: ${greet}`);
}

// MAPS


const map = new Map()
map.set("name", "bob")
map.set("age", 30)
console.log(map)

for (const [key, value] of map.entries()) {     //for of loop is used to iterate over the entries of the map. The entries() method returns an iterator that contains an array of [key, value] pairs for each element in the map. In this case, it will iterate over the entries "name" and "age" of the map and print their corresponding values.
    console.log(`Key is: ${key}, Value is: ${value}`);
}

//Object

const myObj = {
    game1 : 'chess',
    game2 : 'football',
    game3 : 'cricket'
}
for(const key in myObj){    //for in loop is used to iterate over the keys of an object. In this case, it will iterate over the keys "game1", "game2", and "game3" of the myObj object.
    console.log(`${key} : ${myObj[key]}`);
}

const games =['gta-V', 'Spider-man', 'Elden Ring', 'God of War']
for(const key in games){
    console.log(key)
    console.log(games[key])
}

