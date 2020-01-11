// alert ('ciao')
var cognomeUtente = prompt ('qual è il tuo cognome?');

while (cognomeUtente.length <=0){
  cognomeUtente = prompt('Qual è il tuo cognome?');
}

var listaCognomi = ['Pippo', 'Pluto', 'Paperino', 'Topolino'];

var invitato = false;

for (var i = 0; i < listaCognomi.length; i++){
   if (cognomeUtente == listaCognomi [i]){
     invitato = true;
    }
}
console.log(invitato);

if (invitato ==true){
  alert ('Benvenuto');
}
else{
  alert ('mi spiace, non sei stato invitato');
}
