const test = require('ava')
const getVirkedager = require('../index')

test('returns expected result with no input for days', t => {
  const dato = getVirkedager(new Date('2020-04-01'))
  t.is(dato, '2020-04-03')
})

test('returns expected result with 2 days', t => {
  const dato = getVirkedager(new Date('2020-04-01'), 2)
  t.is(dato, '2020-04-03')
})

test('returns expected result with helligdager in between', t => {
  const dato = getVirkedager(new Date('2020-04-07'), 3)
  t.is(dato, '2020-04-15')
})

test('returns expected result with a new year in between', t => {
  const dato = getVirkedager(new Date('2020-12-31'), 2)
  t.is(dato, '2021-01-05')
})
