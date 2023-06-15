/*
    1. randomizza valore di 2 tiri di dado
    2. confronta i 2 valori per determinare il vincitore
*/
    //Generare numero random tra 1 e 6 usando math random
let player = Math.floor(Math.random()*6)+1;
    console.log(player)
    document.getElementById('player-number').append(player);

let computer = Math.floor(Math.random()*6)+1;
    console.log(computer)  
    document.getElementById('computer-number').append(computer);

    //3 possibili outcome del confronto tra i 2 valori generati
if (player < computer){
    document.getElementById('outcome').innerHTML = 'Peccato! Hai perso';
    console.log('outcome')
} else if (player > computer){
        document.getElementById('outcome').innerHTML = 'Evviva! Hai vinto';
    } else{
        document.getElementById('outcome').innerHTML = 'Pareggio!';
}