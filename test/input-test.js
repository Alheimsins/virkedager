const test = require('ava')
const getVirkedager = require('../index')

test('needs input', t => {
  const error = t.throws(() => {
    getVirkedager()
  }, { instanceOf: Error })
  t.is(error.message, 'Missing required input date')
})

test('input must be date', t => {
  const error = t.throws(() => {
    getVirkedager('dato')
  }, { instanceOf: TypeError })
  t.is(error.message, 'Input date must be Date')
})
