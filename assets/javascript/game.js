var computerChoices =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSoFar = [];
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessSoFarText = document.getElementById("guessessofar-text");

document.onkeyup = function(event){
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    if (userGuess === computerGuess){
        wins++;
        guessesLeft = 9;
        guessSoFar =[];
    }
    if(userGuess !== computerGuess){
        guessSoFar.push(userGuess);
    }
    guessesLeft = guessesLeft - 1;
    if(guessesLeft === 0){
        alert("Game is over!")
        guessesLeft = 9;
        losses++;
        guessSoFar = [];
    }
    // guessSoFar.push(userGuess);
    console.log(guessSoFar)
  userChoiceText.textContent = " Guess what letter I'm thinking of :" + "??" ;
  winsText.textContent = " Wins :" + wins;
  lossesText.textContent = "Losses : + " + losses;
  guessesLeftText.textContent = "Guesses Left :" + guessesLeft;
  guessSoFarText.textContent = "Your Guesses so far :" + guessSoFar;


}

