let teo = {
  name: "Teo", 
  myAge: 18
};

console.log(teo);

let tun = {
  name: "Tun", 
  myAge: 20
};

//Shallow copy using spead syntax
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let merge = [ ...arr1, ...arr2];
console.log(merge)

let ti = { ...teo, ...tun };
// ti.name = "ti";
// ti.myAge = 20;

// console.log(teo);
console.log(ti);