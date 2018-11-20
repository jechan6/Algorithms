var repeatedStringMatch = function(A, B) {
    let repeats = 1;
    let ogA = A;
    while(A.length <= B.length + ogA.length) {
        if(A.indexOf(B) === -1) {
            A += ogA;

            repeats++;
        } else {
            return repeats;
        }
    }
    return A.indexOf(B) === -1 ? -1 : repeats;
};