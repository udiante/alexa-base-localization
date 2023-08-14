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
        '詳細については「ヘルプ」と言ってみてください。',
        'もっと情報が必要な場合は「ヘルプ」と言ってみてください。',
    ],
    WAIT_FOR_MORE_INSTRUCTIONS: [
        '何かお手伝いできますか？'
    ],
    LEGAL: [
        '提供される情報はおおよそのものであり、データの正確性は保証されません。'
    ],
    CONTINUE: [
        '何かお手伝いできますか？'
    ],
    EXIT: [
        'さようなら、良い一日を！',
        'さようなら',
        'それではまた！お役に立てたことを願っています'
    ],
    UNHANDLED: [
        "何を言っているのかよくわかりません。",
        "すみません、もう一度試してみてください。エラーが続く場合は別の方法でコマンドを言ってみてください。まだ学習中です。"
    ],
    ERROR_MESSAGE: [
        '応答の処理中にエラーが発生しました。質問を理解できませんでした。',
        '制御されていないエラーが発生しました。'
    ],
    REPEAT_ERROR: [
        "すみません、もう一度は言えません。他のアクションを試してみてください"
    ],
    FALLBACK: [
        "あなたが言ったことが理解できないようです。ヘルプと言ってみてください。"
    ],
    GENERIC_ERROR: [
        '申し訳ありませんが、<break time="400ms"/> エラーが発生し、情報を取得できませんでした。'
    ],
    APL_WELCOME: [
        'こんにちは！'
    ],
    APL_WELCOME_HINTS: [
        'ヘルプ'
    ],
    APL_HELP: [
        "コマンドをお待ちしています"
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