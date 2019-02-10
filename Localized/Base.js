// Write all the Strings
const strings = {
    SKILL_NAME: [
        '{SKILL_NAME}'
    ],
    WELCOME: [
        'Hola, ¡Bienvenido a {SKILL_NAME}. Espero tu pregunta.',
        'Bienvenido a {SKILL_NAME}, ¿Qué necesitas?',
        'Bienvenido a {SKILL_NAME}, ¿En qué te puedo ayudar hoy?',
        '¡Hola!, gracias por utilizar {SKILL_NAME} ¿En que te puedo ayudar?'
    ],
    HELP: [
        'LA AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        'Para obtener más información di Ayuda.',
        'Di "Ayuda" si necesitas más información'
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        '¿Necesitas más información?',
        '¿Puedo ayudarte en algo más?'
    ],
    LEGAL: [
        'Recuerda que la información proporcionada es orientativa y no se garantiza la exactitud de los datos'
    ],
    CONTINUE: [
        '¿Algo más?',
        '¿Puedo ayudarte en algo más'
    ],
    EXIT: [
        '¡Adiós!, ¡Pasa un buen día!',
        '¡Nos vemos!, espero haber sido de ayuda',
        '¡Adiós!, estoy aquí para lo que necesites',
        '¡Nos vemos!, ¡No dudes en preguntarme cualquier otra cosa!'
    ],
    UNHANDLED: [
        'No estoy muy segura de lo que has dicho.',
        'Creo que no te he entendido',
        'Lo siento, prueba otra vez. Si el error persiste prueba a formular el comando de otra forma aún sigo aprendiendo.'
    ],
    ERROR_MESSAGE: [
        'Error al procesar la respuesta. No he podido entender tu pregunta.',
        'Se ha producido un error no controlado, prueba más tarde'
    ],
    GENERIC_ERROR: [
        'Lo siento, <break time="400ms"/> ha ocurrido un error y no he podido obtener la información.'
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