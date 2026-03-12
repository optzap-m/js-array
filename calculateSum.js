//Реализуйте и экспортируйте по умолчанию функцию. 
//Она должна высчитывать сумму всех элементов массива, которые делятся без остатка на три.

//Моё решение
const calculateSum = (coll) => {
    if (coll.length === 0) {
        return 0
    }
    let sum = 0
    for (let i=0; i < coll.length; i += 1) {
        if (coll[i] % 3 === 0) {
            sum = sum + coll[i]
        }
    }
    return sum
}

export default calculateSum

// Решение учителя
const calculateSum = (coll) => {
  if (coll.length === 0) {
    return 0
  }

  let sum = 0

  for (let i = 0; i < coll.length; i += 1) {
    const value = coll[i]
    if (value % 3 === 0) {
      sum += value
    }
  }

  return sum
}

export default calculateSum
