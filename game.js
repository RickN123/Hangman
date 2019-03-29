




var wins = 0;
var losses = 0;
var guessesLeft = 0;
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessesDone = 0;
var correctGuess = null;

function initialize() {

    wins = 0;
    losses = 0;
    guessesLeft = 10;
    guessesDone = 0;
    correctGuess = null;
    updateCountsOnUI();
}


document.onkeyup = function (event) {
    if (guessesDone >= 10) {
        return;
    }
    var userGuess = event.key;
    var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];

    console.log("Key up detected", userGuess, computerGuess);

    if (userGuess === computerGuess) {
        wins += 1;
    } else {
        losses += 1;
    }
    guessesLeft -= 1;
    guessesDone += 1;


    updateCountsOnUI();



}

function updateCountsOnUI() {

    document.getElementById('Wins').innerHTML = "Wins: " + wins;
    document.getElementById('Losses').innerHTML = "Losses: " + losses;
    document.getElementById('GuessesLeft').innerHTML = "GuessesLeft: " + guessesLeft
    document.getElementById('GuessesDone').innerHTML = "GuessesDone: " + guessesDone
}

initialize();
/*

document.onkeyup = function(event)
    var computerguess = alphabet [(Math.floor(math.random()* alphabet.length)];

    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    if (userguess === correctguess) document.getElementById"countWins"(add1);

    } else {
        guessesLeft --;
    }

    if (guessesLeft == 0) {
        loss ();
    }

    function win() {
        wins++;
        reset();

    }

    function loss () {
        lossess++;
        reset();
    }

    function reset () {
        answer = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}
    document.getElementById('Wins').innerHTML= "Wins: " + wins;
    document.getElementById('Losses').innerHTML= "Losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "GuessesLeft: " + guessesLeft
    document.getElementById('guessesDone').innerHTML = "GuessesDone: " + GuessesDone

    DocumentType userguess= ;
    )
    document.onkeypress = function(event) {
        var userkeyCode).toUpperCase();
    var enter = (event.keyCode);
    var fromCharCode = add letterguess;
    var keyCode= add letter;
}


            }



            }
        }

    }



*/