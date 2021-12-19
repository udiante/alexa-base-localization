// Write all the Strings
const strings = {
    SKILL_NAME: [
        'DEFAULT SKILL NAME'
    ],
    WELCOME: [
        'こんにちは、{SKILL_NAME} へようこそ。'
    ],
    HELP: [
        'LA AYUDA DEBE SER ESPECIFICA PARA CADA SKILL Y NO DEBE OBTENERSE DEL BASE'
    ],
    WELCOME_REPROMPT: [
        '詳細については、「ヘルプ」と言ってください',
        'さらに情報が必要な場合は「ヘルプ」と言ってください'
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        '何かお手伝いできますか'
    ],
    LEGAL: [
        '提供される情報は概算であり、データの正確性は保証されないことに注意してください'
    ],
    CONTINUE: [
        'どういうご用件ですか？'
    ],
    EXIT: [
        'さようなら良い一日を！',
        'さようなら',
        'また近いうちにお会いしましょう！ お役に立てば幸いです'
    ],
    UNHANDLED: [
        "あなたが何を言ったかわかりません。",
        "すみません、もう一度やり直してください。 エラーが続く場合は、別の方法でコマンドを作成してみてください。"
    ],
    ERROR_MESSAGE: [
        '回答の処理中にエラーが発生しました。質問を理解できませんでした。',
        '管理されていないエラーが発生しました。'
    ],
    REPEAT_ERROR: [
        "申し訳ありませんが、繰り返すことはできません。別のアクションを試してください"
    ],
    FALLBACK: [
        "あなたの言っていることが理解できなかったようです"
    ],
    GENERIC_ERROR: [
        '申し訳ありませんが、エラーが発生し、情報を取得できませんでした。'
    ],
    APL_WELCOME: [
        'こんにちは！'
    ],
    APL_WELCOME_HINTS: [
        'ヘルプ'
    ],
    APL_HELP: [
        "私はあなたの命令を待っています"
    ],
    APL_HINTS: [ // Listado de intents sugeridos en las vistas (Ask Alexa, XXXXXX)
        'ヘルプ'
    ],
    APL_ERROR: [
        'エラーが発生しました'
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