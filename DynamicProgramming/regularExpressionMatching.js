/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let table = [];
    let firstRow = [];
    firstRow.push(true);
    for(let i = 1;i<p.length+1; i++) {
        if(p[i-1] === "*") {
            firstRow.push(firstRow[i-2]);
        } else {
            firstRow.push(false);
        }
    }
    table.push(firstRow);
    for(let i = 1; i<=s.length; i++) {
        let row = []
        row.push(false);
        for(let j = 1; j<=p.length;j++) {
            if(p[j-1] === s[i-1] || p[j-1] === '.') {
                row.push(table[i-1][j-1]);
                
            } else if(p[j-1] === "*") {
                if(row[j-2] === true) {
                    row.push(row[j-2]);
                } else if(p[j-2] === s[i-1] || p[j-2] === ".") {
                    row.push(table[i-1][j]);
                } else {
                    row.push(false);
                }
            } else {
                row.push(false);
            } 
        }

        table.push(row);
    }

    return table[table.length-1][p.length];

};

