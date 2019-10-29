
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