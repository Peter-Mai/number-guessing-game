
document.querySelector('#submit').addEventListener('click', checkGuess )

function checkGuess(){
    // Storing player Guess
    const playerGuess = document.querySelector('#guess').value;

    // Generating a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 101)

    if(playerGuess < randomNumber){
        document.querySelector('#tooHighOrLow').innerHTML = 'Too low'
    }

    // else if {

    // }
}

// compare two numbers

// count # of guesses

// Message incidicating too high or low