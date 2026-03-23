//Реализуйте и экспортируйте по умолчанию функцию, 
//которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! 
// и возвращает полученную строку. Аргументы: Текст и [Набор стоп слов]

//моё решение
export const progon = (text, stop) => {
    let result = []
    for (const word of text) {
        (word === stop) ? result.push('$#%!') : result.push(word)
    }
    return result
}

const makeCensored = (sentence, stoparr) => {
    
    const separator = ' '
    let sentenceArr = sentence.split(separator)
    
    for (const stopword of stoparr) {
        
        sentenceArr = progon(sentenceArr, stopword)
        
    } 
    return sentenceArr.join(separator)
}
export default makeCensored

//Решение учителя
const makeCensored = (text, stopWords) => {
  const words = text.split(' ')

  const result = []
  for (const word of words) {
    const newWord = stopWords.includes(word) ? '$#%!' : word
    result.push(newWord)
  }

  return result.join(' ')
}

export default makeCensored