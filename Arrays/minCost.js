function minCost(arr) {
    let sum = 0;
    while(arr.length > 2) {
        sum += findMin(arr);
    }
    return arr[0] + arr[1];
 }
 
 function findMin(arr) {
    let mins = [arr[0], arr[1]];
    let firstIndex = 0;
    let secondIndex = 1;
    for(let i = 2; i<arr.length;i++) {
        if(arr[i] < mins[0]) {
            let temp = mins[0];
            secondIndex = firstIndex;
            firstIndex = i;
            mins[0] = arr[i];
            mins[1] = temp;
        } else if(arr[i] < mins[1]) {
            mins[1] = arr[i];
            secondIndex = i;
        }
    }
    arr[firstIndex] = mins[0] + mins[1];
    arr.splice(secondIndex, 1);
 
    return arr;
 }
 
 console.log(minCost([ 3, 7, 9, 4]));
 
 