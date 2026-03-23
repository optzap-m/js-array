const sentence = 'When you play the game of thrones, you win or you die'
const stoparr = ['die', 'play']

const makeCensored = (sentence, stoparr) => {
    
    const separator = ' '
    const sentenceArr = sentence.split(separator)
    
    let result = []
    const krakozybra = '$#%!'
    
    for (const word of sentenceArr) {
        (word === includes(stoparr)) ? result = `${result}${word}`: result = `${result}${krakozybra}`
    }
    return result.join(separator)
}

console.log(makeCensored(sentence, stoparr))

// версия2

const makeCensored = (sentence, stoparr) => {
    
    const separator = ' '
    const sentenceArr = sentence.split(separator)
    
//    console.log(sentenceArr)
    
    let result = []
    const krakozybra = '$#%!'
    
    for (const word of sentenceArr) {
        (word.includes(stoparr[0]) === false) ? result.push(word) : result.push(krakozybra)
        console.log(result)
    }

    return result.join(separator)
}

console.log(makeCensored(sentence, stoparr))

const makeCensored = (sentence, stoparr) => {
    
    const separator = ' '
    const sentenceArr = sentence.split(separator)
    
    for (const stopWord of stoparr) {
        let stop = stopWord
    }
    
    let result = []
    
    for (const word of sentenceArr) {
        (word.includes(stoparr[1]) === false) ? result.push(word) : result.push('$#%!')
    }

    return result.join(separator)
}

console.log(makeCensored(sentence, stoparr))