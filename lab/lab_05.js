const readline = require(`readline-sync`);

let inputString = readline.question(`Please enter a sentence: `);
let stringObject = inputString.split(" ");

console.log(countWords(stringObject));

function countWords(){
    let object = {};
    for (let index = 0; index < stringObject.length; index++) {
        let item = stringObject[index];
        object[item] = (object[item] + 1) || 1;
      }
      return object;
    };








/*
```
**
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 
```
* Please solve the excersize for countWords by using object, not a Map
(do NOT use Object.entries() method to get a map)
* The program need to allow user to input a sentence, not hard code (optional)
*/