/*
    1. randomizza valore di 2 tiri di dado
    2. confronta i 2 valori per determinare il vincitore
*/

let player = Math.floor(Math.random()*6)+1;
    console.log(player)
    

let computer = Math.floor(Math.random()*6)+1;
    console.log(computer)  

if (player < computer){
    document.getElementById('outcome').innerHTML = 'Peccato! Hai perso';
    console.log('outcome')
} else if (player > computer){
        document.getElementById('outcome').innerHTML = 'Evviva! Hai vinto';
    } else{
        document.getElementById('outcome').innerHTML = 'Pareggio!';
}