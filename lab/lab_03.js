/** Lab 3.1:
Count how many odd, even number(s) in an integer array

```
let intArr = [1, 2, 3, 4, 5];

Even numders: 2
Odd numbers: 3
```
*/
let intArr1 = [1, 2, 3, 4, 5];
let oddNum = 0;
let evenNum = 0; 
for (let index = 0; index < intArr1.length; index++) {
  if (intArr1[index] % 2 == 0) {
    evenNum++;
  } else {
    oddNum++;
  }
}

console.log(`Even numbers: ${evenNum}`); 
console.log(`Odd numbers: ${oddNum}`);

/** Lab 3.2:
Finding maximum value/minimum value from an integer array

```
let intArr = [1, 2, 3, 4, 5];

Minimum: 1
Maximum: 5
```
*/

let intArr2 = [1, 2, 3, 4, 5];
let maxNum = intArr2[0];
let minNum = intArr2[0];

for (let index = 0; index < intArr2.length; index++) {
  if (intArr2[index] >= maxNum) {
    maxNum = intArr2[index];
  } 
}  

console.log(`Max number is: ${maxNum}`);

for (let index = 0; index < intArr2.length; index++) {
  if (intArr2[index] <= minNum) {
    minNum = intArr2[index];
  }
}

console.log(`Min number is: ${minNum}`);

/** Lab 3.3:
Sort an integer array from min to max
```
Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
```
*/

let intArr3 = [12, 34, 1, 16, 28];
console.log(intArr3.sort());

// let minNumArr3 = intArr3[0]

// for (let index = 0; index < intArr3.length; index++) {
//   if (intArr3[index] <= minNumArr3) {
//     let 
//     } 
// }

// console.log(intArr3)
/** Lab 3.4(optional):
Merge 2 SORTED integer array into one SORTED array

```
Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]

Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
``` 
*/

let Array01 = [1, 12, 16, 28, 34];
let Array02 = [1, 13, 16, 27, 99];
console.log(Array01.concat(Array02).sort());