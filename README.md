# SVG Logo Maker

## Description
This Node.js application in the command-line allows users to generate simple logos for their projects. Users can input text, choose text color, select a shape (circle, triangle, or square), and choose the shape's color. The application then makes an SVG file named `logo.svg` based on the user's input.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Custom Text**: Users can input up to three characters to be included in the logo.
- **Color Choices**: Users can choose colors using keywords or hexadecimal values for both text and shape.
- **Shape Choices**: Users can select from three shapes: circle, triangle, or square.
- **SVG Output**: The app generates an SVG file named `logo.svg` based on user inputs.
- **Preview**: Users can open the generated SVG in any web browser to view their custom logo.


## Installation

Follow these steps to get the application running on your local machine:

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your computer. If you don't have them installed, you can download and install them from [Node.js's official website](https://nodejs.org/).

### Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/austintylerallen/svg-logo-maker
cd svg-logo-maker
```

### Install Dependencies

After cloning the project, navigate into the project directory and install the required npm packages:

```bash
npm install
```

This command installs all the dependencies defined in the package.json file, which is necessary for running the application.


## Usage

To use this SVG Logo Generator, follow the steps below:

1. **Start the Application**:  
   Open your terminal, navigate to the project's root directory, and run the application using Node.js:

   ```bash
   node index.js
   ```

2. **Follow the Prompts**:
    The application will guide you through a series of prompts:
    Input Text: Enter up to three characters for your logo.
    Select Text Color: Choose a color for your text by entering a color keyword or hexadecimal value.
    Choose a Shape: Select from the available shapes (circle, triangle, square).
    Select Shape Color: Choose a color for your shape by entering a color keyword or hexadecimal value.

3. **Save Your Logo**: After completing the prompts, the application will generate an SVG file named logo.svg in the current directory.

4. **View the Logo**: Open the generated logo.svg file in a web browser to view your custom logo.


## Tests

This application comes with a suite of automated tests to verify that everything is functioning as expected. To run these tests, follow the instructions below.

### Running Tests

1. **Open a Terminal**:  
   Navigate to the root directory of the project in your terminal.

2. **Install Dependencies**:  
   If you haven't already installed the project dependencies, do so by running:

   ```bash
   npm install
   ```
3. **Execute the Test Suite**
Run the tests using the following command:

```bash
npm jest shapes.test.js
```

## Contributing

We welcome contributions to the SVG Logo Generator! If you have suggestions for improvements or bug fixes, please follow the steps below to contribute:

### How to Contribute

1. **Fork the Repository**:  
   Start by forking the repository so you have your own copy to work on.

2. **Clone Your Forked Repository**:  
   Clone your fork to your local machine to make changes.

   ```bash
   git clone https://github.com/austintylerallen/svg-logo-maker

Thank you for taking the time to contribute to the SVG Logo Generator! Your efforts help improve the tool for everyone.


## License

This project is made available under the [MIT License](LICENSE.md). The MIT License is a permissive license that is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions.

For more details, see the [LICENSE.md](LICENSE.md) file included with this project.
