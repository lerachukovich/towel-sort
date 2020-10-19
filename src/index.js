
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }
    else {
        let sortedMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                sortedMatrix.push(matrix[i].reverse());
            } else {
                sortedMatrix.push(matrix[i]);
            }
        }
        return matrix.flat();
    }
};
