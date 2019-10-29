
//genera un numero casuale fra 1 e max
function randomGenerator(max) {
  var intNUm = Math.floor(Math.random() * max) + 1;
  // console.log(intNUm);
  return intNUm;
}

//ritorna true se numero è incluso nell'array, altrimenti false
function isIncluded(num, array) {
  var i = 0;
  var found = false;
  while (i < array.length && !found) {
    if (num === array[i]) {
      found = true;
    }
    i++
  };
  return found;
}
// var prova = [1,2,3,4,5,6,7,8];
// console.log(isIncluded(8, prova));

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
      console.log('player lista numeri ' + playerNumList);
      if (isIncluded(playerNumChoice, minesArr) === true) {
        mineFound = true;
        alert('Hai preso una mina!');
      } else {
        playerScore++;
        alert('Numero valido, non hai preso una mina, continua il gioco');       
      }


    } else {
      alert('hai ripetuto l\'inserimento dello stesso numero, la partita termina quà');
      break;
    }
    i++;
  }
  return playerScore;
}

var myMines = createMines(100);
console.log('lista mine ' + myMines);
var myGame = playMines(myMines);
console.log('hai totalizzato ' + myGame);

// var prova = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var myGame = playMines(myMines);


// var myGame = playMines(prova);
// console.log(myGame);