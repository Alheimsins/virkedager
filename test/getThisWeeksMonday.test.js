const test = require('ava')
const getThisWeeksMonday = require('../lib/get-this-weeks-monday')

test('it returns 2022-04-04 for 2022-04-04', t => {
  const monday = getThisWeeksMonday(new Date('2022-04-04'))
  t.is(monday, '2022-04-04')
})

test('it returns 2022-04-04 for 2022-04-05', t => {
  const monday = getThisWeeksMonday(new Date('2022-04-05'))
  t.is(monday, '2022-04-04')
})

test('it returns 2022-04-04 for 2022-04-10', t => {
  const monday = getThisWeeksMonday(new Date('2022-04-10'))
  t.is(monday, '2022-04-04')
})
