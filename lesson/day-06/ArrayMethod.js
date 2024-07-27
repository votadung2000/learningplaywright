const {
        Teo, 
        Ti, 
        convertToEvenNumbers,
        sortNumberASC,
        sortNumberDESC,
} = require('../../utils/ArrayHelper');

// Filter
let myArray = [1, 2, 3, 4, 5];
let evenNumber = myArray.filter(Teo);
let oddNumber = myArray.filter(Ti);

//Map
let toEvenNumbers = myArray.map(convertToEvenNumbers);

//Sort - String
let myStrings = ['B', 'C', 'A'];
myStrings.sort();
myStrings.reverse();

// Sort - Number
let orderNumberArray = [100, 22, 19];
orderNumberArray.sort(sortNumberASC);
console.log(orderNumberArray);
orderNumberArray.sort(sortNumberDESC);
console.log(orderNumberArray);
// calculateBMI

// console.log(evenNumber);
// console.log(oddNumber);
// console.log(toEvenNumbers);
// console.log(myStrings);

