/**
 * =====GAME MENU=====
 * 1. Genreate na random number (1-> 10)
 * 0. Exit
 */

let isPlaying = true;
while(isPlaying){
  printGameMenu();
  let userOption = getserOption();

  if(userOption == 0){
    isPlaying = false;
  } else if(userOption == 1) {
    //Generate random number
    Math.floor(Math.random() * 10) + 1;
  } else {
    console.log('Nhap lui roi Teo oi!');
  }
}

console.log('Hen gap ban lan sau!')