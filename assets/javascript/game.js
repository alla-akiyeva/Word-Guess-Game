// Creating an array with word options
var wordOptionsList = [
    "cuttlefish",
    "shrimp",
    "octopus",
    "squid",
    "scallops",
    "crab",
    "cthulhu",
    "salmon",
    "shark",
    "tilapia",
    "tuna",
    "lobster",
    "catfish",
    "anchovy",
    "herring",
    "flounder",
    "caviar",
    "clam",
    "sturgeon",
    "oyster",
    "mussel"
];

// Creating variables  
var guessesRemaining = 12;
var wrongGuesses = [];
var blankArray = [];
var wordChosen = "";

// Creating variables that hold references to the places in the HTML where we want to display things.
var currentWordText = document.getElementById("current-word-text");
var wordChosenText = document.getElementById("word-place-holder");
var guessesText = document.getElementById("guesses-text");
var wrongGuessesText = document.getElementById("wrong-guesses");

// Choosing a random word from the options array and generating an array for "_ _ _ _"
var wordChosen = wordOptionsList[Math.floor(Math.random() * wordOptionsList.length)];
console.log(wordChosen);
for (var i = 0; i < wordChosen.length; i++) {
        blankArray[i] = "_";
        wordChosenText.textContent = blankArray.join(" ");
}

var lettersRemaining = wordChosen.length;
document.onkeyup = function(event) { 
var letterGuessed = event.key;

do {
for (var j = 0; j < wordChosen.length; j++) {
    if (letterGuessed === wordChosen[j]) {
        blankArray[j] = letterGuessed;
        wordChosenText.textContent = blankArray.join(" ");
        guessesRemaining--;
        guessesText.textContent = "Remaining guesses: " + guessesRemaining;
    }
}   
    if (blankArray[j] !== letterGuessed && blankArray.includes(letterGuessed)===false) {
        wrongGuesses.push(letterGuessed);
        guessesRemaining--;

        wrongGuessesText.textContent = "Letters guessed wrong: " + wrongGuesses.join(" ");
        guessesText.textContent = "Remaining guesses: " + guessesRemaining;
       }
       if (guessesRemaining === 0) {
               alert("You lost!");
               location.reload()
       }
       if (blankArray.includes("_")===false) {
               alert("You won!!! The word is " + wordChosen);
               location.reload()
       }
}
while (guessesRemaining < 0);
}



