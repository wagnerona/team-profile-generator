// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//Import employee constructor
const Employee = require('./Employee')

//Engineer constructor which extends employee
class Engineer extends Employee {
    constructor (name, id, email, github) {

        //
        super (name, id ,email);

        this.github = github;

    }

    // Replace the role 
    getRole() {
        return 'Engineer';
    }

    // Getting office number via function
    getGithub() {
        return this.github;
    }
};

//Exports
module.exports = Engineer;
