
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let outputArr = [];

  if (matrix !== undefined) {
    for (let i = 0; i <= matrix.length - 1; i++) {
      if (i % 2 == 0) {
        outputArr = outputArr.concat(matrix[i])

      } else {
        outputArr = outputArr.concat(matrix[i].reverse())
        
      }
    }
    return outputArr;
  } else {
    return outputArr;
  }
}