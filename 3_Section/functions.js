
// function sayMyName(){
//     console.log("B")
//     console.log("I")
//     console.log("B")
//     console.log("E")
//     console.log("K")
// }
// sayMyName()

function addition(num1, num2){  //this is a function definition which takes two number as parameters and adds them together

    num1 = num1 + num2  //this is the function body where we are adding num1 and num2 and storing the result back in num1

    console.log(num1)   //this is where we are printing the result of the addition to the console
}
addition (20,30)    //this is a function call where we are passing the values 20 and 30 as arguments to the addition function


function remainder(num1, num2){
    num1 = num1%num2    //this is the function body where we are calculating the remainder of num1 divided by num2 and storing the result back in num1
    console.log(num1)
}
remainder(3000,100)

function add(num1, num2){

        // let result = num1 + num2
        // return result
    return num1 + num2   //this is a more concise way of writing the same function as above, we are directly returning the result of the addition without storing it in a variable

        console.log("This will not be printed")  //this line will not be executed because the function will return before it reaches this line
}
add(10,20)


function login (username){
    if(username==undefined || username==""){
        console.log("Username is required to login.")
    }else{
        return `Welcome ${username}!, You have successfully logged in to the device.`;
    }
    return "Invalid username.";
}
// login("Bibek")   //this is a function call where we are passing the string "Bibek" as an argument to the login function, but we are not doing anything with the returned message

console.log(login(""))  //this is where we are calling the login function and printing the returned message to the console but this returns "Username is required to login." because we are passing an empty string as the username which is considered invalid.

console.log(login("Bibek"))  //this is where we are calling the login function with a valid username and printing the returned message to the console.

// Day-20..............

function calculateCartTotal(...number1){    //this is a function definition that takes a variable number of arguments using the rest parameter syntax and stores them in an array called number1, the dots are the rest operators.

    return number1
}
console.log(calculateCartTotal(100, 300,900))

function calculateCartTotalA(val1, val2,...number1){    //this is a function definition that takes two fixed parameters val1 and val2, and a variable number of arguments using the rest parameter syntax and stores them in an array called number1, the dots are the rest operators.
    
    return number1
}
console.log(calculateCartTotalA(100, 300,900))

function handleObject(anyobject){
    console.log(`Username: ${anyobject.username} and Password: ${anyobject.password}`);
}
//handleObject(user)

handleObject ({     //this is a function call where we are passing an object literal as an argument to the handleObject function, the object has two properties username and password with their respective values.
    username: "Bibek",
    password: "ABCDE",
})

const newArray = [1,2,3,4,5]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray))   //this is a function call where we are passing the newArray as an argument to the returnSecondValue function and printing the returned value to the console, which will be 4 because we are accessing the element at index 3 of the array.

console.log(returnSecondValue([1,2,3,4,5]))   //this is a function call where we are passing an array as an argument to the returnSecondValue function and printing the returned value to the console, which will be 4 because we are accessing the element at index 3 of the array.    