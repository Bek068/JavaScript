const emailId = "rijal.bebek68@gmail.com"
if(emailId){
    console.log("User Email-Id is valid and verified..")
} else {
    console.log("The user email-Id is invalid and cannot be verified.")
}


// falsy values in JavaScript
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN

// truthy values in JavaScript
// 1. true
// 2. any non-zero number (e.g., 1, -1, 3.14)
// 3. any non-empty string (e.g., "hello", "0", "false")
// 4. any object (e.g., {}, [])
// 5. any function (e.g., function() {})


const empObj = {
    name: "Bibek_Rijal"
}       // an empty object, which is a falsy value in JavaScript
if(Object.keys(empObj).length===0){     // checking if the object is empty by checking the length of its keys
    console.log("The Object is empty...")
} else{
    console.log(empObj.name)
}


// Nullish Coalescing Operator (??) in JavaScript

let val1; let val2;
val1 = 5 ?? 10; // val1 will be 5 because 5 is not null or undefined

// ?? operator checks if the left-hand side value is null or undefined, if it is, it returns the right-hand side value, otherwise it returns the left-hand side value.

val2 = undefined ?? 45; // val2 will be 45 because undefined is nullish

console.log(val1)
console.log(val2)


//  Ternary Operator in JavaScript

// condition ? true : false


const age = 20;
age >= 15 ? console.log("Less than 15") : console.log("More than 15")

const magicNum = 55;
magicNum >= 54 ? console.log("So close... Try again") : console.log("You bet too High on this...")