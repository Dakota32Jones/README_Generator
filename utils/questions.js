const questions = [
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
];

module.exports = questions;
