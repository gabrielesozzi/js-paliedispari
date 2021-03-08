// Functions

function palindroma(parola) {
var reversedText  = parola.split('').reverse().join('');

if (parolaUtente === reversedText) {
  var parolaPalindroma = "La parola inserita è palindroma";
  console.log(parolaPalindroma);
} else {
  var parolaNonPalindroma = "La parola inserita non è palindroma";
  console.log(parolaNonPalindroma);
}
}

var parolaUtente = prompt("Inserisci una parola");

palindroma(parolaUtente)
