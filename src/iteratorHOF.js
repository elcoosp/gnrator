const iteratorHOF = HOF => iterable => {
  return {
    [Symbol.iterator]: function*(...itArgs) {
      const iterator = iterable[Symbol.iterator]
        ? iterable[Symbol.iterator]
        : iterable
      for (const value of iterator(...itArgs)) yield HOF(value)
    }
  }
}

const pipe = (...fns) => initAcc => fns.reduce((acc, f) => f(acc), initAcc)
const iteratorHOFsPipe = (...fns) => iteratorHOF(pipe(...fns))
module.exports = { iteratorHOF, iteratorHOFsPipe }
