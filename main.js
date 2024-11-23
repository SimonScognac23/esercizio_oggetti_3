


let bowling = {
    players: [
        { name: 'Ocelot', scores: [] },
        { name: 'VulcanRaven', scores: [] },
        { name: 'LiquidSnake', scores: [] },
        { name: 'Otacon', scores: [] },
        { name: 'PromessoConsorteRadahn', scores: [] }
    ]
};





// Funzione per generare 10 punteggi casuali per ogni giocatore
function generateScores() {
    // Scorriamo ogni giocatore presente nella lista players tramite il forEach
    bowling.players.forEach(player => {
        // Creiamo un array di 10 numeri casuali utilizzando Array.from()
        player.scores = Array.from(
            { length: 10 }, // Generiamo un array con length 10
            () => Math.floor(Math.random() * 10) + 1 // Per ogni elemento, creiamo un numero casuale tra 1 e 10
        );
        // L'array appena generato con i dieci numeri viene assegnato alla proprietà scores del giocatore attuale
    });

    // una volta che sono stati assegnati i punti a ogni giocatore uscirà il console.log
    console.log('I giocatori hanno giocato!!!');
}





// Funzione per calcolare i punteggi totali per ogni giocatore e aggiornarli nell'array
function calculateFinalScores() {
    // Per ogni giocatore, calcoliamo il punteggio totale sempre tramite il forEach e lo aggiungiamo alla variabile totalScore
    bowling.players.forEach(player => {
        // Calcoliamo il punteggio totale
        let totalScore = player.scores.reduce((sum, score) => sum + score, 0);  // il reduce mi permette partendo da un array di ridurre l'insieme di dati all'interno di un array in un unico nuovo dato 
        // sum è l'accumulatore, sarebbe ogni singolo elemento dell'array di partenza

        // Aggiungiamo la proprietà totalScore all'oggetto del giocatore
        player.totalScore = totalScore;
    });

    // Ordiniamo l'array dei giocatori in ordine decrescente in base al punteggio totale tramite il sort b-a ordina in modo decrescente
    bowling.players.sort((a, b) => b.totalScore - a.totalScore);
}





// Funzione per aggiungere un nuovo giocatore e generare 10 punteggi casuali per lui
function addPlayer(newName) {
    // Creiamo un nuovo giocatore con il nome e i punteggi casuali
    let newPlayer = {
        name: newName,
        scores: Array.from({ length: 10 }, () => Math.floor(Math.random() * (10 - 1 + 1) + 1))
    };

    // Aggiungiamo il nuovo giocatore alla lista dei giocatori
    bowling.players.push(newPlayer);

    // Stampa il nome del giocatore e i punteggi generati per lui
    console.log(`Il giocatore "${newName}" entra in gioco e ha totalizzato i seguenti punteggi: ${newPlayer.scores}`);
}






// Funzione per determinare il vincitore
function getWinner() {
    // Calcoliamo i punteggi finali e li ordiniamo
    calculateFinalScores();

    // Inizializziamo una variabile per memorizzare il giocatore con il punteggio più alto
    let winner = bowling.players[0];

    // Cicliamo sui giocatori per determinare chi ha il punteggio più alto
    bowling.players.forEach(player => {
        if (player.totalScore > winner.totalScore) {
            winner = player; // Aggiorniamo il vincitore se troviamo un punteggio maggiore
        }
    });

    // Stampa il vincitore con il punteggio più alto
    console.log(`Il vincitore è ${winner.name} con un punteggio totale di ${winner.totalScore}!`);
}





// Funzione per stampare la classifica dei giocatori con i vari punteggi
function results() {
    console.log('Classifica dei giocatori:');
    console.log('---------------------------------------------------------------');
    // Per ogni giocatore, stampiamo il nome e il punteggio totale
    bowling.players.forEach(player => {
        console.log(`${player.name} ha realizzato: ${player.totalScore} punti`);
    });
    console.log('---------------------------------------------------------------');
}






generateScores();
console.log("\n");

addPlayer('SolidSnake');
console.log("\n");

getWinner();
console.log("\n");

results();
console.log("\n");
