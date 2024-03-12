(function() {
  "use strict";
  console.log("reading js");
 
const rolly =  document.getElementById('roll');
  const score1 = document.getElementById('score1');
  const score2 = document.getElementById('score2');
  const results=document.getElementById('result');
   const dices = document.getElementById('dices');
  const dataR = document.getElementById('data');
  const values = document.getElementById('values');
  const startBut = document.getElementById('start');
  const introPage = document.getElementById('rules');
  const realGame = document.getElementById('game');
  const trueStart = document.getElementById('trueStart');
  const initialPick = document.getElementById('initialPick');
  const player1 =  document.querySelector('#player1');
  const player2 =  document.querySelector('#player2');


  // Loads up main page after click
  startBut.addEventListener('click', function(event){
    event.preventDefault;
    introPage.style.display="none";
    realGame.style.display="block";
    
  });
// Inserts all the values and dice images I need
  const gameData = {
    dice: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png'],
    profile: ['images/Pink_Monster.png', 'images/Dude_Monster.png'],
    players: ['player 1', 'player 2'],
    score: [0, 0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 30
};
trueStart.addEventListener("click", function() {
  // Randomly selects within game index so we can  determine who is the starting player
  gameData.index = Math.round(Math.random());
  console.log(gameData.index);

  // Sets up the the controls
 trueStart.style.display="none";
  initialPick.innerHTML += '<button id="firstQ">Quit</button>';

  // Reloads back to starting page
  document.getElementById('firstQ').addEventListener('click', function() {
    location.reload();
      introPage.style.display="block";
      realGame.style.display="none";
  });
  setUpTurn(); // Calls the setUpTurn function after the game starts
});

// chooses player through index and highlights the player in white.
function choosePlayer() {
  if (gameData.index == 0) {
     player1.id="altplayer1";
  } else {
    player2.id="altplayer2";

  }
}

// Sets up roll button and when it disappears
function setUpTurn() {
  dataR.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
  values.innerHTML = '<button id="roll">Roll</button>';
  choosePlayer()

  document.getElementById('roll').addEventListener('click', function() {
      throwDice();
      document.getElementById('roll').style.display="none";
  })
}


function throwDice() {
  values.innerHTML = '';
  //Sets up random values up to 6
  gameData.roll1 = Math.floor(Math.random() * 6) + 1;
  gameData.roll2 = Math.floor(Math.random() * 6) + 1;

  // Draws the dice images from the index and puts them on window.
  dices.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}"">
                  <img src="${gameData.dice[gameData.roll2-1]}"">`;
  dataR.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;

  gameData.rollSum = gameData.roll1 + gameData.roll2;
  console.log(gameData.rollSum);

  document.getElementById('diceRoll').play();
  
  if (gameData.rollSum === 2) {
    dataR.innerHTML += '<p>Oh no! You got Snake eyes!</p>';
    gameData.score[gameData.index] = 0;
    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
    showCurrentScore();
    setTimeout(setUpTurn, 2000);
} else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
    dataR.innerHTML += `<p>Sorry, you rolled a one, It's ${gameData.players[gameData.index]}'s turn !</p>`;
    setTimeout (setUpTurn, 2000);
} else {
    gameData.score[gameData.index] += gameData.rollSum;
    initialPick.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button> <button id="quit">Quit</button>';
    values.style.display="none";

    document.getElementById('quit').addEventListener('click', function() {
      location.reload();
        introPage.style.display="block";
        realGame.style.display="none";
    }); 
   

    document.getElementById('rollagain').addEventListener('click', function () {
        throwDice();
    });

    document.getElementById('pass').addEventListener('click', function () {
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        setUpTurn();
        values.style.display="none";
    })
    checkWinningCondition();
}
}
function checkWinningCondition() {
  if (gameData.score[gameData.index] > gameData.gameEnd) {
      results.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!!!</h2>`;
    
    values.style.display="none";

    document.getElementById('quit').style.display="none";
    document.getElementById('rollagain').style.display="none";
    document.getElementById('pass').style.display="none";
    
    document.getElementById('win').play();
     initialPick.innerHTML = '<button id="playagain"> Play Again?</button>';
     document.getElementById('playagain').addEventListener('click', function() {
      location.reload();
        introPage.style.display="block";
        realGame.style.display="none";
    }); 
   
  }

      showCurrentScore();
  
}
// Presents scores of the players
function showCurrentScore() {
  score1.innerHTML = `<h2>Score: ${gameData.score[0]}</h2>`;
  score2.innerHTML = `<h2>Score: ${gameData.score[1]}</h2>`;
}

})();