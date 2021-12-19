// Write all the Strings
const strings = {
    SKILL_NAME: [
        'DEFAULT SKILL NAME'
    ],
    WELCOME: [
        'Bonjour, bienvenue dans {SKILL_NAME}.'
    ],
    HELP: [
        'LA AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        "Pour plus d'informations, dites 'Aide'",
        "Dites 'Aide' si vous avez besoin de plus d'informations",
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        'Puis-je vous aider de quelque manière que ce soit?'
    ],
    LEGAL: [
        "N'oubliez pas que les informations fournies sont approximatives et que l'exactitude des données n'est pas garantie."
    ],
    CONTINUE: [
        'Puis-je vous aider de quelque manière que ce soit?'
    ],
    EXIT: [
        'Au revoir bonne journée!',
        'Au revoir',
        "À bientôt! J'espère avoir été utile"
    ],
    UNHANDLED: [
        "Je ne suis pas sûr de ce que vous avez dit.",
        "Je suis désolé, réessayez. Si l'erreur persiste, essayez de formuler la commande d'une autre manière."
    ],
    ERROR_MESSAGE: [
        "Erreur lors du traitement de la réponse. Je n'ai pas pu comprendre votre question.",
        "Une erreur non contrôlée s'est produite."
    ],
    REPEAT_ERROR: [
        "Désolé, je ne peux pas le répéter, essayez une autre action"
    ],
    FALLBACK: [
        "Il semble que je n'ai pas compris ce que vous avez dit, essayez de dire 'Aide'."
    ],
    GENERIC_ERROR: [
        'Désolé, <break time="400ms"/> une erreur s\'est produite et je n\'ai pas pu obtenir les informations.'    
    ],
    APL_WELCOME: [
        'Bonjour!',
        'Salut!',
    ],
    APL_WELCOME_HINTS: [
        'aider'
    ],
    APL_HELP: [
        "J'attend ta commande"
    ],
    APL_HINTS: [ // Listado de intents sugeridos en las vistas (Ask Alexa, XXXXXX)
        'aider'
    ],
    APL_ERROR: [
        'Une erreur s\'est produite'
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