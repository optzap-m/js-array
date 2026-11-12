//Моё решение 
const strTriangle = (arr) => {
    const newArr = [1]
    
    if (arr.length === 0 || (arr.length === 1 && arr[0] === 0)) {
        return [1]
    } else {
        for (let i = 1; i < arr.length; i += 1) {

        newArr.push(arr[i - 1] + arr[i])}
    
        const superArr = [... newArr, 1]
        return superArr
        }
}

const generate = (numStr) => {
    const beginArr = [[1]]
    let lastArr
    
    for (let i = 0; i < numStr; i += 1) {
        
        beginArr.push(strTriangle(beginArr[i]))
    }
    
    return beginArr.at(-1)
}

console.log(generate(0)) // [ 1 ]
console.log(generate(1)) // [ 1, 1 ]
console.log(generate(2)) // [ 1, 2, 1 ]
console.log(generate(3)) // [ 1, 3, 3, 1 ]
console.log(generate(4)) // [ 1, 4, 6, 4, 1 ]
console.log(generate(4)) // [ 1, 7, 21, 35, 35, 21, 7, 1 ]
console.log(generate(12)) //[ 1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1 ]


// Решение учителя
// Определяем функцию для вычисления факториала
const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

const generate = (n) => {
  const numbersCount = n + 1
  const line = []
  for (let i = 0; i < numbersCount; i += 1) {
    // Для вычисления числа заданной строки используем формулу
    // расчёта биноминальных коэффициентов  С(n, k) = n! / (k! * (n - k)!)
    line[i] = factorial(n) / (factorial(i) * factorial(n - i))
  }
  return line
}

/* Alternative solutions
export default (row) => {
  const line = [1];

  for (let i = 0; i < row; i += 1) {
    const element = Math.round(line[i] * ((row - i) / (i + 1)));
    line.push(element);
  }

  return line;
};

----
const generateNextRow = (previousRow) => {

  В nextRow будем добавлять числа очередной строки
  const nextRow = [];
  Вычисляем все числа строки
  for (let i = 0; i <= previousRow.length; i += 1) {
    Вычисляем каждое число как сумму двух расположенных над ним чисел из предыдущей строки
    const first = previousRow[i - 1] || 0;
    const second = previousRow[i] || 0;
    Добавляем число в строку
    nextRow[i] = first + second;
  }

  return nextRow;
};

const generate = (rowNumber) => {
  currentRow содержит текущую строку.
  Начальное значение — вершина треугольника.

  let currentRow = [1];

  Последовательно формируем строку за строкой.
  Обработку начинаем со второй строки (счётчик начинается с единицы),
  так как начальная строка нам уже известна.
  Цикл закончит работу, когда дойдёт до нужной строки.

  for (let row = 1; row <= rowNumber; row += 1) {
    Формирование следующей строки вынесем в отдельную функцию.
    Обновляем текущую строку.
    Теперь текущей становится только, что вычисленная строка.

    currentRow = generateNextRow(currentRow);
  }
  После окончания работы цикла в currentRow окажется искомая строка.

  return currentRow;
};
*/
export default generate

// Решение чата GPT
const generate = (n) => {
  let result = [1];

  for (let i = 0; i < n; i++) {
    let next = [1];

    for (let j = 1; j < result.length; j++) {
      next.push(result[j - 1] + result[j]);
    }

    next.push(1);
    result = next;
  }

  return result
}