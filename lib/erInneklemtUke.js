const tellAntallVirkedagerDenneUken = require('./tellAntallVirkedagerDenneUken')

/**
 * Check if the number of working days in a given week is 3 or less
 * @param {Date} dato a date in the week you want to check
 * @returns {boolean} The result of the test
 */
function erInneklemtUke (dato) {
  const antallVirkedager = tellAntallVirkedagerDenneUken(dato)
  return antallVirkedager <= 3
}

module.exports = erInneklemtUke
