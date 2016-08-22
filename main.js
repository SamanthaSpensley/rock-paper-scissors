var choiceArr = ["rock", "paper", "scissors"];

var compChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)]
var userChoice;

var wins = 0;
var loses = 0;

$('.button').click(function(){
  userChoice = $(this).val();
  console.log(userChoice);
  $(".output").text("The computer chooses " + compChoice);
  if(userChoice === compChoice) {
    $(".output").text("It's a tie!");
  }
  else if (compChoice === "rock" && userChoice === "paper") {
    $(".output").text("You win!");
    wins += 1;
  }
  else if (compChoice === "paper" && userChoice === "scissors") {
    $(".output").text("You win!");
    wins += 1;;
  }
  else if (compChoice === "scissor" && userChoice === "rock") {
    $(".output").text("You win!");
    wins += 1;;
  }
  else {
    $(".output").text("You lose!");
    loses += 1;
  }
  $("#wins").text("Wins: " + wins)
  $("#loses").text("Loses: " + loses)

})