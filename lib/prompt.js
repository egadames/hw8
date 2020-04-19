// Loading the inquirer js functions
const inquirer = require("inquirer");
const Intern = require("./Intern");
const Engineer = require("./Engineer");
const Manager = require("./Manager");

async function internPrompt(data) {
    try {
        await inquirer.prompt([
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
          ]).then((answers) => {
            const intern = new Intern(
              answers.internName,
              answers.internId,
              answers.internEmail,
              answers.internSchool
            );
            data.push(intern);
            partialTeamPrompt();
          }); 
    } catch (err) {
        console.log(err);
    }
    
  }

  function engineerPrompt() {
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerUserName
        );
        employees.push(engineer);
        partialTeamPrompt();
      });
  }


  function partialTeamPrompt() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "team",
          message: "What type of team member would you like to add?",
          choices: ["Engineer", "Intern", "Done"],
        },
      ])
      .then((answers) => {
        switch (answers.team) {
          case "Engineer":
              engineerPrompt();
            break;
          case "Intern":
              internPrompt();
              // prompt(employees);
          break;
          case "Done":
              console.log(employees)
             const bigfuckingString = render(employees);
             console.log(bigfuckingString);
             writeFile(bigfuckingString);
          break;
        }
      });
  }

  function managerPrompt() {
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
     ]).then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNum
      );
      employees.push(manager);
      partialTeamPrompt();
    });
   }
  
// This exports the function
module.exports = internPrompt;
module.exports = internPrompt;
module.exports = internPrompt;
module.exports = internPrompt;
module.exports = internPrompt;
