// Write all the Strings
const strings = {
    SKILL_NAME: [
        '{SKILL_NAME}'
    ],
    WELCOME: [
        'Hello, Welcome to {SKILL_NAME}.',
        //'Bienvenido a {SKILL_NAME}, ¿Qué necesitas?',
        //'Bienvenido a {SKILL_NAME}, ¿En qué te puedo ayudar hoy?',
        //'¡Hola!, gracias por utilizar {SKILL_NAME} ¿En que te puedo ayudar?'
    ],
    HELP: [
        'LA AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        //'Para obtener más información di Ayuda.',
        //'Di "Ayuda" si necesitas más información'
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        //'¿Necesitas más información?',
        //'¿Puedo ayudarte en algo más?'
    ],
    LEGAL: [
        //'Recuerda que la información proporcionada es orientativa y no se garantiza la exactitud de los datos'
    ],
    CONTINUE: [
        //'Necesitas algo más?',
        //'¿Puedo ayudarte en algo más'
    ],
    EXIT: [
        'Goodbye have a good day!',
        //'¡Adiós!, ¡Pasa un buen día!',
        //'¡Nos vemos!, espero haber sido de ayuda',
        //'¡Adiós!, estoy aquí para lo que necesites',
        //'¡Nos vemos!, ¡No dudes en preguntarme cualquier otra cosa!'
    ],
    UNHANDLED: [
        "I'm not sure what do you said.",
        //'No estoy muy segura de lo que has dicho.',
        //'Creo que no te he entendido',
        //'Lo siento, prueba otra vez. Si el error persiste prueba a formular el comando de otra forma aún sigo aprendiendo.'
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