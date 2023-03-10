'use strict';

let pesoMinore = 0;

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
    //console.log(element);
    
    if (element.peso < pesoMinore || pesoMinore == 0) {
        //const {nome, peso} = element;
        pesoMinore = element;
    
        console.log(pesoMinore.nome);
        console.log(pesoMinore.peso);
        
    };
    //let {nome, peso} = pesoMinore;
    
    

});

console.log(pesoMinore.nome);
console.log(`La bici che pesa di meno e' la ${pesoMinore.nome} per un peso di ${pesoMinore.peso}kg!`);


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