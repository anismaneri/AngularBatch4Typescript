var employee={
    emp_id:22,
    emp_name:"ABC",
    emp_salary:50000,
    emp_address:"xyz"
    }
    console.table(employee);
    
    //traverse for in loop is used
    for (const key in employee) {
       console.log(key);
       console.log(employee[key]);
    }
    
    
    //destructuring
    console.log(" object De-sructuring===>>");
    var {emp_id: userid, emp_name: userName,emp_address:employeeAddress,emp_salary:epmsalary} = employee;
    
    console.log(userid);
    console.log(userName);
    console.log(employeeAddress);
    console.log(epmsalary);