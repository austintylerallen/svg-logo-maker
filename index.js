const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// handles the users input.
async function getUserInput() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text of the object.',
        validate: (input) => {
          if (input.length <= 3) {
            return true;
          }
          return 'Text should be up to three characters.';
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a hex-code or a simple color for your text.',
        validate: (input) => {
          return true; 
        }
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose what shape you would like:',
        choices: ['Triangle', 'Circle', 'Square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a hex-code or simple color for the shape chosen.',
        validate: (input) => {
          return true; 
        }
      }
    ]);

    // returns user input
    return userInput;
  } catch (error) {
    console.error('Error occurred during user input:', error);
  }
}

// to generate the SVG logo.
function generateLogo(userInput) {
  try {
    if (!userInput.shape) {
      throw new Error('A shape must be selected');
    }
    let shape;

    switch (userInput.shape) {
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Circle':
        shape = new Circle();
        break;
      case 'Square':
        shape = new Square();
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    // makes sure shape is defined.
    if (!shape) {
      throw new Error('Shape is not defined');
    }

    // Sets shape and text color.
    shape.setColor(userInput.shapeColor);

    // Makes SVG string
    const svg = generateSVG(userInput, shape); 
    console.log(svg);

    // Saves SVG as a file. 
    saveSVGToFile(svg);
  } catch (error) {
    console.error('Error during SVG being generated.', error.message); 
  }
}

// Function that generates SVG string based on user input
function generateSVG(userInput, shape) {
  try {
    // SVG attributes (width and height)
    const svgAttributes = 'xmlns="http://www.w3.org/2000/svg" width="300" height="200"';
    
    // Creates SVG opening tag.
    let svgString = `<svg ${svgAttributes}>`;
    
    // Generates the shape the user has chosen.
    switch (userInput.shape) {
      case 'Triangle':
        svgString += `<polygon points="150,50 250,150 50,150" fill="${shape.color}" />`;
        break;
      case 'Circle':
        svgString += `<circle cx="150" cy="100" r="80" fill="${shape.color}" />`;
        break;
      case 'Square':
        svgString += `<rect x="50" y="50" width="200" height="100" fill="${shape.color}" />`;
        break;
      default:
        throw new Error('Invalid shape selected');
    }
    
    // Adds the chosen text to the SVG logo.
    svgString += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>`;
    svgString += '</svg>';
    
    return svgString;
  } catch (error) {
    console.error('An error occured during the rendering of your SVG logo.', error);
  }
}

// to save SVG as a file.
function saveSVGToFile(svgString) {
  try {
    const filePath = path.join(__dirname, 'logo.svg'); 
    fs.writeFileSync(filePath, svgString); 
    console.log('SVG saved to logo.svg. It is ready!'); // logs a message to the console notifying that the SVG logo is ready.
  } catch (error) {
    console.error('An error occured during the rendering of your SVG logo.', error);
  }
}

// Main function to run the app.
async function run() {
  try {
    // Gets user input again
    const userInput = await getUserInput();
    generateLogo(userInput);
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
}

// Calls all the main functions to run the application and export it to be available to other files.
module.exports = {
  getUserInput,
  generateLogo,
  generateSVG,
  saveSVGToFile,
  run
};

run()
