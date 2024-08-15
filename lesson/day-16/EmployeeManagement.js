// Create Data, call controller to process data

import Employee from "./Employee";
import SalaryController from "./SalaryController";

// User-defined data - Model
let teo = new Employee(8000);
let ti = new Employee(10000);

// Init controller, call controller to process data
let salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary(teo, ti);
console.log(`Total salary: ${totalSalary}`);

