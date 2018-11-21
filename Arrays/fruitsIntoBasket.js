var totalFruit = function(array) {
    let visited = {};
    let seenCount = 0;
    let maxCount = 0;
    let left = 0;
    let right = 0;
    while(right < array.length) {
        if(visited[array[right]]) {
            visited[array[right]]++;
        } else {
            seenCount++;
            visited[array[right]] = 1;
            while(seenCount > 2) {
                let lChar = array[left];
                visited[lChar]--;
                left++;
                if(visited[lChar] === 0) {
                    delete visited[lChar];
                    seenCount--;
                }
            }
        }
        maxCount = Math.max(maxCount, right-left+1);
        right++;
    }
    return maxCount;
};