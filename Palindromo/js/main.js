// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all' utente di inserire una parola
let userWord = prompt('Inserisci una parola: ');
// console.log(userWord);


// Dichiaro la funzione e gli assegno come parametro la stringa inserita dall'utente
function palindrome(userWord) {
    // Rendo la stringa tutta minuscola
    const lowerText = userWord.toLowerCase();
    // console.log(lowerText);

    // Divido la stringa poi la inverto e la riconpongo
    const invertedText = lowerText.split('').reverse().join('');
    // console.log(invertedText);


    if(lowerText === invertedText) {
        const isPalindrome = "Hai inserito una parola Palindroma";
        alert(isPalindrome);
    } else {
        const isNotPalindrome = "Hai inserito una parola non Palindroma";
        alert(isNotPalindrome);
    }
}

// Richiamo la funzione
palindrome(userWord)


