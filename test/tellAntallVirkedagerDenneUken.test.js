const test = require('ava')
const tellAntallVirkedagerDenneUken = require('../lib/tellAntallVirkedagerDenneUken')

test('it returns 5 for 2022-04-04', t => {
  const antallVirkedager = tellAntallVirkedagerDenneUken(new Date('2022-04-04'))
  t.is(antallVirkedager, 5)
})

test('it returns 3 for 2022-04-13', t => {
  const antallVirkedager = tellAntallVirkedagerDenneUken(new Date('2022-04-13'))
  t.is(antallVirkedager, 3)
})

test('it returns 4 for 2022-05-27', t => {
  const antallVirkedager = tellAntallVirkedagerDenneUken(new Date('2022-05-27'))
  t.is(antallVirkedager, 4)
})
