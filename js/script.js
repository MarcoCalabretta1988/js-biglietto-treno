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

console.log (ticketprice);

// 2-Creo costante con prezzo al km

const kmPrice = 0.21;

console.log(kmPrice);

// 3-Creo costante sconto minorenni

const underageSale = 20;

console.log(underageSale);

// 4-Creo costante sconto over 65

const elderlySale = 40;

console.log(elderlySale);

// 5-Chiedo all'utente i chilometri da percorrere e li metto in una variabile

const userKm = parseInt(prompt('Quanti chilometri devi percorrere?', '120').trim());

console.log(userKm);

// 6-Chiedo all'utente gli anni e li metto in una variabile

const userAge = parseInt(prompt('Quanti anni hai?', '33').trim());

console.log(userAge);