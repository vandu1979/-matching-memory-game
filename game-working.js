var playersArray = [["name1", 0, 0], ["name2", 0, 0]];
//playersArray  Name, moves, time taken seconds
let playerid=0
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let isFirstCard = false;
let p1Turn = true;
var score1 = 0;
var score2 = 0;
let currentPlayer = 'player1';
let playerMsg = document.getElementById('player');
playerMsg.innerHTML = currentPlayer;
const cards = document.querySelectorAll('.memory-card');
const timeValue = document.getElementById("time");
//const moves = document.getElementById("movesCount");
var movesCount=0;
let seconds = 0;  
let minutes = 0;
let  winCount = 0;
let gameOverMsg = document.querySelector('#memoryID');
cards.forEach(card => card.addEventListener('click', flipCard));

function sleepSeconds(sec){
  var start = new Date().getTime();
  var end = start;
  while(end < start + sec*1000) {
    end = new Date().getTime();
 }
}

function shuffle() {
  cards.forEach(card => {
  let randomPos = Math.floor(Math.random() * 16);
  card.style.order = randomPos;
  });  
}

// Create function for any "click" on the memory tiles
function flipCard() {
  // if the memory tile is locked dont do anything
    if(lockBoard)return;
    //if the user is trying to clikc on the first card, dont do anything
    if(this === firstCard) return;
    // else flip the memory tile
    this.classList.add('flip');
    
  if(!hasFlippedCard) {
    // first click
    hasFlippedCard = true;//firstCard click
    firstCard = this;// 'this' = the element that has fired the event
     return;
  } 
    // second click
    isFirstCard = false;
    secondCard = this;
    movesCount++ ;
    document.getElementById("movesCount").innerHTML = `${movesCount}`;
    if (p1Turn) {
         currentPlayer = "player1";
      }else {currentPlayer = "player2";}
    document.getElementById("player").innerHTML = `${currentPlayer}`;
   
    // displayMovesCount();
  // if the secondCard card has been chosen, check if they match
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
        if (p1Turn) {
          score1 += 2;
        }
        else {
          score2 += 2;
        }
        checkGameOver();
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
        p1Turn=!p1Turn;
        // if (p1Turn) {
        //   p1Turn = false;
        // }
        // else if (!p1Turn) {
        //   p1Turn = true;
        // }
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
// For calculating moves
// const movesCounter = () => {
//   movesCount += 1;
//   moves.innerHTML = `<span>Moves:</span>${movesCount}`;
  
// };
// function displayMovesCount() {
//     document.getElementById("movesCount").innerHTML = `${movesCount}`;
// }
function displayTimeCount() {
    document.getElementById("time").innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
} interval = setInterval(timeGenerator, 1000);
//clearTimeout(interval);
// function displayTimeCount() {
//   document.getElementById("time").innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
// } interval = clearInterval(timeGenerator, 1000);



    function resetBoard() {
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
        isFirstCard = false;
     // movesCount = 0;
    }
    function restartGame() {
      shuffle();
    }
   
  
function checkGameOver() { // game is over if either player gets 28 points
  let flag = 0;
  cards.forEach(card => {
    if (card.className === 'memory-card') {
      // we have still cards unflipped , atleast 1
      flag = 1;
    }
  })
  // if all cards flipped
  if (flag === 0) {
        if (score1 < score2) {
      alert("CONGRATULATIONS PLAYER ONE! YOU WON!");
      // shuffle();
      // location.reload();
    }
    else if (score2 < score1) {
      alert("CONGRATULATIONS PLAYER TWO! YOU WON!");
      // shuffle();
      // location.reload();
    }
    else if (score1 === score2) {
      alert("It's a tie");
      // shuffle();
      // location.reload();
    }
  }
}
// lets start the game asking players name
// code for asking player names go here

function playTheGame(playerid)
{
  myName=playersArray[playerid][0];
  myCount=playersArray[playerid][1];
  myTime=playersArray[playerid][2]; 
  // Lets play begin wit a shuffle
  shuffle();
}

//Start the game with the first player in the array playerArray
for (let playerid=0;playerid< playersArray.length; playerid++ )
{
  playTheGame(playerid);
}

