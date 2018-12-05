/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    const hash = {};
    for(let i = 0; i<S.length; i++) {
        if(hash[S[i]]) {
            hash[S[i]].count += 1;
        } else {
            hash[S[i]] = {char: S[i], count: 1}
        }
    }
    let list = Object.values(hash);
    list = list.sort((a,b) => b.count - a.count);
    let result = "";
    let prevChar = "";
    for(let i = 0; i<S.length; i++) {
        let idx = getIndex(list, prevChar);
        if(idx === -1) return "";
        result += list[idx].char;
        prevChar = list[idx].char;
        list[idx].count--;
        if(idx < list.length - 1 && list[idx].count < list[idx+1].count) {
            let tmp = list[idx];
            list[idx] = list[idx + 1];
            list[idx+1]= tmp;
        }
    }
    return result;
};

function getIndex(list, prevChar) {
    
    for(let i = 0; i<list.length; i++) {
        if(list[i].count !== 0 && list[i].char !== prevChar) {
            return i;
        }
    }
    return -1;
}