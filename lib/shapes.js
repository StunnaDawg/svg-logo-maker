// the shapes should include a html format so that they can be added to fs write file

class Shapes {
    constructor (textColor, shapeColor, text) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.text = text
    }

    getShapeColor() {
        return this.shapeColor;
      }

      getShapeText() {
        return this.text;
      }

    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}" />
          <text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
}
// triangle, circle, and square are all child classes of Shapes
class Triangle extends Shapes {
    constructor (textColor, shapeColor, text) {
    super(textColor, shapeColor, text)
    this.shape = 'points = "150, 18 244, 182 56, 182"'
    //create triangle shape
    
    }

    getShapeColor() {
        return this.shapeColor;
      }

      getShapeText() {
        return this.text;
      }

    render() {

        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
        <polygon ${this.shape} fill="${this.shapeColor}" />
        <text fill="${this.textColor}" text-anchor="middle" x="50%" y="60%">${this.text}</text>
      </svg>`;

    }


}

class Circle extends Shapes{
    constructor (textColor, shapeColor, text) {
        super(textColor, shapeColor, text)
        this.shape = 'cx="50" cy="50" r="50"'
        //create circle shape
        //<circle cx="50" cy="50" r="50" />
        //</svg>
        }

        render() {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                <circle ${this.shape}  fill="${this.shapeColor}" />
                <text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
              </svg>`;
            }

}

class Square extends Shapes {
    constructor (textColor, shapeColor, text) {
        super(textColor, shapeColor, text)
        this.shape = 'x="0" y="0" width="300" height="200"'
       
        
        }

        getShapeText() {
            return this.text;
          }
    
          getShapeTextColor() {
            return this.textColor;
          }

        render() {
            return ` <svg viewBox="0 0 100 100" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect ${this.shape}  fill="${this.shapeColor}" />
            <text x="60" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
              </svg>`;
            }
    
}
// classes exported so index.js can use them for the making of the svg files
module.exports = { Shapes, Triangle, Circle, Square };
