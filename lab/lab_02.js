/**  Lab 2.1:
Get input from user about height(m) and weight(kg) then calculate BMI
- Underweight: <18.5
- Normal weight: 18.5 – 24.9
- Overweight: 25–29.9
- Obesity: BMI of 30 or greater
```
BMI = weight / (height x height)
```
*/
const readline = require(`readline-sync`);

let height = Number(readline.question('Input your height (m): '));
let weight = Number(readline.question('Input your weight (kg): '));
// console.log(`${height}, ${weight}`);

calculateBMI = weight / (height * height);
let roundBMI = calculateBMI.toFixed(1);
console.log(`Your BMI is: ${roundBMI}`);

let msg = '';
if (roundBMI < 18.5) {
  msg = 'You are underweight!';
} else if (roundBMI >= 18.5 && roundBMI <=24.9) {
  msg = 'Your have a normal weight!';
} else if(roundBMI >= 25 && roundBMI <=29.9) {
  msg = 'Your are overweight!';
} else {
  msg = 'Your are obesity!';
}
console.log(msg);


/** Lab 2.2:
Allow user to input a number, print out it’s an odd or even number
*/
let number = Number(readline.question("Input a number: "));

let isOddNumber = number % 2
if (isOddNumber == 1) {
  msg = 'It\'s an odd number!';
} else {
  msg = 'It\'s an even number!'
};
console.log(msg);


/** Lab 2.3(Optional):
Lab 2.1 + Suggest user to increase/decrease weight 
*/