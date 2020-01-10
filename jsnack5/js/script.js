// alert ('ciao')

var listaNumeri =[];

//
// for (var i=0; i < 6; i++){
//   var numero = parseInt(prompt('Inserisci un numero'));
//   if (numero %2 !=0){
//     listaNumeri.push(numero);
//   }
// }
// console.log(listaNumeri[i]);
var numero;
var i= 0;
while (i < 6){
  numero = parseInt(prompt('Inserisci un numero'));
  while (isNaN(numero)){
    numero = parseInt(prompt('non hai inserito un numero, riprova'));
  }
  if (numero %2 !=0){
    listaNumeri.push(numero);
  }
  i++;
}

console.log(listaNumeri);
