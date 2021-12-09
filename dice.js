
// creating a random number
var playerOne = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img1").setAttribute("src", "images/dice" + playerOne + ".png")


var playerTwo = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img2").setAttribute("src", "images/dice" + playerTwo +".png")


function displayResult(playerOne,playerTwo){
  var playerOne = this.playerOne;
  var playerTwo = this.playerTwo;
  if(playerOne === playerTwo){
    return "Draw!!!";
  }
  else if (playerOne > playerTwo){
    return "🚩 Player One won!! You LOST!!"
  }
  else if(playerOne < playerTwo){
    return "Player Two won!! 🚩 You LOST"
  }
  else{
    return "Spinning..."
  }
}

var result =  displayResult();
function delay(){
  document.querySelector(".outcome").innerHTML = result;
}
setTimeout(delay, 500);

var button = document.querySelector(".btn");
button.addEventListener("click", refresh);
function refresh(){
  window.location.reload(false);
}
