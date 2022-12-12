
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var P1 = 0;
var P2 = 0;
let currentPlayer = 'P1';

// Create function to flip the card
function flipCard() {
    if(lockBoard)return;
    if(this === firstCard) return
    this.classList.add('flip');
    if(currentPlayer === 'P1') {
      P1++
    }
    else {P2++};

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

    function resetBoard() {
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
       P1 = 0;
       P2 = 0;
    }

    (function shuffle() {
      cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
      });  
    })();
   

   
    let flag = 0
cards.forEach(card => card.addEventListener('click', flipCard))

if(P1 > P2) {
  console.log('P2');
}
else if (P1 < P2) {
  console.log('P1');
}
else if (P1 === P2) {
  console.log('Draw');
}
function changePlayer(){

  cards.forEach(card => {
 let flag = 0
    if(card.className === 'memory-card') {
      // we have still cards unflipped , atleast 1
      flag = 1
    }
  })
  // if all cards flipped
  if(flag === 0) {
  currentPlayer = 'P2';
  resetBoard();
  } 
}
