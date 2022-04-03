const dateWithoutTime = require('./date-without-time')

function getThisWeeksMonday (dato) {
  const dag = new Date(dateWithoutTime(dato))
  const ukedag = dag.getDay()
  const differanse = dag.getDate() - ukedag + (ukedag === 0 ? -6 : 1) // adjust when day is sunday
  return dateWithoutTime(new Date(dag.setDate(differanse)))
}

module.exports = getThisWeeksMonday
