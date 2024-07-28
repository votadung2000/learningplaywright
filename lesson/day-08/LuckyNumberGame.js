const readline = require("readline-sync");
/**
 * =====GAME MENU=====
 * 1. Genreate na random number (1-> 10)
 * 0. Exit
 */

let isPlaying = true;
while(isPlaying){
  printGameMenu();
  let userOption = getUserOption();

  if(userOption == 0){
    isPlaying = false;
  } else if(userOption == 1){
    //Generate random number
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Lucky number: ${randomNumber}`);
  } else {
    console.log('Nhap lui roi Teo oi!');
  }
}

console.log('Hen gap ban lan sau!');

function printGameMenu(){
  console.log('=====GAME MENU=====');
  console.log('1. Genreate a random number (1-> 10)');
  console.log('0. Exit');
}

function getUserOption(){
  return readline.question('Please select an option: ');
}