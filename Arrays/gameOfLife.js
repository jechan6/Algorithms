/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[i].length; j++) {
            checkNeighbors(board,i,j);
        }
    }
    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[i].length; j++) {
            board[i][j] %= 2;
        }
    }
};

function checkNeighbors(board, row, col) {
    // if(i<0 || j<0 || i>=board.length || j >= board.length || board[i][j] === 0) return;
    let count = 0;
 
    let dir = [[1,0], [-1,0],[0,1],[0,-1],[-1,-1],[1,1],[1,-1],[-1,1]];
    
    for(let i = 0; i<dir.length; i++) {
        let newRow =dir[i][0] + row;
        let newCol =dir[i][1] + col;
        if(newRow < 0 || newCol < 0 || newRow >= board.length || newCol >= board[0].length || board[newRow][newCol] === 0 || 
          board[newRow][newCol] === 3) continue;
        count++; 
    }

    if(board[row][col] === 0 && count === 3) {
        board[row][col] = 3;
    } else if(board[row][col] !== 0 && (count < 2 || count > 3)) {
        board[row][col] = 2;
    }


    
}