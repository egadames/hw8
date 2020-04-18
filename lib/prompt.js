// Loading the inquirer js functions
const inquirer = require("inquirer");
const Intern = require("./Intern");


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

// This exports the function
module.exports = internPrompt;
