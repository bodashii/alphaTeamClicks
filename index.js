
// links to other files in the directory
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager')


// prompt for manager
const buildTeam = () => {
    roster = [];

    // prompts for user input from the manager
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
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
                message: 'What is the office number? (Required)',
                validate: officeNumberInput => {
                    if(officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter the office number!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'Would you like to add another member to the team?',
                name: 'action',
                choices: ['Engineer', 'Intern', 'No']
            }
        ])
        .then(team => {
            roster.push(team);
            console.log(team);
        })
        
};

buildTeam();


// const teamCrit = () => {
//     Employee = [];
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Please enter team managers name! (Required)',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter manager name!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'employeeId',
//             message: 'Please enter employee ID number!'
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email? (Required)',
//             validate: emailInput => {
//                 if(emailInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your email! (Required)');
//                     return false;
//                 }
//             }
//         }
//     ])
//     .then(({ name )} => {
//         this.name = new Employee(name);
//     })
     // {
        //     type: 'input',
        //     name: 'officeNumber',
        //     message: 'Please enter office number!'
        // },
        // {
        //     type: 'list',
        //     message: 'Who would you like to add next?',
        //     choices: ['Engineer', 'Intern']
        // }


    // prompt for engineer

    // prompt for intern

    
    // .then(team => {
    //     roster.push(team);
    //     return team;
    // })
// };

// generates HTML file to /dist

// teamCrit();