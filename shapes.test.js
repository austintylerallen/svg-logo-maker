// Pretty self explanatory. This is my test.


// required the neccesary packages and files needed to run the test.
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { getUserInput, generateLogo, generateSVG, saveSVGToFile } = require('./index');
const { run } = require('./index');

jest.mock('inquirer');

// mocks or simiulates the input for getUserInput.
describe('getUserInput function', () => {
  it('should return user input object with valid input', async () => {
    inquirer.prompt.mockResolvedValueOnce({
      text: 'text',
      textColor: 'green',
      shape: 'square',
      shapeColor: 'black'
    });
    const userInput = await getUserInput();
    expect(userInput).toEqual({
        text: 'text',
        textColor: 'green',
        shape: 'square',
        shapeColor: 'black'
    });
  });
// if user does not enter anything or something that is not accepted, it will kick back the response "should handle invalid text input".
  it('should handle invalid text input', async () => {
    inquirer.prompt.mockResolvedValueOnce({
      text: 'ABCD',
      textColor: 'red',
      shape: 'Triangle',
      shapeColor: 'blue'
    });
    await expect(getUserInput()).rejects.toThrow();
  });

});

describe('generateLogo function', () => {
  it('should generate SVG logo with valid user input', () => {
    const userInput = {
      text: 'ABC',
      textColor: 'red',
      shape: 'Triangle',
      shapeColor: 'blue'
    };
    generateLogo(userInput);
    
    // checks if the SVG file is created where it's supposed to be.
    const filePath = path.join(__dirname, 'logo.svg');
    expect(fs.existsSync(filePath)).toBe(true);
  });
});



describe('generateSVG function', () => {
  it('should generate SVG string with valid user input and shape', () => {
    const userInput = {
      text: 'ABC',
      textColor: 'red',
      shape: 'Triangle',
      shapeColor: 'blue'
    };
    const shape = { color: 'blue' };
    const svgString = generateSVG(userInput, shape);
    expect(svgString).toContain('<svg');
    expect(svgString).toContain('<polygon');
    expect(svgString).toContain('fill="blue"');
    expect(svgString).toContain('<text');
    expect(svgString).toContain('fill="red"');
    expect(svgString).toContain('ABC');
  });

});

describe('saveSVGToFile function', () => {
  it('should save SVG string to file', () => {
    const svgString = '<svg>...</svg>'; 
    saveSVGToFile(svgString);
    
    const filePath = path.join(__dirname, 'logo.svg');
    expect(fs.existsSync(filePath)).toBe(true);
  });

});

describe('Main function (run)', () => {
  it('should run without errors', async () => {
    await expect(run()).resolves.not.toThrow();
  });
});

