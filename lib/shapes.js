class Shape {
    constructor() {
      this.color = "black"; 
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // using render method to create string.
    render() {
      // render is then used by the child classes shown below.
      throw new Error("Method 'render' must be implemented");
    }
  }
  
  class Triangle extends Shape {
    constructor() {
      super();
    }
  
    render() {
      // SVG triangle using the ${this.color} to fill it with the users color choice for the shape. 
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor() {
      super();
    }
  
    render() {
       // SVG circle using the ${this.color} to fill it with the users color choice for the shape. 
      return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor() {
      super();
    }
  
    render() {
       // SVG square using the ${this.color} to fill it with the users color choice for the shape. 
      return `<rect x="40" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  