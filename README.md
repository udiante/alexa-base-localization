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
    es_ES : {
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
LocalizationManager.setActiveLanguage("es_ES")
```

- Usage example 'LocalizationManager':

```javascript
// Get the values with the active language (by default 'BASE')
LocalizationManager.getLocalizedStrings("SKILL_NAME")

// Get the values with a specific language
LocalizationManager.getLocalizedStrings("SKILL_NAME", "es_ES") //returns: ["MI SKILL DE PRUEBAS"]
LocalizationManager.getLocalizedStrings("SKILL_NAME", "EN") //returns: ["MY TEST SKILL"]
```

# Usage

- Manual NPM Configuration (just add this line into the package.json)
```javascript
"alexa-base-localization": "git://github.com:udiante/alexa-base-localization#semver:^1.0"
```

- Local development
```javascript
"alexa-base-localization": "file:./../alexa-base-localization"
```

# Alexa locale code information

[Develop Skills in Multiple Languages ](https://developer.amazon.com/es/docs/custom-skills/develop-skills-in-multiple-languages.html)


## Access to the locale code

You can determine the language used to invoke the skill by checking the locale property included in all requests sent to your service (for example, `LaunchRequest` or `IntentRequest`. See Request Format for more about the different types of requests your skill can receive). Note that list events and skill events that are sent to your service do not include the locale property.

The `locale` property is part of the request object:

```javascript
{
  "request": {
    "type": "LaunchRequest",
    "requestId": "EdwRequestId.00000000-0000-0000-0000-000000000000",
    "timestamp": "2016-06-14T20:59:24Z",
    "locale": "en-US"
  }
}
```

## Alexa Locale codes
| Locale Code | Language
|---|--- |
|de-DE | German (DE)
|en-AU |English (AU)
|en-CA | English (CA)
| en-GB | English (UK)
| en-IN | English (IN)
| en-US | English (US)
| es-ES | Spanish (ES)
| es-MX | Spanish (MX)
| es-US | Spanish (US)
| fr-CA | French (CA)
| fr-FR | French (FR)
| it-IT | Italian (IT)
| ja-JP | Japanese (JP)
| pt-BR | Portuguese (BR)