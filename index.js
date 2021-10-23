const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const engineeringTeam = [];

welcome = () => {
    console.log(`-----------------------------------------`);
    console.log(`           Team Profile Builder`);
    console.log(`=========================================`);
    getTeamName();
}

getTeamName = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Team name :",
            name: "teamName",
        }
    ])
    .then(function(response){
        engineeringTeam.push(response.teamName);
        console.log(`-- Received.`);
        getManager();
    })
}

getManager = () => {

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
        const mngr_name = user_input.mngr_name;
        const id = engineeringTeam.length;
        const mngr_mail = user_input.mngr_mail;
        const mngr_phone = user_input.mngr_phone;
        
        const man = new Manager(mngr_name, id, mngr_mail, mngr_phone);
        // const role = man.getRole();
        
        engineeringTeam.push(man);
        // console.log(engineeringTeam);
        console.log(`-- Received.`);
        console.log(`-----------------------------------------`);
        console.log(`          Adding a Team Member`);
        console.log(`=========================================`);
        promptMembers();
    })
}

promptMembers = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            message: 'Select a member type to add into the team :',
            choices: ['Engineer', 'Intern', 'None'],
            name: 'member_type',
        },
    ])
    .then(res => {
        if (res.member_type === "Engineer") {
            getEngineer();
        }
        if (res.member_type === "Intern") {
            getIntern();
        }
        if (res.member_type === "None") {
            generateAPI();
        }
    })
}

getEngineer = () => {

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
        const eng_name = res.eng_name;
        const id = engineeringTeam.length;
        const eng_mail = res.eng_mail;
        const eng_git = res.eng_git;
        
        const eng = new Engineer(eng_name, id, eng_mail, eng_git);

        engineeringTeam.push(eng);
        console.log(engineeringTeam);
        return promptMembers(engineeringTeam);
    })
}

getIntern = () => {

    return inquirer.prompt ([
        {
            type: "input",
            message: "Enter intern's name :", 
            name: "int_name",
        },
        {
            type: "input",
            message: "Enter intern's email :",
            name: "int_mail",
        },
        {
            type: "input",
            message: "Enter intern's school name : ",
            name: "int_school",
        }
    ])
    .then(resp => {
        const int_name = resp.int_name;
        const id = engineeringTeam.length;
        const int_mail = resp.int_mail;
        const int_school = resp.int_school;
        
        const intr = new Intern(int_name, id, int_mail, int_school);

        engineeringTeam.push(intr);
        console.log(engineeringTeam);
        return promptMembers(engineeringTeam);
    })
}

generateAPI = () => {
    const writeFile = data => {
        fs.writeFile('./dist/teamsAPI.html', data, err => {
            // if there is an error 
            if (err) {
                console.log(err);
                return;
            // when the profile has been created 
            } else {
                console.log("Team's Profile webpage has been generated successfully.");
            }
        })
    }; 
}

welcome();
//     .then(getTeamName)
// //     .then(promptMembers)
//     .catch(err => {
//         console.log(err);
//     });