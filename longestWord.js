// Write a function findLongestWord(sentence) that takes a string (sentence) &
// returns the longest word in the sentence. If there are multiple words with
// the same length, return the first one.

// Example:
// findLongestWord("The quick brown fox jumped") → "jumped"

const findLongestWord = function (sentence) {
  return sentence;
};

// ======================>Testing starts<=================================
const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!isSame(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
};

const isSame = function (value1, value2) {
  if (Array.isArray(value1)) {
    return areArraysEqual(value1, value2);
  }

  return value1 === value2;
};

const testCases = [
  [findLongestWord, ["akshay"], "akshay"],
  [findLongestWord, ["akshay kumar"], "akshay"],
];

const test = function (failed, [fname, inputs, expcted]) {
  const actual = fname(...inputs);

  if (!isSame(actual, expcted)) {
    failed.push([fname, inputs, expcted, actual]);
  }

  return failed;
};

const testAll = function (testCases) {
  const failed = testCases.reduce(test, []);
  console.table(failed);
};

testAll(testCases);
