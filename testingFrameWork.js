// ======================>Testing starts<=================================
const areArraysEqual = function (value1, value2) {
  if (value1.length !== value2.length) {
    return false;
  }

  for (let index = 0; index < value1.length; index++) {
    if (!isSame(value1[index], value2[index])) {
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
  { fname: fun, inputs: [], expcted: "" },
  { fname: fun, inputs: [], expcted: "" },
  { fname: fun, inputs: [], expcted: "" },
];

const test = function (failed, { fname, inputs, expcted }) {
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
