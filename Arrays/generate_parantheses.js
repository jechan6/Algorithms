function generateParenthesis(n) {
    let res = [];
    generate(n, n, '', res);
    return res;
  }
  
  function generate(l, r, s, res) { // l: left remaining, r: right remaining
    if(l > r) return;
    if(l <= 0 && r <= 0 ) return res.push(s);
    if(l>0) generate(l-1, r, s+'(', res);
    if(r>0) generate(l, r-1, s+')', res);
  }