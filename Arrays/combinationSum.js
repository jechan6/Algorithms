/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    function comboSum(subArr, difference = target,start) {
        if(difference === 0) {
            result.push(subArr.slice());
            return;
        } else if(difference < 0) {
            return;
        }
        for(let i = start; i<candidates.length; i++) {
            subArr.push(candidates[i]);
            comboSum(subArr, difference - candidates[i], i);
            
            subArr.pop();
        }
    }
    
    comboSum([], target,0);
    return result;
};
