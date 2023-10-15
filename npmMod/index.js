const chalk = require("chalk");
const validator = require('validator');

console.log(chalk.green.bold.underline("hello"));

const res = validator.isEmail("hafsa@sajid.com");
console.log(res? chalk.green.inverse(res) : chalk.red.inverse(res) );

