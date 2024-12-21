// Index.js
const student = require('./StudentInfo');
const Person = require('./person');
// Display information from the StudentInfo module
console.log("Student Name: " + student.getName());
console.log("Campus Name: " + student.Location());
console.log("Date of Birth: " + student.dob);
console.log("Student Grade: " + student.StudentGrade(60));

// Create a new Person instance
const person1 = new Person("John", 30);
console.log(person1.displayInfo()); // Output: John is 30 years old.

const os = require("os");
const util = require("util");

//Display system information
console.log("Temporary directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + ", Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + os.totalmem() / 1000000000 + " GB");
console.log("Free Memory: " + os.freemem() / 1000000000 + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));

// Program end
console.log("Program end");