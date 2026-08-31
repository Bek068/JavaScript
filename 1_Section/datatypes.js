// familiar data types in JavaScript.  #JS-5.........

/* "use strict";
treats all the JS code as modern and secure. It prevents us from using undeclared variables and other bad practices in JavaScript.  */

// alert("hello")  we are using node js to run our code so we cannot use alert function in node js. Alert is used in browser to display a message to the user.

let name = "Bibek";    //String data type
let age = 21           //Number data type
let isLoggedIn = true  // boolean data type


console.log(typeof("Bibek")); // it will print string because the data type of "Bibek" is string.


// number => 2 to power 53
//bigint => 2 to power 1024
//string
//boolean => true or false
// null => standalone value that represents nothing or empty value

console.log(typeof (null));

//undefined => variable has been declared but the value has not been assigned to it.

//symbol => used to create unique identifiers fofr objects. It is a primitive data type that is used to create unique identifiers for objects. It is not a string or a number, but it is a unique value that can be used as a key in an object.

//object => used to store collections of data and more complex entities. It is a data type that is used to store collections of data and more complex entities. It is a collection of properties, where each property is a key-value pair. The key is a string, and the value can be any data type, including another object. Objects are used to represent real-world entities and to organize data in a structured way.