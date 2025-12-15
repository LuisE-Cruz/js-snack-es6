/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [
    { name: "Pinarello Dogma F", weight: 6.8 },
    { name: "Specialized S-Works Tarmac", weight: 6.6 },
    { name: "Trek Émonda SLR", weight: 6.5 },
    { name: "Cervélo R5", weight: 6.4 },
    { name: "Wilier Zero SLR", weight: 6.5 },
    { name: "Scott Addict RC", weight: 6.3 },
    { name: "Colnago V4Rs", weight: 6.8 },
    { name: "Bianchi Oltre XR4", weight: 7.1 },
    { name: "Cannondale SuperSix EVO", weight: 6.7 },
    { name: "Giant TCR Advanced SL", weight: 6.6 }
];

console.log(bikes);

// Creo una variabile di partenza
let lightlessBike = bikes[0];

// Ciclo for che scorre le bici e valuta il .peso se minore o meno e resituisce infine il valore alla nostra variabile di partenza
for (let index = 0; index < bikes.length; index++) {

    if (bikes[index].weight < lightlessBike.weight) {
        lightlessBike = bikes[index]
    }
}

// Stampo la variabile modificata
console.log(lightlessBike);
















// Creo una funzione con il callback function reduce che scorre nel mio array mantenendo il valore inferiore
// const minWeightValue = bikes.reduce((min, current) =>
//     current.weight < min.weight ? current : min, bikes[0]);


// console.log(minWeightValue);