[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# virkedager

Simple tool for calculating working days.

## Usage

Input a date object and an optional number of working days (defaults to 2).
Get a date string in return.

The module starts counting working days from the day after input date.
It will skip saturdays, sundays and all Norwegian public holidays.

```JavaScript
const virkedager = require('@alheimsins/virkedager')
const date = new Date('2020-04-07')
console.log(virkedager(date, 3)) // => 2020-04-15
```

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />