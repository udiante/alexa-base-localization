// Localization files
const BASE_FILE =  require('./Localized/Base')

// Source code
const LocalizationManager = require('./src/LocalizationManager')

// Exported
module.exports.BASE_LOCALES = BASE_FILE.STRINGS
module.exports.LocalizationManager = LocalizationManager