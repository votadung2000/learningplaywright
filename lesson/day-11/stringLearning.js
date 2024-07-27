let myString = "Day la chu trong \"nhay kep\"";
console.log(myString);

// length
const strLength = myString.length
console.log(strLength);

// get a character at a position
for (let index = 0; index < strLength; index++){
  console.log(typeof myString.charAt(index));
}


// Get rid of spaces at start and end position
//  "      something      "

let trimStr = myString.trim();
console.log(trimStr.length);
console.log(myString);
console.log(trimStr);


// Replace
// Em phai hi sinh <- hint

let tagetString = "tmomi mnmay gmap mnmhamu 7h";
let decodedStr = tagetString.replaceAll("m", "");
console.log(decodedStr);

// regex -> regular expression (string regular exprission)
// g - global
// i - insensitive
let decodedStrWithReplace = tagetString.replace(/m/gi, '');
console.log(decodedStrWithReplace);

//Total cooking time : 200 mins (UI)
// DB -> docIDCooking Recipe -> {total: 200, factor: minute} (BE)
let uiString = "200mins";
let uiStringWthNumber = uiString.replace(/[^0-9]/gi, "");
console.log(uiStringWthNumber);

// backstrick ->  ` | String Template
console.log(`${myString} something elase ${uiString}`);


// concat : Concatenation
// +
// .concat()

console.log('Hello,'.concat("How are you"));

// substr
let strToBeCut = "https://sdetpro.com";
// inclusive
let startIndex = 0;
//Exclusive
let endIndex =5;
let subStr = strToBeCut.substring(8, );
console.log(subStr);

// split
console.log(strToBeCut.split('://'));
console.log(strToBeCut.split(''));

