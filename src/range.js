function* range(from, to) {
  if (from && to) {
    while (from <= to) {
      yield from++
    }
    // Take the from argument as to
  } else if (from) {
    let i = 0
    while (i <= from) {
      yield i++
    }
  }
}
module.exports = range
