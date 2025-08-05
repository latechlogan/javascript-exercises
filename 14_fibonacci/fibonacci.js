const fibonacci = function (target) {
  let fib = [1];
  let nextNumber;

  if (isNaN(target) || target < 0) return "OOPS";
  if (+target === 0) return 0;
  if (+target === 1) return 1;

  for (let i = 0; i < +target - 1; i++) {
    nextNumber = fib.slice(-2).reduce((a, b) => a + b, 0);
    fib.push(nextNumber);
  }

  return nextNumber;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
