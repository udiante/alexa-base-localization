/**
 * Este modulo tiene el objetivo de englobar todo el tratamiento de literales.
 * El objetivo es que el usuario proporcione una Key y se le devuelva un literal localizado (fase 2)
 * ya sea obtenido del NPM de literales básicos o el custom de la Skills
 */


// Base Strings 
var DEFAULT_STRING = {
    BASE: {},
    es_ES: {},
    en_US: {}
}

// Custom Strings

var CUSTOM_STRINGS = {
    BASE: {},
    es_ES: {},
    en_US: {}
}

var availableLanguages = {
    BASE: "BASE",
    es_ES: "es_ES",
    en_US: "en_US"
}

var activeLanguage = availableLanguages.BASE


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
    activeLanguage = getValidLanguageKey(languageKey)
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
    languageKey = getValidLanguageKey(languageKey) || activeLanguage
    return values = getValuesIfAvailable(languageKey, stringKey)
}

/**
 * Supported language keys, the imported language 
 */
LocalizationManager.availableLanguages = function(){
    return availableLanguages 
}


/**
 * 
 * @param {String} alexaSDKLocale 
 * @returns {String} The related locale identifier for the Alexa locale
 */
function getLocaleFromAlexaLocale(alexaSDKLocale) {
    if (!alexaSDKLocale) {
        return activeLanguage
    }
    try {
        const baseLocale = alexaSDKLocale.split('-')[0]
        switch (baseLocale) {
            case 'es':
                return availableLanguages.es_ES
            case 'en':
                return availableLanguages.en_US
            default:
                return availableLanguages.BASE
        }
    } catch (error) {
        return activeLanguage
    }
}

LocalizationManager.getLocaleFromAlexaLocale = getLocaleFromAlexaLocale

module.exports = LocalizationManager

// Private methods

function getValidLanguageKey(candidateKey) {
    if (isValidLanguageKey(candidateKey)) {
        return candidateKey
    }
    return getLocaleFromAlexaLocale(candidateKey)
}

function isValidLanguageKey(key) {
    return key != undefined && availableLanguages[key] != undefined
}

function getValuesIfAvailable(languageKey, stringKey) {
    // Try to obtain the values for the languageKey provided
    var values = getValues(CUSTOM_STRINGS, languageKey, stringKey) || getValues(DEFAULT_STRING, languageKey, stringKey)
    if (values == undefined && languageKey != availableLanguages.BASE) {
        // Try to obtain the BASE language (maybe the key is not translated)
        values = getValues(CUSTOM_STRINGS, availableLanguages.BASE, stringKey) || getValues(DEFAULT_STRING, availableLanguages.BASE, stringKey)
    }
    return values
}

function getValues(stringObject, languageKey, stringKey) {
    if (stringObject[languageKey] != undefined) {
        return stringObject[languageKey][stringKey]
    }
    return undefined
}