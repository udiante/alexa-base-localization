// Dependencies
const assert = require('assert');
const TestUtils = require('./TestUtils')

// Check syntax error on index.js
const index = require('../../index')


// Mock data

TestUtils.performAsyncTest("TestBaseAlexaCopys", function () {
    const LocalizationManager = index.LocalizationManager

    var failKey = LocalizationManager.getLocalizedStrings("empty")
    assert(failKey == undefined)

    var welcomeData = LocalizationManager.getLocalizedStrings("WELCOME")
    assert(welcomeData != undefined)

    // CHECK BASE FALLBACK
    var aplImage = LocalizationManager.getLocalizedStrings("APL_BACKGROUND_IMAGE_URL")
    assert(aplImage == "https://")

    var aplImageJA = LocalizationManager.getLocalizedStrings("APL_BACKGROUND_IMAGE_URL", "FR")
    assert(aplImageJA == "https://")

    // CHECK CUSTOM BASE FALLBACK

    const customCopys = {
        BASE: {
            APL_BACKGROUND_IMAGE_URL: "BASE_URL_IMAGE"
        },
        en: {
            SKILL_NAME: "SKILL_NAME"
        },
        es: {
            APL_BACKGROUND_IMAGE_URL: "ES_URL_IMAGE"
        }
    }

    LocalizationManager.addCustomStrings(customCopys)

    var aplCustomES = LocalizationManager.getLocalizedStrings("APL_BACKGROUND_IMAGE_URL", "es")
    assert(aplCustomES == "ES_URL_IMAGE")

    var aplCustomEN = LocalizationManager.getLocalizedStrings("APL_BACKGROUND_IMAGE_URL", "en")
    assert(aplCustomEN == "BASE_URL_IMAGE")

    var aplCustomJA = LocalizationManager.getLocalizedStrings("APL_BACKGROUND_IMAGE_URL", "ja")
    assert(aplCustomJA == "BASE_URL_IMAGE")

}, false)

TestUtils.performAsyncTest("TestLocalizationManager", function () {
    const LocalizationManager = index.LocalizationManager

    let failKey = LocalizationManager.getLocalizedStrings("empty")
    assert(failKey == undefined)

    let welcomeData = LocalizationManager.getLocalizedStrings("WELCOME")
    assert(welcomeData != undefined)
}, false)

TestUtils.performAsyncTest("TestLocalizationManagerAddCustomStrings", function () {
    const LocalizationManager = index.LocalizationManager

    var objectNil = LocalizationManager.getLocalizedStrings("customKey")
    assert(objectNil == undefined)

    LocalizationManager.addCustomStrings({ BASE: { customKey: ["example"] } })
    var objectAdded = LocalizationManager.getLocalizedStrings("customKey")
    assert(objectAdded != undefined, "The custom added object must exists")

    LocalizationManager.addCustomStrings({ BASE: { WELCOME: ["example"] } })
    var objectOverrided = LocalizationManager.getLocalizedStrings("WELCOME")
    assert(objectOverrided.length == 1, "The custom added object must override the default object")

}, false)

TestUtils.performAsyncTest("TestLocalizationManagerAddCustomLanguage", function () {
    const LocalizationManager = index.LocalizationManager

    var objectNil = LocalizationManager.getLocalizedStrings("customKey")
    assert(objectNil == undefined)

    LocalizationManager.addCustomStrings({ ES: { customKey: ["example"] } })
    var objectAdded = LocalizationManager.getLocalizedStrings("customKey", "ES")
    assert(objectAdded != undefined, "The custom added object must exists")

    LocalizationManager.addCustomStrings({ BASE: { WELCOME: ["example"] } })
    var objectOverrided = LocalizationManager.getLocalizedStrings("WELCOME", "ES")
    assert(objectOverrided == "example", "Even if the requested language custom strings doesn't contains the key the Base language must have it")

    assert(LocalizationManager.getLocalizedStrings("WAIT_FOR_MORE_INSTRUCTIONS", "ES").length >= 1, "Even if the requested language doesn't contains the key the Base strings must have it")

}, false)