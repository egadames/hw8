// Loading the inquirer js functions
const inquirer = require("inquirer");

const prompt = {
    fullTeamPrompt () {
        return inquirer.prompt([
            {
              type: "checkbox",
              name: "teamMember",
              message: "What type of team member would you like to add?",
              choices: ["Manager", 'Engineer', 'Intern', 'None']
            },
        ]);
    },
    partialTeamPrompt () {
        return inquirer.prompt([
            {
                type: "checkbox",
                name: "teamMember",
                message: "What type of team member would you like to add?",
                choices: ['Engineer', 'Intern', 'None']
            },
        ]);
    },    
    managerPrompt () {
        return inquirer.prompt([
            {
              type: "input",
              name: "managerName",
              message: "What is your manager's name?",
            },
            {
              type: "input",
              name: "managerId",
              message: "What is your manager's id?",
            },
            {
              type: "input",
              name: "managerEmail",
              message: "What is your manager's email?",
            },
            {
              type: "input",
              name: "managerOfficeNum",
              message: "What is your manager's office number?",
            },
        ]);
    },
    engineerPrompt () {
        return inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's id?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
            },
            {
                type: "input",
                name: "engineerUserName",
                message: "What is your engineer's GitHub username?",
            },
            ]);
        },
    internPrompt () {
        return inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's id?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
            },
        ]);
    }
}

// This exports the function
module.exports = prompt;