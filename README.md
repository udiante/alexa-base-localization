# Alexa Base Localization NPM
Private NPM for a centralized Alexa Skill Localization strings management.

# Instructions
Import the Package.

- Configuration example 'LocalizationManager':

```javascript
// Load the Package
const LocalizationManager = require('alexa-base-localization').LocalizationManager

// Prepare an object with the custom Skill strings for each language
const CUSTOM_STRINGS = {
    BASE : require('./staticFiles/BaseStrings').STRINGS,
    EN : {
        "SKILL_NAME" : [
            "MY TEST SKILL"
        ],
        "WELCOME" : [
            "Hello",
            "Welcome"
        ]
    },
    ES : {
        "SKILL_NAME" : [
            "MI SKILL DE PRUEBAS"
        ],
        "WELCOME" : [
            "Hola",
            "Bienvenido",
            "Saludos, ¿Qué tal?"
        ]
    }
}

// Configure the localization Manager with the custom strings
LocalizationManager.addCustomStrings(CUSTOM_STRINGS)

// Configure the default language
LocalizationManager.setActiveLanguage("ES")
```

- Usage example 'LocalizationManager':

```javascript
// Get the values with the active language (by default 'BASE')
LocalizationManager.getLocalizedStrings("SKILL_NAME")

// Get the values with a specific language
LocalizationManager.getLocalizedStrings("SKILL_NAME", "ES") //returns: ["MI SKILL DE PRUEBAS"]
LocalizationManager.getLocalizedStrings("SKILL_NAME", "EN") //returns: ["MY TEST SKILL"]
```

# Usage

- Manual NPM Configuration (just add this line into the package.json)
```javascript
"alexa-base-localization": "git://github.com:udiante/alexa-base-localization#semver:^1.0"
```