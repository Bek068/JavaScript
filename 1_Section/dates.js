//Dates:

let myDate = new Date()
console.log(myDate) //Returns date and time 

console.log(myDate.toString())  //Returns a string representation of a date. The format of the string depends on the locale.

console.log(myDate.toLocaleDateString()) //Converts a date to a string by using the current or specified locale.   

console.log(myDate.toLocaleString())    //Converts a date and time to a string by using the current or specified locale.

///Displaying A custom Date in the JS Console..
let myCreatedDate = new Date(2026,4,22) //Months starts from 0 in JS.
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date(2026,4,22,17,55)
console.log(myCreatedDate1.toLocaleString()) //returns custom date and time. It first returns Date in dd/mm/yyy and time respectively


//TimeStamps..
let myTimeStamp = Date.now()
// console.log(myTimeStamp) //returns the exact timestamp of the current locale time

console.log(myCreatedDate.getTime()) //returns the timestamp of the creation of custom date in milliseconds

console.log(Math.floor(Date.now()/1000))    //converts the milliseconds TImestamp into Seconds

let newDate = new Date()
console.log(newDate.getFullYear())  //Returns the Year of the current Date..and same can be done for day and month too....


const Date1 = new Date()
console.log(Date1.toLocaleDateString())
console.log(Date1.toLocaleString())
console.log(Date1.getDate()) //Returns the day of the month for the specified date according to local time.
