//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс. Эта функция должна возвращать новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. Функция предназначена для работы со строковыми элементами. После префикса должен добавляться пробел.

//Моё решение
const addPrefix = (arr, perf) => {
    const newNames = []
    for (let i = 0; i < arr.length; i += 1) {
        newNames[i] = `${perf}${' '}${arr[i]}`
    }
    return newNames
}
export default addPrefix

//Решение учителя
export default (coll, prefix) => {
    const result = []
    for (let i = 0; i < coll.length; i += 1) {
        result[i] = `${prefix} ${coll[i]}`
    }
    return result
}