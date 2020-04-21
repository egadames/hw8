// The Employee super class is loaded
const Employee = require("./Employee");

// This creates the Engineer class by extending the Employee super class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
  }

// This exports the class
module.exports = Engineer;