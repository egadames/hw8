// The Employee super class is loaded
const Employee = require("./Employee");

// This creates the Manager class by extending the Employee super class
class Manager extends Employee {
    constructor(name, id, email, officeNumber ) {
        super(name, id, email);
        this.officeNumber = officeNumber;
       }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
  }

// This exports the class
module.exports = Manager;