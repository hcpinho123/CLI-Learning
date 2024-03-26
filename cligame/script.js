document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("enter").addEventListener("click", checkInput1);
});

function checkInput1() {
  var input_1 = document.getElementById("userInput").value;
  if (input_1.toLowerCase() === "ls") {
    document.getElementById("userInput").disabled = true;
    document.getElementById("userInput").value = ""; // Clear the input field
    document.getElementById("response_ls").innerHTML =
      "<p> Hello! My name is George and today is my first day at Southern. Help me to explore the campus!" +
      "<br>" +
      "Locations: <br>" +
      "Bietz-Center <br>" +
      "Wright-Hall <br>" +
      "<!--library <br>-->" +
      "Talge-Hall" +
      "</p>" +
      '<input id="userInput1" type="text">' +
      '<button id="enter1">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/pole.jpg'>"
    document.getElementById("enter1").addEventListener("click", checkInput2);
  } else {
    alert("please enter a valid input");
  }
  window.scrollTo(0, document.body.scrollHeight);
}

function checkInput2() {
  var input_2 = document.getElementById("userInput1").value;
  if (input_2.toLowerCase() === "cd ..") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("userInput1").disabled = true;
    document.getElementById("response_ls").innerHTML = "";
    document.getElementById("userInput").disabled = false;
  } else if (input_2.toLowerCase() === "cd") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_ls").innerHTML = "";
    document.getElementById("userInput").disabled = false;
    document.getElementById("next-input").innerHTML = "";
  } else if (input_2 == "cd Bietz-Center") {
    document.getElementById("userInput1").disabled = true;
    document.getElementById("response_cd-bietz").innerHTML =
      "<p> We are in the Bietz center, a place where studetns go to have fun and study. <br>" +
      "locations: <br>" +
      "<!--CK2 <br>-->" +
      "Game-Room <br>" +
      "<!--Fire-Room-->" +
      "</p>" +
      "<!--change user inputs-->" +
      '<input id="userInput2" type="text">' +
      '<button id="enter2">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/bietz.jpg'>"
    document.getElementById("enter2").addEventListener("click", checkInput3);
  } else if (input_2 == "cd Wright-Hall") {
    document.getElementById("userInput1").disabled = true;
    document.getElementById("response_cd-wright").innerHTML =
      "<p> We are in the Wright-Hall, this is the administration of the college. A place where students can make <br>" +
      "payments, and talk to advisors." +
      "The cafeteria is also located in this building <br>" +
      "locations: <br>" +
      "Administration <br>" +
      "Cafeteria" +
      "</p>" +
      '<input id="userInput2" type="text">' +
      '<button id="enter2">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/wright.png'>"
    document.getElementById("enter2").addEventListener("click", checkInput3);
  } else if (input_2 == "cd Talge-Hall") {
    document.getElementById("userInput1").disabled = true;
    document.getElementById("response_cd-wright").innerHTML =
      "<p> Welcome to Talge Hall here is located your dorm. <br>" +
      "locations: <br>" +
      "Bedroom" +
      "</p>" +
      '<input id="userInput2" type="text">' +
      '<button id="enter2">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/talge.png'>"
    document.getElementById("enter2").addEventListener("click", checkInput3);
  } 
  else {
    alert("please enter a valid input");
  }
  window.scrollTo(0, document.body.scrollHeight);
}

function checkInput3() {
  var input_3 = document.getElementById("userInput2").value;
  if (input_3.toLowerCase() === "cd ..") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_cd-bietz").innerHTML = "";
    document.getElementById("response_cd-talge").innerHTML = "";
    document.getElementById("response_cd-wright").innerHTML = "";
    document.getElementById("userInput1").value = "";
    document.getElementById("userInput1").disabled = false;
  } else if (input_3.toLowerCase() === "cd") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_ls").innerHTML = "";
    document.getElementById("userInput").disabled = false;

    document.getElementById("response_cd-bietz").innerHTML = "";
    document.getElementById("response_cd-talge").innerHTML = "";
    document.getElementById("response_cd-wright").innerHTML = "";
    document.getElementById("userInput1").value = "";
    document.getElementById("userInput1").disabled = false;
  } else if (input_3 == "cd Game-Room") {
    document.getElementById("userInput2").disabled = true;
    document.getElementById("response_cd-game").innerHTML =
      "<p> We are in the Game Room, a place where studetns go to play games like pool, ping pong, and fussball <br>" +
      "It looks like there is having a pool championship! <br>" +
      "items: <br>" +
      "pool" +
      "</p>" +
      '<input id="userInput3" type="text">' +
      '<button id="enter3">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/gameroom.png'>"
    document.getElementById("enter3").addEventListener("click", checkInput4);
  } else if (input_3 == "cd Administration") {
    document.getElementById("userInput2").disabled = true;
    document.getElementById("response_cd-admnistration").innerHTML =
      "<p> We are in the Administration. Here students can get their student ID to unlock their bedroom and buy" +
      "food<br>" +
      "Items: <br>" +
      "Student-ID" +
      "</p>" +
      '<input id="userInput3" type="text">' +
      '<button id="enter3">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/admin.png'>"
    document.getElementById("enter3").addEventListener("click", checkInput4);
  } else if (input_3 == "cd Cafeteria") {
    document.getElementById("userInput2").disabled = true;
    document.getElementById("response_cd-cafeteria").innerHTML =
      "<p>We are in the cafeteria where students can buy and eat food </p>" +
      '<input id="userInput3" type="text">' +
      '<button id="enter3">enter</button>';

    gameImage.src = "images/Cafeteria.png";
    document.getElementById("enter3").addEventListener("click", checkInput4);
  } else if (input_3 == "cd Bedroom") {
    document.getElementById("userInput2").disabled = true;
    document.getElementById("response_cd-Bedroom").innerHTML =
      "<p> Welcome to your bedroom. Use (hint use command to move objects) your ID to unlock the door. <br>" +
      "If you don't have one, try to find it somewhere in the game" +
      "</p>" +
      '<input id="userInput3" type="text">' +
      '<button id="enter3">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/bedroom.png'>"
    document.getElementById("enter3").addEventListener("click", checkInput4);
  } else {
    alert("please enter a valid input");
  }
  window.scrollTo(0, document.body.scrollHeight);
}

function checkInput4() {
  var input_4 = document.getElementById("userInput3").value;
  if (input_4.toLowerCase() == "cd ..") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_cd-game").innerHTML = "";
    document.getElementById("response_cd-admnistration").innerHTML = "";
    document.getElementById("response_cd-cafeteria").innerHTML = "";
    document.getElementById("response_cd-Bedroom").innerHTML = "";
    document.getElementById("userInput2").value = "";
    document.getElementById("userInput2").disabled = false;
  } else if (input_4.toLowerCase() === "cd") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_ls").innerHTML = "";
    document.getElementById("userInput").disabled = false;

    document.getElementById("response_cd-bietz").innerHTML = "";
    document.getElementById("response_cd-talge").innerHTML = "";
    document.getElementById("response_cd-wright").innerHTML = "";

    document.getElementById("response_cd-game").innerHTML = "";
    document.getElementById("response_cd-admnistration").innerHTML = "";
    document.getElementById("response_cd-cafeteria").innerHTML = "";
    document.getElementById("response_cd-Bedroom").innerHTML = "";
  } else if (input_4 == "less pool") {
    document.getElementById("userInput3").disabled = true;
    document.getElementById("response_less-pool").innerHTML =
      "<p>We enter the pool tournament and won it!! Lets see our prise <br>" +
      "Items: <br>" +
      "prise" +
      "</p>" +
      '<input id="userInput4" type="text">' +
      '<button id="enter4">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/medal.png'>"
    document.getElementById("enter4").addEventListener("click", checkInput5);
  } else if (input_4 == "less Student-ID") {
    document.getElementById("userInput3").disabled = true;
    document.getElementById("response_less-Student-ID").innerHTML =
      '<p> You got your Student-ID. Your id is "123". Use it to buy food and unlock your room' +
      "</p>" +
      '<input id="userInput4" type="text">' +
      '<button id="enter4">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/id.png'>"
    document.getElementById("enter4").addEventListener("click", checkInput5);
  } else if (input_4 == "mv 123") {
    document.getElementById("userInput3").disabled = true;
    document.getElementById("response_mv-123").innerHTML =
      "<p> Congratulations!!! You won the game!!! Press cd to restart</p>" +
      '<input id="userInput4" type="text">' +
      '<button id="enter4">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/trophy.png'>"
    document.getElementById("enter4").addEventListener("click", checkInput5);
  } else {
    alert("please enter a valid input");
  }
  window.scrollTo(0, document.body.scrollHeight);
}

function checkInput5() {
  var input_5 = document.getElementById("userInput4").value;
  if (input_5.toLowerCase() == "cd ..") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_less-pool").innerHTML = "";
    document.getElementById("response_less-Student-ID").innerHTML = "";
    document.getElementById("response_mv-123").innerHTML = "";
    document.getElementById("userInput3").value = "";
    document.getElementById("userInput3").disabled = false;

  } else if (input_5.toLowerCase() === "cd") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_ls").innerHTML = "";
    document.getElementById("userInput").disabled = false;

    document.getElementById("response_cd-bietz").innerHTML = "";
    document.getElementById("response_cd-talge").innerHTML = "";
    document.getElementById("response_cd-wright").innerHTML = "";

    document.getElementById("response_cd-game").innerHTML = "";
    document.getElementById("response_cd-admnistration").innerHTML = "";
    document.getElementById("response_cd-cafeteria").innerHTML = "";
    document.getElementById("response_cd-Bedroom").innerHTML = "";

    document.getElementById("response_less-pool").innerHTML = "";
    document.getElementById("response_less-Student-ID").innerHTML = "";
    document.getElementById("response_mv-123").innerHTML = "";
  } else if (input_5 == "less prise") {
    document.getElementById("userInput4").disabled = true;
    document.getElementById("response_less-prise").innerHTML =
      '<p>You unlock a hint! "Go to Wright Hall to get your room key</p>' +
      '<input id="userInput5" type="text">' +
      '<button id="enter5">enter</button>';

    document.getElementById("image").innerHTML = "<img src='images/prise.png'>"
    document.getElementById("enter5").addEventListener("click", checkInput6);
  } else {
    alert("please enter a valid input");
  }
  window.scrollTo(0, document.body.scrollHeight);

}
function checkInput6() {
  var input_5 = document.getElementById("userInput5").value;
  if (input_5.toLowerCase() == "cd ..") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_less-prise").innerHTML = "";
    document.getElementById("userInput4").value = "";
    document.getElementById("userInput4").disabled = false;
  } else if (input_5.toLowerCase() === "cd") {
    document.getElementById("image").innerHTML = ""

    document.getElementById("response_ls").innerHTML = "";
    document.getElementById("userInput").disabled = false;

    document.getElementById("response_cd-bietz").innerHTML = "";
    document.getElementById("response_cd-talge").innerHTML = "";
    document.getElementById("response_cd-wright").innerHTML = "";

    document.getElementById("response_cd-game").innerHTML = "";
    document.getElementById("response_cd-admnistration").innerHTML = "";
    document.getElementById("response_cd-cafeteria").innerHTML = "";
    document.getElementById("response_cd-Bedroom").innerHTML = "";

    document.getElementById("response_less-pool").innerHTML = "";
    document.getElementById("response_less-Student-ID").innerHTML = "";
    document.getElementById("response_mv-123").innerHTML = "";

    document.getElementById("response_less-prise").innerHTML = "";
  }
  window.scrollTo(0, document.body.scrollHeight);
}
