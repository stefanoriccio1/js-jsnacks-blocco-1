// alert ('ciao')

var parolaUno= prompt ('inserisci una parola');
var parolaDue= prompt ('inserisci un\'altra parola');

if (parolaUno.length < parolaDue.length){
  console.log(parolaUno + ' ' + parolaDue);
}
else if (parolaUno.length == parolaDue.length) {
  alert ('stessa lunghezza, cambia le parole');
}
else{
  console.log(parolaDue + ' ' + parolaUno);
}
