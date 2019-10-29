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
    if (isIncluded(rndMine, mines) === false) {
      mines.push(rndMine);
    }
  }
  return mines;
}

// console.log(createMines(100));
function playMines(minesArr) {
  var maxPlayerRange = 84;
  var playerScore = 0;
  var playerNumChoice;
  var playerNumList = [];
  mineFound = false;
  var i = 0;
  while (i <= maxPlayerRange && mineFound === false) {
    playerNumChoice = parseInt(prompt('Inserisci un numero da 1 a 100 senza ripeterlo!'));
    if (isIncluded(playerNumChoice, playerNumList) === false) {
      playerNumList.push(playerNumChoice);
      console.log('player lista numeri ' + playerNumList);  //stampa lista numeri già inseriti dall'utente
      if (isIncluded(playerNumChoice, minesArr) === true) {
        mineFound = true;
        alert('Hai preso una mina!');
      } else {
        playerScore++;
        alert('Numero Valido, non hai preso una mina, continua il gioco');       
      }
      i++;
    } else {
      alert('hai ripetuto l\'inserimento dello stesso numero, inserisci un numero diverso');
    }
    
  }
  return playerScore;
}

var myMines = createMines(100);
console.log('lista mine ' + myMines);   // stampa lista numeri "vietati"
var myGame = playMines(myMines);
console.log('hai totalizzato ' + myGame);
