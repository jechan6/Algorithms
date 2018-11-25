var combine = function(n, k) {
    const result = [];
    function combo(subArr, start) {
        if(subArr.length === k) {
            result.push(subArr.slice());
            return;
        }
        for(let i = start; i<=n;i++) {
            subArr.push(i);
            combo(subArr,i+1);
            subArr.pop();
        }
    }
    combo([],1);
    return result;
};
