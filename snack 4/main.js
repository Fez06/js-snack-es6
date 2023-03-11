'use strict';


const squadre = [
    {
        nome: 'milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'napoli',
        puntiFatti: 0,
        falliSubiti: 0
    }
];


//----------funzioni

//numeri random
function randomNumber1a40() {
    return Math.floor(Math.random() * (40 - 0 + 1) ) + 0;
}

//--------------MAIN


//console.log(randomNumber1a40());
squadre.forEach(element => {
    
    const randomValue1 = randomNumber1a40();
    const randomValue2 = randomNumber1a40();

    element.puntiFatti = randomValue1;
    element.falliSubiti = randomValue2;
    //console.log(element)
});

const filtro = squadre.map(({nome, falliSubiti}) => {
    return {nome, falliSubiti};
});


console.log(filtro);


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