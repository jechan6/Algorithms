/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function merge(l1, l2) {
        if(l1 === null) return l2;
        if(l2 === null) return l1;
        let head = new ListNode(0);
        let curr = head;
        while(l1 !== null && l2 !== null) {
            if(l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            }  else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        curr.next = l1 !== null ? l1 : l2;
        return head.next;
    } 
    
    if(!lists.length) return null;
    while(lists.length > 1) {
        for(let i = 0; i<lists.length; i++) {
            let l1 = lists.pop();
            let l2 = lists.pop();
            lists.push(merge(l1,l2));
      
        }
    }
    return lists.shift();
};