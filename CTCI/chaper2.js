const LinkedList = function (value) {
    this.value = value;
    this.next = null;
};

function removeDup(head) {
    hash = {}
    let cur = head;
    while (cur) {
        hash[cur.val] += 1;
        cur = cur.next;
    }
    let prev = nil;
    cur = head;
    while (cur.next) {
        if (hash[cur.val] > 1 && cur === head) {
            head = head.next;
        } else if (hash[cur.next.val] > 1) {
            cur.next = cur.next.next;
        }
        cur = cur.next;
    }
    return head;
}

function kthElement(head,k) {
    let length = 0;
    let cur = head;
    while(cur) {
        length++;
        cur = cur.next;
    }
    k = length-k;
    let count = 0;
    cur = head;
    while(cur) {
        if(count === k) {
            return cur;
        }
        count++;
        cur = cur.next;
    }
}

function deleteMiddle(node) {
    let cur = node;
    while(cur.next) {
        cur.val = cur.next.val;
        if(!cur.next.next) {
            cur.next = nil;
        }
        cur = cur.next;
    }
}