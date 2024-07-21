/**
 * import ... from
 * export function()  {...}
 * 
 * CommonJS Module System (traditional)
 *
 * ES6 Module System () (need combine)
 */

// Declaration
const getWeight = function(yourCurrentBMI, standardBMI, height) {
  const weight = (height ** 2) * (yourCurrentBMI - standardBMI);
  return Math.abs(weight);
}

const sayHello = function() {
  console.log('Hello from Viet Nam!');
}
// Export
module.exports = {getWeight, sayHello};