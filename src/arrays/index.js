// JavaScript: Simple Dynamic Array

const numbersArray = [1, 2, 3, 4, 5];

numbersArray.pop(); // [1, 2, 3, 4]
numbersArray.push(6); // [1, 2, 3, 4, 6]
numbersArray.shift(); // [2, 3, 4, 6]
numbersArray.unshift(1); // [1, 2, 3, 4, 6]

// JavaScript: 2D Array
// Rows and columns represented in nested arrays
const rowsAndColumnsArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const firstRow = rowsAndColumnsArray[0]; // [1, 2, 3]
const secondColumnFirstRow = rowsAndColumnsArray[0][1]; // 2
const thirdColumnSecondRow = rowsAndColumnsArray[1][2]; // 6
