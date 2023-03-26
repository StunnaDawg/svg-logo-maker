const inquirer = require('inquirer');
const fs = require('fs');


const shapes = inquirer.prompt ([
    {
        type: 'input', 
        message: 'Write 3 charcters',
        name: 'three'
    }, 
    
    {
        type: 'list', 
        message: 'What shape do you want',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape'
    }, 
    {
        type: 'input', 
        message: 'Enter a colour name or Hexadecimal',
        name: 'colour'
    }

]).then(answers => {
    console.log (answers.three)
})

shapes;