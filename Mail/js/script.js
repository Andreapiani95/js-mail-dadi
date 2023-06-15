/*
    1. Prelevare value da un form per ottenere la mail
    2. Constrollare che sia presente in una lista
    3. Se sì/Se no
*/

const mailList = [
    'mail1',
    'mail2',
    'mail3',
    'mail4',
    'mail5',
    'mail6',
    'mail7',
    'mail8',
    'mail9',
    'mail10',
]

console.log('mailList', mailList, mailList.length, typeof mailList);


//credo di dover fare un ciclo per controllare ogni punto del mio array. X sarà il value ottenuto dall'input che devo aggiungere prima della dichiarazione del ciclo
for (let i = 0; i < mailList.length; i++){
    if (mailList[i] == x){
        console.log(i, mailList[i]);
    }
}