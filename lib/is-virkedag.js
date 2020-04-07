const helligdager = require('./helligdager')
const virkedager = require('./virkedager')

module.exports = dato => {
  return virkedager.includes(dato.getDay()) && !helligdager.includes(dato.toISOString().substr(0, 10))
}
