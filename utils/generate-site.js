const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'Your site has been created!'
        });
      });
    });
  };

  const copyFile = () => {
      return Promise(() => {
          fs.copyFile(`./dist/index.html`, fileContent, err => {
              if (err) {
                  reject(err);
                  return;
              }
              resolve({
                  ok: true,
                  message: 'Your site has been created!'
              });
          });
      });
  };

  module.exports = { writeFile, copyFile };

//   Pretty sure this will make the html file that is needed for the site and then tell the command line that that happened