var exist = function(matrix, word) {
    var wordLength = word.length,
        i,
        j;
    word = word.split("");
    const visited = {};
    const stack = [];
    function verify(row, col, matrix, path) {
        if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] !== word[path] || visited[[row,col]]  || path > wordLength)
            return false;
        path++;
        visited[[row,col]] = true;
        if(path === wordLength) return true;
        if(verify(row-1,col,  matrix, path))
            return true;
        if(verify(row,col+1,  matrix, path))
            return true;
        if(verify(row+1, col, matrix, path))
            return true;
        if(verify(row, col-1, matrix, path))
            return true;
        visited[[row,col]] = false;
        path--;
        return false;
    }
    for(let i = 0; i<matrix.length;i++) {
         for(let j = 0; j<matrix[i].length; j++) {
             if(verify(i,j,matrix,0)) {
                 return true;
             }
         }
    }

    return false;

}