// Template - Data Model / user-defined data

class Person {

    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    //Setters
    set name(name){
        this._name = name;
    }

    //getter
    get name(){
        return this._name;
    }
}

let teo = new Person("Teo", 18); // new to call constructor to build an object for a class 
console.log(teo); // {}

//Invoke setter
// teo.name = "Ti";
// console.log(teo.name);
// teo._name = 28;
// console.log(teo.name);

// 1. Int property values when creating an object -> constructor
// 2. Setter(s) - Methods: set value for properties