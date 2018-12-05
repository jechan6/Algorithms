/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// e1a1t1
var groupAnagrams = function(strs) {
    let hash = {};
    for(let i = 0; i<strs.length; i++) {
        buildHash(strs[i], hash);
    }

    return Object.values(hash);
};

function buildHash(word, hash) {
    let result = "";
    let alphabet = genCharDict();
    for(let i = 0; i<word.length; i++) {
        alphabet[word[i]]++;
    }
    for(let char in alphabet) {
        if(alphabet[char] !== 0) {
            result += `${char}${alphabet[char]}`
        }
    }
    if(hash[result]) {
        hash[result].push(word);
    } else {
        hash[result] = [word];
    }

}

function genCharDict() {
    var a = {}, i = 'a'.charCodeAt(0), j = 'z'.charCodeAt(0);
    for (; i <= j; ++i) {
        a[String.fromCharCode(i)] = 0;
    }
    return a;
}