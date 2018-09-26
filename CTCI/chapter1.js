function is_uniq(str) {
    let hash = {}
    for(let i = 0; i < str.length; i++) {
        let el = str[i]
        if(!hash[el]) {
            hash[el] = true
        } else {
            return false
        }
    }
    return true
}

function is_permutation(str1, str2) {
    hash = {}
    if(str1.length !== str2.length) {
        return false;
    }
    for(let i = 0; i<str1.length;i++) {
        hash[str1[i]] += 1
    }
    for(let i = 0; i<str2.length; i++) {
        if(hash[str2[i]] != 0) {
            hash[str2[i]] -= 1;
        } else {
            return false;
        }
    }
    return true;
}

function replace_str(str) {
    str = str.split('');
    for(let i = 0; i<str.length; i++) {
        if(str[i] === ' ') {
            for(let j = str.length-1; j>i+2;j--) {
                str[j] = str[j-2];
            }
            str[i] = '%';
            str[i+1] = '2';
            str[i+2] = '0';
        }
    }
    return str.join('');
}