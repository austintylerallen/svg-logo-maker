// This is my test.

// required the necessary packages and files needed to run the test.
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { getUserInput, generateLogo, generateSVG, saveSVGToFile } = require('./index');
const { run } = require('./index');

jest.mock('inquirer');

// mocks or simulates the input for getUserInput.
describe('getUserInput function', () => {
  it('should return user input object with valid input', async () => {
    inquirer.prompt.mockResolvedValueOnce({
      text: 'text',
      textColor: 'green',
      shape: 'square',
      shapeColor: 'black'
    });
    const userInput = await getUserInput();
    console.log('User Input:', userInput); // Added console log
    expect(userInput).toEqual({
      text: 'text',
      textColor: 'green',
      shape: 'square',
      shapeColor: 'black'
    });
  });

  it('should handle invalid text input', async () => {
    inquirer.prompt.mockResolvedValueOnce({
      text: 'ABCD',
      textColor: 'red',
      shape: 'Triangle',
      shapeColor: 'blue'
    });
    try {
      await getUserInput();
      // If the promise resolves successfully, fail the test
      fail('getUserInput should have rejected the promise for invalid input');
    } catch (error) {
      // Expecting an error to be thrown
      console.log('Error:', error); // Added console log
      expect(error).toBeTruthy();
    }
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
    console.log('SVG String:', svgString); // Added console log
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

