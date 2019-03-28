
function onkeyup
    
    
    var phillynames = "eagles"
    var letterguess = []
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var guesses = 0;
    var wins = 0;
    var loss = 0;

    function teamletters(letter) {

        for (var i = 0; i <phillynames.length; i++) {
            if (phillynames [i] == letterguess) {
                letterguess[i] = alphabet;
                correctguess = true;
                alert = "correct!"

            }
            
            document.onkeyup = function(event)
                var letterguess =string.fromCharCode(event.keyCode).toUpperCase();
                var enter = (event.keyCode);
            }

            }
        }

    }



