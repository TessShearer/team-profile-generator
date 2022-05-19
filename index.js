const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');


// Creates card for first manager
function createTeam() {
    return inquirer.prompt(
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
      }
      {
        type: `input`,
        name: `office`,
        message: `What is your office number?`
      }
.then(
  expandTeam();
)
)};


// Asks if the manager would like to add more team members, then allows that or creates the page
function expandTeam() {
  inquirer.prompt({
    message: 'Do you want to add an employee at this time?',
    name:'continue',
    type:'confirm'
     }).then(
       if(answer.continue) {
         addEmployee();
       }
       else {
         createPage();
       }
     )
};


// These three functions ask the questions unique to the different types of employees after the addEmployee function is done
function addEngineer() {
  inquirer.prompt(
    {
      type: `input`,
      name: `github`,
      message: `What is the engineer's github username?`
    }
  ).then(
    expandTeam();
  )
};

function addIntern() {
  inquirer.prompt(
    {
      type: `input`,
      name: `school`,
      message: `What is the name of the intern's school?`
    }
  ).then(
    expandTeam();
  )
};

function addManager() {
  inquirer.prompt(
    {
      type: `input`,
      name: `office`,
      message: `What is the manager's office number?`
    }
  ).then(
    expandTeam();
  )
};


// Adds a new employee if the expandTeam function calls it
function addEmployee() {
  return inquirer.prompt(
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
    },)
    .then(
      if(answer.title == "Engineer") {
        addEngineer();
      }
      else if(answer.title = "Intern") {
        addIntern();
      }
      else if(answer.title = "Manager") {
        addManager();
      }
      else {
        console.log("Please choose a valid option");
        // reprompt this area in this case
      }
    )
  };


// Function call that starts the team creation process
createTeam();


// Stuff to make the page...need to put in a function called createPage
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});