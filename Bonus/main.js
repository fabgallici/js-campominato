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

// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
// difficoltà 2=> da 1 a 50

//genera un numero casuale fra 1 e max
function randomGenerator(max) {
  var intNUm = Math.floor(Math.random() * max) + 1;
  // console.log(intNUm);
  return intNUm;
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

// riceve ingresso array di 16 numeri random, e max range di numeri 
function playMines(minesArr, numRange) {
  var playerScore = 0;
  var inputNum;
  var playerData = [];
  mineFound = false;
  playerMaxScore = numRange - 16; // max punteggio uguale massimale range numeri meno 16 mine.
  var i = 0;
  while (i <= playerMaxScore && mineFound === false) {
    inputNum = parseInt(prompt('Inserisci un numero da 1 a ' + numRange + ' senza ripeterlo!'));
    if (!playerData.includes(inputNum) && inputNum >= 1 && inputNum <= numRange) {
      playerData.push(inputNum);
      console.log('player lista numeri ' + playerData);  //debug stampa lista numeri già inseriti dall'utente
      if (minesArr.includes(inputNum)) {
        mineFound = true;
        alert('Hai preso una mina! YOU LOSE!');
      } else {
        playerScore++;
        alert('Numero Valido, Non hai preso una mina, continua il gioco');       
      }
      i++;
    } else {
      alert('hai reinserito lo stesso numero, oppure un numero fuori dal range consentito, Ripeti l\'inserimento');
    }
    
  }
  return playerScore;
}


function playMinesHard() {
  var numRange;
  var playerScoreHard = 0;
  var minesArray = [];
  var userRangeChoice = parseInt(prompt('Scegli la difficoltà: "0" da 1 a 100, "1" da 1 a 80, "2" da 1 a 50'));
  if (userRangeChoice === 0 || userRangeChoice === 1 || userRangeChoice === 2) {
    switch (userRangeChoice) {
      case 0:
        numRange = 100;
        break;
      case 1:
        numRange = 80;
        break;
      case 2:
        numRange = 50;
        break;
    }
    minesArray = createMines(numRange);
    console.log('lista mine ' + minesArray); // debug lista 16 mine random
    playerScoreHard = playMines(minesArray, numRange);
  } else {
    alert('hai Inserito un valore non consentito');
  }
  return playerScoreHard;
}

var myGameHard = playMinesHard();
console.log('Hai Totalizzato ' + myGameHard + ' punti');