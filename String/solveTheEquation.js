/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    let leftEq = evaluateExpression(equation.split("=")[0]);
    let rightEq = evaluateExpression(equation.split("=")[1]);

    leftEq[0] -= rightEq[0];
    rightEq[0] = 0;
    leftEq[1] -= rightEq[1];

    if(leftEq[0] === 0 && leftEq[1] === 0) {
        return "Infinite solutions";
    } else if(leftEq[0] === 0) {
        return "No solution";  
    } else {
        return "x=" + (-1*leftEq[1])/leftEq[0];
    }
    
};

function evaluateExpression(equation) {
    console.log("")
    let result = [0,0];
    let sign = 1;
    for(let i = 0; i<equation.length;i++) {
        let val = equation[i];
        if(val === "x") {
            result[0] += (sign * 1);
        } else if(val === "+" || val === "-") {
            sign = val === "+" ? 1 : -1;
        } else {
            let num = "";
            while(!isNaN(val)) {
                num += val;
                i++;
                val = equation[i];
            }
            if(val === "x") {
                result[0] += (sign * parseInt(num));
            } else {
                result[1] += (sign * parseInt(num));
                i--;
            }
    
        }
    }
    return result;
}