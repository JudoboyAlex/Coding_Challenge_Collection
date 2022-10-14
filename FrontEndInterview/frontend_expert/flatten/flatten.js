function flatten(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return flattenArray(value);
  }

  return flattenObject(value);
}

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}

function flattenObject(object) {
  const flattenedObj = {};

  for (const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === "object" && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value);

    if (valueIsObject) {
      Object.assign(flattenedObj, flattenedValue);
    } else {
      flattenedObj[key] = flattenedValue;
    }
  }

  return flattenedObj;
}

// This file is initialized with a few test cases.
// Feel free to add, edit, or remove test cases in
// this file as you see fit!

const chai = require('chai');
const {expect} = chai;

const {flatten} = require('./program.js');

describe('flatten', () => {
  it('primitives do not change', () => {
    expect(flatten(1)).to.equal(1);
    expect(flatten(true)).to.be.true;
    expect(flatten(false)).to.be.false;
    expect(flatten('hello')).to.equal('hello');
    expect(flatten('0')).to.equal('0');
    expect(flatten('')).to.equal('');
    expect(flatten(null)).to.be.null;
    expect(flatten(undefined)).to.be.undefined;
  });

  it('nested arrays', () => {
    expect(flatten([1, 2, [3, 4]])).to.deep.equal([1, 2, 3, 4]);
    expect(flatten([1, 2, [3, 4, [5, 6]]])).to.deep.equal([1, 2, 3, 4, 5, 6]);
    expect(flatten([1, 2, [3, 4, [5, 6], 7, 8], 9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(flatten([1, 2, [3, 4, [5, 6, []], 7, 8], 9, [[], []]])).to.deep.equal([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it('nested objects', () => {
    expect(
      flatten({
        a: 1,
        b: {c: 2, d: 3},
      }),
    ).to.deep.equal({
      a: 1,
      c: 2,
      d: 3,
    });

    expect(
      flatten({
        a: 1,
        b: {
          c: 2,
          d: {
            e: null,
            f: {g: undefined, h: true},
            i: false,
          },
        },
      }),
    ).to.deep.equal({
      a: 1,
      c: 2,
      e: null,
      g: undefined,
      h: true,
      i: false,
    });
  });
});

