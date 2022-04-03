/**
 * Returns a date object with the time set to 00:00:00
 * @param {Date} dato The date you want to remove time from
 * @returns {string} String of new date without time
 */
function dateWithoutTime (dato) {
  return dato.toISOString().substr(0, 10)
}

module.exports = dateWithoutTime
