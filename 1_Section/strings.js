const name = "Bibek "
const surname = "Rijal"
let fullname

console.log(name + surname ) // concatenates the strings and merges the two strings into one string.
// or
fullname = name + surname
console.log(fullname)

// using template literals:
console.log(`Hello there!, My name is ${fullname}`) //template literals are enclosed by backticks (` `) and can contain placeholders indicated by the dollar sign and curly braces (${expression}). The expression inside the curly braces is evaluated and inserted into the string.

console.log(fullname.length) // returns the length of the string, including spaces. In this case, it will return 12.

console.log(fullname.toUpperCase()) // converts the string to uppercase letters. In this case, it will return "BIBEK RIJAL".

console.log(fullname.toLowerCase()) // converts the string to lowercase letters. In this case, it will return "bibek rijal".

console.log(fullname.trim()) // removes whitespace from both ends of the string. In this case, it will return "Bibek Rijal" without the trailing space.

console.log(fullname.includes("Rijal")) // checks if the string contains the specified substring. In this case, it will return true because "Rijal" is part of the fullname.

console.log(fullname.replace("Bibek", "John")) // replaces the specified substring with another substring. In this case, it will return "John Rijal" by replacing "Bibek" with "John".

console.log(fullname.split(" ")) // splits the string into an array of substrings based on the specified separator. In this case, it will return ["Bibek", "Rijal"] by splitting the fullname at the space character.

console.log(fullname.__proto__) // returns the prototype of the string object, which is String.prototype. This allows you to access various methods and properties available for strings in JavaScript.

console.log(name.split(""))

console.log(name.substring(1,3)) // returns a portion of the string between the specified start and end indices. In this case, it will return "ib" by extracting the characters from index 1 to index 3 (excluding index 3).

console.log(name.slice(1,3)) // also returns a portion of the string between the specified start and end indices. In this case, it will also return "ib" by extracting the characters from index 1 to index 3 (excluding index 3). The difference between substring and slice is that substring does not accept negative indices, while slice does.

console.log(surname.slice(-8,3)) // returns an empty string because the start index (-8) is greater than the end index (3). When using negative indices with slice, it counts from the end of the string, so -8 refers to the 8th character from the end, which is "R". Since the end index (3) is less than the start index (-8), it results in an empty string.

console.log(fullname.replace('i', '!')) // replaces the first occurrence of the specified substring with another substring. In this case, it will return "B!bek Rijal" by replacing the first "i" in "Bibek" with "!". Note that only the first occurrence of "i" is replaced, and the second "i" in "Rijal" remains unchanged.

