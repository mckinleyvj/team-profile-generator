const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const arr_engineerTeam = [];

// const employee = new Employee();

console.log("Lets build our team.\n");
// employee.();