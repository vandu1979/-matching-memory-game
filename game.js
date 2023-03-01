// var playersArray = [["name1", 0, 0], ["name2", 0, 0]];
var playersArray = [];
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
//var movesCount=0;
let seconds = 0;  
let minutes = 0;
let  winCount = 0;
//let gameOverMsg = document.querySelector('#memoryID');
cards.forEach(card => card.addEventListener('click', flipCard));

function sleepSeconds(sec){
  var start = new Date().getTime();
  var end = start;
  while(end < start + sec*1000) {
    end = new Date().getTime();
 }
}

function shuffle() {

  cards.forEach(card =>{
   if (card.classList.contains('flip')) { 
    card.classList.remove('flip'); 
    // card => card.addEventListener('click', flipCard);
    }
  })

  cards.forEach(card => {
  let randomPos = Math.floor(Math.random() * 16);
  card.style.order = randomPos;
  });  
}

// Create function for any "click" on the memory tiles
function flipCard() {
  // if the memory tile is locked dont do anything
    if(lockBoard)return;
    //if the user is trying to click on the first card, dont do anything
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
    playersArray[playerid][1]++ ;
    document.getElementById("movesCount").innerHTML = `${playersArray[playerid][1]}`;
    // if (p1Turn) {
    //      currentPlayer = "player1";
    //   }else {currentPlayer = "player2";}
    document.getElementById("player").innerHTML = `${playersArray[playerid][0]}`;
   
    // displayMovesCount();
  // if the secondCard card has been chosen, check if they match
    checkForMatch();
}

//   we have to check if those cards matched
function checkForMatch() {
    // using Ternary Operator to shorten the code
    let isMatch = firstCard.dataset.framework ===  secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCard();     
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
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
}
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
function displayTimeCount() {
    document.getElementById("time").innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
} 
interval = setInterval(timeGenerator, 1000);
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
       // playersArray[playerid][1]=0 ;
    }
    function restartGame() {
      shuffle();
    }
   
  
function checkGameOver() { // game is over if either player gets 28 points
  let flag = 0;
  cards.forEach(card => {
    //default class = 'memory-card', if the card is flipped class=''memory-card flip'
    if (card.className === 'memory-card') {
      // we have still cards unflipped , atleast 1
      flag = 1;
      }
  })
  // if all cards flipped
  if (flag === 0) {
    clearInterval(interval);
    //set the classid as 'memory-card' from memory-card flip'
    cards.forEach(card => {
      //default class = 'memory-card', if the card is flipped class=''memory-card flip'
      if (card.className === 'memory-card flip') {
        card.className='memory-card' ;
        }
    })
    // if all players have played, declare the winner
    // else switch to the next player.
    playerid++

    //---------------------------------------------------
    if (playerid=playersArray.length)
    {//all players have played, declare the winner
      let winnerid=0
      for (let i=0; i<playersArray.length ; i++){
        if (playersArray[winnerid][1] > playersArray[i][1] )
        {
          winnerid=i
        }
      }
      alert("CONGRATULATIONS " + playersArray[winnerid][0] +" ! YOU WON!");
    } else{
      alert("get ready, Its time for " + playersArray[playerid][0] +" to play")
      shuffle() ;
    }
    //---------------------------------------------------
  
    //     if (score1 < score2) {
    //   alert("CONGRATULATIONS PLAYER ONE! YOU WON!");
    //   // shuffle();
    //   // location.reload();
    // }
    // else if (score2 < score1) {
    //   alert("CONGRATULATIONS PLAYER TWO! YOU WON!");
    //   // shuffle();
    //   // location.reload();
    // }
    // else if (score1 === score2) {
    //   alert("It's a tie");
    //   // shuffle();
    //   // location.reload();
    // }
  }
}
// lets start the game asking players name
// code for asking player names go here

// function playTheGame(playerid)
// {
//   myName=playersArray[playerid][0];
//   myCount=playersArray[playerid][1];
//   myTime=playersArray[playerid][2]; 
//   // Lets play begin wit a shuffle
//   shuffle();
// }
let playerName="" ;
let playerCount=prompt('Please enter the number of players' );
for (let playerid=0;playerid< playerCount; playerid++ )
{
  playerName=prompt("Please enter the Name of player number ", playerid+1 ,":" );
  playersArray.push([]) ;
  playersArray[playerid].push(playerName) ;
  playersArray[playerid].push(0) ;
  playersArray[playerid].push(0) ;
  // playersArray[playerid][0]playersArray[playerid][1]=0;
  // playersArray[playerid][2]=0 ;
}
//Start the game with the first player in the array playerArray
// for (let i=0;i< playersArray.length; i++ )
// {
//   //playTheGame(playerid);
//   playerid=i ;
//   shuffle() ;
// }

