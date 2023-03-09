'use strict';

const listaBici = [
    {
        nome: 'gialla',
        peso: '20'
    },
    {
        nome: 'rossa',
        peso: '25'
    },
    {
        nome: 'nera',
        peso: '12'
    },
    {
        nome: 'blu',
        peso: '16'
    },
    {
        nome: 'bianca',
        peso: '13'
    },
    {
        nome: 'verde',
        peso: '18'
    }
];

const pesoMinore = Math.min(...(listaBici.map((element) => element.peso)))//.forEach((element) => element < )
console.log(pesoMinore)
    





