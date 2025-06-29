
document.querySelector('#submit').addEventListener('click', checkGuess )

let count = 0;

function checkGuess(){
    // Storing player Guess
    const playerGuess = document.querySelector('#guess').value;

    // Generating a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 101)

    if(playerGuess < randomNumber){
        count++;
        document.querySelector('#tooHighOrLow').innerHTML = 'Too low'
    }

     else if (playerGuess > randomNumber){
        count++;
        document.querySelector('#tooHighOrLow').innerHTML = 'Too High'

    }

    else {
        count++;
        document.querySelector('#tooHighOrLow').innerHTML = 'You guessed correctly!'
    }
}

// compare two numbers

// count # of guesses

// Message incidicating too high or low