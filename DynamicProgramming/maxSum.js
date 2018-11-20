function maxSum(input) {
    let maxSum = input[0];
    let prevSum = 0;
    for(let i = 1; i<input.length; i++) {
      let prev = prevSum;
      prevSum = Math.max(maxSum, prevSum);
      maxSum = input[i] + prev;
    }
    return Math.max(maxSum,prevSum);
  }
  maxSum([5, 5, 10, 100, 10, 5]);