// #Primitive Data Types

const { memo } = require("react")

// 7 types of primitive data types in JavaScript: 1. String 2. Number 3. Boolean 4. Undefined 5. Null 6. Symbol 7. BigInt


    // Symbol: 

    const id = Symbol("id")  //Symbol is a unique and immutable primitive value that can be used as an identifier for object properties. It is often used to create private properties or to avoid name collisions in objects.
    const anotherid =Symbol("123");
    console.log(id===anotherid)  //false



// Js is a dynamically typed language, which means that we don't have to specify the data type of a variable when we declare it. The data type is determined automatically based on the value assigned to the variable.

// Reference type Data Types or Non Primitive Data Types:
        // 1. Object 2. Array 3. Functions

const pronouns =[ "he", "she", "it", "they", "we", "you", "I"] //Array created using array literal syntax

let name = {      //Object created using object literal syntax
    name: "Rijal",
    age : 22,
}
const afunction = function(){       //Function created using function expression syntax
    console.log("Greetings Mate!")
}

console.log(pronouns)   // displaying the data present in the pronouns array
console.log(name)     // displaying the data present in the object
console.log(afunction()) // displaying the result of the function call



// *********************************************************

// stack (primitive memory) --> value stored directly in the variable

let myName ="RijalBibek" //myName is a variable that holds the value "RijalBibek". The value is stored directly in the variable, which is a characteristic of primitive data types. When we assign a new value to myName, it will overwrite the previous value, and the old value will be lost.
let anotherName = myName //anotherName is a new variable that holds the value of myName. Since myName is a primitive data type, the value is copied to anotherName. Now, both myName and anotherName hold the same value "RijalBibek". If we change the value of myName, it will not affect anotherName, and vice versa, because they are independent variables that hold their own values.
anotherName ="Bharatpur, Nepal"
console.log(myName) //RijalBibek
console.log(anotherName) //RijalBibek

// heap (reference memory) --> value stored in the heap and reference to that value is stored in the variable

let user1 = {
    name: "Rijal",
    age: 22,
}
let user2 = user1 //user2 is a new variable that holds the reference to the same object in memory as user1. Since objects are reference types, both user1 and user2 point to the same object in memory. If we change the value of a property in the object through either user1 or user2, it will affect both variables because they reference the same object.
user2.namee ="bharatpur" // changing the name property of the object through user2
user2.age = 33; // changing the age property of the object through user2
console.log(user1) // { name: 'Rijal', age: 33, namee: 'bharatpur' }
console.log(user2) // { name: 'Rijal', age: 33, namee: 'bharatpur' }

// Note : here the user1 and user2 are referencing the same object in memory, so any changes made to the object through either variable will be reflected in both variables. In this case, we added a new property namee and changed the age property, which is why both user1 and user2 show the updated values when we log them to the console.
