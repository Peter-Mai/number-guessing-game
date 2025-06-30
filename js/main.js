
document.querySelector('#submit').addEventListener('click', checkGuess )

document.querySelector('#reset').addEventListener('click', resetGame)

function resetGame(){
    randomNumber = Math.floor(Math.random() * 101);
    count = 0;
    pastGuesses = [];
    document.querySelector('#guess').value = '';
    document.querySelector('#tooHighOrLow').innerHTML = '';
    document.querySelector('#guesses').innerHTML = '';
    document.querySelector('#previousGuesses').innerHTML = '';
}
    
// Generating a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 101)

let count = 0;

//Storing list of past guesses
let pastGuesses = [];

function checkGuess(){
    // Storing player Guess
    const playerGuess = document.querySelector('#guess').value;

    if(playerGuess < randomNumber){
        count++;
        pastGuesses.push(playerGuess);
        document.querySelector('#tooHighOrLow').innerHTML = 'Too low'
    }

     else if (playerGuess > randomNumber){
        count++;
        pastGuesses.push(playerGuess);
        document.querySelector('#tooHighOrLow').innerHTML = 'Too High'

    }

    else {
        count++;
        pastGuesses.push(playerGuess);
        document.querySelector('#tooHighOrLow').innerHTML = 'You guessed correctly!'
        document.querySelector('#guesses').innerHTML = `It took you ${count} tries!`
        document.querySelector('#previousGuesses').innerHTML = `These were your guesses: ${pastGuesses.join(', ')}`
    }
}

// compare two numbers

// count # of guesses

// Message incidicating too high or low