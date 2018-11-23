function flips(input,k) {
    let flips = 0;
    input = input.split('');
    for(let i = 0; i<=input.length-k; i++) {
      if(input[i] === '-') {
        let j = i;
        while(j < k+i) {
          input[j] = input[j] === '-' ? '+' : '-';
          j++;
        }
        console.log(input)
        flips++;
      }
    }
    for(let i = 0; i<input.length;i++) {
      if(input[i] === '-') return -1;
    }
  }