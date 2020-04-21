// The Employee super class is loaded
const Employee = require("./Employee");

// This creates the Intern class by extending the Employee super class
class Intern extends Employee {
    constructor(name, id, email, school ) {
        super(name, id, email);
        this.school = school;
       }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
  }

// This exports the class
module.exports = Intern;