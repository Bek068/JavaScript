const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body")
buttons.forEach(button => {
    button.addEventListener('click', function(batman){
        if(batman.target.id ==='grey'){
            body.style.backgroundColor = batman.target.id;
        }
        if(batman.target.id ==='yellow'){
            body.style.backgroundColor = batman.target.id;
        }
        if(batman.target.id ==='aqua'){
            body.style.backgroundColor = batman.target.id;
        }
        if(batman.target.id ==='blue'){
            body.style.backgroundColor = batman.target.id;
        }
        if(batman.target.id ==='silver'){
            body.style.backgroundColor = batman.target.id;
        }
        if(batman.target.id ==='white'){
            body.style.backgroundColor = batman.target.id;
        }
    });
});