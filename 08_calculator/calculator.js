const add = function(a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function(...args) {
  args.map(arg => Number(arg));
  args.sort((a,b) => a > b);
  let num = args[0];
  for(let i = 1; i < args.length; i++) {
    num -= args[i];
  }
  return num;
};

const sum = function(array) {
  let sum = 0;
	if(array.length === 0) {
    return sum;
  } else {
    array.forEach(num => sum += num);
  }
  return sum;
};

const multiply = function(array) {
  let prod = 1;
  array.forEach(num => prod *= num);
  return prod;
};

const power = function(a, b) {
  let prod = 1;
  for(let i = 0; i < b; i++) {
    prod *= a;
  }
	return prod;
};

const factorial = function(num) {
	if(num === 0) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
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


// done