/**
 * Este modulo tiene el objetivo de englobar todo el tratamiento de literales.
 * El objetivo es que el usuario proporcione una Key y se le devuelva un literal localizado (fase 2)
 * ya sea obtenido del NPM de literales básicos o el custom de la Skills
 */


// Base Strings 
const DEFAULT_STRING = {
    BASE: {},
    es_ES: {}
}

// Custom Strings

var CUSTOM_STRINGS = {
    BASE: {},
    es_ES: {}
}

var availableLangauages = {
    BASE: "BASE",
    es_ES: "es_ES"
}

var activeLanguage = availableLangauages.BASE


// Init

function LocalizationManager(){

}

/**
 * Sets the default strings (optional, by default the LocationManager loads the base strings from this Package)
 * @param {DEFAULT_STRING} baseStrings Object with the keys language keys. Each key has to contain 
 */
LocalizationManager.addDefaultStrings = function(baseStrings) {
    DEFAULT_STRING = baseStrings
}

/**
 * Sets the custom strings (when requesting a key the Manager will try to obtain the values from the custom strings prior to the base strings)
 * @param {CUSTOM_STRINGS} customStrings Object with using the keys of the language to use and the values for each translation
 */
LocalizationManager.addCustomStrings = function(customStrings) {
    CUSTOM_STRINGS = customStrings
}

/**
 * Sets the default language code
 * @param {String} languageKey Object with using the keys of the language to use and the values for each translation
 */
LocalizationManager.setActiveLanguage = function(languageKey) {
    activeLanguage = languageKey
}

LocalizationManager.getActiveLanguage = function() {
    return activeLanguage
}

/**
 * Returns a string (or Array of strings) given the key
 * @param {String} stringKey Localized key
 * @param {String} key Localized key
 * @returns {Strings} Array of strings if the key exists in the active o base language
 */
LocalizationManager.getLocalizedStrings = function(stringKey, languageKey) {
    languageKey = languageKey || activeLanguage
    return values = getValuesIfAvailable(languageKey, stringKey)
}

/**
 * Supported language keys, the imported language 
 */
LocalizationManager.availableLanguage = function(){
    return availableLangauages 
}

module.exports = LocalizationManager

// Private methods

function isValidLanguageKey(key) {
    return key != undefined && availableLangauages[key] != undefined
}

function getValuesIfAvailable(languageKey, stringKey) {
    // Try to obtain the values for the languageKey provided
    var values = getValues(CUSTOM_STRINGS, languageKey, stringKey) || getValues(DEFAULT_STRING, languageKey, stringKey)
    if (values == undefined && languageKey != availableLangauages.BASE) {
        // Try to obtain the BASE language (maybe the key is not translated)
        values = getValues(CUSTOM_STRINGS, availableLangauages.BASE, stringKey) || getValues(DEFAULT_STRING, availableLangauages.BASE, stringKey)
    }
    return values
}

function getValues(stringObject, languageKey, stringKey) {
    if (stringObject[languageKey] != undefined) {
        return stringObject[languageKey][stringKey]
    }
    return undefined
}