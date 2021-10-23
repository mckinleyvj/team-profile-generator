const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const engineeringTeam = [];

const welcome = () => {
    console.log(`-----------------------------------------`);
    console.log(`           Team Profile Builder          `);
    console.log(`=========================================`);
        
    return inquirer.prompt([
        {
            type: "input",
            message: "Team name :",
            name: "teamName",
        }
    ])
    .then(function(response){
        engineeringTeam.push(response.teamName);
        console.log(engineeringTeam);
    })
};

const getManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "Enter team manager's name :", 
            name: "mngr_name",
        },
        {
            type: "input",
            message: "Enter the manager's email :",
            name: "mngr_email",
        },
        {
            type: "input",
            message: "Enter the manager's office number :",
            name: "off_number",
        }
    ])
    .then(user_input => {
        const { mngr_name, mngr_email, off_number } = user_input;
        const manager = new Manager(mngr_name, 1, mngr_email, off_number);

        engineeringTeam.push(manager);
        console.log(engineeringTeam);
    })
};

welcome()
    .then(getManager)
    .catch() = err => {
        console.log(err);
    };