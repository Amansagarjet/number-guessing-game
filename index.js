const input = document.querySelector('.number');
const btn = document.querySelector('.btn');
const previousNumber = document.querySelector('.previous-guess-number');
const msg = document.querySelector('.msg');
const newGame = document.querySelector('.new-game');
const wrapper = document.querySelector('.wrapper');
let life = 10;
let randomNumber;
function startNewGame(e) {
    randomNumber = Math.round(Math.random() * 100);
    msg.innerHTML = "";
    console.log(randomNumber);
}

function checkNumber(e) {
    e.preventDefault();
    const userGuesses = input.value;
    console.log("randomNumber", randomNumber);
    console.log("userGuesses", userGuesses);
    if (randomNumber > userGuesses) {
        msg.innerHTML = "Last guess was to low";
        msg.classList.add('info')
    } else if (randomNumber < userGuesses) {
        msg.innerHTML = "Last Guess was to high";
        msg.classList.add('info')

    } else if(randomNumber ==  userGuesses) {
        msg.innerHTML = "Horrey You Win!";
        msg.classList.remove('info')
        msg.classList.add('success')
        newGame.style.display = "block";
        wrapper.style.cssText = `pointer-events:none; opacity:.8`;
        life = 0;
    }else{
        msg.innerHTML = "Wrong";
        msg.classList.add('error')
    }
    life -= 1;
    if ((life == 0) && randomNumber !== userGuesses) {
        msg.innerHTML = "You Loss Try Again.";
        msg.classList.remove('info')
        msg.classList.add('error')
        newGame.style.display = "block";
        wrapper.style.cssText = `pointer-events:none; opacity:.8`;
    }
}
btn.addEventListener('click', checkNumber)
newGame.addEventListener('click', startNewGame)

startNewGame();