const isVirkedag = require('./is-virkedag')

function dateWithoutTime (date) {
  return date.toISOString().substr(0, 10)
}

/**
 * Check if a given date is between two holidays
 * @param {Date} dato The date you want to check
 * @returns {boolean} The result of the test
 */

function erInneklemtDag (dato) {
  const dayBefore = new Date(dateWithoutTime(dato))
  dayBefore.setDate(dayBefore.getDate() + 1)
  const dayAfter = new Date(dateWithoutTime(dato))
  dayAfter.setDate(dayAfter.getDate() - 1)
  return !isVirkedag(dayBefore) && !isVirkedag(dayAfter)
}

module.exports = erInneklemtDag
