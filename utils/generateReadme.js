function generateReadme(answers) {
  return `
  <h1 align="center">${answers.title}</h1>
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation 
  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ## License 
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is protected by the ${answers.license} license.

  ## Contributors
  ${answers.contributors}

  ## Tests
  ${answers.tests}

  ## Questions
  Github Username: ${answers.username} <br />
  Email: ${answers.email}`;
}

module.exports = generateReadme;
