// add the dependencies need to run the js file
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");
const writeFile = require('./lib/writeFile');

// This function is ran when a new team member needs to be added
function partialTeamPrompt() {
  // The prompt to ask for a new team member
  inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Done"]
      },
    ])
    // This function checks what team member needs to be added
    // then runs the corresponding prompt
    .then((answers) => {
      switch (answers.team) {
        case "Engineer":
            engineerPrompt();
          break;
        case "Intern":
            internPrompt();
        break;
        case "Done":
          // This runs the function that creates the string 
          // that needs to be loaded into the team.html
           const bigAssString = render(employees);
           // This function writes the team.html into the output folder
           writeFile(bigAssString);
        break;
      }
    });
}

// This function is used to validate that a string is used
const confirmString = (answers) => {
// This creates a variable that contains all letters uppercase, lowercase and a space
let str = /[A-Za-z ]/g;
// This method will match any letters or space with the answer given by the user
// creates an array containing the matches
let matches_array = answers.match(str);
  // This checks if there is anything else submitted by the user
  if(matches_array == null || matches_array.length < answers.length) {
    // If user did not use a string it loads this message for them to update
    return 'Please enter a valid response. It can only contain letters';
  }
  // if no issues it returns true and prompt continues
  return true;
}

// This function is used to validate that only numbers are used
const confirmNumber = (answers) => {
  // This creates a variable that contains all numbers
  let num = /[0-9]/g;
  // This method will match any number with the answer given by the user
  // creates an array containing the matches
  let matches_array = answers.match(num);
    // This checks if there is anything else submitted by the user
    if(matches_array == null || matches_array.length < answers.length) {
      // If user did not use only numbers it loads this message for them to update
      return 'Please enter a valid response. It can only contain numbers';
    }
    // if no issues it returns true and prompt continues
    return true;
}

// This function is used to validate that an email is submitted
// Due to the complicated nature of email this is a simple check
const confirmEmail = (answers) => {
  // This creates a variable that contain @ which is needed in an email
  let special = /[@]/g;
  // This method will match @ with the answer given by the user
  // creates an array containing the matches
  let matches_array1 = answers.match(special);
  // This checks if @ was used at least only once
  if(matches_array1 == null || matches_array1.length != 1) {
    // If user did not respond correctly it loads this message for them to update
    return 'Please enter a valid Email. It must contain at least one @';
  }
    // if no issues it returns true and prompt continues
    return true;
}

// This is the prompt for the manager
function managerPrompt() {
  // this gathers all the information to be loaded into the manager class
  inquirer.prompt([
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
    // This loads the user's response into a new Manager class
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNum
    );
    //This pushes the new class into the employees array
    employees.push(manager);
    // This reloads the prompt to ask if a new member is needed
    partialTeamPrompt();
  });
}

// This is the prompt for the engineer
function engineerPrompt() {
  // this gathers all the information to be loaded into the engineer class
  inquirer.prompt([
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
      },
    ])
    .then((answers) => {
      // This loads the user's response into a new Engineer class
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerUserName
      );
      //This pushes the new class into the employees array
      employees.push(engineer);
      // This reloads the prompt to ask if a new member is needed
      partialTeamPrompt();
    });
}

// This is the prompt for the intern
function internPrompt() {
  // this gathers all the information to be loaded into the intern class
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
    // This loads the user's response into a new Intern class
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    //This pushes the new class into the employees array
    employees.push(intern);
    // This reloads the prompt to ask if a new member is needed
    partialTeamPrompt();
  });
}
// This creates the array that will contain all the classes
let employees = [];

// This starts the function that will get a manager
managerPrompt();

