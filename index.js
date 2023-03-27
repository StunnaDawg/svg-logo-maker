const inquirer = require('inquirer');
const {readFile, writeFile} = require('fs/promises');
const fileName = 'logo.svg'
const filePath = './examples/' + fileName;


inquirer.prompt ([
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

]).then((answers) => {

    const inputSVG = {
        shape: answers.shape,
        textColour: answers.textColour,
        text: answers.text,
        colour: answers.colour
    };

    const jsonString = JSON.stringify(inputSVG);

    writeFile('./data/inquirerInput.json', jsonString, (err) => {
        if (err) throw err;
        console.log('complete')
    })
})
.then (() => {
    const {Shapes, Triangle, Square, Circle} = require('./lib/shapes');
    readFile('./data/inquirerInput.json', 'utf-8')
    .then((json) => {
        const svgData = JSON.parse(json);
        let svgCreation;
        if (svgData.shape === 'Triangle') {
            svgCreation = new Triangle(
                svgData.textColour, 
                svgData.colour, 
                svgData.text
                );
        }
        if (svgData.shape === 'Circle') {
            svgCreation = new Circle (
                svgData.textColour, 
                svgData.colour, 
                svgData.text
                );
        }
        if (svgData.shape === 'Square') {
            svgCreation = new Square (
                svgData.textColour, 
                svgData.colour, 
                svgData.text
                );
        }

        const fileSVG = svgCreation.render()

        return writeFile(filePath, fileSVG);
    })
    .then(() => {
        console.log('Created SVG in the examples directory')
    })

})


    
    


