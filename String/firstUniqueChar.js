/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let alphabet = createAlphabet();
    for(let i = 0; i<s.length; i++) {
        if(alphabet[s[i]] === -1) {
            alphabet[s[i]] = i;
        } else {
            alphabet[s[i]] = -2;
        }
    }
    let minIndex = Number.MAX_SAFE_INTEGER;
    let arr = Object.values(alphabet);
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] > -1 && arr[i] < minIndex) {
            minIndex = arr[i];
        }
    }
    return minIndex === Number.MAX_SAFE_INTEGER ? -1 : minIndex;
};

function createAlphabet() {
    var a = 97;
    var charArray = {};
    for (var i = 0; i<26; i++)
        charArray[String.fromCharCode(a + i)] = -1;
    return charArray;
}