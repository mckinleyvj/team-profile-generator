const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const team = []
const engineeringTeam = [];

const welcome = () => {
    console.log(`-----------------------------------------`);
    console.log(`           Team Profile Builder`);
    console.log(`=========================================`);
        
    return inquirer.prompt([
        {
            type: "input",
            message: "Team name :",
            name: "teamName",
        }
    ])
    .then(function(response){
        team.push(response.teamName);
        console.log(`- Successfully added Team Name.`);
    })
};

const getManager = () => {

    console.log(`-----------------------------------------`);
    console.log(`            Adding a Manager`);
    console.log(`=========================================`);

    return inquirer.prompt ([
        {
            type: "input",
            message: "Enter team manager's name :", 
            name: "mngr_name",
        },
        {
            type: "input",
            message: "Enter the manager's email :",
            name: "mngr_mail",
        },
        {
            type: "input",
            message: "Enter the manager's office number :",
            name: "mngr_phone",
        }
    ])
    .then(user_input => {
        const { mngr_name, mngr_mail, mngr_phone } = user_input;
        //adding 1 as manager will always be emp_id = 1
        const id = engineeringTeam.length + 1;
        const manager = new Manager(mngr_name, id, mngr_mail, mngr_phone);
        engineeringTeam.push(manager);
        // console.log(manager);
        // console.log(engineeringTeam);
        console.log(`- Successfully added Manager.`);
        console.log(`-----------------------------------------`);
        console.log(`          Adding a Team Member`);
        console.log(`=========================================`);
    })
};

const promptMembers = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            message: 'Select a member type to add into the team :',
            choices: ['Engineer', 'Intern', 'None'],
            name: 'member_type',
        },

    ])
    .then(res => {
        if ("Engineer") {
            getEngineer();
        }else if ("Intern") {
            getIntern();
        }else if ("None") {
            console.log("Team's Profile webpage has been generated successfully.");
            break;
        }
    })
};

const getEngineer = () => {

    return inquirer.prompt ([
        {
            type: "input",
            message: "Enter engineer's name :", 
            name: "eng_name",
        },
        {
            type: "input",
            message: "Enter engineer's email :",
            name: "eng_mail",
        },
        {
            type: "input",
            message: "Enter engineer's Github username :",
            name: "eng_git",
        }
    ])
    .then(res => {
        const { eng_name, eng_mail, eng_git } = res;
        const id = engineeringTeam.length + 1;
        const engineer = new Engineer(eng_name, id, eng_mail, eng_git);
        engineeringTeam.push(engineer);
        console.log(engineeringTeam);
        return promptMembers(engineeringTeam);
    })
};

welcome()
    .then(getManager)
    .then(promptMembers)
    .catch(err => {
        console.log(err);
    });