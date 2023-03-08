'use strict';

const elencoStudenti = [
    {
        id: '213',
        nome: 'Marco della Rovere',
        'somma voti': 78
    },
    {
        id: '110',
        nome: 'Paola Cortellessa',
        'somma voti': 96
    },
    {
        id: '250',
        nome: 'Andrea Mantegna',
        'somma voti': 48
    },
    {
        id: '145',
        nome: 'Gaia Borromini',
        'somma voti': 74
    },
    {
        id: '196',
        nome: 'Luigi Grimaldello',
        'somma voti': 68
    },
    {
        id: '102',
        nome: 'Piero della Francesca',
        'somma voti': 50
    },
    {
        id: '120',
        nome: 'Francesca da Polenta',
        'somma voti': 84
    }
];

const nomiUrlati = elencoStudenti.filter((studente)=>{
    if (studente.nome.toUpperCase) {
        return true
    }
})

console.log(nomiUrlati);

