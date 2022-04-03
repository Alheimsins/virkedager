const dateWithoutTime = require('./date-without-time')

/**
 * Returns a date string of the Monday of the week that the given date is in
 * @param {Date} date The date from a week you want to find the Monday of
 * @returns {string} String of date of the Monday
 */
function getThisWeeksMonday (dato) {
  const dag = new Date(dateWithoutTime(dato))
  const ukedag = dag.getDay()
  const differanse = dag.getDate() - ukedag + (ukedag === 0 ? -6 : 1) // adjust when day is sunday
  return dateWithoutTime(new Date(dag.setDate(differanse)))
}

module.exports = getThisWeeksMonday
