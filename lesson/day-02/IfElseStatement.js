const readline = require(`readline-sync`);

// let myName = readline.question('Your name: ');
// let myAge = readline.question('Your age: ');
// console.log(`${myName}, ${myAge}`);

// let nextYearAge = Number(myAge) + 1;
// console.log(nextYearAge);

let arrivalTime = readline.question('arrivalTime: ');
isHeOnTime = (arrivalTime == 7);

// Comparision operator: >, <, >=, <=, ==, ===, !=
// ! revert a value, ex: !true = false
if (isHeOnTime) {
  console.log('Let\'s talk!');
} else {
  console.log('Write a letter!');
}

if (!isHeOnTime) {
  console.log('Write a letter!');
} else {
  console.log('Let\'s talk!');
}

// Ternary operator: Toan tu 3 ngoi
let msg = isHeOnTime ? 'Let\'s talk!' : 'Write a letter!' ;
// if (isHeOnTime) {
//   msg = 'Let\'s talk!';
// } else {
//   msg = 'Write a letter!'
// }
console.log(msg);