const calcInPolishNotation = (arr) => {
    let newArr = []
    let operand = newArr.pop()
    let result = operand
    
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === '+') {
            result = operand + result
        }
        else if (arr[i] === '-') {
            result = operand - result
        }
        else if (arr[i] === '*') {
            result = operand * result
        }
        else if (arr[i] === '/') {
            result = operand / result
        }
        else {
            newArr = newArr.push(arr[i])
        }
    }
    return result
}

console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])) // 15
//console.log(calcInPolishNotation([7, 2, 3, '*', '-'])) // 1

// ЧТО СОВЕТУЕТ ИИ
Метод `Array.prototype.push()` возвращает новую длину массива, а не сам массив. Когда вы присваиваете эту длину (число) переменной `newArr`, `newArr` перестает быть массивом, поэтому последующие вызовы `.push()` приводят к ошибке TypeError. Кроме того, была неправильно реализована логика обратной польской записи.

const calcInPolishNotation = (arr) => {
    let stack = []
    
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            stack.push(arr[i])
        } else {
            let b = stack.pop()
            let a = stack.pop()
            
            if (arr[i] === '+') stack.push(a + b)
            else if (arr[i] === '-') stack.push(a - b)
            else if (arr[i] === '*') stack.push(a * b)
            else if (arr[i] === '/') stack.push(a / b)
        }
    }
    return stack[0]
}

console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])) // 15
console.log(calcInPolishNotation([7, 2, 3, '*', '-'])) // 1