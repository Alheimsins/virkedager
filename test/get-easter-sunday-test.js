const test = require('ava')
const getEasterSunday = require('../lib/get-easter-sunday')

test('it returns right date for 1971', t => {
  const easterSunday = getEasterSunday(new Date('1971-11-18'))
  const expectedDate = new Date('1971-04-11')
  t.deepEqual(easterSunday, expectedDate)
})

test('it returns right date for 2020', t => {
  const easterSunday = getEasterSunday(new Date('2020-03-10'))
  const expectedDate = new Date('2020-04-12')
  t.deepEqual(easterSunday, expectedDate)
})

test('it returns right date for 2026', t => {
  const easterSunday = getEasterSunday(new Date('2026-07-16'))
  const expectedDate = new Date('2026-04-05')
  t.deepEqual(easterSunday, expectedDate)
})
