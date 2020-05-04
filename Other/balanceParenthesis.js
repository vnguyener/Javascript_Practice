Array.prototype.peek = function() {
  return this[this.length - 1];
}

const balanceParenthesis = (unbalanceParens) => {
  let balancedStack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  // iterate
  for (let i = 0; i < unbalanceParens.length; i++) {
    let currentLetter = unbalanceParens[i];
    
    // if current letter is the opening paran/bracket
    if (Object.keys(map).includes(currentLetter)) {
      balancedStack.push(currentLetter);
    } else {
      // get the last element from the balancearray and checks the key/val pair
      let last = balancedStack.pop();

      if (currentLetter !== map[last]) return false;
    }
  }
  
  return balancedStack.length === 0;
};

console.log(balanceParenthesis('{((}))'))
console.log(balanceParenthesis('(()}))'))
console.log(balanceParenthesis('(())'))
