// Funzione primo esercizio
function palindroma(parola) {
var reversedText  = parola.toLowerCase().split('').reverse().join('');

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
  var risultatoSomma = (numeroUtente + random);
  console.log(risultatoSomma);
  if (risultatoSomma % 2 == 0) {
    console.log("Il numero è pari");
    return pari
  } else {
    console.log("Il numero è dispari");
    return dispari
  }
}




// Codice primo esercizio

var parolaUtente = prompt("Inserisci una parola");
palindroma(parolaUtente)

// Codice secondo esercizio

    // Chiedo dati ad utente

    var pariDispari = prompt("Scrivi p se scegli pari o d se scegli dispari:");
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
    console.log(numeroUtente);

    // Genero numero per pc

    var random = numeroComputer(1, 5);
    console.log(random);

    // Effettuo somma fra numero utente e numero del pc e stabilisco se pari o dispari
    var numeroSommato = somma(numeroUtente, random)

    // Stabilisco vincitore

    var pari = risultatoSomma % 2 == 0
    var dispari = risultatoSomma % 2 != 0
    var risultatoSomma = (numeroUtente + random);

    if ((risultatoSomma % 2 == 0) && (pariDispari == "p")) {
     console.log("L'utente ha vinto!");
   } else if (((risultatoSomma % 2 != 0) && (pariDispari == "d"))) {
     console.log("L'utente ha vinto!");
   } else {
     console.log("Il computer ha vinto!");
   }
