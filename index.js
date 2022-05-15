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