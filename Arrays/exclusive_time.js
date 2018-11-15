
var exclusiveTime = function(n, logs) {
    let res = [];
    let stack = [];
    let prevTime = 0, id = 0;
    for(let i = 0; i<logs.length; i++) {
        let log = logs[i].split(":");
        let time = parseInt(log[2]);
        let func = log[0];
        if(log[1] !== "start") {
            time++;
        }
        res[id] = res[id]  + (time - prevTime) || (time-prevTime);
        if(log[1] === "start") {
            stack.push(id);
            id = func;
        } else {
            id = stack.pop();
        }
        prevTime = time;
    }
    return res;
};