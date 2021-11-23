// Write all the Strings
const strings = {
    SKILL_NAME: [
        'DEFAULT SKILL NAME'
    ],
    WELCOME: [
        'Hello, Welcome to {SKILL_NAME}.'
    ],
    HELP: [
        'LA AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        'For more information tell "Help"',
        'Say "Help" if you need more information',
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        'Can I help you in any way?'
    ],
    LEGAL: [
        'Remember that the information provided is approximate and data accuracy is not guaranteed'
    ],
    CONTINUE: [
        'Can I help you in any way?'
    ],
    EXIT: [
        'Goodbye have a good day!',
        'Goodbye',
        'See you! I hope I have been helpful'
    ],
    UNHANDLED: [
        "I'm not sure what you said.",
        "I'm sorry, try again. If the error persists try to formulate the command in another way. I am still learning."
    ],
    ERROR_MESSAGE: [
        'Error processing the response. I have not been able to understand your question.',
        'An uncontrolled error has occurred.'
    ],
    REPEAT_ERROR: [
        "Sorry I can't repeat it, try another action"
    ],
    FALLBACK: [
        "It seems I didn't understand what you said, try saying Help."
    ],
    GENERIC_ERROR: [
        'Sorry, <break time="400ms"/> an error has occurred and I could not get the information.'
    ],
    APL_WELCOME: [
        'Hello!'
    ],
    APL_WELCOME_HINTS: [
        'help'
    ],
    APL_HELP: [
        "I'm waitting for your command"
    ],
    APL_HINTS: [ // Listado de intents sugeridos en las vistas (Ask Alexa, XXXXXX)
        'help'
    ],
    APL_ERROR: [
        'An error happened'
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