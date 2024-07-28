const readline = require("readline-sync");

const randomNumber = generateRandomNumber();
let guessingTime = 0;
do {
    let userNum = getUserNumber();
    if( userNum == randomNumber){
        console.log("Hooray!!");
        break;
    }

    guessingTime++;
} while(guessingTime < 3);

if(guessingTime === 3){
    console.log('Chuc ban may man lan sau');
}

function getUserNumber(){
    return readline.question('Please enter your number: ');
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}