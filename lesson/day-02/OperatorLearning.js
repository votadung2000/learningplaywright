let myNum1 = 1;
let myNum2 = 2;

//1. Right operand and left operand
let result = myNum1 + myNum2;
console.log('Total value: ' + result);
console.log('Total value: ', result);

//String literal, backstick
console.log(`Total values: ${result}`);
result = 5 / 2;
console.log(`5 / 2 = ${result}`);
console.log(`4 / 2 = ${4/2}`);
console.log(`10 / 3 = ${10/3}`);

// Rounding
let roundingNearest = Math.round(9/2);
console.log(`Rounding nearest: ${roundingNearest}`);

let roundingFloor = Math.floor(9/2);
console.log(`roundingFloor: ${roundingFloor}`);

let roundingCeil = Math.ceil(9/2);
console.log(`roundingCeil: ${roundingCeil}`);

result = 10/3
let toFixedNumber = result.toFixed(3);
console.log(`toFixedNumber: ${toFixedNumber}`);