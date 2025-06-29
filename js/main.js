
document.querySelector('#submit').addEventListener('click', checkGuess )
    
// Generating a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 101)

let count = 0;

function checkGuess(){
    // Storing player Guess
    const playerGuess = document.querySelector('#guess').value;

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
        document.querySelector('#guesses').innerHTML = `It took you ${count} tries!`
    }
}

// compare two numbers

// count # of guesses

// Message incidicating too high or low