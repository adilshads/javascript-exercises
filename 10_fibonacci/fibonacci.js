const fibonacci = function(n) {
    if (typeof n === 'string') {
      n = Number(n);
    }
  
    if (typeof n !== 'number' || n < 0) {
      return "OOPS";
    }
  
    let a = 0;
    let b = 1;
  
    if (n === 0) {
      return a;
    }
  
    for (let i = 2; i <= n; i++) {
      const nextNumber = a + b;
      a = b;
      b = nextNumber;
    }
  
    return b;
  };
  

// Do not edit below this line
module.exports = fibonacci;
