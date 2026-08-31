const average =(arr) =>{
    const n=arr.length  //This line calculates the length of the input array arr and assigns it to the variable n.
    let sum=0  //This line initializes a variable sum to 0, which will be used to store the sum of all the elements in the array.
    if(n===0){
        return 0
    }else{
    for(let i=0; i<n; i++){
        sum += arr[i]   //This line adds the value of each element in the array to the sum variable using a for loop that iterates from 0 to n-1.
    }
    return sum/n  //This line returns the average of the elements in the array by dividing the total sum by the number of elements n.
}
}
console.log(average([]))