/* Given an NxN matrix, rotate it's values by 90 degrees */

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

rotateMatrix = (matrix) => {
  console.log('Original Matrix:');
  console.log(matrix);
  let rotatedMatrix = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    let matrixRow = [];
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      matrixRow.push(matrix[j][i]);
    }
    rotatedMatrix.unshift(matrixRow);
  }
  console.log('Rotated matrix:');
  console.log(rotatedMatrix);
  return rotatedMatrix;
};

rotateMatrix(matrix);
