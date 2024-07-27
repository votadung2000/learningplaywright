const readline = require('readline-sync');
// Destructure
// const UtilMethod = require('../lesson/day-05/UtilMethod');
const {getWeight, sayHello} = require('../lesson/day-05/UtilMethod');


sayHello(); 

const height = Number(readline.question('Your height: '));
const currentWeight = Number(readline.question('Your weight: '));
const yourCurrentBMI = currentWeight / (height ** 2);
const minIdealBMI = 18.5;
const maxIdealBMI = 24.9;


if (yourCurrentBMI < minIdealBMI) {
  const diffWeight = getWeight(yourCurrentBMI, height, minIdealBMI);
  console.log(`You should increase at least ${diffWeight}(kg)`);
} else if (yourCurrentBMI <= maxIdealBMI) {
  console.log(`Great, keep it up!`);
} else if (yourCurrentBMI <= 29.9) {
  const diffWeight = getWeight(yourCurrentBMI, height, maxIdealBMI);
  console.log(`You should decrease at least ${diffWeight}(kg)`);
} else {
  const diffWeight = getWeight(yourCurrentBMI, height, maxIdealBMI);
  console.log(`You should decrease at least ${diffWeight}(kg)`);
}


// function getWeight(yourCurrentBMI, standardBMI, height) {
//   const weight = (height ** 2) * (yourCurrentBMI - standardBMI);
//   return Math.abs(weight);
// }
/**
yourMinIdealBMI = (height ** 2) * minIdealBMI;
currentWeight = (height ** 2) * yourCurrentBMI;

(height ** 2) * minIdealBMI - (height **2) * yourCurrentBMI;
(height ** 2) * (minIdealBMI -  yourCurrentBMI);
 */