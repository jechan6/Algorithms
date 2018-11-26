/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];

    function findCombos(subArr, start, difference) {
        if(difference === 0 && subArr.length === k) {
            result.push(subArr.slice());
            return;
        } else if(difference < 0 || subArr.length > k) {
            return;
        }
        for(let i = start; i<=9;i++) {
            subArr.push(i);
            findCombos(subArr, i+1, difference - i);
            subArr.pop();
        }
    }
    findCombos([], 1, n);
    return result;
};