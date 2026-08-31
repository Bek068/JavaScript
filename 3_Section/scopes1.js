//var c = 300
let a = 5600
if(true){
    let a = 100
    const b = 200
    console.log(a)  //this will print the value of a to the console but this is the local variable a which is 100 because let is block-scoped and it is not hoisted to the top of the block scope, so it will not overwrite the global variable a.
}
console.log(a)  //this will print the value of a to the console but this is the global variable a which is 5600 because let is block-scoped and it is not hoisted to the top of the block scope, so it will not overwrite the global variable a.


