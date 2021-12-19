// Localization files

const DEFAULT_PACKAGE_LOCALIZED_STRINGS = {
    BASE: require('./Localized/Base').STRINGS,
    es: require('./Localized/es_ES').STRINGS,
    en: require('./Localized/en_US').STRINGS,
    fr: require('./Localized/fr').STRINGS,
    it: require('./Localized/it').STRINGS,
    pt: require('./Localized/pt').STRINGS,
    de: require('./Localized/de').STRINGS,
    ja: require('./Localized/ja').STRINGS,
}

// Source code
const LocalizationManager = require('./src/LocalizationManager')
LocalizationManager.addDefaultStrings(DEFAULT_PACKAGE_LOCALIZED_STRINGS)

// Add the base files

// Public methods

module.exports.LocalizationManager = LocalizationManager

module.exports.DEFAULT_STRINGS = DEFAULT_PACKAGE_LOCALIZED_STRINGS