const intArr = [12, 34, 1, 16, 28];

let unsortedPosition = intArr.length - 1;
// Big): n^2
for (; unsortedPosition > 0; unsortedPosition --){
  for(let index = 0; index < unsortedPosition; index++){
    const leftValue = intArr[index];
    const rightValue = intArr[index + 1];
    if(leftValue > rightValue){
      let temp = leftValue;
      intArr[index] = rightValue;
      intArr[index + 1] = temp;
    }
  }
}

console.log(intArr);