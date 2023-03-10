'use strict';


const squadre = [
    {
        nome: 'milan',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'inter',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'juventus',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'napoli',
        'punti fatti': 0,
        'falli subiti': 0
    }
];


//----------funzioni

//numeri random
function randomNumber1a40() {
    return Math.floor(Math.random() * (40 - 0 + 1) ) + 0;
}
//console.log(randomNumber1a40());
squadre.forEach(element => {
    element['punti fatti'] = randomNumber1a40();
    element['falli subiti'] = randomNumber1a40();

    
});

const x = squadre.map(element => {
    c
})
console.log(squadre);

//--------------MAIN
/*squadre.forEach((element) => {
    if (element['punti fatti'] === 0) {
    element['punti fatti'] = randomNumber1a40()
    } 

    if (element['falli subiti'] === 0) {
        element['falli subiti'] = randomNumber1a40()
    } 
    console.log(squadre)
});*/


/*squadre.forEach((element) => {
    punti[element]: randomNumber1a40(),
    element['falli subiti']: randomNumber1a40()
});
console.log(squadre)*/