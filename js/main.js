/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 





function isParolaPalindroma(parola){
    parola= parola.toLowerCase()
    
    const parolaInvertita = parola.split(``).reverse().join(``)
    return parola === parolaInvertita

}




const userParola = prompt(`Scegli una parola`)

if (isParolaPalindroma(userParola))
    {
    alert(`${userParola} è una parola palindroma`)
    
} else{
    alert(`${userParola} NON  è una parola palindroma`)

} /*










/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo? */
function askNumber(min, max, message = `Dammi un numero`) {
  let userNumber = parseInt(prompt(message));
  while (isNaN(userNumber) || userNumber < min || userNumber > max) {
      userNumber = parseInt(prompt(`Valore non valido, per favore ${message}`));
  }
  return userNumber;
}

function askString(whitelist = [], message = `Dammi un testo`) {
  let userString = prompt(message);

  if (whitelist.length > 0) {
      while (!whitelist.includes(userString)) {
          userString = prompt(`La parola deve essere inclusa nella whitelist: ${whitelist.join(', ')}`);
      }
  }
  return userString;
}

function isNumberEven(num) {
  return num % 2 === 0;
}

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isUserWinner(userNumber, opponentNumber, userChoice) {
  const sum = userNumber + opponentNumber;
  const userWon = (userChoice === "pari" && isNumberEven(sum)) ||
                  (userChoice === "dispari" && !isNumberEven(sum));
  console.log(`User won: ${userWon}`);
  return userWon;
}

const userNumber = askNumber(1, 5, `Dammi un numero da 1 a 5`);
const userChoice = askString(['pari', 'dispari'], `Dammi pari o dispari`);
const pcNumber = generateNumber(1, 5);
const userWon = isUserWinner(userNumber, pcNumber, userChoice);
