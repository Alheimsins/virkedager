// From https://no.wikipedia.org/wiki/P%C3%A5skeformelen
const zeroPad = input => input.toString().length === 2 ? `${input}` : `0${input}`
module.exports = date => {
  const year = date.getFullYear()
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const n = Math.floor((h + l - 7 * m + 114) / 31)
  const p = (h + l - 7 * m + 114) % 31
  const day = zeroPad(p + 1)
  const month = zeroPad(n)
  const EasterSunday = new Date(`${year}-${month}-${day}`)
  return EasterSunday
}
