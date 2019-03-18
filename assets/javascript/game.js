// Creating an array with word options
var wordOptionsList = [
    "Cuttlefish",
    "Shrimp",
    "Octopus",
    "Squid",
    "Scallops",
    "Crab",
    "Cthulhu",
    "Salmon",
    "Shark",
    "Tilapia",
    "Tuna",
    "Lobster",
    "Catfish",
    "Anchovy",
    "Herring",
    "Flounder",
    "Caviar",
    "Clam",
    "Sturgeon",
    "Oyster",
    "Mussel"
];

// Creating variables to store wins, guesses remaining, and letters used. 
var wins = 0;
var guessesRemaining = 10;
var wrongGuesses = [];
var blankArray = [];

// Creating variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var placeHolder = document.getElementById("word-place-holder");
var guessesText = document.getElementById("guesses-text");
var wrongGuessesText = document.getElementById("wrong-guesses");

var wordChosen = wordOptionsList[Math.floor(Math.random() * wordOptionsList.length)];
console.log(wordChosen);
for (var i = 0; i < wordChosen.length; i++) {
    blankArray[i] = "_";
    placeHolder.textContent = blankArray.join(" ");
}

var lettersRemaining = wordChosen.length;
console.log(lettersRemaining);

//while (lettersRemaining > 0) {
document.onkeyup = function(event) {
//* Determines which key is pressed: 
var letterGuessed = event.key;
console.log(letterGuessed);
//* splits wordChosen into array: 
var text = wordChosen.split('');
console.log(text);

for (var j = 0; j < wordChosen.length; j++) {
    if (letterGuessed === wordChosen[j]) {
        blankArray[j] = letterGuessed;
        placeHolder.textContent = blankArray.join(" ");
        lettersRemaining--;
        console.log(lettersRemaining);
        found = true;
    }
}   
    if (blankArray[j] !== letterGuessed && blankArray.includes(letterGuessed)===false) {
        wrongGuesses.push(letterGuessed);
        
        guessesRemaining--;
        guessesText.textContent = "Number of Guesses Remaining: " + guessesRemaining;
}
}
//}
wins++;
winsText.textContent = "Wins: " + wins;

