/**
 *  < 18 : Khong ban
 * 18 -> 55: Unlimited!
 * 56 -> : 2 chai!
 * 
 */
const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age: '));

if (clientAge < 18) {
  console.log('Khong ban!');
  if (clientAge < 12) {
    console.log("caliing 911..");
  }
} else if (clientAge >= 18 && clientAge <= 55) {
  console.log('Unlimited!');
} else {
  console.log('2 chai!');
}

if (clientAge < 15){
  console.log("Say something");
}
  


/**
 * 
 * true && true -> true
 * true && false -> false
 * false && false -> true
 * fale && true -> false
 * 
 * true || true -> true
 * true || false -> true
 * false || false -> false
 * false || true -> true
 * 
 */