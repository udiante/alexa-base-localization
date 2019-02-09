# Alexa Base Localization NPM
Private NPM for a centralized Alexa Skill Localization strings management.

# Instructions
Import the Package.

- Configuration example 'LocalizationManager':

```javascript
// Load the Package Manager
const LocalizationManager = require('alexa-base-localization').LocalizationManager

// Prepare an object with the custom Skill strings for each language
const CUSTOM_STRINGS = {
    BASE : require('./staticFiles/BaseStrings').STRINGS
}

// Configure the localization Manager with the custom strings
LocalizationManager.addCustomStrings(CUSTOM_STRINGS)

```

- Usage example 'LocalizationManager':

```javascript
// Get the values with the active language (by default 'BASE')
LocalizationManager.getLocalizedStrings("SKILL_NAME")

// Get the values with a specific langauge
LocalizationManager.getLocalizedStrings("SKILL_NAME", "ES")
```

# Usage

- Manual NPM Configuration (just add this line into the package.json)
```javascript
"alexa-base-localization": "git://github.com:udiante/alexa-base-localization#semver:^1.0"
```