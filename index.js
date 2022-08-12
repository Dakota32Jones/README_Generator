const { writeFile } = require("./utils/generateFile");
const questions = require("./utils/questions");

// TODO: Create a function to initialize app
function init() {
  console.log(questions);
  writeFile();
}

// Function call to initialize app
init();
