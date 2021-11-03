const { expect } = require('@jest/globals');
const {
  stringLength,
  reverseString,
  capitalize,
  SimpleCalculator,
} = require('./index.js');
const simpleCalculator = new SimpleCalculator();

describe('string length tests', () => {
  it('stringLength("Hello") returns expected value 5', () => {
    const string = 'Hello';

    const stringLengthTest = stringLength(string);

    expect(stringLengthTest).toBe(5);
  });

  it('stringLength has more than 1 char', () => {
    const string = 'I';

    const stringLengthTest = stringLength(string);

    expect(() => stringLengthTest).not.toThrow(
      'The string should consist 1 one or more characters'
    );
  });

  it('stringLength has less than or equal 10 chars', () => {
    const string = 'Hello';

    const stringLengthTest = stringLength(string);

    expect(() => stringLengthTest).not.toThrow(Error);
  });
});

describe('reverseString', () => {
  it('string of "Hello"', () => {
    const string = 'Hello';

    const reverseStringResult = reverseString(string);

    expect(reverseStringResult).toBe('olleH');
  });

  it('string of "Welcome"', () => {
    const string = 'Welcome';

    const reverseStringResult = reverseString(string);

    expect(reverseStringResult).toBe('emocleW');
  });
});

describe('SimpleCalculator', () => {
  describe.each([
    [1, 1, 2],
    [-1, 4, 3],
    [-2, -6, -8],
  ])('method: add(%d, %d)', (a, b, expected) => {
    it(`returns ${expected}`, () => {
      expect(simpleCalculator.add(a, b)).toBe(expected);
    });
  });

  describe.each([
    [1, 1, 0],
    [3, 2, 1],
    [-1, -2, 1],
  ])('method: subtract(%d, %d)', (a, b, expected) => {
    it(`returns ${expected}`, () => {
      expect(simpleCalculator.subtract(a, b)).toBe(expected);
    });
  });

  describe.each([
    [1, 1, 1],
    [-3, 2, -1.5],
    [-1, -2, 0.5],
  ])('method: divide(%d, %d)', (a, b, expected) => {
    it(`returns ${expected}`, () => {
      expect(simpleCalculator.divide(a, b)).toBe(expected);
    });
  });

  describe.each([
    [10, 5, 50],
    [-3, 2, -6],
    [-1, -2, 2],
  ])('method: multiply(%d, %d)', (a, b, expected) => {
    it(`returns ${expected}`, () => {
      expect(simpleCalculator.multiply(a, b)).toBe(expected);
    });
  });
});

describe('capitalize string', () => {
  describe.each([
    ['hello', 'Hello'],
    ['amr', 'Amr'],
  ])('"%s"', (string, expected) => {
    it(`returns ${expected}`, () => {
      expect(capitalize(string)).toBe(expected);
    });
  });
});
