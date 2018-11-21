var nextClosestTime = function(time) {
    let array = time.split(":").join("").split("").sort();
    let nextTime = time.split(":").join("").split("");
  
    for(let i = nextTime.length - 1; i>=0; i--) {
      for(let j = 0; j<array.length; j++) {
        let num = array[j];
  
        if(num > nextTime[i]) {
  
          let temp = nextTime[i];
          nextTime[i] = num;
          if(nextTime[0] + nextTime[1] < 24 && 
          nextTime[2] + nextTime[3] < 60) {
            nextTime.splice(2,0,":");
            return nextTime;
          }
          nextTime[i] = temp;
        }
      }
      nextTime[i] = array[0];
    }
    return nextTime;
  };