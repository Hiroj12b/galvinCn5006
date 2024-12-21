// Correcting the variable name
const dateOfBirth = "12/12/1980";

// Correcting the function for getStudentName
const getStudentName = () => {
  return "Nirmala Tamang";
};

// Correcting the function for getCampusName
const getCampusName = () => {
  return "UEL Campus";
};

// Exporting functions & variable outside the module
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateOfBirth; // Fixed the variable name

// Exporting function with parameters (corrected syntax)
exports.StudentGrade = (marks) => { // Fixed the function name
  if (marks > 50 && marks < 70) {
    return "B grade";
  } else {
    return "A grade"; // Fixed misplaced comment
  }
};
