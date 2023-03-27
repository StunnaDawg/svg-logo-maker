const {Shapes, Triangle, Square, Circle} = require('./shapes');

describe('Validate', () => {

    describe ('Shape color', () => {
        it('should set the shape color to blue', () => {
        const shape = new Triangle(shapeColor);
        shape.shapeColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`); 
        })
        
    });

    describe ('Shape text', () => {
        it('should set the shape text to sss', () => {
        const shape = new Triangle();
        shape.text("sss");
        expect(shape.render()).toEqual('<text  fill="blue" text-anchor="inherit" x="26%" y="25%">sss</text>'); 
        })
        
    })
    
})

