// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
//   cioè il numero di volte che l’utente ha inserito un numero
// consentito.

//genera un numero casuale fra 1 e max
function randomGenerator(max) {
  var intNUm = Math.floor(Math.random() * max) + 1;
  // console.log(intNUm);
  return intNUm;
}

//ritorna true se numero è incluso nell'array, altrimenti false
function isIncluded(value, array) {
  var i = 0;
  var found = false;
  while (i < array.length && !found) {
    if (value === array[i]) {
      found = true;
    }
    i++
  }
  return found;
}


//crea un array da 1 a rangeNum con 16 numeri non ripetuti
function createMines(rangeNum) {
  var mines = [];
  var rndMine;
  while (mines.length < 16) {
    rndMine = randomGenerator(rangeNum);
    if (!mines.includes(rndMine)) {
      mines.push(rndMine);
    }
  }
  return mines;
}

// console.log(createMines(100));
function playMines(minesArr, userRange) {
  // var playerMaxScore = 84;
  var playerScore = 0;
  var playerNumChoice;
  var playerNumList = [];
  mineFound = false;
  playerMaxScore = userRange - 16; // max punteggio uguale massimale range numeri meno 16 mine.
  var i = 0;
  while (i <= playerMaxScore && mineFound === false) {
    playerNumChoice = parseInt(prompt('Inserisci un numero da 1 a ' + userRange + ' senza ripeterlo!'));
    if (isIncluded(playerNumChoice, playerNumList) === false) {
      playerNumList.push(playerNumChoice);
      console.log('player lista numeri ' + playerNumList);  //debug stampa lista numeri già inseriti dall'utente
      if (isIncluded(playerNumChoice, minesArr) === true) {
        mineFound = true;
        alert('Hai preso una mina! YOU LOSE!');
      } else {
        playerScore++;
        alert('Numero Valido, Non hai preso una mina, continua il gioco');       
      }
    } else {
      alert('hai ripetuto l\'inserimento dello stesso numero, inserisci un numero diverso');
    }
    i++;
  }
  return playerScore;
}


function playMinesHard() {
  var userRange, maxPlayerScore, playerScoreHard;
  var minesArray = [];
  var userNumChoice = parseInt(prompt('Scegli la difficoltà: "0" da 1 a 100, "1" da 1 a 80, "da" 1 a 50'));
  if (userNumChoice === 0 || userNumChoice === 1 || userNumChoice === 2) {
    switch (userNumChoice) {
      case 0:
        userRange = 100;
        break;
      case 1:
        userRange = 80;
        break;
      case 2:
        userRange = 50;
        break;
    }
    minesArray = createMines(userRange);
    console.log('lista mine ' + minesArray); // debug lista 16 mine random
    playerScoreHard = playMines(minesArray, userRange);
  } else {
    alert('hai Inserito un valore non consentito');
  }
  return playerScoreHard;
}

var myGameHard = playMinesHard();
console.log('Hai Totalizzato ' + myGameHard + ' punti');