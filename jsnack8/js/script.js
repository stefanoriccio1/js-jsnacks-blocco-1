var numeroUtente = prompt('inserisci un numero di 4 cifre');
// console.log(numeroUtente);

var somma = 0;

for (i=0; i < numeroUtente.length; i++){
// console.log(parseInt(numeroUtente [i]));
somma += parseInt(numeroUtente [i]);
}
console.log(somma);
