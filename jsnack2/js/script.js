/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const footballTeams = [
    { name: "Juventus", fouls: undefined, points: undefined },
    { name: "Milan", fouls: undefined, points: undefined },
    { name: "Inter", fouls: undefined, points: undefined },
    { name: "Roma", fouls: undefined, points: undefined },
    { name: "Napoli", fouls: undefined, points: undefined },
    { name: "Lazio", fouls: undefined, points: undefined },
    { name: "Atalanta", fouls: undefined, points: undefined },
    { name: "Fiorentina", fouls: undefined, points: undefined },
    { name: "Torino", fouls: undefined, points: undefined },
    { name: "Bologna", fouls: undefined, points: undefined }
];

let namesAndFouls = []


// creato ciclo for che aggiunto random numbers agli object points e fouls pusho il tutto in NamesAndFouls

for (let index = 0; index < footballTeams.length; index++) {
    footballTeams[index].points = rng(100);
    footballTeams[index].fouls = rng(30);
    namesAndFouls.push({nome:footballTeams[index].name, fouls:footballTeams[index].fouls});
}
console.log(footballTeams);
console.log(namesAndFouls);



// Funzioni
function rng(max){
    return Math.floor(Math.random() * max);
}
