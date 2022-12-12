

//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;
const cards = document.querySelectorAll('.memory-card');
const timeValue = document.getElementById("time");
const moves = document.getElementById("movesCount");
//For timer
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};
function displayMovesCount() {
    document.getElementById("movesCount").innerHTML = `<span>Moves:</span>${movesCount}`;
}
function displayTimeCount() {
    document.getElementById("time").innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
} interval = setInterval(timeGenerator, 1000);
//For calculating moves
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
  };

//   // 1. Create the button
// const button = document.createElement("button");
// button.innerHTML = "Start";



// // 3. Add event handler
//  button.addEventListener ("click", resetBoard );

  
// var GameScore = new Array(1).fill(['Round','Player 1', 'Player 2', 'Round Winner']);
// GameScore[currentRound] =[currentRound, movesCount, 0, gameWinner]


// console.log(GameScore);


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
// let interval;
// Create function to flip the card
function flipCard() {
    if(lockBoard)return;
    if(this === firstCard) return
    this.classList.add('flip');

if(!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
} 
    // second click
    hasFlippedCard = false;
    secondCard = this;
    movesCount++;
    displayMovesCount();
    console.log(movesCount);
    // createTable(GameScore);
    checkForMatch();
}

//   we have to check if those cards matched
function checkForMatch() {
    // using Ternary Operator to shorten the code
    let isMatch = firstCard.dataset.framework ===
    secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCard();     
   }
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    //    movesCount++;
    resetBoard();
    }
    function unflipCard() {
        lockBoard =true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            lockBoard = false;
            resetBoard();
        }, 1500);
    }
    // check for match??
// if (firstCard.dataset.framework ===
//     secondCard.dataset.framework) {
//         // it is a match!!
//         firstCard.removeEventListener('click', flipCard);
//         secondCard.removeEventListener('click', flipCard);
//     } else {
//         // if it is not a match!!
//         setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');
//     }, 1500);
// }
//     console.log('matched');
// console.log(firstCard.dataset.framework); 
// console.log(secondCard.dataset.framework); 

    function resetBoard() {
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
        // movesCount = 0;
    }

    (function shuffle() {
      cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
      });  
    })();

    // If there are no more cards that we can flip, we won the game
  //  if(hasFlippedCard=== true){
  //   console.log("You Won!");
  //  }
  var turn = 1;
  function playerAction(elem) {
    if(elem.innerHTML != "")return;
  if(turn == 1) {
    elem.innerHTML = 
    document.getElementById("messagesection").innerHTML = "Player 2 turn";
    turn = 2;
  }
  else if(turn = 2) {
    elem.innerHTML = 
    document.getElementById("messagesection").innerHTML = "Player 1 turn";
    turn = 1;
  }
  }

cards.forEach(card => card.addEventListener('click', flipCard))