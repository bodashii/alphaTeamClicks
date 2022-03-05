const Employee = require('../lib/Employee');

// test for name
// test for id
// test for email
test('creates employee object', () => {
    const employee = new Employee('Nick', '6', 'blah@yajoo.com');

    expect(employee.name).toBe('Nick');
    expect(employee.employeeId).toBe('6');
    expect(employee.email).toBe('blah@yajoo.com');
});

module.exports = Employee;