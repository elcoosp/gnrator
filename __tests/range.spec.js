const range = require('../src/range')

test('should produce an iterator yielding numbers from a range (included)', () => {
  expect([...range(2, 3)]).toEqual([2, 3])
})
test('should start from 0 if only one argument is provdied', () => {
  expect([...range(3)]).toEqual([0, 1, 2, 3])
})
