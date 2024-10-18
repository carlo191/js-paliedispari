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
    userNumber = parseInt(prompt(`Valore non valido per favore ` + message));
  }
  return userNumber;
}
const userNumber = askNumber(1, 5, `Dammi un numero da 1 a 5 `);
