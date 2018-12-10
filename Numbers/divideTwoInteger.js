/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // if(divisor > dividend) return 0;

    if(divisor === 0) return Infinity;
    if(dividend === 0) return 0;
    if(divisor === 1) return dividend;
    let sum = 0;
    let result = 0;
    let isNegative = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while(sum <= dividend-divisor) {
        sum+= divisor;
        result++;
    }
    
    return isNegative ? Math.max(0-result, -2147483648) : Math.min(result, 2147483647);  
};