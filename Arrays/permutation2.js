/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    let map = {};
    let result = [];

    function permute(prevArr, arr) {
        if(prevArr.length >= nums.length) {
            if(!map[prevArr]) {
                map[prevArr] = true;
                result.push(prevArr.slice());
                return;
            }
        }
        for(let i = 0; i<nums.length; i++) {
            if(arr.includes(i)) continue;
            prevArr.push(nums[i]);
            arr.push(i);
            permute(prevArr, arr);
            prevArr.pop();
            arr.pop();
        }
    }
    
    permute([],[]);
    return result;
};

