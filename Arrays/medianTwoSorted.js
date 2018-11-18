//O(m  + n) approach
var findMedianSortedArrays = function(nums1, nums2) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    
    while(j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }
    
    while(i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }

    let mid = Math.floor(result.length/2);
    if(result.length % 2 === 0) {
        return (result[mid] + result[mid-1])/2;
    } else {
        return parseInt(result[mid]);
    }
};
//O(log(min(m,n)))
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums2.length < nums1.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let x = nums1.length;
    let y = nums2.length;
    let left = 0;
    let right = x;
    while(left <= right) {
        let partitionX = Math.floor((left + right)/2);
        let partitionY = Math.floor((x+y+1)/2 - partitionX);
        
        let maxLeftX = partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
        let minRightX = partitionX === x ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
        
        let maxLeftY = partitionY === 0 ?  Number.MIN_SAFE_INTEGER  : nums2[partitionY - 1];
        let minRightY = partitionY === y ? Number.MAX_SAFE_INTEGER : nums2[partitionY];
        
        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
            
            if((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/2;
            } else {
                
                return Math.max(maxLeftX, maxLeftY);
            } 
        } else if(maxLeftX > minRightY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }
};