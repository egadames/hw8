const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");
const writeFile = require('./lib/writeFile');
const axios = require("axios");

function partialTeamPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Done"]
      },
    ])
    .then((answers) => {
      switch (answers.team) {
        case "Engineer":
            engineerPrompt();
          break;
        case "Intern":
            internPrompt();
        break;
        case "Done":
           const bigAssString = render(employees);
           writeFile(bigAssString);
        break;
      }
    });
}

const confirmString = (answers) => {
let str = /[A-Za-z]/g;
let matches_array = answers.match(str);
  if(matches_array == null || matches_array.length < answers.length) {
    return 'Please enter a name. It can only contain letters';
  }
  return true;
}

const confirmNumber = (answers) => {
  let num = /[0-9]/g;
  let matches_array = answers.match(num);
    if(matches_array == null || matches_array.length < answers.length) {
      return 'Please enter a valid ID. It can only contain numbers';
    }
    return true;
}

const confirmEmail = (answers) => {
  let special = /[@]/g;
  let matches_array1 = answers.match(special);
  if(matches_array1 == null || matches_array1.length != 1) {
    return 'Please enter a valid Email. It must contain at least one @';
  }
    return true;
}

// const confirmUserName = async (answers) => {
//   const queryUrl = `https://api.github.com/users/${answers}/events`;
//   let response = 
//    await axios.get(queryUrl)
//     if(response.data.length > 0)
//         return true;
//       else{
//         return false;
//       }
// }

function managerPrompt() {
 return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?",
      validate: confirmString
    },
    {
      type: "input",
      name: "managerId",
      message: "What is your manager's id?",
      validate: confirmNumber
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?",
      validate: confirmEmail
    },
    {
      type: "input",
      name: "managerOfficeNum",
      message: "What is your manager's office number?",
      validate: confirmNumber
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

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
        validate: confirmString
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        validate: confirmNumber
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        validate: confirmEmail
      },
      {
        type: "input",
        name: "engineerUserName",
        message: "What is your engineer's GitHub username?"
        // validate: confirmUserName
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

function internPrompt() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?",
      validate: confirmString
    },
    {
      type: "input",
      name: "internId",
      message: "What is your intern's id?",
      validate: confirmNumber
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email?",
      validate: confirmEmail
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is your intern's school?",
      validate: confirmString
    },
  ]).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    employees.push(intern);
    partialTeamPrompt();
  });
}

let employees = [];

managerPrompt();

