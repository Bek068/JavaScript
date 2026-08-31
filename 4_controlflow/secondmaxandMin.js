const secondLargestNum = (arr) =>{    //This is an arrow function that takes an array as an argument and returns the second largest number in the array.
  let temp = [...new Set(arr)].sort((a,b)=>b - a) //this lin creates a new array called temp and the ...new Set(arr) creates a new set from the input array arr, which removes any duplicate values. The resulting set is then converted back to an array using the spread operator [...]. The sort() method is used to sort the array in descending order (from largest to smallest) by comparing two elements a and b and returning b - a.
  return temp[1]  //This line returns the second element of the sorted array temp, which is the second largest number in the original array arr.
}
console.log(secondLargestNum([1,2,3,4,5,6,7,8,9])) // 8



const secondSmallestNum = (arr) =>{
  const temp = [...new Set(arr)].sort((a,b)=> a - b)  //this sorts the array in ascending order (from smallest to largest) by comparing two elements a and b and returning a - b.
  return temp[1]
}
console.log(secondSmallestNum([1,2,-3,4,-9,6,7]));