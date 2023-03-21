const inquirer = require('inquirer');
const fs = require('fs');


const shapes = inquirer.prompt ([
    {
        type: 'input', 
        message: 'Write 3 charcters',
        name: 'three'
    }

]).then(answers => {
    console.log (answers.three)
})

shapes;