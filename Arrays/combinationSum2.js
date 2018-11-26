/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    const visited = {};
    candidates = candidates.sort();
    function findCombos(subArr, start, difference) {
        if(difference === 0){
            if(!visited[subArr]) {
                result.push(subArr.slice());
                visited[subArr] = true;
            }
            return;
        } else if(difference < 0) {
            return;
        }
        for(let i = start; i<candidates.length;i++) {
            subArr.push(candidates[i]);
            findCombos(subArr,i+1,difference- candidates[i]);
            subArr.pop();
        }
    }
    findCombos([],0,target);
    return result;
};