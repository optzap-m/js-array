//Реализуйте и экспортируйте по умолчанию функцию get(), которая извлекает из массива элемент по указанному индексу, если в массиве такой индекс существует. Если индекс не существует, то функция должна вернуть значение по умолчанию. Исходный массив меняться не должен. Функция принимает на вход три аргумента: Массив, Индекс - Значение по умолчанию (равно null, если не задано)
const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined]

//Моё решение
const get = (array, index, param = 'default value') => {
    if (index >= array.length || index < 0) {
        return (param !== 'default value') ? param : null
    } 
    return array[index]
}
export default get

//Решение учителя
const get = (arr, index, defaultValue = null) => {
  if (index >= arr.length || index < 0) {
    return defaultValue
  }
  return arr[index]
}
export default get