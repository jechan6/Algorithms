function isBalanced(s) {
   if(checkBalance(s)) return 'YES';
    return 'NO';
}
function checkBalance(str) {
  let stack = [];
  const openBraces = ['(', '{', '['];
  for(let i = 0; i<str.length;i++) {
    let idx = openBraces.indexOf(str[i]);
    if(idx === 0) stack.push(')');
    if(idx === 1) stack.push('}');
    if(idx === 2) stack.push(']');
    if(idx < 0) {
        if(stack.pop() !== str[i]) return false;
    }
  }
  if(stack.length > 0) return false;
  return true;
}