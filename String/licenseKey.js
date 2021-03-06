
var licenseKeyFormatting = function(S, K) {
    let license = '';
    S = S.split('');
    let counter = 0;
    let subStr = '';
    for(let i = S.length-1;i>=0;i--) {
        if(S[i] === '-') continue;
        if(counter === K) {
            license = "-" + subStr + license;
            subStr = "";
            counter = 0;
        } 
        subStr = S[i].toUpperCase() + subStr;
        counter++;
       
    }

    return subStr+license;
};


var licenseKeyFormatting = function(S, K) {
    const raw = S.replace(/-/g, '').toUpperCase();
    let length = raw.length;
    let license = [];
    while(length > 0) {
        license.push(raw.substring(length-K, length));
        length -= K;
    }
    return license.reverse().join("-");
};