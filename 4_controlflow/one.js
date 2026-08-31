// if statement..
const isUserLoggedin = true
const num = 10
if (num <10){
    console.log("This is True");

}else{
    console.log("This is False because the number is equal to 10...")
}

const points = 400;
if (points > 200){
    const power = "fly";
    console.log(`user power is : ${power}`);
}

const balance =1000;
if (balance >500){
    console.log("Your balance is Greater than 500.");
} else if(balance == 500){
    console.log("Your balance is equal to 500.");
} else if(balance<500 && balance>100){
    console.log("Your balance is less than 500 but greater than 100.");
} else{
    console.log("Your balance is less than 100.");
}


const userid = true
const card = true
if (userid && card){
    console.log("You can purchase the item.");

}else{
    console.log("Please bring your Id and other cards for verification and purchasing the item.");
}