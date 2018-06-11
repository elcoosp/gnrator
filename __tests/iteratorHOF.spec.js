const { iteratorHOF, iteratorHOFsPipe } = require('../src/iteratorHOF')

function* dummyGen(n) {
  let i = 0
  while (i < n) {
    yield i++
  }
}
const double = x => x * 2
const minus = n => x => x - n
test('should wrap an iterable in a HOF', () => {
  const it = iteratorHOF(double)(dummyGen, 4)

  expect(it.next().value).toBe(0)
  expect(it.next().value).toBe(2)
  expect(it.next().value).toBe(4)
  expect(it.next().value).toBe(6)
  expect(it.next().done).toBe(true)
})

test('should wrap an iterable in successive HOFs', () => {
  const it = iteratorHOFsPipe(double, minus(4))(dummyGen, 4)

  expect(it.next().value).toBe(-4)
  expect(it.next().value).toBe(-2)
  expect(it.next().value).toBe(0)
  expect(it.next().value).toBe(2)
  expect(it.next().done).toBe(true)
})
