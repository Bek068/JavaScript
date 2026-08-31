//Arrays...
//Arrays are a data structure that can hold multiple values. They are ordered and indexed, meaning that each value has a specific position in the array.

//Creating an Array..

const myArr = [1, 2, 3, "Apple", "Mango", "Document", "Intesteller"]

//Accessing Array Elements..

console.log(myArr[0]) // 1;
console.log(myArr[2]) // 3;
myArr.push("Banana");// Adding an element to the end of the array
console.log(myArr);
console.log(myArr.pop()) // Removing the last element from the array
console.log(myArr);
myArr.unshift("Strawberry") // Adding an element to the beginning of the array
console.log(myArr);
myArr.shift() // Removing the first element from the array
console.log(myArr);

console.log(myArr.includes("Mango")) //Returns true if the array contains the specified element, otherwise returns false

console.log(myArr.indexOf("Document")) //Returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log(myArr.length) //Returns the number of elements in the array.

console.log(myArr)

const newArr =myArr.join() //Joins all elements of an array into a string and returns this string. The default separator is a comma (,), but you can specify a different separator as an argument.

console.log(myArr);

console.log(newArr); //Returns a string that is the result of concatenating all the elements in the array, separated by commas (or the specified separator).

console.log(typeof newArr) //Returns the type of the variable, which is a string in this case.

console.log("Slicing for 1,4: ", myArr.slice(1, 4)) //Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

const splicing = myArr.splice(1,4) //Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The first parameter is the index at which to start changing the array, the second parameter is the number of elements to remove, and the third parameter (optional) is the element(s) to add to the array.

console.log("Splicing for 1, 4: ", splicing) //Returns an array containing the deleted elements. If no elements are removed, an empty array is returned.

console.log("Modified array: ", myArr) //Returns the modified array after splicing.