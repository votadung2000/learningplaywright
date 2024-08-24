import { error } from "console";

class Employee {

    constructor(salary) {
        this._validateSalary(salary);
        this._salary = salary;
    }

    set salary(salary) {
        this._salary = salary
    }

    get salary() {
        return this._salary;
    }

    // Support method "_" - de xu ly ben trong class
    _validateSalary(salary) {
        if (salary < 0) {
            throw new Error(" Salary MUST be greater than  zero!!!");
        }
    }
}

export default Employee;

