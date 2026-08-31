// // Singleton Object: They are created using object literals and are used when we need to create only one instance of an object. They are useful for managing global state or providing a single point of access to certain functionality. They are created through constructor functions or classes and can be instantiated multiple times. They are useful for creating multiple instances of an object with similar properties and methods.

// //Object literals (part 1............)

// const mySym = Symbol("key1")

// const jsUser ={     // This is a singleton object created using an object literal
//     name: "John",
//     age: 30,
//     [mySym]: "key1",    ///Symbols are written in square brackets when used as property keys in an object literal.

//     email: "john@example.com"
// }
// console.log(jsUser.age)  // Output: 30

// //Another Method for accessing the properties of the onjects:
// console.log(jsUser['email'])  // Output: john@example.com

// console.log(jsUser[mySym])  // Output: key1

// jsUser.email = "rijalbivek@gmail.com"
// //Object.freeze(jsUser)  // This will prevent any further modifications to the jsUser object


// jsUser.email = "bscbajb@"  // This will not change the email property of the jsUser object because it is frozen


// console.log(jsUser['email'])  // Output: rijalbivek@gmail.com


// //function Using........
// jsUser.greet = function(){
//     console.log("Hello coder! Como Estas?")
// }
// console.log(jsUser.greet())

// jsUser.greeting = function(){
//     console.log(`Como estas senor${jsUser.name}?`)  // This is a method added to the jsUser object that uses the name property of the object to greet the user.
// }
// console.log(jsUser.greeting())


//OBJECTS PART 2............

// const instaUser =new Object()// This is a singleton object created using the Object constructor

const instaUser ={}
instaUser.id = "john_doe"
instaUser.name = "JOHN"
// console.log(instaUser)


// const regular = {
//     email: "abcd@efgh",
//     fullname: {
//         username:{
//             fullname: "john Doe",
//             age: 30,
//             firstname: "John",
//             lastname: "Doe"
//         } 
        
//     }
// }
// regular.fullname.username.lastname = "Rijal"
// //console.log(regular.fullname.username.lastname)

const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {4: "four", 5: "five", 6: "six"}
// const obj3 =Object.assign({}, obj1, obj2) // This will merge the properties of obj2 into obj1 and return the modified obj1. The original obj1 will be modified and obj2 will remain unchanged.
const obj3 = {...obj1, ...obj2} // This will create a new object that contains all the properties of obj1 and obj2. The original obj1 and obj2 will remain unchanged.
//This is the same method we used to merge two or more arrays

//console.log(obj3)

const users = [
    {
        id: 1,
      
      email: "user1@example.com",
    },
    {
        id: 2,
        name: "User 2",
    }
]
users[0].mail
console.log(users[0].email)
console.log(instaUser)

console.log(Object.keys(instaUser)) // This will return an array of the keys of the instaUser object for this: keys are as: id, name.

console.log(Object.values(instaUser)) // This will return an array of the values of the instaUser object

console.log(Object.entries(instaUser)) // This will return an array of the key-value pairs of the instaUser object

console.log(instaUser.hasOwnProperty('isLoggedIn')) // This will return true if the instaUser object has the property isLoggedIn, and false otherwise. Since we have not defined the isLoggedIn property in the instaUser object, this will return false.


const course = {
    title: "JavaScript",
    price: 99.99,
    instructor: "John Doe",
}

// console.log(course.title)


const {title: coursetitle} = course // This is called destructuring assignment. It allows us to extract the title property from the course object and assign it to a variable called title. Now we can use the title variable to access the value of the title property of the course object.

console.log(coursetitle) // Output: JavaScript

