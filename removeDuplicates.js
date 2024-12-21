// Write a function removeDuplicates(arr) that takes an array as input & 
// returns a new array with all duplicate values removed. 
// Do not use the Set object or filter() method.

const filterDulicates = function (uniqueArray, element) {
  if (!uniqueArray.includes(element)) {
    uniqueArray.push(element);
  }

  return uniqueArray;
};

const removeDuplicates = function (array) {
  if (array.length === 0) {
    return array;
  }

  return array.reduce(filterDulicates, []);
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
  [removeDuplicates, [[]], []],
  [removeDuplicates, [[1]], [1]],
  [removeDuplicates, [[1, 1]], [1]],
  [removeDuplicates, [[1, 1, 2, 2]], [1, 2]],
  [removeDuplicates, [[1, 1, 2, 2, 2, 3, 3, 1]], [1, 2, 3]],
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