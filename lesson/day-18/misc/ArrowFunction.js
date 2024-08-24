// Function Declaration
function add(a, b) {
    return a + b;
}
// Function expression
const add2numbers = function (a, b) {
    return a + b;
}

// Function Expression => arrow function
const arrowAdd2Numbers = (a, b) => console.log(a + b);

const intArray = [1, 2, 3, 4, 5];
const evenNumbers = intArray.filter(value => value % 2 === 0);

console.log(evenNumbers);

//Lexical this binding
const person = {
    name: 'teo',
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, tui ten ${this.name}`);
        }, 2000);
    }
}
