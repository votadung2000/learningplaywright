const intArr = [1,2,3,4,5]
let minValue = intArr[0];
let maxValue = intArr[0];

for (let index = 0; index < intArr.length; index++) {
  if (intArr[index] < minValue) {
    minValue = intArr[index];
  } else if (intArr[index] < maxValue){
    maxValue = intArr[index];
  }
}

console.log(`Min Value: ${minValue}`);
console.log(`Min Value: ${maxValue}`);