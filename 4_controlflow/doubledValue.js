const doubledValue =(arr) =>{
    const n = arr.length;
    let new_arr =[];
    for(let i=0; i<n; i++){
        new_arr.push(arr[i]*2)
    }
    return new_arr;
}
console.log(doubledValue([1,2,3,4,5]))
console.log(doubledValue([11,22,33,44,55,66,77,88,99,100]))