// Code your solutions in this file

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    } 
    return messages;
}

function countDown(positiveInteger) {
    let i = positiveInteger + 1;
    while( i > 0) {
        console.log(i -1);
        i--;        
    }
}