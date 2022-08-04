const { exec } = require("node:child_process");
const process = require("node:process");

const dirName = process.argv.slice(2);

exec(`cp -R boilerplate ${dirName}`, (err, output) => {
  if (err) {
    // log and return if we encounter an error
    console.error("could not execute command: ", err);
    return;
  }
  // log the output received from the command
  console.log("Output: \n", output);
});

process.chdir(`./${dirName}`);

exec("yarn", (err, output) => {
  if (err) {
    // log and return if we encounter an error
    console.error("could not execute command: ", err);
    return;
  }
  // log the output received from the command
  console.log("Output: \n", output);
});
