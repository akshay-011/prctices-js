const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((element, index) => isSame(element, array2[index]));
};

const areObjectsSame = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1).sort();
  const obj2Keys = Object.keys(obj2).sort();

  if (!areArraysEqual(obj1Keys, obj2Keys)) {
    return false;
  }

  return obj1Keys.every((key) => isSame(obj1[key], obj2[key]));
};

export const isSame = function (value1, value2) {
  if (Array.isArray(value1)) {
    return areArraysEqual(value1, value2);
  }

  if (typeof value1 === "object") {
    return areObjectsSame(value1, value2);
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
