const cycle = require('../src/cycle')

test('should be yielding each value of the iterable provided infinitely until the generator is revoked.', () => {
  let a = [],
    max = 10,
    i = 0
  for (const x of cycle([2, 3])) {
    if (i >= max) break
    a.push(x)
    i++
  }

  expect(a).toEqual([2, 3, 2, 3, 2, 3, 2, 3, 2, 3])
})

test('should produce 2 cycles of yielding', () => {
  expect([...cycle([2, 3], 2)]).toEqual([2, 3, 2, 3])
})
