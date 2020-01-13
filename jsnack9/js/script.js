var paroleRandom = ['Oggi troverai una cosa dimenticata', 'Ciò che è fatto è fatto', 'Il buon giorno si vede dal mattino', 'Sicuro di aver chiuso il gas?', 'Chi semina vento raccoglie tempesta', 'Il mattino ha l\'oro in bocca', 'Tanto va la gatta al lardo che ci lascia lo zampino']

var randomSentence = generator (0, paroleRandom.length -1);
alert (paroleRandom [randomSentence]);

function generator (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1));
  return random;
}
