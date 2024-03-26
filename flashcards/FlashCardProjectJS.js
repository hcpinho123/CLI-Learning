window.addEventListener("DOMContentLoaded", DOMLoaded)

function DOMLoaded(){
    let ansButton = document.querySelector("#ansButton")
    ansButton.addEventListener("click", Query)

    let easyButton = document.querySelector("#easyButton")
    easyButton.addEventListener("click", easy)
    let hardButton = document.querySelector("#hardButton")
    hardButton.addEventListener("click", hard)
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
