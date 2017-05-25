'use strict';

function infect(matrix, row, column, strength) {
  console.log(matrix, row, column);
  if(!matrix[row] || !matrix[row][column] || matrix[row][column] > strength) return matrix;

  matrix[row][column] = 0;

  infect(matrix, row - 1, column, strength);
  infect(matrix, row + 1, column, strength);
  infect(matrix, row, column - 1, strength);
  infect(matrix, row, column + 1, strength);

  return matrix;
}

console.log(infect([[4,5], [2,3]], 0, 1, 4));
