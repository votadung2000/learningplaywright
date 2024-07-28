const readline = require("readline-sync");
// let userNum = getUserNumber();
// if(userNum == 2){
//     console.log("Monday");
// } else if(userNum == 3){
//     console.log("Tuesdday");
// } else if(userNum == 4){
//     console.log("Wednesday");
// } else if(userNum == 5){
//     console.log("Thursday");
// } else if(userNum == 6){
//     console.log("Friday");
// } else if(userNum == 7 || userNum == 8){
//     console.log("Weekend");
// } esle {
//     console.log("Nhap lui roi Teo oi: 2 -> 8");
// }

// switch (userNum) {
//     case "2":
//         console.log("Monday");
//         break;
//     case "3":
//         let anotherNum = getUserNumber();
//         switch (anotherNum){
//             case "0":
//                 console.log("....");
//                 break;
//         }
//         console.log("Tuesday");
//         break;
//     case "4":
//         console.log("Wednesday");
//         break;
//     case "5":
//         console.log("Thursday");
//         break;
//     case "6":
//         console.log("Friday");
//         break;
//     case "7":
//         // console.log("Weekend");
//         // break;
//     case "8":
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Nhap lui roi Teo oi: 2 -> 8");
// }

// function getUserNumber(){
//     return readline.question('Please enter your number: ');
// }

for(let outerIndex = 0; outerIndex < 3; outerIndex++){
    console.log(`outerIndex: ${outerIndex}`);
    for(let innerIndex = 0; innerIndex < 3; innerIndex++) {
        if(innerIndex === 2) {
            break;
        }
        console.log(`\tinnerIndex: ${innerIndex}`);
    }
}
