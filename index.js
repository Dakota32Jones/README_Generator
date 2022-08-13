// declaring require dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);
// Use inquirer to prompt the user and populate the readme

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title for this project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any:",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of the project?",
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropiate license for this project.",
      choices: ["Apache", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributors of this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "Are there any tests needed to run this project?",
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your Github username",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
  ]);
}

// async function using util.promisify

async function init() {
  try {
    // Ask the user the questions and generate responses.
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    // Write readme to output directory
    await writeFileAsync("./output/README.md", generateContent);
    await writeFileAsync("./sample/README.md", generateContent);
    console.log("✔️  Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
