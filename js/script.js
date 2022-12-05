// Controllo collegamento script
console.log('JS OK');

//TRACCIA
/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

//TO DO LIST

/*
1-Prendo l'elemento da DOM
2-Creo costante con prezzo al km
3-Creo costante sconto minorenni
4-Creo costante sconto over 65
5-Chiedo all'utente i chilometri da percorrere e li metto in una variabile
6-Chiedo all'utente gli anni e li metto in una variabile
7-Calcolo costo
8-Applico eventuali sconti
9-stampo a video
*/


//1-Prendo l'elemento da DOM

const ticket = document.getElementById('ticketprice');

//BONUS

const nosale = document.getElementById('nosale');
const km = document.getElementById('km');
const age = document.getElementById('age');



// 2-Creo costante con prezzo al km

const kmPrice = 0.21;



// 3-Creo costante sconto minorenni

const underageSale = 20;



// 4-Creo costante sconto over 65

const elderlySale = 40;



// 5-Chiedo all'utente i chilometri da percorrere e li metto in una variabile

const userKm = parseInt(prompt('Quanti chilometri devi percorrere?', '120').trim());



// 6-Chiedo all'utente gli anni e li metto in una variabile

const userAge = parseInt(prompt('Quanti anni hai?', '15').trim());



//VALIDAZIONE

let isValid = true;

if (isNaN(userKm) || userKm < 1 ){
    isValid = false;
    alert ('Inserisci chilometraggio valido');
}




if (isNaN(userAge) || userAge < 1 || userAge > 120){
    isValid = false;
    alert ('Inserisci età valida');
}




if (isValid){

// 7-Calcolo costo

const userTicketPrice = userKm * kmPrice;


// 8-Applico eventuali sconti

let saleTicketPrice;

if (userAge >= 65){
    saleTicketPrice = userTicketPrice - ( userTicketPrice * elderlySale) / 100;
}

if ( userAge < 18){
    saleTicketPrice = userTicketPrice - (userTicketPrice * underageSale) / 100;
}


// 9-stampo a video

const message = `Il costo finale del tuo biglietto è ${userTicketPrice.toFixed(2)} €`;

ticket.innerText = message;

//BONUS STAMP

nosale.innerText = `Il tuo prezzo senza sconto era: ${saleTicketPrice.toFixed(2)} €`;
age.innerText = ` Eta inserita: ${userAge}`;
km.innerText = ` Km inseriti: ${userKm}`;

}
