// Write all the Strings
const strings = {
    SKILL_NAME: [
        'DEFAULT SKILL NAME'
    ],
    WELCOME: [
        'Olá, bem-vindo a {SKILL_NAME}.'
    ],
    HELP: [
        'LA AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        'Para obter mais informações, diga "Ajuda"',
        'Diga "Ajuda" se precisar de mais informações',
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        'Posso te ajudar de alguma forma?'
    ],
    LEGAL: [
        'Lembre-se de que as informações fornecidas são aproximadas e a precisão dos dados não é garantida'
    ],
    CONTINUE: [
        'Posso te ajudar de alguma forma?'
    ],
    EXIT: [
        'Adeus, tenha um bom dia!',
        'Adeus',
        'Vê você! Espero ter ajudado'
    ],
    UNHANDLED: [
        "Não tenho certeza do que você disse.",
        "Sinto muito, tente novamente. Se o erro persistir, tente formular o comando de outra forma."
    ],
    ERROR_MESSAGE: [
        'Erro ao processar a resposta. Não consegui entender sua pergunta.',
        'Ocorreu um erro não controlado.'
    ],
    REPEAT_ERROR: [
        "Desculpe, não posso repetir, tente outra ação"
    ],
    FALLBACK: [
        "Parece que não entendi o que você disse, tente dizer ajuda."
    ],
    GENERIC_ERROR: [
        'Desculpe, <break time="400ms"/> ocorreu um erro e não consegui obter a informação.'
    ],
    APL_WELCOME: [
        'Olá!'
    ],
    APL_WELCOME_HINTS: [
        'ajuda'
    ],
    APL_HELP: [
        "Estou esperando seu comando"
    ],
    APL_HINTS: [ // Listado de intents sugeridos en las vistas (Ask Alexa, XXXXXX)
        'ajuda'
    ],
    APL_ERROR: [
        'Aconteceu um erro'
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