
// DATA MODEL PROCESSING
class SalaryController {

    // FP - lap trinh huong ham    
    getTotalSalary(employeeList){
        let totalSalary = 0;
        employeeList.forEach(function(employee){
            totalSalary += employee.salary;
        });
        return this.totalSalary;
    }

}
export default SalaryController;