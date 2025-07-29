const repeatString = function (str, num) {
  let newString = [];
  if (num >= 0) {
    for (let i = 0; i < +num; i++) {
      newString.push(str);
    }
    return newString.join("");
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
