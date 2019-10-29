// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var listaNomi = ['Marco', 'Paolo', 'Gino', 'Toni', 'Luca'];
var listaCognomi = ['Verdi', 'Rossi', 'Bianchi', 'Gialli'];



// function randomGenerator(max, min) {
//   var intNUm = Math.floor(Math.random() * (max - min + 1)) + min;
//   return intNUm;
// }

//genera un numero casuale fra 0 e max
function randomGenerator(max) {
  var intNUm = Math.floor(Math.random() * (max  + 1));
  // console.log(intNUm);
  return intNUm;
}

//genera una lista di 6 nomi e cognomi casuali
function listGenerator(lista1, lista2) {
  var rnd1, rnd2;
  var randomList = [];

  for(var i = 0; i < 6; i++) {
    rnd1= randomGenerator(lista1.length -1);
    rnd2 = randomGenerator(lista2.length - 1);
    randomList[i] = lista1[rnd1] + " " +  lista2[rnd2];
  }

  return randomList;
}

var listaFalsa = listGenerator(listaNomi, listaCognomi);
console.log(listaFalsa);