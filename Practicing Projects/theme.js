const body= document.querySelectorAll("body");
const buttons= document.querySelectorAll(".button");
buttons.forEach(button=>{
    button.addEventListener('click', function(robin){
        body[0].style.backgroundColor = robin.target.id;
        switch(robin.target.id){
            case 'grey':
                body.style.backgroundColor= robin.target.id;
            break;
            case 'yellow':
                body.style.backgroundColor= robin.target.id;
            break;
            case 'aqua':
                body.style.backgroundColor= robin.target.id;
            break;
            case 'blue':
                body.style.backgroundColor= robin.target.id;
            break;
            case 'pink':
                body.style.backgroundColor= robin.target.id;
            break;
            
            case 'magenta':
                body.style.backgroundColor= robin.target.id;
            break;
            case 'white':
                body.style.backgroundColor= robin.target.id;
            break;
        }
    })
})