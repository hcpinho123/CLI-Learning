window.addEventListener("DOMContentLoaded", domLoaded);
//function for when the doc is loaded 
function domLoaded() {
    document.getElementById("enter").addEventListener("click", checkInput1);
    document.getElementById("enter1").addEventListener("click", checkInput2);
    document.getElementById("enter2").addEventListener("click", checkInput3);
    document.getElementById("enter3").addEventListener("click", checkInput4);
    document.getElementById("enter4").addEventListener("click", checkInput5);
    document.getElementById("enter5").addEventListener("click", checkInput6);
    document.getElementById("enter6").addEventListener("click", checkInput7);
    document.getElementById("enter7").addEventListener("click", checkInput8);
    document.getElementById("enter8").addEventListener("click", checkInput9);
    document.getElementById("enter9").addEventListener("click", checkInput10);
    document.getElementById("enter10").addEventListener("click", checkInput11);
    document.getElementById("enter11").addEventListener("click", checkInput12);
    document.getElementById("enter12").addEventListener("click", checkInput13);
}

function checkInput1() {

    //ls and start of the game
    var input_1 = document.getElementById("userInput").value
    if (input_1 == "ls") [
        document.getElementById("response_ls").style.visibility = "visible",
        document.getElementById("userInput").disabled = true,
        document.getElementById("pole").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")
}
function checkInput2() {
    // cd "locations" commands 
    document.getElementById("pole").style.visibility = "hidden"

    var input_2 = document.getElementById("userInput1").value
    if (input_2 == "cd ..") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = ""
    ]

    else if (input_2 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = ""
    ]

    else if (input_2 == "cd Bietz-Center") [
        document.getElementById("response_cd-bietz").style.visibility = "visible",
        document.getElementById("userInput1").disabled = true,
        document.getElementById("Bietz").style.visibility = "visible"
    ]

    else if (input_2 == "cd Wright-Hall") [
        document.getElementById("response_cd-wright").style.visibility = "visible",
        document.getElementById("userInput1").disabled = true,
        document.getElementById("WrightHall").style.visibility = "visible"
    ]

    else if (input_2 == "cd Talge-Hall") [
        document.getElementById("response_cd-talge").style.visibility = "visible",
        document.getElementById("userInput1").disabled = true,
        document.getElementById("TalgeHall").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")

}


function checkInput3() {
    // cd "locations" commands 
    document.getElementById("Bietz").style.visibility = "hidden"

    var input_3 = document.getElementById("userInput2").value
    if (input_3 == "cd ..") [
        document.getElementById("response_cd-bietz").style.visibility = "hidden",
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput2").value = "",
        document.getElementById("pole").style.visibility = "visible"
    ]

    else if (input_3 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-bietz").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput2").value = "",
        document.getElementById("userInput1").disabled = false
    ]

    else if (input_3 == "cd Game-Room") [
        document.getElementById("response_cd-game").style.visibility = "visible",
        document.getElementById("userInput2").disabled = true,
        document.getElementById("GameRoom").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")

}

function checkInput4() {

    document.getElementById("GameRoom").style.visibility = "hidden"

    var input_4 = document.getElementById("userInput3").value
    if (input_4 == "cd ..") [
        document.getElementById("response_cd-game").style.visibility = "hidden",
        document.getElementById("userInput2").value = "",
        document.getElementById("userInput2").disabled = false,
        document.getElementById("userInput3").value = "",
        document.getElementById("Bietz").style.visibility = "visible"
    ]

    else if (input_4 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-bietz").style.visibility = "hidden",
        document.getElementById("response_cd-game").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput2").value = "",
        document.getElementById("userInput2").disabled = false,
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput3").value = ""
    ]

    else if (input_4 == "less pool") [
        document.getElementById("response_less-pool").style.visibility = "visible",
        document.getElementById("userInput3").disabled = true,
        document.getElementById("medal").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")
}

function checkInput5() {
    document.getElementById("medal").style.visibility = "hidden"

    var input_5 = document.getElementById("userInput4").value
    if (input_5 == "cd ..") [
        document.getElementById("response_less-pool").style.visibility = "hidden",
        document.getElementById("userInput3").value = "",
        document.getElementById("userInput3").disabled = false,
        document.getElementById("userInput4").value = "",
        document.getElementById("GameRoom").style.visibility = "visible"
    ]

    else if (input_5 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-bietz").style.visibility = "hidden",
        document.getElementById("response_cd-game").style.visibility = "hidden",
        document.getElementById("response_less-pool").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput2").value = "",
        document.getElementById("userInput2").disabled = false,
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput3").value = "",
        document.getElementById("userInput3").disabled = false,
        document.getElementById("userInput4").value = ""
    ]

    else if (input_5 == "less prise") [
        document.getElementById("response_less-prise").style.visibility = "visible",
        document.getElementById("userInput4").disabled = true,
        document.getElementById("prise").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")
}

function checkInput6() {
    document.getElementById("prise").style.visibility = "hidden"

    var input_6 = document.getElementById("userInput5").value
    if (input_6 == "cd ..") [
        document.getElementById("response_less-prise").style.visibility = "hidden",
        document.getElementById("userInput4").value = "",
        document.getElementById("userInput4").disabled = false,
        document.getElementById("userInput5").value = "",
        document.getElementById("medal").style.visibility = "visible"
    ]

    else if (input_6 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-bietz").style.visibility = "hidden",
        document.getElementById("response_cd-game").style.visibility = "hidden",
        document.getElementById("response_less-pool").style.visibility = "hidden",
        document.getElementById("response_less-prise").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput2").value = "",
        document.getElementById("userInput2").disabled = false,
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput3").value = "",
        document.getElementById("userInput3").disabled = false,
        document.getElementById("userInput4").value = "",
        document.getElementById("userInput4").disabled = false,
        document.getElementById("userInput5").value = ""
    ]

    else
        alert("please enter a valid input")
}

//wright hall
function checkInput7() {
    document.getElementById("WrightHall").style.visibility = "hidden"
    var input_7 = document.getElementById("userInput6").value

    if (input_7 == "cd ..") [
        document.getElementById("response_cd-wright").style.visibility = "hidden",
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput6").value = "",
        document.getElementById("pole").style.visibility = "visible"
    ]

    else if (input_7 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-wright").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput6").value = ""
    ]

    else if (input_7 == "cd Administration") [
        document.getElementById("response_cd-admnistration").style.visibility = "visible",
        document.getElementById("userInput6").disabled = true,
        document.getElementById("admin").style.visibility = "visible"
    ]

    else if (input_7 == "cd Cafeteria") [
        document.getElementById("response_cd-cafeteria").style.visibility = "visible",
        document.getElementById("userInput6").disabled = true,
        document.getElementById("Cafeteria").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")
}

//Administration 
function checkInput8() {
    document.getElementById("admin").style.visibility = "hidden"

    var input_8 = document.getElementById("userInput7").value
    if (input_8 == "cd ..") [
        document.getElementById("response_cd-admnistration").style.visibility = "hidden",
        document.getElementById("userInput6").value = "",
        document.getElementById("userInput6").disabled = false,
        document.getElementById("userInput7").value = "",
        document.getElementById("WrightHall").style.visibility = "visible"
    ]

    else if (input_8 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-wright").style.visibility = "hidden",
        document.getElementById("response_cd-admnistration").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput6").value = "",
        document.getElementById("userInput6").disabled = false,
        document.getElementById("userInput7").value = ""
    ]

    else if (input_8 == "less Student-ID") [
        document.getElementById("response_less-Student-ID").style.visibility = "visible",
        document.getElementById("userInput7").disabled = true,
        document.getElementById("student-id").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")

}

function checkInput9() {
    document.getElementById("student-id").style.visibility = "hidden"

    var input_9 = document.getElementById("userInput8").value
    if (input_9 == "cd ..") [
        document.getElementById("response_less-Student-ID").style.visibility = "hidden",
        document.getElementById("userInput7").value = "",
        document.getElementById("userInput7").disabled = false,
        document.getElementById("userInput8").value = "",
        document.getElementById("admin").style.visibility = "visible"
    ]

    else if (input_9 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-wright").style.visibility = "hidden",
        document.getElementById("response_cd-admnistration").style.visibility = "hidden",
        document.getElementById("response_less-Student-ID").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput6").value = "",
        document.getElementById("userInput6").disabled = false,
        document.getElementById("userInput7").value = "",
        document.getElementById("userInput7").disabled = false,
        document.getElementById("userInput8").value = ""
    ]

    else
        alert("please enter a valid input")
}

function checkInput10() {
    document.getElementById("TalgeHall").style.visibility = "hidden"

    var input_10 = document.getElementById("userInput9").value
    if (input_10 == "cd ..") [
        document.getElementById("response_cd-talge").style.visibility = "hidden",
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput9").value = "",
        document.getElementById("pole").style.visibility = "visible"
    ]

    else if (input_10 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-talge").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput9").value = ""
    ]

    else if (input_10 == "cd Bedroom") [
        document.getElementById("response_cd-Bedroom").style.visibility = "visible",
        document.getElementById("userInput9").disabled = true,
        document.getElementById("bedrooom").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")
}

function checkInput11() {
    document.getElementById("bedrooom").style.visibility = "hidden"

    var input_11 = document.getElementById("userInput10").value
    if (input_11 == "cd ..") [
        document.getElementById("response_cd-Bedroom").style.visibility = "hidden",
        document.getElementById("userInput9").value = "",
        document.getElementById("userInput9").disabled = false,
        document.getElementById("userInput10").value = "",
        document.getElementById("TalgeHall").style.visibility = "visible"
    ]

    else if (input_11 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-talge").style.visibility = "hidden",
        document.getElementById("response_cd-Bedroom").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput9").value = "",
        document.getElementById("userInput9").disabled = false,
        document.getElementById("userInput10").value = ""
    ]

    else if (input_11 == "mv 123") [
        document.getElementById("response_mv-123").style.visibility = "visible",
        document.getElementById("userInput10").disabled = true,
        document.getElementById("trophy").style.visibility = "visible"
    ]

    else
        alert("please enter a valid input")
}

function checkInput12() {
    document.getElementById("trophy").style.visibility = "hidden"

    var input_12 = document.getElementById("userInput11").value
    if (input_12 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-talge").style.visibility = "hidden",
        document.getElementById("response_cd-Bedroom").style.visibility = "hidden",
        document.getElementById("response_mv-123").style.visibility = "hidden",


        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput9").value = "",
        document.getElementById("userInput9").disabled = false,
        document.getElementById("userInput10").value = "",
        document.getElementById("userInput10").disabled = false,
        document.getElementById("userInput11").value = ""
    ]

    else
        alert("please enter a valid input")
}

function checkInput13() {
    document.getElementById("Cafeteria").style.visibility = "hidden"
    var input_13 = document.getElementById("userInput12").value

    if (input_13 == "cd ..") [
        document.getElementById("response_cd-cafeteria").style.visibility = "hidden",
        document.getElementById("userInput6").value = "",
        document.getElementById("userInput6").disabled = false,
        document.getElementById("userInput12").value = "",
        document.getElementById("WrightHall").style.visibility = "visible"
    ]

    else if (input_13 == "cd") [
        document.getElementById("response_ls").style.visibility = "hidden",
        document.getElementById("response_cd-wright").style.visibility = "hidden",
        document.getElementById("response_cd-cafeteria").style.visibility = "hidden",
        document.getElementById("userInput").value = "",
        document.getElementById("userInput").disabled = false,
        document.getElementById("userInput1").value = "",
        document.getElementById("userInput1").disabled = false,
        document.getElementById("userInput6").value = "",
        document.getElementById("userInput6").disabled = false,
        document.getElementById("userInput12").value = ""
    ]


}











