/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let output = [0,"A",0,"B"];
    let num = new Array(10).fill(0);
    let hash = {};
    for(let i = 0; i<secret.length; i++) {
        if(secret[i] === guess[i]) {
            output[0]++;
        } else {
            if(num[secret[i]] > 0) output[2]++;
            if(num[guess[i]] < 0) output[2]++;
            num[secret[i]]--;
            num[guess[i]]++;
        }
    }
    return output.join("");
};