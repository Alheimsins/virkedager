const test = require('ava')
const isVirkedag = require('../lib/is-virkedag')

test('it returns true for 2021-05-18', t => {
  const erVirkedag = isVirkedag(new Date('2021-05-18'))
  t.is(erVirkedag, true)
})

test('it returns false for 2021-05-17', t => {
  const erVirkedag = isVirkedag(new Date('2021-05-17'))
  t.is(erVirkedag, false)
})
