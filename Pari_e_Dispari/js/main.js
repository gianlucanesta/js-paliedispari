// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L'utente sceglie pari o dispari

let userEvenOrOdd;
    
while ((userEvenOrOdd !== 'pari') || (userEvenOrOdd !== 'dispari')) {
    // Chiedo all'utente di scegliere tra pari o dispari
    userEvenOrOdd = prompt ('Scegli tra PARI o DISPARI');  
    
    // Rendo il valore minuscolo
    userEvenOrOdd = userEvenOrOdd.toLowerCase(); 
    // console.log(userEvenOrOdd);

    if ((userEvenOrOdd == 'pari') || (userEvenOrOdd == 'dispari')) {
        alert('Hai scelto un valore corretto');
        break;
    } else {
        alert('Il valore inserito non è valido');
    }
}


// L'utente sceglie un numero da 1 a 5

// Dichiaro la variabile playerNumber
let playerNumber = '';
// console.log(playerNumber)

 while (!isNaN(playerNumber) && (playerNumber < 1 || playerNumber > 5)) {
    // Chiedo all'utente di scegliere un numero tra 1 e 5
    playerNumber = parseInt (prompt ('Scegli un numero tra 1 e 5'));    

    if (playerNumber >= 1 && playerNumber <= 5) {
        alert('Il valore inserito è valido');
        break;
    } 
     else{
        alert('Il valore inserito non è valido');
    }
 }



const cpuNumber = computerNumber(1, 5);

const totalResult = sumPlayerVsCpu(playerNumber, cpuNumber);

if (userEvenOrOdd === totalResult)  {
    alert ('Hai vinto');
} else {
    alert('Hai perso');
}
    

// // Funzione che genera un numero random per simulare la scelta del computer
function computerNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + 1;
    
    alert(`Il computer ha scelto ${randomNumber}`);
    return randomNumber;
}

// Funzione che verifica se la somma dei numeri inseriti è pari o dispari
// playNumber è il numero inserito dall'utente
// cpuNumber è il numero generato dal computer
function sumPlayerVsCpu(playerNumber, cpuNumber){
    let finalValue;
    
    const sumValue = playerNumber + cpuNumber;
    alert(`La somma è pari a ${sumValue}`);

    if(sumValue % 2 === 0){
       finalValue  == 'pari';
    } else{
       finalValue == 'dispari';
    }
    return finalValue;

}





