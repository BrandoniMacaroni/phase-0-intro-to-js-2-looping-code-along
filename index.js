// Code your solutions in this file
function writeCards(gifts) {
    const newArray = [];
    for (let i = 0; i < gifts.length; i++) {
        newArray.push(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}

function countDown(number) {  
    while (number >= 0) {
        console.log(number--);
    }
}