/**
 * Two sum
 * [3, 7, 22, 1], target number: 8 -> [index1, index2]  -> [1, 3]
 * Assumtions: onely one indice existing
 * 
 * outer loop -> 0 -> index -1
 *  firstNum
 *    inner loop -> index + 1 -> length -1
 *      secondNum
 *       if(first + second === target)
 *          return (firstIndex, secondIndex)
 */

const givenArray = [3, 7, 22, 1];
const targetNumber = 8;
let indices = findIndicesUsingMap(givenArray, targetNumber);
console.log(indices);


// On^2
function findIndicesUsingNestedLoop(givenArray, targetNumber){
  //Bruce force
  for(let firstNumberIndex = 0; firstNumberIndex < givenArray.length; firstNumberIndex++ ) {
    const firstNum = givenArray[firstNumberIndex];
    for (let secondNumberIndex = firstNumberIndex + 1; secondNumberIndex < givenArray.length; secondNumberIndex){
      const secondNum = givenArray[secondNumberIndex];
      if (secondNum === targetNumber - firstNum){
        return [firstNumberIndex, secondNumberIndex]
      }
    }
  }

  return [];
}


// On

function findIndicesUsingMap(givenArray, targetNumber){
  let numMap = new Map();
  for(let firstNumberIndex = 0; firstNumberIndex < givenArray.length; firstNumberIndex++ ) {
    const firstNum = givenArray[firstNumberIndex];
    const lookingNum = targetNumber - firstNum;
    if(numMap.has(lookingNum)){
      return [numMap.get(lookingNum), firstNumberIndex];
    }
    numMap.set(firstNum, firstNumberIndex);
    }

    return [];
  }
  

  /**
   * loop index 0 -> lenth -1
   * firstNum
   * lookingNumber = targetNum - firstNum
   * if(Map.has(lookingNumber))
   *  return [map.get(lookingNumber), firstNumIndex]
   * map.set(firstNum, firstNumberIndex)
   */
