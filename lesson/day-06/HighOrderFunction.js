function sayHello(name){
  console.log(`Hello ${name}`);
}

function sayHelloStyle(name, age){
  const withoutAgeQuestion = `How is going ${name}?`;
  const withAgeQuestion = `How is going ${name}? Seems you are ${age} years old?`;
  if(age){
    console.log(withAgeQuestion);
  } else {
    console.log(withoutAgeQuestion);
  }
}

// Higher order function 
function functionCaller(callBackFunction, name, age){
  callBackFunction(name, age);
}

functionCaller(sayHello, "Teo", 18);
functionCaller(sayHelloStyle, "Teo", 24);