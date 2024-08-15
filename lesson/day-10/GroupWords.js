/**
 * Given string: Hello ban, toi ten Teo, ban cung ten Teo luon ah
 * ----> output:
 * Teo: 2
 * ban: 2
 */
const givenStr = "Hello ban, toi ten Teo, ban cung ten Teo luon ah";
let individualWords = givenStr.replace(/,/gi, "").split(" ");
console.log(individualWords);
