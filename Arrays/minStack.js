/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let prevMin = this.stack.length === 0 ? x : this.getMin();
 
    if(prevMin > x) {
        prevMin = x;
    }
    
    this.stack.push([x,prevMin]);

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let elem = this.stack.pop();

    return elem[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */