const games = ['The Legend of Zelda', 'Super Mario Bros', 'Metroid', 'Donkey Kong'];

games.forEach((game) => {   //The forEach() method is used to execute a provided function once for each array element. In this case, it will iterate over each element in the games array and execute the provided arrow function for each game.

    console.log(game)   //This line prints the current game being iterated over. The variable game represents the current element in the games array during each iteration of the forEach loop. It will print each game title from the games array on a new line.
});


objinArr = [
    {
        name: 'Bibek',
        nickname: 'Bek'
    },
    {
        name: 'Joseph',
        nickname: 'Josh'
    },
]

objinArr.forEach((item)=>{  //This line defines an arrow function that takes a parameter item, which represents the current element being iterated over in the objinArr array. The forEach() method will execute this function for each object in the objinArr array.
    console.log(item.nickname)

})

const nums = [1,2,3,4,5,6,7,8,9,10]
const nums1 =nums.filter((num)=> {  //The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, it will iterate over each element in the nums array and apply the provided arrow function to determine if the element should be included in the new array. The arrow function checks if the current element num is greater than 3. If it is, the element will be included in the new array nums1. As a result, nums1 will contain all numbers from the nums array that are greater than 3.
    return num>3})
console.log(nums1)

const nums2 = nums.filter((num)=>{  //The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, it will iterate over each element in the nums array and apply the provided arrow function to determine if the element should be included in the new array. The arrow function checks if the current element num is greater than 3. If it is, the element will be included in the new array nums2. As a result, nums2 will contain all numbers from the nums array that are greater than 3.
    num>3})
console.log(nums2)


const newNums =[]

nums.forEach((num)=>{
    if(num%2==0){
        newNums.push(num)
    }
})
console.log(newNums);

const books =[
    {
        title: 'Book-1',
        genre: 'Fiction',
        author: 'John Doe'
    },
    {
        title: 'Book-2',
        genre: 'Non-Fiction',
        author: 'Jane Smith'
    },
    {
        title: 'Book-3',
        genre: 'Fiction',
        author: 'Alice Johnson'
    },
    {
        title: 'Book-4',
        genre: 'Non-Fiction',
        author: 'Bob Wilson'
    },
    {
        title: 'Book-5',
        genre: 'Fiction',
        author: 'Charlie Brown'
    },
    {
        title: 'Book-6',
        genre: 'Non-Fiction',
        author: 'David Lee'
    },
    {
        title: 'Book-7',
        genre: 'Fiction',
        author: 'Eve Davis'
    }
]
let myBooks = books.filter((Book)=>Book.genre === "Non-Fiction")
myBooks = books.filter((Book)=> {
    return Book.author === "Eve Davis"
})
console.log(myBooks)



const naturalNums = [1,2,3,4,5,6,7,8,9,10]
//const newNat= naturalNums.map((num)=>num+10)
const newNat = naturalNums.map((num)=>{
    return num+10;
})
console.log(newNat)

const newNat1 = naturalNums.map(nums=> nums+5).map((num)=> num*4)   //This line of code uses the map() method twice to create a new array called newNat1. The first map() takes each element in the naturalNums array and adds 5 to it, resulting in a new array where each number is increased by 5. The second map() then takes each element from the first map's result and multiplies it by 4, creating another new array where each number is multiplied by 4. The final result is stored in newNat1, which contains the transformed values based on the original naturalNums array.
console.log(newNat1)



const numbers= [1,2,3,4]
const Total= numbers.reduce(function(accumulator, currentValue){
    console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}`)   //This line of code defines a reducer function that takes two parameters: accumulator and currentValue. The accumulator is the accumulated value returned from the previous iteration, and currentValue is the current element being processed in the array. The console.log statement is used to print the current values of the accumulator and currentValue during each iteration of the reduce() method. This allows you to see how the accumulator is updated with each element in the numbers array as the reduction process progresses.
    return accumulator + currentValue
}, 0)   //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. In this case, the reducer function takes two parameters: accumulator and currentValue. The accumulator is the accumulated value returned from the previous iteration, and currentValue is the current element being processed in the array. The reducer function adds the currentValue to the accumulator and returns the result. The second argument (0) is the initial value for the accumulator, meaning that the reduction will start with an initial sum of 0. As the reduce() method iterates through the numbers array, it will calculate the total sum of all elements in the array and store it in the Total variable.

console.log(Total)