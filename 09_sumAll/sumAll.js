const sumAll = function (a, b) {
  let allNumbers = [];
  let min;
  let max;

  if (!Number.isInteger(a) || a < 0 || !Number.isInteger(b) || b < 0) {
    return "ERROR";
  } else {
    if (a < b) {
      min = a;
      max = b;
    } else {
      min = b;
      max = a;
    }
  }

  for (let i = min; i <= max; i++) {
    allNumbers.push(i);
  }
  return allNumbers.reduce((total, current) => total + current);
};

// Do not edit below this line
module.exports = sumAll;
