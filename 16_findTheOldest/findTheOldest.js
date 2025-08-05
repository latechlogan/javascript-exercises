const findTheOldest = function (array) {
  const date = new Date();
  const thisYear = date.getFullYear();

  let sorted = array.sort((a, b) => {
    a.yearOfDeath = a.yearOfDeath || thisYear;
    b.yearOfDeath = b.yearOfDeath || thisYear;

    return a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth);
  });

  return array.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
