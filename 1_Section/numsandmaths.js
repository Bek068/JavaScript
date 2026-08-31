const score = 400 // automatically defined number type..
console.log(score)

const newScore = new Number(300); //it specially defined object of type Number
console.log(newScore)

console.log(newScore.toString())    //toString() method returns a string representing the specified Number object. It converts the number to a string and returns it.
console.log(newScore.toFixed(1))    //toFixed() method formats a number using fixed-point notation. It returns a string representing the number in fixed-point notation with the specified number of digits after the decimal point.

const otherNumber = 12333.33309
console.log(otherNumber.toPrecision(3)) //toPrecision() method formats a number to a specified length. It returns a string representing the number to the specified precision in fixed-point or exponential notation.   

const hundreds = 1000000
console.log(hundreds.toLocaleString()) //adds comma according to us standards at once tenth hundredth and so on places
console.log(hundreds.toLocaleString('en-IN')) // same but in Indian standard format


console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-4));
console.log(Math.round(4.7))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.7))
console.log(Math.max(1,3,5,7,9,100))  // outputs random numbers between 0 and 1


console.log(Math.random()*10 + 1) // outputs random numbers between 1 and 9

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1)) + min)   // This method prints the Random numbers between the minimum and maximum digits which are initialized as 10 and 20 respectively for this instance of code.
//the +1 ensures that the minimum number doesnot falls below 1 i.e. when the random number becomes 0.01, then the floor function sets the number as zero. SO in order to maintain the least integer as 1, the number 1 is added to the method.

console.log(Math.floor(Math.random()*(max-min +1)) + min)
