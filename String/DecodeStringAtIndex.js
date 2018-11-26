/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
    let length = 0;
    for(let i = 0; i<S.length; i++) {
        if(!isNaN(S[i])) {
            length *= S[i];
        } else {
            length++;
        }
    }
    for(let i = S.length-1; i>=0; i--) {
        if(!isNaN(S[i])) {
            length = Math.ceil(length/S[i]);
            K %= length; 
        } else {
            if(K === 0 || K === length) {
                return S[i];
            }
            length--;
        }
    }
};