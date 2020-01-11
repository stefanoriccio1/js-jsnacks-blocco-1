// alert ('ciao')

var parolaUno= prompt ('inserisci una parola');
var parolaDue= prompt ('inserisci un\'altra parola');

while (parolaUno.length <=0 || parolaDue.length <=0){
  if(parolaUno.length <=0){
   parolaUno = prompt('il campo della parolaUno non può essere vuoto, inserisci una parola');
  }
  else if (parolaDue.length <=0) {
    parolaDue = prompt('il campo della parolaDue non può essere vuoto, inserisci una parola');
  }
}

if (parolaUno.length < parolaDue.length){
  console.log(parolaUno + ' ' + parolaDue);
}
else if (parolaUno.length == parolaDue.length) {
  alert ('stessa lunghezza, cambia le parole');
}
else{
  console.log(parolaDue + ' ' + parolaUno);
}
