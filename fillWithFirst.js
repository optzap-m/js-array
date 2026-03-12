//Реализуйте и экспортируйте функцию fillWithFirst(), 
// которая принимает на вход массив и заменяет элементы массива на первый. 
// Функция должна мутировать переданный в нее массив. Новый массив из нее возвращать не надо.

//Моё решение
export const fillWithFirst = (arr) => {
    for (let i = 0; i < arr.length; i ++) {
        arr[i] = arr[0]
    }
}

// Решение учителя
export const fillWithFirst = (elements) => {
  if (elements.length === 0) {
    return elements
  }

  const first = elements[0]

  for (let i = 1; i < elements.length; i++) {
    elements[i] = first
  }
}