const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array of team 
const arrayTeam = [];

// prompt for Employee

const setManager = () => {
    console.log("Please answer the questions below to build your team's profile");

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the manager',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the ID of the manager',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide the email of the manager',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please provide the office number of the manager',
        }
    ]).then(managerAnswers => {

        // Object Destructing
        const { name, id, email, officeNumber } = managerAnswers;
        const manager = new Manager(name, id, email, officeNumber);

        arrayTeam.push(manager);
        console.log(manager);
        addMore();
    })
}


const addMore = () => {

    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Thanks! Now, would you like to:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building team']
        }
    ]).then(answer => {

        switch (answer.options) {

            case 'Add an engineer':
                addEngineer();
                break;

            case 'Add an intern':
                addIntern();
                break;

            default:
                // createHtml();
                break;
        }
    })
};


const addEngineer = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the Engineer',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the ID of the Engineer',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide the email of the Engineer',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please provide the GitHub of the Engineer',
        },
    ]).then(engineerAnswers => {

        // Object Destructing
        const { name, id, email, gitHub } = engineerAnswers;
        const engineer = new Engineer(name, id, email, gitHub);

        arrayTeam.push(engineer);
        console.log(engineer);
        addMore();
    })
};

const addIntern = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the Intern',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the ID of the Intern',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide the email of the Intern',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please provide the School of the Intern',
        },
    ]).then(internAnswers => {

        // Object Destructing
        const { name, id, email, school } = internAnswers;
        const intern = new Intern(name, id, email, school);

        arrayTeam.push(intern);
        console.log(intern);
        addMore();
    })
};





setManager();