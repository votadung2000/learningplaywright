// CRUD: Create Read Update Delete

/* 
Literal Declaration
. index: start from 0
. length:
.
*/

let myNumArray = [1, 2, 3, 4, 5];
// let arrayLength =myNumArray.length;
console.log(`Array's length: ${myNumArray.length}`);
// console.log(`Array's value at index 3: ${myNumArray.[3]}`);

// for (let index = 0; index < myNumArray.length; index++) {
//   console.log(`Array's value at index ${index}: ${myNumArray[index]}`);
// }

// Convert all elements into even number
for (let index = 0; index < myNumArray.length; index++) {
  myNumArray[index] = myNumArray[index] * 2;
}

for (let index = myNumArray.length - 1; index >= 0; index--) {
  myNumArray[index] = myNumArray[index] * 2;
}

// undefined holes
myNumArray[10] = 100;

// myNumArray.pop();
console.log(myNumArray.pop());
myNumArray.push(2000);
console.log(myNumArray);

