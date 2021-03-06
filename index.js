const getVirkedager = require('./lib/get-virkedager')
const isVirkedag = require('./lib/is-virkedag')

module.exports = (date, days = 2) => {
  if (!date) {
    throw new Error('Missing required input date')
  }
  if (!(date instanceof Date)) {
    throw new TypeError('Input date must be Date')
  }
  const nesteVirkedag = getVirkedager(date, days)
  return nesteVirkedag.toISOString().substr(0, 10)
}

module.exports.isVirkedag = isVirkedag
