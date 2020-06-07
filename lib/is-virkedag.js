const getFridager = require('./get-fridager')
const getPaaskedager = require('./get-paaskedager')
const virkedager = require('./virkedager')

module.exports = dato => {
  const fridager = getFridager(dato)
  const paaskedager = getPaaskedager(dato)
  const helligdager = [...fridager, ...paaskedager]
  return virkedager.includes(dato.getDay()) && !helligdager.includes(dato.toISOString().substr(0, 10))
}
