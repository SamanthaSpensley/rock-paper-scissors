//set compChoice to function, call function in "on click" event

var choiceArr = ["rock", "paper", "scissors"];
var wins = 0;
var loses = 0;

function generate() {
  return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}

$('.button').click(function(){
  var userChoice = $(this).val();
  var compChoice = generate();
  $(".selection").text("You chose " + userChoice + " // Your opponent chose " + compChoice);

  if(userChoice === compChoice) {
    $(".output").text("It's a tie!");
  }
  else if (compChoice === "rock" && userChoice === "paper" || compChoice === "paper" && userChoice === "scissors" || compChoice === "scissor" && userChoice === "rock") {
    $(".output").text("You win!");
    wins += 1;
  }
  else {
    $(".output").text("You lose!");
    loses += 1;
  }
  $("#wins").text("Wins: " + wins)
  $("#loses").text("Loses: " + loses)

})
