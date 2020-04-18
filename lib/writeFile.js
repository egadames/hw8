// Loading the different js functions
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve("output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This function creates a file based
function writeToFile(data) {
    // writeFileAsync(fileName, data)
    fs.writeFileSync(outputPath,data,"UTF8")
    console.log("Successfully wrote team.html");
}

// This exports the function
module.exports = writeToFile;