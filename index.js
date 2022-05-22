const inquirer = require('inquirer');
const {writeFile} = require('./utils/generate-site.js');
const employeeArray = [];
const pageTemplate = require('./src/page_template');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

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
    .then(function(response) {
      employeeArray.push(new Manager(response.name, response.id, response.email, response.office));
      expandTeam();
    }
    )
}

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
      createPage(employeeArray);
    }
  })
  // answer.continue?addEmployee():createPage();
}


// These three functions ask the questions unique to the different types of employees after the addEmployee function is done
function addEngineer(answer) {
  inquirer.prompt([
    {
      type: `input`,
      name: `name`,
      message: `What is the the engineer's Name?`
    },
    {
      type: `input`,
      name: `id`,
      message: `What is the engineer's ID number?`,
    },
    {
      type: `input`,
      name: `email`,
      message: `What is the engineer's email address?`
    },
    {
      type: `input`,
      name: `github`,
      message: `What is the engineer's github username?`
    }
  ]).then(function(response) {
    employeeArray.push(new Engineer(response.name, response.id, response.email, response.github));
    expandTeam();
});
}

function addIntern(answer) {
  inquirer.prompt([
    {
      type: `input`,
      name: `name`,
      message: `What is the the intern's Name?`
    },
    {
      type: `input`,
      name: `id`,
      message: `What is the intern's ID number?`,
    },
    {
      type: `input`,
      name: `email`,
      message: `What is the intern's email address?`
    },
    {
      type: `input`,
      name: `school`,
      message: `What is the name of the intern's school?`
    }
  ]).then(function(response) {
    employeeArray.push(new Intern(response.name, response.id, response.email, response.school));
    expandTeam();
});
}

function addManager(answer) {
  inquirer.prompt([
    {
      type: `input`,
      name: `name`,
      message: `What is the the manager's Name?`
    },
    {
      type: `input`,
      name: `id`,
      message: `What is the manager's ID number?`,
    },
    {
      type: `input`,
      name: `email`,
      message: `What is the manager's email address?`
    },
    {
      type: `input`,
      name: `office`,
      message: `What is the manager's office number?`
    }
  ]).then(function(response) {
    employeeArray.push(new Manager(response.name, response.id, response.email, response.office));
    expandTeam();
});
}

// Adds a new employee if the expandTeam function calls it
function addEmployee() {
  inquirer.prompt([
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
}


// Function call that starts the team creation process
createTeam();

function createPage(data){
 writeFile(data)
 .then(writeFileResponse => {
  console.log(writeFileResponse);
});
}
