const getVirkedager = require('./lib/get-virkedager')
const today = new Date()
const nesteVirkedag = getVirkedager(today, 2)
console.log(nesteVirkedag.toISOString().substr(0,10))
