// Moё решение
const calcInPolishNotation = (arr) => {
    let newArr = []
    
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i])
        } else {
            let x = newArr.pop()
            let y = newArr.pop()
            
            if (arr[i] === '+') newArr.push(y + x)
            else if (arr[i] === '-') newArr.push(y - x)
            else if (arr[i] === '*') newArr.push(y * x)
            else if (arr[i] === '/') {
                if (x === 0) {
                    return null
                }
                newArr.push(y / x)
            }
        }
    }
    return newArr[0]
}

export default calcInPolishNotation

console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])) // 15
console.log(calcInPolishNotation([7, 2, 3, '*', '-'])) // 1

//Решение учителя

const calcInPolishNotation = (array) => {
  const stack = []
  const operators = ['*', '/', '+', '-']

  for (const value of array) {
    if (!operators.includes(value)) {
      stack.push(value)
      continue
    }

    const b = stack.pop()
    const a = stack.pop()
    let result

    switch (value) {
      case '*':
        result = a * b
        break
      case '/':
        result = b === 0 ? null : a / b
        break
      case '+':
        result = a + b
        break
      case '-':
        result = a - b
        break
      default:
        break
    }
    if (result === null) {
      return result
    }
    stack.push(result)
  }
  return stack.pop()
}
export default calcInPolishNotation
