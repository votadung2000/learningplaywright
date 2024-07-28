// CRUD
// Object Literal

let teo = {
  name: "Teo", 
  // function(){
  //   console.log();
  // },
  'my age': 18
}

// // let ti = {};
// // console.log(ti.name);

// // Read: dot notation, [] syntax
// console.log(teo.name);
// console.log(teo["my age"]);


// // Update
// teo.name = 'Ti';
// teo['my age'] = 20;
// console.log(teo);

// // Destructure
// const { name, ['my age']: age } = teo;
// console.log(name);
// console.log(age);

// // delete
// delete teo.name;
// console.log(teo);

prinUserInfo(teo);

function prinUserInfo({name, ["my age"]: age}){
  console.log(user.name);
}
console.log(user.["my age"]);