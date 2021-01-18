/* Rotate matrix 90 degrees, in place */

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    // set j = i to prevent swapping to original array
    for (let j = i; j < matrix.length; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
  console.log(matrix);
  return matrix;
};

rotateMatrix(matrix);
