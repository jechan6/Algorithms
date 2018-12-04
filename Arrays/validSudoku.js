/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set = new Set();
    for(let i = 0; i<board.length;i++) {
        for(let j = 0; j<board[i].length; j++) {
            let num = board[i][j];
            if(isNaN(num)) continue;
            let block = `${Math.floor(i/3)}${num}${Math.floor(j/3)}`;
            if(set.has(`row${i}${num}`) || set.has(`col${j}${num}`) || set.has(block)) return false;
          
            set.add(`row${i}${num}`);
            set.add(`col${j}${num}`);
            set.add(block);
            
        }
       
    }
    return true;
};