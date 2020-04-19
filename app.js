const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");
const writeFile = require('./lib/writeFile');
const axios = require("axios");

// const prompt = require('./lib/prompt');
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// function fullTeamPrompt() {
//   return inquirer.prompt([
//     {
//       type: "checkbox",
//       name: "teamMember",
//       message: "What type of team member would you like to add?",
//       choices: ["Manager", "Engineer", "Intern", "None"],
//     },
//   ]);
// }

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
           writeFile(bigfuckingString);
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
  let num = /[0123456789]/g;
  let matches_array = answers.match(num);
    if(matches_array == null || matches_array.length < answers.length) {
      return 'Please enter a valid ID. It can only contain numbers';
    }
    return true;
  }

const confirmEmail = (answers) => {
  let characters = /[A-Za-z0-9]/g;
  let special = /[@]/g;
  
  let matches_array = answers[0].match(characters);
  let matches_array1 = answers.match(special);
  
  if(matches_array == null || matches_array1 == null ||matches_array < 1 || matches_array1.length <1) {
    return 'Please enter a valid Email. It must contain at least one @ and cannot be begin with any special characters';
  }
    return true;
}


// const confirmUserName = async (answers) => {
//   let shit;
//   const queryUrl = `https://api.github.com/users/${answers}/events`;
//   await axios.get(queryUrl).then((response) => {
//     shit = true;
//       return shit;
//     }, (error) => {
//       shit = false;
//       return shit;
//   });

//   if(shit){
//     return true;
//   }else {
//     return "Enter a valid username"
//   }
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
  ]);
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
        message: "What is your engineer's GitHub username?",
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

managerPrompt().then((answers) => {
  const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.managerOfficeNum
  );
  employees.push(manager);
  partialTeamPrompt();
});


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
