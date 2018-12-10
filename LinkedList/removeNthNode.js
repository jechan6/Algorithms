/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let length = 0;
    let dummy = new ListNode(0);
    let slow = dummy;
    let fast = dummy;
    slow.next = head;
    for(let i = 1; i<=n; i++) {
        fast = fast.next;
    }

    while(fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
 
    slow.next = slow.next.next;
    return dummy.next;
};