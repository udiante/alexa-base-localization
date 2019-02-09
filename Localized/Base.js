// Write all the Strings
const strings = {
    SKILL_NAME: '{SKILL_NAME}',
    WELCOME: [
        'Hola, ¡Bienvenido a {SKILL_NAME}. ¿Listo para obtener información sobre los objetos que orbitan la tierra?',
        'Hola, ¡Bienvenido a {SKILL_NAME}. Espero tu pregunta.',
        'Bienvenido a {SKILL_NAME}, ¿Qué necesitas?',
        'Bienvenido a {SKILL_NAME}, ¿En qué te puedo ayudar hoy?',
        '¡Hola!, gracias por utilizar {SKILL_NAME} ¿En que te puedo ayudar?'
    ],
    WELCOME_REPROMPT: 'Para obtener más información di Ayuda.',
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
        'Creo que no te he entendido'
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