window.addEventListener("DOMContentLoaded", DOMLoaded)

function DOMLoaded(){
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function() {
            this.classList.toggle('flipped');
        });
    });
}


//variables declared
let def = {
    front : "Term",
    back : "Description"
}
let stack = [
    {
        front:"ls", 
        back: "look around"
    },
    {
        front:"cd",
        back:"change directory"
    },
    {
        front:"cp",
        back : "coopy a file or directory"
    },
    {
        front : "mkdir",
        back: "Make a directory"
    }
]
let y = -1

//functions
function flip(){
    let textFront = document.querySelector(".front")
    let textBack = document.querySelector(".back")

    textFront.innerHTML = def.front
    console.log("front")

    textBack.innerHTML = def.back
    console.log("back")
}

function changeNext(){
    x = true 
    if(y<=2){
        y++
        def = stack[y]
        flip()
        console.log("changed")
    }else{
        alert("This is the end of the card stack.")
    }
    
}

function changeBack(){
    x = true
    if(y>=1){
        y--
        def = stack[y]
        flip()
    }else{
        alert("This is the end of the card stack.")
    }
    
}
