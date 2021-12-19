// Write all the Strings
const strings = {
    SKILL_NAME: [
        'DEFAULT SKILL NAME'
    ],
    WELCOME: [
        "Hallo, willkommen bei {SKILL_NAME}."
    ],
    HELP: [
        'LA AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        'Für weitere Informationen sagen Sie "Hilfe"',
        'Sagen Sie "Hilfe", wenn Sie weitere Informationen benötigen',
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        'Kann ich Ihnen irgendwie helfen?'
    ],
    LEGAL: [
        "Denken Sie daran, dass es sich bei den bereitgestellten Informationen um ungefähre Angaben handelt und die Datengenauigkeit nicht garantiert wird."
    ],
    CONTINUE: [
        'Was kann ich für Sie tun?'
    ],
    EXIT: [
        'Tschüß, habe einen schönen Tag!',
        'Auf Wiedersehen',
        "Mach's gut! Ich hoffe, ich war hilfreich"
    ],
    UNHANDLED: [
        "Ich bin mir nicht sicher, was du gesagt hast.",
        "Es tut mir leid, versuchen Sie es erneut. Wenn der Fehler weiterhin besteht, versuchen Sie, den Befehl anders zu formulieren."
    ],
    ERROR_MESSAGE: [
        'Fehler beim Verarbeiten der Antwort. Ich konnte Ihre Frage nicht verstehen.',
        'Ein unkontrollierter Fehler ist aufgetreten.'
    ],
    REPEAT_ERROR: [
        "Tut mir leid, ich kann es nicht wiederholen, versuche es mit einer anderen Aktion"
    ],
    FALLBACK: [
        "Anscheinend habe ich nicht verstanden, was du gesagt hast, versuche es mit einem anderen Satz"
    ],
    GENERIC_ERROR: [
        'Entschuldigung, <break time="400ms"/> ist ein Fehler aufgetreten und ich konnte die Informationen nicht abrufen.'
    ],
    APL_WELCOME: [
        'Hallo!'
    ],
    APL_WELCOME_HINTS: [
        'Hilfebefehl'
    ],
    APL_HELP: [
        "Ich warte auf deinen Befehl"
    ],
    APL_HINTS: [ // Listado de intents sugeridos en las vistas (Ask Alexa, XXXXXX)
        'Hilfebefehl'
    ],
    APL_ERROR: [
        'Ein unbekannter Fehler ist aufgetreten'
    ],
    APL_BACKGROUND_IMAGE_URL: [
        'https://'
    ],
    APL_SKILL_ICON_URL: [
        'https://'
    ]
}

/** 
 * Define all the Keys used in the Strings
 * "key" : "Decription"
 * */
const keys = {
    'SKILL_NAME': "Name of the skill"
}

module.exports = {
    STRINGS: strings,
    KEYS: keys
}