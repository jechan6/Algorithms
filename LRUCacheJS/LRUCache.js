/**
 * @param {number} capacity
 */
function ListNode(val,key=null) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}
ListNode.prototype.remove = function(node) {
    let prev = node.prev;
    prev.next = node.next;
    let next = node.next;
    if(next === null) return;
    next.prev = prev;
}

var LRUCache = function(capacity) {
    this.map = {};
    this.head = new ListNode(0, "head");
    this.tail = new ListNode(0, "tail");
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.count = 0;
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map[key]) {
        let node = this.map[key];
        this.update_node(node);
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map[key]) {
        let node = this.map[key];
        let prev = node.prev;
        prev.next = node.next;
        node.next.prev = prev;
        this.head.remove(node);
        node.val = value;
        this.append(node.val,node.key);
        return;
    }
    if(this.count >= this.capacity) {
        this.eject();
        this.count--;
    } 
    this.count++;
    this.map[key] = this.append(value, key);
};

LRUCache.prototype.update_node = function(node) {
    this.head.remove(node);
    this.map[node.key] = this.append(node.val, node.key);
} 
LRUCache.prototype.eject = function() {
    let node = this.head.next;
    this.head.next.remove(node);
    delete this.map[node.key];
}
LRUCache.prototype.append = function(value,key) {
    let node = new ListNode(value,key);
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    node.next = this.tail;
    this.tail.prev = node;
    return node;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */