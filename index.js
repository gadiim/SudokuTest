import {validArray} from './validArray.js';
import {invalidArray} from './invalidArray.js';


let isValid = false;

function findZeros(array) {
    let isNoZero = true;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            if (array[row][col] === 0) {
                isNoZero = false;
                break;
            }
        }
        if (!isNoZero) break;
    }
    return isNoZero;
};

function getUniqueValues(array) {
    return [...new Set(array)];
};

function hasUniqueRows(array) {
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        if (row.length !== getUniqueValues(row).length) {
            return false;
        }
    }
    return true;
};

function hasUniqueColumns(array) {
    for (let i = 0; i < array.length; i++) {
        let column = array.map(row => row[i]);
        if (column.length !== getUniqueValues(column).length) {
            return false;
        }
    }
    return true;
};

function hasUniqueBlocks(array) {
    const blockArray = [];
    for (let rowStart = 0; rowStart < array.length; rowStart += array.length / 3) {
        for (let colStart = 0; colStart < array.length; colStart += array.length / 3) {
            const block = [];
            for (let i = 0; i < array.length / 3; i++) {
                for (let j = 0; j < array.length / 3; j++) {
                    block.push(array[rowStart + i][colStart + j]);
                }
            }
            blockArray.push(block);
        }
    }
    return hasUniqueRows(blockArray);
};

function validateSudoku(array) { 
    if (!findZeros(array)) { 
        return false; 
    } 
    if (!hasUniqueRows(array)) { 
        return false; 
    } 
    if (!hasUniqueColumns(array)) { 
        return false; 
    } 
    if (!hasUniqueBlocks(array)) { 
        return false; 
    } 
    return true; 
}; 

isValid = validateSudoku(validArray); 
console.log('Sudoku is valid: '+ isValid);

isValid = validateSudoku(invalidArray); 
console.log('Sudoku is valid: '+ isValid);
