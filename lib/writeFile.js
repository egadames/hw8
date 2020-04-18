// Loading the different js functions
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// This function creates a file based
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
    console.log("Successfully wrote to README.md");
}

// This exports the function
module.exports = writeToFile;