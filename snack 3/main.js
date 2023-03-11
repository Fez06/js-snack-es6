'use strict';



const listaBici = [
    {
        nome: 'gialla',
        peso: 20
    },
    {
        nome: 'rossa',
        peso: 25
    },
    
    {
        nome: 'blu',
        peso: 16
    },
    {
        nome: 'bianca',
        peso: 13
    },
    {
        nome: 'carbonio',
        peso: 7
    },
    {
        nome: 'nera',
        peso: 11
    }
];

//for (let i = 0; i < listaBici.length; i++) {

//}


if (listaBici.length === 0) {
    console.log('niente bici')
} else {
    let pesoMinore = listaBici[0];
    
    
    //console.log(element.nome);
    
    listaBici.forEach(element => {
        if (element.peso < pesoMinore.peso) {
            pesoMinore = element;
            console.log(pesoMinore);   
        }
    })
    const {nome, peso} = pesoMinore;
    console.log(peso);
    console.log(nome);
    console.log(`La bici piu' leggera e' la bici ${nome} con ${peso}kg!`)
    //return pesoMinore;
}
    



//console.log(pesoMinore[peso])



//console.log(pesoMinore.nome);
//console.log(`La bici che pesa di meno e' la ${pesoMinore.nome} per un peso di ${pesoMinore.peso}kg!`);


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