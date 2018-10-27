//input cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// output: 6
var minCostClimbingStairs = function(cost) {
    for(let i = 2; i< cost.length; i++) {
        cost[i] += Math.min(cost[i-1], cost[i-2]);
    }
    let n = cost.length;
    return Math.min(cost[n-1], cost[n-2]);
};

// Input: [7,1,5,3,6,4]
// Output: 5
var maxProfit = function(prices) {
    if(prices.length < 1) return 0;
    let curr = prices[0];  
    let profit = 0;
    let maxProfit = 0;
  
    for(let i = 1; i<prices.length;i++) {
       let price = prices[i];
       if(price < curr) {
           curr = price;
           continue;
       }
       profit = price - curr;
       maxProfit = Math.max(profit, maxProfit);
    }
      return maxProfit;
  };


// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
var climbStairs = function(n) {
    const arr = helper(n);
    return arr[n-1];
};

function helper(n) {
    if(n===1) return [1];
    if(n===2) return [1,2];
    let arr = helper(n-1);
    arr.push(arr[arr.length-2] + arr[arr.length-1]);
    return arr;
}