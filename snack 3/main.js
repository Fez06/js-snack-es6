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

listaBici.forEach(element => {
    const {nome, peso} = element;
    return element
    
});
console.log(listaBici)

/*const pesoMinore = Math.min(...(listaBici.map((element) => element.peso)))
console.log(pesoMinore)*/


/*const pesoMinore = Math.min(...(listaBici.map((element) => element.peso))).forEach((element) => element < )
console.log(pesoMinore.nome)*/
    
/*const minore = listaBici.filter(element, index => {
    if (element[index] < element) {
        return true
    }
    
});
console.log(minore)*/