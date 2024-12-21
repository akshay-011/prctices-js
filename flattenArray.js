// Write a function flattenArray(arr) that flattens a nested array
// (an array containing other arrays) into a single array.(Don't use flatMap)

// Example:
// flattenArray([1, [2, 3], [4, [5, 6]]]) → [1, 2, 3, 4, 5, 6]

const unwrap = function (element) {
  if (Array.isArray(element)) {
    return flattenArray(element);
  }

  return [element];
};

const flattenArray = function (nestedArray) {
  if (nestedArray.length === 0) {
    return nestedArray;
  }

  const flattenedArray = [];

  for (const element of nestedArray) {
    flattenedArray.push(...unwrap(element));
  }

  return flattenedArray;
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
  [flattenArray, [[]], []],
  [flattenArray, [[1, 2, [1]]], [1, 2, 1]],
  [flattenArray, [[1, 2, [1, 2, [1, 2, [1, 2]]]]], [1, 2, 1, 2, 1, 2, 1, 2]],
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