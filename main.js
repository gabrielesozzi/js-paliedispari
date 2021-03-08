// Funzione primo esercizio
function palindroma(parola) {
var reversedText  = parola.split('').reverse().join('');

if (parolaUtente === reversedText) {
  var parolaPalindroma = "La parola inserita è palindroma";
  console.log(parolaPalindroma);
  document.getElementById("stampa").innerHTML = parolaPalindroma;
} else {
  var parolaNonPalindroma = "La parola inserita non è palindroma";
  console.log(parolaNonPalindroma);
  document.getElementById("stampa").innerHTML = parolaNonPalindroma;
}
}

// Funzione secondo esercizio

function numeroComputer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function somma(numeroUtente, random) {
  console.log(numeroUtente + random);
  if (numeroSommato% 2 == 0) {
    console.log("Il numero è pari");
  } else {
    console.log("Il numero è dispari");
  }
}


// Codice primo esercizio

var parolaUtente = prompt("Inserisci una parola");
palindroma(parolaUtente)

// Codice secondo esercizio

    // Chiedo dati ad utente

    var pariDispari = prompt("Scrivi p per pari e d per dispari:");
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
    console.log(numeroUtente);

    // Genero numero per pc

    var random = numeroComputer(1, 5);
    console.log(random);

    // Effettuo somma fra numero utente e numero del pc e stabilisco se pari o dispari
    var numeroSommato = somma(numeroUtente, random)
