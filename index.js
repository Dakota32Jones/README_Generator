// declaring require dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");
const questions = require("./utils/questions");
const writeFileAsync = util.promisify(fs.writeFile);

// Use inquirer to prompt the user and populate the readme

function promptUser() {
  return questions;
}
promptUser(questions);
