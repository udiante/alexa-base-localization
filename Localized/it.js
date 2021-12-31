// Write all the Strings
const strings = {
    SKILL_NAME: [
        'DEFAULT SKILL NAME'
    ],
    WELCOME: [
        'Ciao, benvenuto {SKILL_NAME}.'
    ],
    HELP: [
        'LA AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        'Per ulteriori informazioni, dì "Aiuto"',
        "Dì \"Aiuto\" se hai bisogno di ulteriori informazioni",
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        "Posso aiutarti in qualche modo?"
    ],
    LEGAL: [
        'Ricorda che le informazioni fornite sono approssimative e l\'accuratezza dei dati non è garantita'
    ],
    CONTINUE: [
        "Posso aiutarti in qualche modo?"
    ],
    EXIT: [
        'Arrivederci',
        'Addio buona giornata!',
        'Ci vediamo! Spero di essere stato utile'
    ],
    UNHANDLED: [
        "Non sono sicuro di quello che hai detto.",
        "Scusa, riprova. Se l'errore persiste prova a formulare il comando in un altro modo."
    ],
    ERROR_MESSAGE: [
        'Errore durante l\'elaborazione della risposta. Non sono riuscito a capire la tua domanda.',
        'Si è verificato un errore incontrollato.'
    ],
    REPEAT_ERROR: [
        "Mi dispiace non poterlo ripetere, prova un'altra azione"
    ],
    FALLBACK: [
        "Sembra che non ho capito quello che hai detto, riprova con una frase diversa."
    ],
    GENERIC_ERROR: [
        'Spiacenti, <break time="400ms"/> si è verificato un errore e non ho potuto ottenere le informazioni.'
    ],
    APL_WELCOME: [
        'Ciao!'
    ],
    APL_WELCOME_HINTS: [
        'aiuto'
    ],
    APL_HELP: [
        "Sto aspettando il tuo comando"
    ],
    APL_HINTS: [ // Listado de intents sugeridos en las vistas (Ask Alexa, XXXXXX)
        'aiuto'
    ],
    APL_ERROR: [
        'Si è verificato un errore'
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