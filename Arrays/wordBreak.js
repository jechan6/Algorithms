/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dictionary = new Set();
    for(let i = 0; i<wordDict.length; i++) {
        dictionary.add(wordDict[i]);
    }

    let result = new Array(s.length+1);
    result[0] = true;
    for(let i = 1; i<=s.length; i++) {
        for(let j = 0; j<i;j++) {
            if(result[j] && dictionary.has(s.substring(j,i))) {
                result[i] = true;
                break;
            }
        }
    }
    if(result[result.length-1]) return true;
    return false;
};