const duplicate = (str1, str2) =>{
    const m = str1.length;
    const n = str2.length;
    if (str1 === str2) {
        return "strings are identical";
    } else {
        return "strings are different";
    }
    for(let i =0; i<m; i++){
        for(let j=0; j<n; j++){
            if(str1[i]===str2[j]){
                return "duplicate strings found";
            }
        
        }
    }
    return "No duplicate string found";
}
console.log(duplicate("hello", "hello"))