const fasteFridager = [
  '01-01',
  '05-01',
  '05-17',
  '12-25',
  '12-26'
]

const makeArray = year => {
  return fasteFridager.map(day => `${year}-${day}`)
}
module.exports = dato => {
  const year = dato.getFullYear()
  const thisYear = makeArray(year)
  const nextYear = makeArray(year + 1)
  return [...thisYear, ...nextYear]
}
