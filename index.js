const inquirer = require('inquirer');

function createTeam() {
    return inquirer.prompt(
        {
        type: `input`,
        name: `name`,
        message: `What is the employee's Name?`
      },
      {
        type: `input`,
        name: `id`,
        message: `What is the employee's ID number?`,
      },
      {
          type: `input`,
          name: `email`,
          message: `What is the employee's email address?`
      }

)};

createTeam();