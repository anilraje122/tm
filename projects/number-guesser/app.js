/* 
Game function :
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guessess remaining
- Notify player of correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2, // todo: random function
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;

// Event listeners
guessBtn.addEventListener('click', (e) => {    
    let guess = parseInt(guessInput.value);
    console.log(isNaN(guess));    
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        return;
    }

    if(guess === winningNum) {
        // Game over, won
        gameOver(true, `You won! ${winningNum} is correct`)
    } else {
        guessesLeft -= 1;
        if(guessesLeft === 0) {
            // Game over, lost
            gameOver(false, `You lost! Game over! The correct number was ${winningNum}`);
        } else {
            // Game continues, answer is wrong
            guessInput.style.borderColor = 'red';
            setMessage(`Guess is not correct, ${guessesLeft} guesses left`, 'red');
            guessInput.value = '';
        }
    }
});

// Set message
setMessage = (msg, color) => {
    message.style.color = color;
    message.textContent = msg;
}

// Game over
gameOver = (won, msg) => {
    let color = won === true ? 'green' : 'red';
    guessInput.disabled = 'true';
    guessInput.style.borderColor = color;
    setMessage(msg, color);
}

