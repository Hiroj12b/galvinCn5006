// Definition of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

console.log("This is my first program");

var EmpName = "John";
var EmpSalary = 50000;

// Calling the function EmployeeInfo
EmployeeInfo(EmpName, EmpSalary);
//code for creating arrow function 
const EmpSkills= (skills)=> {
    console.log("Expert in "+ skills)
   }
   EmpSkills("java")