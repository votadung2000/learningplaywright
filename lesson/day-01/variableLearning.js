/** 
let => used to declair a variable
';' convention, quy tac ghi code trong du an theo 1 chuan  nao do
var => 
//hoisting

*/
// [v] camelCase  [x]snake_case
let myName = "Anh";
console.log(myName)

// [v] re-assign   [x] re-declair
myName = 18;
console.log(myName);

// Constant 
const PI_NUMBER = 3.14;
// [x] Not allow to be re-assigned, ex: PI_NUMBER = 2;


//1.7976931348623157e+308 -> 1.7976931348623157 * 10^38
console.log(Number.MAX_VALUE);
//5e-324 -> 5*10^(-324)
console.log(Number.MIN_VALUE);

// Check the type of the value
console.log(typeof (1.7976931348623157e+308 + 1));
console.log(Infinity > 1.7976931348623157e+308);

// Boolean
let amIRight = false;
amIRight = true;
console.log(typeof amIRight);