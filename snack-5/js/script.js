// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array;
var odd = [];

for (var i = 0; i < 6; i++) {
  var number = parseInt(prompt('Insert a number'));
  if (number % 2 != 0) {
    odd.push(number);
  }
}

document.getElementById('odd').innerHTML += odd;
console.log(`The odd numbers are ${odd}`);