// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//Import employee constructor
const Employee = require('./Employee')

//Engineer constructor which extends employee
class Intern extends Employee {
    constructor (name, id, email, school) {

        //
        super (name, id ,email);

        this.school = school;

    }

    // Replace the role 
    getRole() {
        return 'Intern';
    }

    // Getting office number via function
    getSchool() {
        return this.school;
    }
};

//Exports
module.exports = Intern;