const test = require('ava')
const getFridager = require('../lib/get-fridager')

test('returns expected result for 2020', t => {
  const dato = '2020-05-01'
  const expectedResult = ['2020-01-01', '2020-05-01', '2020-12-25', '2020-12-26', '2021-01-01', '2021-05-01', '2021-12-25', '2021-12-26']
  const fridager = getFridager(dato)
  t.deepEqual(fridager, expectedResult, 'everything ok')
})
