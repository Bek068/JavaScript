coursePrice =[
    {
        name: "JavaScript",
        price: 1000,
    },
    {
        name: "MongoDB",
        price: 800,
    },
    {
        name: "Python",
        price: 1500,
    },
    {
        name: "SQL",
        price: 900,
    },
]
const BillingPrice= coursePrice.reduce((accumulator, item)=> accumulator + item.price, 0)
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. In this case, the reducer function takes two parameters: accumulator and item. The accumulator is the accumulated value that is returned after processing each element, and item represents the current element being processed in the array. The arrow function adds the price of the current item to the accumulator, effectively summing up all the prices in the coursePrice array. The second argument to reduce() (0 in this case) is the initial value of the accumulator, which means that the summation will start from 0. As a result, BillingPrice will contain the total price of all courses in the coursePrice array.
console.log(BillingPrice)

const arr = [1,2,3,4,5]
const total = arr.reduce((accumulator, items)=> accumulator + items, 0)
console.log(total)


const games= [
    { 
        game1: "God Of War",
        price: 500
    },
    {
        game2: "The Last Of Us",
        price: 600
    },
    {
        game3: "Horizon Zero Dawn",
        price: 700
    }
]
const totalPrice = games.reduce((accumulator, items)=> accumulator + items.price, 0)
console.log(totalPrice)

const bill = games.filter((games)=>games.price>600)
console.log(bill)

const name = ["bob", "alice", "john", "eve"]

for(const key in names){
    //console.log(`key:${key} : Value: ${name[key]}`)
    console.log(key, names[key])
}


/* NOTE:

The for...in loop can be used to iterate over the keys of an array, but it is generally not recommended for arrays because it iterates over all enumerable properties, including inherited properties, which can lead to unexpected results. It is better to use a for...of loop or a traditional for loop when iterating over arrays to ensure that you are only accessing the elements of the array and not any additional properties. In this example, using for...in will give you the indices of the array (0, 1, 2, 3) rather than the actual values ("bob", "alice", "john", "eve").

but

the for..of cannot be used to iterate over the keys of an array, it is designed to iterate over the values of an iterable object, such as an array. When you use a for...of loop with an array, it will give you the actual values of the array elements rather than their indices. In this case, using for...of will output "bob", "alice", "john", and "eve" directly, which is typically what you want when working with arrays.

so, in summary, for...in is not recommended for arrays because it iterates over all enumerable properties, while for...of is the preferred choice for iterating over the values of an array.

Hence to work with for...of loop in objects, we can use Object.entries() method to get an array of key-value pairs from the object, which can then be iterated over using a for...of loop. This allows us to access both the keys and values of the object in a more straightforward manner. For example:


const myObj = {
    game1 : 'chess',
    game2 : 'football',
    game3 : 'cricket'
}
    for(const key of Object.values(myObj)){     
        console.log(key)
    }
    //This line of code uses the Object.values() method to get an array of the values from the myObj object. The for...of loop then iterates over this array of values, allowing you to access each value (in this case, "chess", "football", and "cricket") directly within the loop. The console.log statement will print each value to the console as it iterates through the array.

    // using for.. in loop

    for(const key in myObj){
        console.log(`${key}: ${myObj[key]}`)
    }   //This line of code uses a for...in loop to iterate over the keys of the myObj object. For each key, it logs a string to the console that includes both the key and its corresponding value. The expression `${key}: ${myObj[key]}` constructs a string where `${key}` is replaced with the current key being iterated over, and `${myObj[key]}` retrieves the value associated with that key from the myObj object. As a result, this loop will print each key-value pair in the format "game1: chess", "game2: football", and "game3: cricket".

    */

const price = [
{
    game1: "God of war",
    price: 500,
    
},
{
    game2: "Assassin's Creed",
    price: 600,
},
{
    game3: "GTA V",
    price: 700,
},
]
const Price = price.reduce((accumulator,item)=> accumulator + item.price, 0)
console.log(totalPrice)