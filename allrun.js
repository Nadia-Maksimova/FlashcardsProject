const readlineSync = require('readline-sync');
const fs = require('fs')

function allContent() {
    console.log('');
    let consoleText = Number(readlineSync.question(`\x1b[33mВыберите тему (введите номер):\n\x1b[0m\x1b[42m1. Лисы 🦊 \x1b[0m\n\x1b[41m2. Еноты 🦝\x1b[0m\n\x1b[44m3. Волки 🐺\x1b[0m \n\n>`));
    let tems = fs.readdirSync('./topics')

    switch (consoleText) {
        case 1:
            consoleText = tems[0]
            break;
        case 2:
            consoleText = tems[1]
            break;
        case 3:
            consoleText = tems[2]
            break;
        default: {
            console.clear()
            console.log('Ошибка! Вы не ввели номер темы!')
            allContent()
            break;
        }
    }

    let text = fs.readFileSync(`./topics/${consoleText}`, 'utf-8').split('\n')

    function questions() {
        let sum = 0
        for (let i = 1; i < text.length; i += 3) {
            console.log(`\x1b[33m${text[i - 1]}\x1b[0m`)
            if (text[i] === readlineSync.question(`\x1b[34m>\x1b[0m`)) {
                console.log('👍')
                console.log('')
                sum += 1
            } else {
                console.log('👎')
                console.log('')
            }
        }
        console.log(`\x1b[35mРезультат ${sum}/${text.length/3}\x1b[0m`)
        console.log('')

    }
    questions()

    if (readlineSync.question(`\x1b[36mХотите продолжить? Да/Нет\x1b[0m\n`) !== 'Да') {
        return
    }
    allContent()
}
allContent()