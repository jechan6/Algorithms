/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) return '0';
    let fraction = "";
    if(Math.sign(numerator) !== Math.sign(denominator)) fraction += '-';
    let numer = Math.abs(numerator);
    let denom = Math.abs(denominator);
    
    fraction+= Math.floor(numer/denom);
    numer %= denom;
    if(numer === 0) return fraction;
    fraction += ".";
    let hash = {};
    hash[numer] = fraction.length;
    while(numer !== 0) {
        numer *= 10;
        fraction += Math.floor(numer/denom);
        numer %= denom;
        if(hash[numer]) {
            let i = hash[numer];
            return `${fraction.substring(0,i)}(${fraction.substring(i)})`
        } else {
             hash[numer] = fraction.length;
        }
    } 
    return fraction;
};