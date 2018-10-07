const permute = function(nums){
    if(nums.length <= 1) return [nums]
    let res = []
    let last = nums.pop()
    let prevPerms = permute(nums)
    for(let prevPerm of prevPerms){
        for(let i = 0; i <= prevPerm.length; i++){
            let clone = prevPerm.slice(0)
            clone.splice(i,0,last)
            res.push(clone)
        }
    }
    return res
}