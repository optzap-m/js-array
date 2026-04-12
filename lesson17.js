//Решение ИИ
const checkIsBalanced = (expression) => {
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>'
    };
    const stack = [];
    
    for (const symbol of expression) {
        if (pairs[symbol]) {
            stack.push(symbol);
        } else if (Object.values(pairs).includes(symbol)) {
            const last = stack.pop();
            if (pairs[last] !== symbol) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

const expression = '{}';
console.log(checkIsBalanced(expression));

// Решение из урок с одним видом скобок
onst checkIsBalanced = (expression) => {
  const stack = []
  for (const symbol of expression) {
    
    if (symbol === '(') {
      stack.push(symbol)
    }
    else if (symbol === ')') {
      
      if (!stack.pop()) {

        return false
      }
    }
  }
  return stack.length === 0

}

const expression = '(>)>'

console.log(checkIsBalanced(expression))

//Решение учителя
const openingSymbols = ['(', '[', '{', '<']
const closingSymbols = [')', ']', '}', '>']

// BEGIN
const isOpeningSymbol = symbol => openingSymbols.includes(symbol)
const getClosingSymbolFor = (symbol) => {
  for (let i = 0; i < closingSymbols.length; i += 1) {
    if (openingSymbols[i] === symbol) {
      return closingSymbols[i]
    }
  }
  return null
}

export default (str) => {
  const stack = []
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol)
      stack.push(closingSymbol)
    }
    else {
      const lastSavedSymbol = stack.pop()
      if (symbol !== lastSavedSymbol) {
        return false
      }
    }
  }

  return stack.length === 0
}

// Моё недоделанное решение
const checkIsBalanced = (expression) => {
    const alfa = ['(', '[', '{', '<']
    const omega = [')', ']', '}', '>']
    const stack = []
    for (const symbol of expression) {
        
        let num = omega[alfa.indexOf(symbol)]
        
        if (alfa.includes(symbol) === true) {
            
            stack.push(symbol)
        } 
        else if (symbol === num) {
            stack.pop()
        }
        console.log(num)
    }
    return stack.length === 0
    
}

const expression = '{}'

console.log(checkIsBalanced(expression))
