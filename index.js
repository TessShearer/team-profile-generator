const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const employeeArray = [];
const pageTemplate = require('./src/page_template');

// Creates card for first manager
function createTeam() {
   inquirer.prompt([
    {
      type: `input`,
      name: `name`,
      message: `Welcome new manager! What is the your Name?`
    },
    {
      type: `input`,
      name: `id`,
      message: `What is your ID number?`,
    },
    {
      type: `input`,
      name: `email`,
      message: `What is your email address?`
    },
    {
      type: `input`,
      name: `office`,
      message: `What is your office number?`
    }])
    .then(function (answer) {
      const teamLeader = {
        name: answer.name,
        id: answer.id,
        email: answer.email,
        title: "Manager",
        office: answer.office,
      }
      employeeArray.push(teamLeader);
      expandTeam();
    }
    )
};


// Asks if the manager would like to add more team members, then allows that or creates the page
function expandTeam() {
  inquirer.prompt([{
    message: 'Do you want to add an employee at this time?',
    name: 'continue',
    type: 'confirm'
  }]).then(function (answer) {
    if (answer.continue) {
      addEmployee();
    }
    else {
      createPage();
    }
  })


  // answer.continue?addEmployee():createPage();
};


// These three functions ask the questions unique to the different types of employees after the addEmployee function is done
function addEngineer(answer) {
  inquirer.prompt([
    {
      type: `input`,
      name: `github`,
      message: `What is the engineer's github username?`
    }
  ]).then(function(response) {
    const newEngineer = {
      name: answer.name,
      id: answer.id,
      email: answer.email,
      title: "Engineer",
      github: response.github,
    }
    employeeArray.push(newEngineer);
    expandTeam();
});
};

function addIntern(answer) {
  inquirer.prompt([
    {
      type: `input`,
      name: `school`,
      message: `What is the name of the intern's school?`
    }
  ]).then(function(response) {
    const newIntern = {
      name: answer.name,
      id: answer.id,
      email: answer.email,
      title: "Intern",
      school: response.school,
    }
    employeeArray.push(newIntern);
    expandTeam();
});
};

function addManager(answer) {
  inquirer.prompt([
    {
      type: `input`,
      name: `office`,
      message: `What is the manager's office number?`
    }
  ]).then(function(response) {
    const newManager = {
      name: answer.name,
      id: answer.id,
      email: answer.email,
      title: "Manager",
      office: response.office,
    }
    employeeArray.push(newManager);
    expandTeam();
});
};

// Adds a new employee if the expandTeam function calls it
function addEmployee() {
  inquirer.prompt([
    {
      type: `input`,
      name: `name`,
      message: `What is the the employee's Name?`
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
    },
    {
      type: `list`,
      name: `title`,
      message: `What is the job title of the employee?`,
      choices: ['Engineer', 'Intern', 'Manager']
    }])
    .then(function(answer) {
      if (answer.title == "Engineer") {
    addEngineer(answer);
  }
  else if (answer.title == "Intern") {
    addIntern(answer);
  }
  else {
    addManager(answer);
  }
});
};


// Function call that starts the team creation process
createTeam();

function createPage(data){
 writeFile(employeeArray);
}
