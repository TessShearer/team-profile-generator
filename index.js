const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');

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

inquirer.prompt(
  createTeam()
).then(function(response){
  let manager = new Manager('dave');
  inquirer.prompt({
   message: 'Do you want to add an employee at this time?',
   name:'continue',
   type:'confirm'
    }).then
})

createTeam()
// .then(teamData => {
//   return generateSite/pageTemplate(teamData);
// })
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

// LOTS of questions about how this connects to other files including the generate site, page temple, everything in the lib folder, and the tests. So that is basically everything I guess