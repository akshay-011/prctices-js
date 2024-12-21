// Write a function findMissingNumber(arr, n) that finds the missing number in 
// an array of size n-1 containing distinct numbers from 1 to n.
// The array will have one number missing.

// Example:
// findMissingNumber([1, 2, 4], 4) → 3

const findMissingNumber = function (array, length) {
  return length;
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
  [findMissingNumber, [[1, 2, 3], 4], 4],
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