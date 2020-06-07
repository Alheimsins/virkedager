const test = require('ava')
const getPaaskedager = require('../lib/get-paaskedager')

test('it returns expected results for 2020', t => {
  const paaskedager = getPaaskedager(new Date('2020-06-07'))
  const expectedResult = [
    '2020-04-05',
    '2020-04-09',
    '2020-04-10',
    '2020-04-12',
    '2020-04-13',
    '2020-05-21',
    '2020-05-31',
    '2020-06-01'
  ]
  t.deepEqual(expectedResult, paaskedager)
})
