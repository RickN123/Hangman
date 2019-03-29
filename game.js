


document.onkeyup = function () 
    
    var Wins = 0;
    var Losses = 0;
    var guessesLeft = 0;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var GuessesDone = 0;
    var correctguess= null;


document.onkeypress = function(event)
    var computerguess = alphabet [(Math.floor(math.random()* alphabet.length)];

    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    if (userguess === correctguess) {getElementById"countWins"(add1);

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



