function stringLength(string) {
  string = string.split('');
  let stringCount = 0;

  string.forEach(() => (stringCount += 1));

  if (stringCount < 1) {
    throw new Error('The string should consist 1 one or more characters');
  } else if (stringCount > 10)
    throw new Error('The string should consist of less than 10 characters');
  return stringCount;
}

function reverseString(string) {
  let reversedString = [];
  string = string.split('');

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }
  return reversedString.join('');
}

function capitalize(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

class SimpleCalculator {
  add = (a, b) => a + b;
  subtract = (a, b) => a - b;
  divide = (a, b) => a / b;
  multiply = (a, b) => a * b;
}

module.exports = { stringLength, reverseString, SimpleCalculator, capitalize };
