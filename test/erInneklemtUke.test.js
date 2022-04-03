const test = require('ava')
const erInneklemtUke = require('../lib/erInneklemtUke')

test('it returns false for 2022-04-04', t => {
  const erInneklemt = erInneklemtUke(new Date('2022-04-04'))
  t.is(erInneklemt, false)
})

test('it returns true for 2022-04-14', t => {
  const erInneklemt = erInneklemtUke(new Date('2022-04-14'))
  t.is(erInneklemt, true)
})

test('it returns false for 2022-05-27', t => {
  const erInneklemt = erInneklemtUke(new Date('2022-05-27'))
  t.is(erInneklemt, false)
})
