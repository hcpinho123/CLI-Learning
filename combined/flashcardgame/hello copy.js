window.addEventListener("DOMContentLoaded", DOMLoaded)

function DOMLoaded(){
    let startButton = document.querySelector("#startButton")
    startButton.addEventListener("click", start)

    
    let stashButton = document.querySelector("#stashButton")
    stashButton.addEventListener("click", stash)
    let easyButton = document.querySelector("#easyButton")
    easyButton.addEventListener("click", easy)
    let hardButton = document.querySelector("#hardButton")
    hardButton.addEventListener("click", hard)
    let againButton = document.querySelector("#againButton")
    againButton.addEventListener("click", again)

      

}

//variables declared
let card = [
    {
        front: "#-1",
        back: "wowzers"
    }
]
let masStack = [
    {
        front:"pwd", 
        back: "Look at the directory that you are in."
    },
    {
        front:"cd",
        back:"Change directories/ go to home directory"
    },
    {
        front:"ls",
        back : "copy a file or directory"
    },
    {
        front : "mv [file] [destination/new name]",
        back: "Move or rename a file"
    },
    {
        front : "mkdir [name]",
        back : "Make a directory."
    },
    {
        front : "rmdir [name]",
        back : "Remove a directory."
    },
    {
        front:"rm [name]", 
        back: "Delete a file"
    },
    {
        front:"touch [name]",
        back:"Create a new file."
    },
    {
        front:"grep [name]",
        back : "Search for a keyphrase in a file"
    },
    {
        front : "df",
        back: "Tells the user the diffrence between two files."
    },
    {
        front : "head",
        back : "Inquire what is in front of a file."
    },
    {
        front : "tail",
        back : "Inquire what is at the end of a file."
    }
]
let voidStarter=[]
let store = {}
let waitingList=[]
let Q=[]
let stashList=[]


//functions
function start(event){
    event.target.setAttribute = document.querySelector("#startButton").setAttribute("hidden", "true")
    event.target.setAttribute = document.querySelector("#hardButton").removeAttribute("hidden")
    event.target.setAttribute = document.querySelector("#easyButton").removeAttribute("hidden")
    event.target.setAttribute = document.querySelector("#stashButton").removeAttribute("hidden")
    event.target.setAttribute = document.querySelector("#againButton").removeAttribute("hidden")
    card.push(masStack.shift())
    voidStarter.push(card.shift())
    flip()
}

function flip(){
    let textFront = document.querySelector("#front")
    let textBack = document.querySelector("#back")
    
    store = card[0]

    textFront.innerHTML = store.front
    textBack.innerHTML = store.back
}

function stash(){
    if(Q.length>0){
        card.push(Q.shift())
        stashList.push(card.shift())
        flip()
        // console.log(stashList)
        // console.log(Q)
    }else{
        card.push(masStack.shift())
        stashList.push(card.shift())
        flip()
        // console.log(stashList)
        // console.log(Q)
    }
}

function easy(){
    if(Q.length>0){
        card.push(Q.shift())
        waitingList.push(card.shift())
        flip()
        // console.log(hardList)
        // console.log(Q)
        setTimeout(Queue, 15000)
    }else{
        card.push(masStack.shift())
        waitingList.push(card.shift())
        flip()
        // console.log(hardList)
        // console.log(Q)
        setTimeout(Queue, 15000)
    }
}

function hard(){
    //move first object from masStack array to the card array
    if(Q.length>0){
        card.push(Q.shift())
        waitingList.push(card.shift())
        flip()
        // console.log(hardList)
        // console.log(Q)
        setTimeout(Queue, 10000)
    }else{
        card.push(masStack.shift())
        waitingList.push(card.shift())
        flip()
        // console.log(hardList)
        // console.log(Q)
        setTimeout(Queue, 10000)
    }
    
}

function again(){
    if(Q.length>0){
        card.push(Q.shift())
        waitingList.push(card.shift())
        flip()
        // console.log(hardList)
        // console.log(Q)
        setTimeout(Queue, 5000)
    }else{
        card.push(masStack.shift())
        waitingList.push(card.shift())
        flip()
        // console.log(hardList)
        // console.log(Q)
        setTimeout(Queue, 5000)
    }
}

function Queue(){
    Q.push(waitingList.shift())
    // console.log(Q)
    
}



    //if the cardNum is -1, the objects in masStack array will be scrambled order
    /* 
    ---->Card progression<----
        1. the cards will progress through the masterStack array from first to last
        2. when a object/card is used/put in the innerHTML, it will be removed from the array and put into another array. 

    --->Card Classification<---
        3. when a card is classified as hard, the object currently in the Card array will be moved to the end of the 
        hardList array
        4. When a difficulty button is pressed, it will move the first object in the Cards array into the Card array 
        4. after some time, the first object in the hardList array will be moved to the start of the Cards array 
        5. The difficulty buttons will always change 


    --->Notes<---
        - setTimeout will not stop the function it is in from completing/freeze the program
        -
    */

    /** 1. When the hard button is pressed, the first object in the cards array will be removed ~~~~~~~>
     *  2. the removed object will be stored in the card array ~~~~~~~>
     *  4. the card array object will be imprinted onto the hmtl ~~~~~~~~>
     *  3. when the hard button is pressed, object in the card array will be moved to the hardList array 
     * 
     */


    /**
        1. each hard button will have its own timed function
        2. when that function is called after the setTimeout, it will shift the hardStack array and push the object into the Queue array
        3. if the queue array has contents, then the card will be set to the first object in the Queue array. 
        4. Else, the card will be set to the first element in the masStack array as normal
     */

        // give the website the scroll overlap effect
        // make the show answer button work
        // find a way to make the 1st part react to the second part
        // upgrade the command library



/**
    for each object in the masStack array, write 3 divs, a title, and p elements in specific order into the document.

    css: when a button element is active, perform 
    [a keyframe animation that smallens the stage card and moves it to a certain coordinate]
    [a keyframe that moves eery card in that coordinate destination forward a little bit]
    [a keyframe that enlargens and moves a card from the masterStack to the stage coordinate]

    1. learn how to keyframe in css
    2. learn how to make js interact with css, so you know where to send the keyframes
    3. know your limits and try to make the website good as it

 */

