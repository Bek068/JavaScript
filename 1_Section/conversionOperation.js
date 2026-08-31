let score =33
let string = "33abc"
console.log(typeof score);              //number
console.log(typeof string);             //string

let valueInNumber = Number(string);
console.log(typeof valueInNumber)       //number
console.log(valueInNumber)              //NAN

// "33abc" is not a pure number, so it cannot be converted to a number, resulting in NaN (Not a Number).
//

let isLoggedIn = 1              // 1 is a truthy value, so when we convert it to a boolean, it will be true. And 0 is a falsy value, so when we convert it to a boolean, it will be false.
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


//Conversion from Number to a string...

let someNumber =166
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log("The number has been converted to a:", typeof stringNumber)

let firststring = "100"
let firstNumber = Number(firststring)
console.log(firstNumber)
console.log(typeof firstNumber)

let value =3
let negvalue = -value
console.log(negvalue)

