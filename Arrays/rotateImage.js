/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let level = 0;
    let size = matrix.length;
    let totalLevel = Math.floor(size/2);
    let last = size-1;
    while(level < totalLevel) {
        for(let i = level;i<last; i++) {
            swap(matrix, [level,i], [i,last]);
            swap(matrix, [level,i], [last,last-i+level]);
            swap(matrix, [level,i], [last-i+level, level]);
        }
        level++;
        last--;
    }
    
};

function swap(matrix, pos1, pos2) {
    let [x,y] = [pos1[0],pos1[1]];
    let [x2,y2] = [pos2[0],pos2[1]];
    let temp = matrix[x][y];
    matrix[x][y] = matrix[x2][y2];
    matrix[x2][y2] = temp;
}