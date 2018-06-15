function* cycle(it, maxCycles = Infinity) {
  let i = 0,
    currCycle = 0
  while (currCycle < maxCycles) {
    i === it.length && ((i = 0), currCycle++)
    if (currCycle === maxCycles) break
    yield it[i++]
  }
}

module.exports = cycle
