// Day-21

let a = 20
// const b =30
// var c = 40

// If curly braces occurs alongside the function or the if-else statement then It declared as scope. There are three types of scopes in JavaScript: Global Scope, Local Scope and Block Scope.

if(true){   //This is a block scope because it is defined by the curly braces and the variables declared inside this block will only be accessible within this block.

    let a = 100
    const b = 200
    var c = 300
    console.log(a, b, c)   //this will print the values of a, b and c to the console but these are different from the global variables because they are declared inside the block scope of the if statement.
}

// Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code. In the above code, a, b and c are in the global scope because they are declared outside of any function or block.

// Local Scope: Variables declared inside a function are in the local scope of that function and can only be accessed within that function.

// Block Scope: Variables declared inside a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block. In JavaScript, only variables declared with let and const are block-scoped, while var is function-scoped.

// console.log(a, b, c) 
  //this will print the values of a, b and c to the console but these are the global variables because they are declared outside of any function or block, the value of c will be 300 because var is function-scoped and it is hoisted to the top of the function scope, so it will overwrite the global variable c.

console.log( c)   //this will print the value of c to the console but this is the global variable c which is 40 because var is function-scoped and it is hoisted to the top of the function scope, so it will overwrite the global variable c.

console.log(a)  //this will print the value of a to the console but this is the global variable a which is 20 because let is block-scoped and it is not hoisted to the top of the block scope, so it will not overwrite the global variable a.