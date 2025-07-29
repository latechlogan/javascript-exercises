const removeFromArray = function (baseArr, ...args) {
  args.forEach((arg) => {
    baseArr = baseArr.filter((element) => element !== arg);
  });

  return baseArr;
};
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
