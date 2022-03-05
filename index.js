const inquirer = require('inquirer');

const teamCrit = () => {
    roster = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter team managers name! (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter employee ID number!'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email! (Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter office number!'
        }
    ])
    .then(team => {
        roster.push(team);
        console.log(team);
    })
};

teamCrit();