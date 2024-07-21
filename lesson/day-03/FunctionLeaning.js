/**  
 * Function(Huong Ngoai), Method(Object)(Huong Noi)
 * DRY: Don't Repeat Yourself
 * Single Responsibily: Tính đơn nhiệm
 * Function name
 * camelCase
*/

// Declareation Method 01: Function Declaration | Hositing
// let myName = "ti";
// console.log(myName)

let returnedValue = functionName();
console.log(returnedValue);
if(returnedValue === something){

}

function functionName(){
  return 1;
  // var myName = "Teo";
}



// Declareation Method 01: Function Expression \| NOT HOISTING
const addNumber = function(firstNum, secondNum){
  return firstNum + secondNum;
}
addNumber(1, 2);