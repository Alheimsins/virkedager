const test = require('ava')
const erInneklemtDag = require('../lib/erInneklemtDag.js')

test('it returns true for 2021-05-14', t => {
  const erInneklemt = erInneklemtDag(new Date('2021-05-14'))
  t.is(erInneklemt, true)
})

test('it returns false for 2021-05-18', t => {
  const erInneklemt = erInneklemtDag(new Date('2021-05-18'))
  t.is(erInneklemt, false)
})

test('it returns false for 2021-05-24', t => {
  const erInneklemt = erInneklemtDag(new Date('2021-05-24'))
  t.is(erInneklemt, false)
})
