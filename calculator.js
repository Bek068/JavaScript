
// There is a lot of code repetition here so commenting out ths whole section of code
    // const addTwoAndSeven = () => {
    //     return 2 + 7 ;
    // }
    // //function call
    // console.log(addTwoAndSeven());
    // //Another Function creating and calling
    // const addThreeAndFour=() =>{
    //     return 3 + 4;
    // };
    // console.log(addThreeAndFour());

// Sum  Arrow Function

const calculateSum = (num1, num2) => {
    return num1 + num2;
}
console.log("Sums:");
console.log(calculateSum(2,5));
console.log(calculateSum(10,10));
console.log(calculateSum(5,5));


// Difference Arrow Function

const calculateDifference = (num1, num2) => {
    return num1 - num2;
}
console.log("Differences:");
console.log(calculateDifference(22,5));
console.log(calculateDifference(12,1));
console.log(calculateDifference(17,9));



// Product Arrow Function

const calculateProduct= (num1, num2) => {
    return num1 * num2;
}
console.log("Products:")
console.log(calculateProduct(13,5));
console.log(calculateProduct(7,6));



// Quotient Arrow Function

const calculateQuotient = (num1, num2) => {
    // The modifications in the function lies below here and the return num1/num2; line also goes into the modifications.

    if(num2==0){
        return "Error: Division by Zero";
    }else{
        return num1 / num2;
    }
}
console.log("Quotients:");
 console.log(calculateQuotient(7,11));
 console.log(calculateQuotient(20,5));

 console.log(calculateQuotient(4,0)); // Division by zero case
// TO solve this Zero case We modify the function slightly so that the function outputs a message: "Error: Division by zero" instead of returning 'Infinity'.


// Calculate Square using Arrow Function
const calculateSquare=(num) =>{
    return num**2;
}
console.log("Squares:");
console.log(calculateSquare(9));
console.log(calculateSquare(13));


// Calculating the Square Root Using The Arrow Function:

const calculateSquareRoot =(num)=>{
    return Math.sqrt(num);
}
console.log("Square Roots:");
console.log(calculateSquareRoot(100));
console.log(calculateSquareRoot(256));
console.log(calculateSquareRoot(1000));


// Completed:

// ......Workshop: Boo who.......

// Check if a value is classified as a boolean primitive. Return true or false.

let booWho = (parameter) => {
    return typeof parameter =="boolean";
}
console.log("Working With BOOlEANS:");
console.log(booWho(true));  //true
console.log(booWho(false)); //true
console.log(booWho([1,2])); //false
console.log(booWho(1)); //false 
console.log(booWho("true")); //false