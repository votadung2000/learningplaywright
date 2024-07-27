const intArr = [1,2,3,4,5]
let evenNums = 0;
let oddNums = 0;

for (let index = 0; index < intArr.length; index++) {
  if (intArr[index] % 2 === 0) {
    evenNums++;
  } else {
    oddNums++;
  }
}

console.log(`Even nums: ${evenNums}`);
console.log(`Odd nums: ${oddNums}`);