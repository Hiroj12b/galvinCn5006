
class person  {
    // Constructor to initialize name and age for each instance
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display person's info
    displayInfo() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  // Exporting the Person class so it can be used in other files
  module.exports = person;
  