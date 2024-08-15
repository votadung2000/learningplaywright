class Employee {

    constructor(salary){
        this._salary = salary;
    }

    set salary(salary){
        this._salary = salary;
    }

    get salary(){
        return this._salary;
    }

}

export default Employee;

