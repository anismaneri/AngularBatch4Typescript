var employee = {
    emp_id: 22,
    emp_name: "ABC",
    emp_salary: 50000,
    emp_address: "xyz"
};
console.table(employee);
//traverse for in loop is used
for (var key in employee) {
    console.log(key);
    console.log(employee[key]);
}
//destructuring
console.log(" object De-sructuring===>>");
var userid = employee.emp_id, userName = employee.emp_name, employeeAddress = employee.emp_address, epmsalary = employee.emp_salary;
console.log(userid);
console.log(userName);
console.log(employeeAddress);
console.log(epmsalary);
