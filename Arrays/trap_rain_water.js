const trap = (height) => {
    let volume = 0;
    let left = 0;
    let right = height.length-1;
    let leftWall = height[left];
    let rightWall = height[right];
    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] < leftWall) {
                volume += leftWall - height[left];
            } else {
                leftWall = height[left];
            }
            left++;
        } else {
            if(height[right] < rightWall) {
                volume += rightWall - height[right];
            } else {
                rightWall = height[right];
            }
            right--;
        }
  
    }
    return volume
};