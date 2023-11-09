const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, value) => sum += value, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, value) => product *= value, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
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
