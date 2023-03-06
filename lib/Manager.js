// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//Import employee constructor
const Employee = require('./Employee')

//manager constructor which extends employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        //
        super (name, id ,email);

        this.officeNumber = officeNumber;

    }

    // Replace the role 
    getRole() {
        return 'Manager';
    }

    // Getting office number via function
    getOfficeNumber() {
        return this.officeNumber;
    }
};

//Exports
module.exports = Manager;
