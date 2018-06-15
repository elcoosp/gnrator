function* cycle(it, maxCycles = Infinity) {
  let currCycle = 0
  while (currCycle < maxCycles) {
    if (currCycle === maxCycles) break
    yield* it
    currCycle++
  }
}

module.exports = cycle
