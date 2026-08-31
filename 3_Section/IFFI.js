//Immmediately Invoked Funciton Expressions{IFFI}

(function log(){
    console.log("This is an IFFI function")  //This is an IFFI function because it is a function that is defined and immediately invoked. It is a common pattern in JavaScript to create a new scope and avoid polluting the global scope with variables and functions.
})();

//  The IFFI function is a self-executing anonymous function that is defined and immediately invoked. It is a common pattern in JavaScript to create a new scope and avoid polluting the global scope with variables and functions. The IFFI function is executed immediately after it is defined, and it can be used to encapsulate code and create a private scope for variables and functions.

(  () => {
    console.log("This is an IFFI function using arrow function")  //This is an IFFI function using arrow function because it is a self-executing anonymous function that is defined and immediately invoked using the arrow function syntax.
})();

(  (name ) => {
    console.log(`Hello ${name}, Welcome to your Code Junction!`)
})('Bibek');