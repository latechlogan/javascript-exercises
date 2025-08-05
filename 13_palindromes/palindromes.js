const palindromes = function (testString) {
  const regex = /^[a-z0-9]+$/;

  let letters = testString
    .toLowerCase()
    .split("")
    .filter((letter) => regex.test(letter));
  let lettersReverse = letters.toReversed();

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== lettersReverse[i]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
