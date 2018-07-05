# Gnrator

[![Build Status](https://travis-ci.org/elcoosp/gnrator.png?branch=master)](https://travis-ci.org/elcoosp/gnrator)
[![Node version](https://img.shields.io/node/v/gnrator.svg?style=flat)](http://nodejs.org/download/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/elcoosp/gnrator/issues)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## API

### range

Generator yielding numbers from te first to the second argument included, if one argument is provided, start from 0 to the argumnet.

```javascript
[...range(2, 3)] // [2, 3]
[...range(3)] // [0, 1, 2, 3]
```

### cycle

Generator yielding an iterable (first argument) vaues one by one, infinitely, or a specified number of time (second argument)

```javascript
[...cycle([2, 3], 2)] // [2, 3, 2, 3]
for (const x of cycle([2, 3])) // 2, 3, 2, 3, 2, 3... to Infinity
```

### iteratorHOF

Take one function or many with iteratorHOFsPipe and return another function taking the source iterator. When iterated, the returned function will pass the source iterator values to each functions from the first argument and yield the mapped value.

```javascript
function* dummyGen(n) {
  let i = 0
  while (i < n) {
    yield i++
  }
}

const double = x => x * 2
const it = iteratorHOF(double)(dummyGen)[Symbol.iterator](4)
[...it] // [0, 2, 4, 6]
```

## Support

Please [open an issue](https://github.com/elcoosp/gnrator/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/elcoosp/gnrator/compare/).
