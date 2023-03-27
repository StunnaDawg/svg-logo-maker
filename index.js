const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes, Triangle, Square, Circle} = require('./lib/shapes')

const makeSVG = (answers) =>  {
    const triangleSVG = new Triangle(answers.textColour, answers.colour, answers.text);
    const circleSVG = new Circle(answers.textColour, answers.colour, answers.text);
    const squareSVG = new Square(answers.textColour, answers.colour, answers.text);
    if (answers.shape === 'Triangle') {
        console.log(triangleSVG);
    }

    if (answers.shape === 'Circle') {
        console.log(circleSVG);
    }

    if (answers.shape === 'Square') {
        console.log(squareSVG);
    }

}

const shapes = inquirer.prompt ([
    {
        type: 'input', 
        message: 'Write 3 charcters',
        name: 'text',
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
        name: 'textColour',
        validate: function(input) {
            if (input.length === 0) {
                return 'Please enter a colour'
            } else {
                return true
            }
        }
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
        name: 'colour',
        validate: function(input) {
            if (input.length === 0) {
                return 'Please enter a colour'
            } else {
                return true
            }
        }
        
    }

]).then(makeSVG)

shapes;
