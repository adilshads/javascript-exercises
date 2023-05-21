const add = function(a, b) {
	c = a + b; 
  return c;
};

const subtract = function(a, b) {
	c = a - b; 
  return c; 
};

const sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((total, current) => total + current);
};


const multiply = function(numbers) {
  return numbers.reduce((a, b) => a * b);
};


const power = function(a, b) {
  c = a ** b;
  return c;

};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
