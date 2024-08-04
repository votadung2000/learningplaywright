/*```
**
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 
```*/

const { getRawInput } = require("readline-sync");

// const givenStr = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
// let individualWords = givenStr.replace(/,/gi, "").split(" ");
// const groupWordMap = groupWord(individualWords);
// console.log(groupWordMap);

// function groupWord(individualWords){
//     let wordMap = new Map();
//     for(const word of individualWords){
//         if(!wordMap.has(word)){
//             wordMap.set(word, 1);
//         } else {
//             wordMap.set(word, wordMap.get(word) + 1);
//         }
//     }
//     return wordMap;
// }


const givenStr = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
console.log(givenStr);

const wordCount = groupWords(givenStr);
console.log(wordCount);

function groupWords(givenStr) {
    const words = givenStr.replace(/,/gi, "").split(" ");
    let wordCount = {};
    for (const word of words) {
        console.log(word);
        if(!wordCount[word]){
        // if (wordCount[word] === undefined) {
            wordCount[word] = 1;
        } else {
            wordCount[word] = wordCount[word] + 1;
        }
    }
    return wordCount
}