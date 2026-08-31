function one (){
    const username = "bibek"

    function two(){
        const website = "bibekrijal.com.np"
        console.log(username);

    }
    //console.log(website);  //this will throw an error because website is not defined in the global scope and it is not accessible outside the function two.

    two();  //this will call the function two and it will print the value of username to the console because username is defined in the global scope and it is accessible inside the function two.

}
one()   //this will call the function one and it will execute the code inside the function one.

if (true){

    const name ="bibek";
    if(name=="bibek"){
        const website = "bibekrijal.com.np"
        console.log(name, "the webportal is:", website);  //this will print the value of name and website to the console because name and website are defined in the block scope and they are accessible inside the block scope.
    }
    // console.log(website);  //this will throw an error because website is not defined in the block scope and it is not accessible outside the block scope.
}
// console.log(name);  //this will throw an error because name is not defined in the global scope and it is not accessible outside the block scope.


// ***********Interesting*****************

three(100) //this will call the function three and it will return the value of num+1 which is 101 because num is defined in the local scope and it is accessible inside the function three.

function three(num){
    return num+1;
}
console.log(three(100))  //this will print the value of three to the console but it will not execute the function because we are not calling the function, we are just printing the value of three which is a function declaration.


addition(20)  //this is the case where the functon is called before it is defined, this will work because of hoisting, the function declaration is hoisted to the top of the scope and it is accessible before it is defined.
//this results error because addition is a function expression and it is not hoisted to the top of the scope, so it is not accessible before it is defined.
const addition = function(num){
    return num+100
}
