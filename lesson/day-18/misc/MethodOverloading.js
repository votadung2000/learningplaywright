const { Module } = require("module");

class MethodOveloading {

    //JS: Rest parameters
    // static add(a, b) {
    //     return a + b;
    // }

    // static add(a, b, c) {
    //     return a + b + c;
    // }

    static add(factor, sub, ...nums) {
        return nums.map(value => (value * factor) - sub);
    }

    static divide(a, b = 1) {
        if (arguments.length !== 2) {
            throw new Error('Must provide 2 params!');
        }

        if(b === 0){
            throw new Error("Can't divide by zero!");
        }

        return a / b;
    }
}

module.exports = {
    divide
}
// const result = MethodOveloading.add(2, 10, 1, 2, 3);
// const result = MethodOveloading.divide(4, 1);
// console.log(`Result: ${result}`);

let utilObj = new MethodOveloading();
utilObj.add(1, 2, 3);