const isVirkedag = require('./is-virkedag')

module.exports = (dato, antall) => {
  let virkedager = 0
  while (virkedager !== antall) {
    dato.setDate(dato.getDate() + 1)
    if (isVirkedag(dato)) {
      virkedager++
    }
  }
  return dato
}