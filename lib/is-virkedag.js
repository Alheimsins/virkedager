const getFridager = require('./get-fridager')
const getPaaskedager = require('./get-paaskedager')
const virkedager = require('./virkedager')

/**
 * Check if a given date is working day
 * @param {Date} dato The date you want to check
 * @returns {Boolean} The result of the test
 */

module.exports = dato => {
  const fridager = getFridager(dato)
  const paaskedager = getPaaskedager(dato)
  const helligdager = [...fridager, ...paaskedager]
  return virkedager.includes(dato.getDay()) && !helligdager.includes(dato.toISOString().substr(0, 10))
}
