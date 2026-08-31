const user = {
    username: "Bibek",
    price: 100,

    FunctionMessage: function(){
        console.log(`${this.username}, your price is ${this.price}`);   //
        console.log(this)   // this will refer to the user object
    }
}
user.FunctionMessage();
user.username = "Rijal";
user.FunctionMessage();
//console.log(this)  // this will refer to the global object (window in browser, global in node.js)

function bek(){
    console.log(this)   // this will refer to the global object (window in browser, global in node.js)
}
bek();

const bek = () => {
    const username = "Bibek";
    console.log(`${username}, Welcome to your Dashboard.`);
}

console.log(bek()); // Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding scope. In this case, 'this' refers to the global object (window in browsers, global in Node.js) when the arrow function is defined in the global scope.

const addTwo = (a, b) => (a+b);
console.log(addTwo(5, 3));


// Arrow Function with single parameter

const Bek = (userName) =>`${userName}, Welcome to your DashBoard.`;
console.log(Bek("Samuel"));
console.log(Bek("Bibek"));


//Arrow Function with Double Parameter

const twoVariables = (var1, var2) => `Hello ${var1}, welcome to your Dashboard. Please check your ${var2} for more details.`;
console.log(twoVariables("Samuel", "e-mail"));
console.log(twoVariables("Bibek", "notification"));
const faf = (a,b) => {
    if (a>b){
        console.log(`${a} is the largest Number.`);
    }else{
        console.log(`${b} is the Largest Number of them ALll.`)
    }
}
console.log(faf(15,555));


const Summation = (a,b,c) =>{
    return a+b+c;
}
console.log(Summation(5,10,15));


const user =(name, Surname) =>{
    console.log(`Welocme, ${name} ${Surname} to your Profile Dashboard..`);
}
user("Bibek", "Rijal")