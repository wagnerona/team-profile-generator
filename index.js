const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array of team 
const arrayTeam = [];

// prompt for Employee

const teamManager = () => {
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

    ]).then(answers => {

        // Object Destructing
        const { name, id, email, officeNumber } = answers;
        const manager = new Manager(name, id, email, officeNumber);

        arrayTeam.push(manager);
        console.log(manager);
    })
}

teamManager();