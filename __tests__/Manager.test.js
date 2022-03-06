const { getNamespaceURI } = require('parse5/lib/tree-adapters/default');
const Employee = require('../lib/Employee');

const Manager = Employee;

test('passes values of employee and makes manager Object', () => {
    const manager = new Employee();

    expect(manager.name).toBe(this.name);
    expect(manager.employeeId).toBe(this.employeeId);
    expect(manager.email).toBe(this.email);
    expect(manager.officeNumber).toBe(this.officeNumber);
});

module.exports = Manager;