if (getFirstNum() != 0 || getSecondNum() != 0) {
  console.log("All number are not zero!");
  // console.log("We have at least one not-zero number");
}

function getFirstNum() {
  console.log("Calling 1st method...")
  return 1;
}

function getSecondNum() {
  console.log("Calling 2nd method...")
  return 2;
}

// let anyArray;
// if(anyArray != undefined && anyArray.length > 0){
//   //do something here
//   console.log("Say something")
// }