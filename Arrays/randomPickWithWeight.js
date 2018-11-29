/**
 * @param {number[]} w
 */
var Solution = function(w) {
 
    for(let i = 1; i<w.length; i++) {
        w[i] += w[i-1];
    }
    this.result = w;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let rand = Math.floor((Math.random() * this.result.length)+1);
    let left = 0;
    let right = this.result.length-1;
    while(left < right) {
        let mid = Math.ceil((left+right)/2);
 
        if(this.result[mid] >= rand) {
            right = mid;
        } else {
            left = mid+1;
        }
    }
    return left;
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(w)
 * var param_1 = obj.pickIndex()
 */