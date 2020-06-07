/*
Palmesøndag (1. påskedag - 7)
Skjærtorsdag (1. påskedag - 3)
Langfredag (1. påskedag - 2)
1. påskedag
2. påskedag (1. påskedag + 1)
Kristi Himmelfartsdag (1 påskedag + 39)
1. pinsedag (1. påskedag + 49)
2. pinsedag (1. påskedag + 50)
*/
const getEasterSunday = require('./get-easter-sunday')
const daysMatrix = [-7, -3, -2, 0, 1, 39, 49, 50]

module.exports = date => {
  const easterSunday = getEasterSunday(date)
  const helligdager = daysMatrix.map(days => {
    const date = new Date(easterSunday.toISOString().substr(0, 10))
    date.setDate(date.getDate() + days)
    return date.toISOString().substr(0, 10)
  })
  return helligdager
}
