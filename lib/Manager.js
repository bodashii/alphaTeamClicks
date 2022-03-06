// creates manager object inheriting employee attributes

const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '', officeNumber) {
        super(name);

        this.officeNumber = officeNumber;
        console.log(this.officeNumber);
    }
}

module.exports = Manager;