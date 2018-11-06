/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for(let i = 0; i<grid.length; i++) {
        for(let j = 0; j<grid[i].length; j++) {
            if(grid[i][j] === '1') {
              checkNeighbors(grid,i, j);
              count += 1;
            }
        }
    }  
    return count;
  };
  
  function checkNeighbors(grid, row, col) {
      if(row < 0 || col < 0 || row >= grid.length || col >= grid.lenth || grid[row][col] !== '1') 
          return;
      grid[row][col] = '#';
      checkNeighbors(grid,row+1,col);
      checkNeighbors(grid,row-1,col);
      checkNeighbors(grid,row,col+1);
      checkNeighbors(grid,row,col-1);
  }