/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const perfectSquares = [];
    for(let i = 1; i*i<=n; i++) {
        perfectSquares.push(i*i);
    }
    if(perfectSquares[perfectSquares.length-1] === n) return 1;
    let queue = [];
    for(let i = 0; i<perfectSquares.length; i++) {
        queue.push(perfectSquares[i]);
    }
    let count = 1
    let visited = new Set();
    while(queue.length > 0) {
        count++;
        let length = queue.length;
        for(let i = 0; i<length;i++) {
            let num = queue.shift();
            for(let j = 0; j<perfectSquares.length;j++) {
                let tmp = num + perfectSquares[j];
                if(tmp === n) {
                    return count;
                } else if(tmp <n && !visited.has(tmp)) {
                    visited.add(tmp);
                    queue.push(tmp);
                } else if(tmp > n) {
                    continue;
                }
           }
        }
    }
    return -1;
};