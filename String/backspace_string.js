var backspaceCompare = function(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    while(i >= 0 || j >= 0) {
        let backspace = 0;
        while(S[i] === '#' || backspace > 0) {
            if(S[i] === '#') {
                backspace++;
            } else {
                backspace--;
            }
            i--;
        }
        backspace = 0;
        while(T[j] === '#' || backspace > 0) {
            if(T[j] === '#') {
                backspace++;
            } else {
                backspace--;
            }
            j--;
        }
        if(S[i] !== T[j]) return false;
        i--;
        j--;
    }
    return true;
};
