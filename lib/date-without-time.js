/**
 * Returns a date object with the time set to 00:00:00
 * @param {Date} date The date you want to remove time from
 * @returns {Date} The new date without time
 */
function dateWithoutTime (date) {
  return date.toISOString().substr(0, 10)
}

module.exports = dateWithoutTime
