const inquirer = require('inquirer');
const fs = require('fs');


const shapes = inquirer.prompt ([
    {
        type: 'input', 
        message: 'Write 3 charcters',
        name: 'three',
        validate: function(input) {
            if (input.length !== 3) {
                return 'Please enter 3 characters'
            } else {
                return true
            }
        }
    },

    {
        type: 'input', 
        message: 'Enter a colour name or Hexadecimal for the text',
        name: 'text-colour'
    },
    
    {
        type: 'list', 
        message: 'What shape do you want',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape'
    }, 
    
    {
        type: 'input', 
        message: 'Enter a colour name or Hexadecimal for the shape',
        name: 'colour'
    }

]).then(answers => {
    console.log (answers.three)
})

shapes;