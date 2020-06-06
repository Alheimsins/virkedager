const getFridager = require('./get-fridager')
const helligdager = require('./helligdager')
const virkedager = require('./virkedager')

module.exports = dato => {
  const genererteFridager = getFridager(dato.toISOString().substr(0, 10))
  const fridager = [...genererteFridager, ...helligdager]
  return virkedager.includes(dato.getDay()) && !fridager.includes(dato.toISOString().substr(0, 10))
}
