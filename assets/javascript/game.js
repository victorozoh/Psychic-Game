
/*letter for the computer to choose from*/
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesLeft = 9;
var wins = 0;
var losses = 0;
var guessesMade = "";
var userGuess;
//choose a letter randomly
var computerGuess = letters[Math.floor(Math.random()*letters.length)];


//function to update game stats
function updateGameStats(){
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	document.querySelector("#guessesMade").innerHTML = guessesMade;
}

// function to reset game necessary game stats
function reset() {
	//Reset computer guess
	computerGuess = letters[Math.floor(Math.random()*letters.length)];
	userGuess; //reset character to blank
	guessesMade = "";  //reset typed characters
	guessesLeft = 9;
}

function showGuesses() {
	document.querySelector("#guessesMade").innerHTML = guessesMade;
}

/*Play game*/
document.onkeyup = function(event){
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("You Typed: " + userGuess);
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;

	if (guessesLeft > 0) {
		// once user make correct guess, record a win
		if(computerGuess === userGuess) {
			guessesLeft -= 1;
			console.log("guessed right!")
			guessesMade += userGuess;
			showGuesses();
			wins += 1;
			reset();
			updateGameStats();
		// if user repeats a previously made guess
		} else if (guessesMade.indexOf(userGuess) !== -1) {
			guessesLeft -= 1;
			guessesMade += userGuess;
			showGuesses();
			alert("You just wasted a guess");
			updateGameStats();
		// you made a wrong guess
		} else if (computerGuess !== userGuess) {
			console.log("wrong guess!");
			guessesLeft -= 1;
			guessesMade += userGuess;
			showGuesses();
			updateGameStats();

		}
	// run out of guesses and you lose
	} else {
		console.log("You lose!");
		showGuesses();
		losses += 1;
		reset();
		updateGameStats();
	}
}