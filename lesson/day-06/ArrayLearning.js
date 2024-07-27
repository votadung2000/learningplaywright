let myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Delete | splice
// myNumArray.splice(0,2);


// Delete a number at index where index is an even number
// but do not delete the number at index 0
// -> [1, 2, 4, 6, 8 ,10] 
let removingHappedned = false;
for(let index = 1; index < myNumArray.length; index++){
  if(index % 2 === 0){
    myNumArray.splice(index, 1);
  }
}

console.log(myNumArray);