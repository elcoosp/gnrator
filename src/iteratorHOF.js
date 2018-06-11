const iteratorHOF = HOF => (iterable, ...itArgs) => {
  const iterator = iterable[Symbol.iterator]
    ? iterable[Symbol.iterator](...itArgs)
    : iterable(...itArgs)

  return {
    next: (...nextArgs) => {
      const { value, done } = iterator.next(...nextArgs)
      return {
        value: HOF(value),
        done
      }
    }
  }
}

const pipe = (...fns) => initAcc => fns.reduce((acc, f) => f(acc), initAcc)
const iteratorHOFsPipe = (...fns) => iteratorHOF(pipe(...fns))
module.exports = { iteratorHOF, iteratorHOFsPipe }
