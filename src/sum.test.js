//from https://jestjs.io/docs/en/getting-started

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  //one test should pass, the other should fail.
  expect(sum(1, 2)).toBe(3);
  // expect(sum(2, 2)).toBe(1);
});
