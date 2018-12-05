/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.split("");
    let sign = 1;
    let stack = [];
    let prevOp = "+";
    let num = 0;
    for(let i = 0; i<s.length; i++) {
        if(!isNaN(s[i]) && s[i] !== " ") {
            num = num*10 + parseInt(s[i]);
        } 
        if((isNaN(s[i]) && s[i] !== " ") || i === s.length - 1) {
            if(prevOp === "+") {
                stack.push(num);
            } else if(prevOp === "-") {
                stack.push(-1*num);
            } else if(prevOp === "*") {
                stack.push(stack.pop()*num);
            } else if(prevOp === "/") {
                let val = stack.pop();
                if(val < 0) {
                    val = Math.ceil(val/num);
                } else {
                    val = Math.floor(val/num);
                }
                stack.push(val);
            }
            num = 0;
            prevOp = s[i];
        }
    }

    let result = 0;
    for(let i = 0; i<stack.length; i++) result += stack[i];

    return result;
};