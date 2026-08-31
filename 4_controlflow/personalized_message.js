const greet = (str, owner) =>{
    if(str == owner){
        return "Hello Boss";
    } else{
        return "Hello Guest";
    }
}
const owner ="BIBEK"

console.log(greet("BIBEK"))