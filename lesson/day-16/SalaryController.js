
// DATA MODEL PROCESSING
class SalaryController {

    // FP - lap trinh huong ham    
    getTotalSalary(employeeList){
        let totalSalary = 0;
        employeeList.forEach(function(employee){
            totalSalary += employee.salary;
        });
        return totalSalary;
    }

}
export default SalaryController;