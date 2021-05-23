[![Build Status](https://travis-ci.com/Alheimsins/virkedager.svg?branch=main)](https://travis-ci.com/Alheimsins/virkedager)
[![Coverage Status](https://coveralls.io/repos/Alheimsins/virkedager/badge.svg?branch=main&service=github)](https://coveralls.io/github/Alheimsins/virkedager?branch=main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# virkedager

Simple tool for calculating working days.

## Usage

### Get next virkedag
Input a date object and an optional number of working days (defaults to 2).
Get a date string in return.

The module starts counting working days from the day after input date.
It will skip saturdays, sundays and all Norwegian public holidays.

```JavaScript
const virkedager = require('@alheimsins/virkedager')
const date = new Date('2020-04-07')
console.log(virkedager(date, 3)) // => 2020-04-15
```

### isVirkedag

Input a date object and get true/false if given date is a workingday.

```JavaScript
const { isVirkedag } = require('@alheimsins/virkedager')
const dateHoliday = new Date('2020-09-20')
const dateWorkingday = new Date('2020-09-21')
console.log(isVirkedag(dateHoliday)) // => false
console.log(isVirkedag(dateWorkingday)) // => true
```

### erInneklemtDag

Input a date object and get true/false if given date is between two holidays.

```JavaScript
const { erInneklemtDag } = require('@alheimsins/virkedager')
const dateInneklemt = new Date('2021-05-14')
const dateNotInneklemt = new Date('2021-05-18')
console.log(erInneklemtDag(dateInneklemt)) // => true
console.log(erInneklemtDag(dateNotInneklemt)) // => false
```

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />