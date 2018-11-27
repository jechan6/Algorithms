/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length <= 1) return [nums];
    let last = nums.pop();
    let prevPerms = permute(nums);
    let result = [];
    for(let prevPerm of prevPerms) {
        for(let i = 0; i<= prevPerm.length; i++) {
            let clone = prevPerm.slice();
            clone.splice(i, 0, last);
            result.push(clone);
        }
    }
    return result;
};