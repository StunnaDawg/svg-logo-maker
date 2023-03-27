const {Shapes, Triangle, Square, Circle} = require('./shapes.js');

describe('Validate', () => {

    describe ('Shape color', () => {
        it('should set the shape color to blue', () => {
        const shapeBlue = new Triangle();
        shapeBlue.shapeColor = "blue";
        expect(shapeBlue.render()).toMatch('<polygon points = "150, 18 244, 182 56, 182" fill="blue" />'); 
        })
        
    });

   describe ('Shape text', () => {
        it('should set the shape text to sss', () => {
        const shapeText = new Triangle();
        shapeText.text = "sss"
        shapeText.textColor = "white"
        expect(shapeText.render()).toMatch('<text fill="white" text-anchor="middle" x="50%" y="60%">sss</text>'); 
        })
        
    })

    describe ('Shape type', () => {
        it('should set the shape to a circle', () => {
        const shapeType = new Circle();
        shapeType.shape = 'cx="50" cy="50" r="50"'
        shapeType.shapeColor = 'blue'
        expect(shapeType.render()).toMatch('<circle cx="50" cy="50" r="50"  fill="blue"'); 
        })
        
    })

    describe ('Text colour', () => {
        it('should set the shape text color to black', () => {
        const shapeTextColor = new Square();
        shapeTextColor.textColor = 'black'
        shapeTextColor.text = 'sss'
        expect(shapeTextColor.render()).toMatch('<text x="60" y="50" fill="black" text-anchor="middle">sss</text>'); 
        })
        
    })

    
})

