const getThisWeeksMonday = require('./get-this-weeks-monday')
const isVirkedag = require('./is-virkedag')

/**
 * Returns the number of working days in a given week
 * @param {Date} dato The date from a week you want to find the number of working days
 * @returns {Number} Number of working days in the given week
 */
function tellAntallVirkedagerDenneUken (dato) {
  const denneUkensMandag = getThisWeeksMonday(dato)
  const virkedager = []
  for (let i = 0; i < 7; i++) {
    const dag = new Date(denneUkensMandag)
    dag.setDate(dag.getDate() + i)
    if (isVirkedag(dag)) {
      virkedager.push(dag)
    }
  }
  return virkedager.length
}

module.exports = tellAntallVirkedagerDenneUken
