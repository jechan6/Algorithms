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

var reverseLinkedList2 = function (head, m, n) {
    if (head === null) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;
    for (let i = 0; i < m - 1; i++) curr = curr.next;
    let start = curr.next;
    let last = start.next;
    for (let i = 0; i < n - m; i++) {
        start.next = last.next;
        last.next = curr.next;
        curr.next = last;
        last = start.next;
    }
    return dummy.next;
};