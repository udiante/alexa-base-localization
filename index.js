// Localization files
const BASE_FILE = require('./Localized/Base')

const DEFAULT_PACKAGE_LOCALIZED_STRINGS = {
    BASE: BASE_FILE.STRINGS,
    es_ES: BASE_FILE.STRINGS,
    en_US: require('./Localized/en_US').STRINGS
}

// Source code
const LocalizationManager = require('./src/LocalizationManager')
LocalizationManager.addDefaultStrings(DEFAULT_PACKAGE_LOCALIZED_STRINGS)

// Add the base files

// Public methods

module.exports.LocalizationManager = LocalizationManager

module.exports.DEFAULT_STRINGS = DEFAULT_PACKAGE_LOCALIZED_STRINGS