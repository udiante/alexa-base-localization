// Localization files

const DEFAULT_PACKAGE_LOCALIZED_STRINGS = {
    BASE: require('./Localized/Base').STRINGS,
    es_ES: require('./Localized/es_ES').STRINGS,
    en_US: require('./Localized/en_US').STRINGS
}

// Source code
const LocalizationManager = require('./src/LocalizationManager')
LocalizationManager.addDefaultStrings(DEFAULT_PACKAGE_LOCALIZED_STRINGS)

// Add the base files

// Public methods

module.exports.LocalizationManager = LocalizationManager

module.exports.DEFAULT_STRINGS = DEFAULT_PACKAGE_LOCALIZED_STRINGS