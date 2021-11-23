// Write all the Strings
const strings = {
    SKILL_NAME: [
        'DEFAULT SKILL NAME ES'
    ],
    WELCOME: [
        'Hola, ¡Bienvenido a {SKILL_NAME}. Espero tu pregunta.',
        'Bienvenido a {SKILL_NAME}, ¿Qué necesitas?',
        'Bienvenido a {SKILL_NAME}, ¿En qué te puedo ayudar hoy?',
        '¡Hola!, gracias por utilizar {SKILL_NAME} ¿En que te puedo ayudar?'
    ],
    HELP: [
        'ERROR ERROR-AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        'Para obtener más información di Ayuda.',
        'Di "Ayuda" si necesitas más información.'
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        '¿En que te puedo ayudar?'
    ],
    LEGAL: [
        'Recuerda que la información proporcionada es orientativa y no se garantiza la exactitud de los datos'
    ],
    CONTINUE: [
        '¿En que te puedo ayudar?'
    ],
    EXIT: [
        '¡Adiós!, ¡Pasa un buen día! <break time="500ms"/> ¡Si te gusta esta Skill, no dudes en valorarla en la tienda de Skills, su desarrollador te lo agradecerá. ¡Muchas gracias!',
        '¡Nos vemos!, espero que hayas disfrutado esta partida <break time="600ms"/> ¡Si lo has hecho, No dudes en valorarme en la tienda de Skills. ¡Muchísimas gracias!',
        '¡Adiós!, gran partida <break time="600ms"/> ¡Si te gusta esta Skill, no dudes en valorarla en la tienda de Skills. ¡Muchísimas gracias!',
        '¡Nos vemos!, hasta la próxima partida <break time="500ms"/> ¡Si te gusta esta Skill, no dudes en valorarme en la tienda de Skills. ¡Muchísimas gracias!'
    ],
    UNHANDLED: [
        'No estoy muy segura de lo que has dicho.',
        'Creo que no te he entendido',
        'Lo siento, prueba otra vez. Si el error persiste prueba a formular el comando de otra forma, aún sigo aprendiendo.'
    ],
    REPEAT_ERROR: [
        'Lo siento no puedo repetirlo, prueba con otra acción'
    ],
    FALLBACK: [
        'Parece que no he entendido lo que has dicho, prueba a decir Ayuda.'
    ],
    ERROR_MESSAGE: [
        'Error al procesar la respuesta. No he podido entender tu pregunta.',
        'Se ha producido un error no controlado, prueba más tarde'
    ],
    GENERIC_ERROR: [
        'Lo siento, <break time="400ms"/> ha ocurrido un error y no he podido obtener la información.'
    ],
    APL_WELCOME: [
        '¡Bienvenido! Espero tu pregunta'
    ],
    APL_WELCOME_HINTS: [
        'ayuda'
    ],
    APL_HELP: [
        'Espero tu pregunta'
    ],
    APL_HINTS: [ // Listado de intents sugeridos en las vistas (Ask Alexa, XXXXXX)
        'ayuda'
    ],
    APL_ERROR: [
        'Se ha producido un error'
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