'use strict';

const listaInvitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//console.log(listaInvitati);

const nuovaListaInvitati = listaInvitati.map((oggetto, index)=>{
    return oggetto = {
        table: 'Tavolo Vip',
        nome: oggetto,
        posto: index + 1
    };
});

console.log(nuovaListaInvitati);