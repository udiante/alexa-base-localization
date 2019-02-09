// Localization files
const BASE_FILE = require('./Localized/Base')

// Source code
const LocalizationManager = require('./src/LocalizationManager')

// Public

module.exports.LocalizationManager = LocalizationManager

module.exports.DEFAULT_STRINGS = {
    BASE: BASE_FILE.STRINGS
}