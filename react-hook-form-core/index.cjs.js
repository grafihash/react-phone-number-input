'use strict'

// This file is deprecated.
// It's the same as `index.cjs`, just with an added `.js` file extension.
// It only exists for compatibility with the software that doesn't like `*.cjs` file extension.
// https://gitlab.com/catamphetamine/libphonenumber-js/-/issues/61#note_950728292

var PhoneInputWithCountry = require('../commonjs/react-hook-form/PhoneInputWithCountry.js').default

exports = module.exports = PhoneInputWithCountry

exports['default'] = PhoneInputWithCountry