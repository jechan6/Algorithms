var lengthOfLongestSubstringTwoDistinct = function(s) {
    let hash = {};
    let start = 0, end = 0, counter = 0, len = 0;
    while(end < s.length) {
      if(hash[s[end]]) {
        hash[s[end]]++;
      } else {
         let char = s[end];
          hash[char] = 1;
          counter++;
          while(counter > 2) {
            let tempChar = s[start];
            hash[tempChar]--;
            if(hash[tempChar] === 0) {
              counter--;
            }
            start++;
          }
      }
      len = Math.max(len, end-start+1);
      end++;
    }
    return len;
};