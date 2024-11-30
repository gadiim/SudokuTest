# Sudoku Test

## Table of Contents
- [Description](#description)
- [Task](#task)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Function Descriptions](#function_descriptions)
- [Project Structure](#project-structure)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Description
A Node.js application for validating Sudoku solutions by ensuring each row, column, and 3x3 block contains unique values and no zeros.

### Key Features:
- Validates Sudoku solutions for unique values in rows, columns, and blocks.
- Ensures no zeros are present in the final Sudoku grid.
- Modular and easily extendable for additional functionality.
- Simple and intuitive API for checking Sudoku grids.

## Task
You can find the task details [here](https://github.com/gadiim/SudokuTest/blob/main/TASK.md).

## Technologies Used
- Node.js
- JavaScript (ES6 Modules)

## Getting Started
To get started with this project, follow these steps:

### Prerequisites 
- Node.js installed on your machine.
- 
### Installation 
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sudokutest.git.
   ```
2. Navigate to the project directory:
   ```bash
   cd sudokutest
   ```

## Usage
To validate Sudoku solutions, run the following command:
   ```bash
   npm test
   ```
This will execute the script to check the Sudoku grids defined in the `validArray.js` and `invalidArray.js` files.

## Function Descriptions
<details><summary><strong>getUniqueValues()</strong>: Returns an array of unique values from the input array.</summary>

```javascript
   function getUniqueValues(arr) {
       return [...new Set(arr)];
   }
```
</details>
- `findZeros()`: Checks if there are any zeros in the Sudoku grid.
- `hasUniqueRows()`: Checks if each row in the Sudoku grid contains unique values.
- `hasUniqueColumns()`: Checks if each column in the Sudoku grid contains unique values.
- `hasUniqueBlocks()`: Checks if each 3x3 block in the Sudoku grid contains unique values.
- `validSolution()`: Combines all checks (rows, columns, blocks, and zeros) to validate the Sudoku solution.



## Project Structure

```sql
sudokutest/
├── invalidArray.js                   -- Contains the invalid Sudoku grid for testing
├── index.js                          -- Main script for validating Sudoku solutions
├── validArray.js                     -- Contains the valid Sudoku grid for testing
├── .gitignore                        -- Git ignore file
├── package.json                      -- Project dependencies and scripts
├── TASK.md                           -- Task documentation
└── README.md                         -- Project documentation
```

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project. See the LICENSE file for more details.
MIT License
```plaintext
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Acknowledgements

- Inspired by the classic Sudoku puzzle game.
- This project was developed as part of a personal learning exercise.
- Special thanks to the open-source community for their invaluable resources and tools. 😊
