//Моё решение
const getLastWordLength = (sentece) => {
    
    const trimmed = sentece.trim()
    const divided = trimmed.split(' ')
    const arr = []
    
    for (const word of divided) {
        arr.push(word)
    }
    const endWord = arr.pop()
    return endWord.length
}
export default getLastWordLength

//Решение учителя
export default (str) => {
  const words = str.trim().split(' ')
  const lastWord = words.at(-1)
  return lastWord.length
}