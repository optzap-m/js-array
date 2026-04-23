//Моё решение

const guka = (array1, array2) => {
    let i = 0
    let j = 0
    let result = []
    
    while (i < array1.length && j < array2.length) {
        if (array1[i] === array2[j] && array1[i] !== array1[i + 1]) {
            
            result.push(array1[i])
            i += 1
            j += 1
        } 
        else if (array1[i] > array2[j]) {
            j += 1 
        } 
        else {
            i += 1
        }
    }
    return result
}

export default guka

console.log(guka([], []))
console.log(guka([1], []))
console.log(guka([], [2]))
console.log(guka([10, 11, 24], [-2, 3, 4]))
console.log(guka([10, 11, 24], [10, 13, 14, 18, 24, 30]))
console.log(guka([3, 5, 10], [10, 12, 19, 21]))
console.log(guka([10, 12, 19, 21], [3, 5, 10]))
console.log(guka([10, 13, 14, 18, 24, 30], [10, 11, 24]))
console.log(guka([10, 11, 24, 30], [10, 13, 14, 18, 24, 30]))
console.log(guka([10, 11, 14, 18, 24, 30], [10, 13, 14, 18, 24, 30]))
console.log(guka([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3]))

//Решение учителя
const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const size1 = arr1.length
  const size2 = arr2.length

  let i1 = 0
  let i2 = 0
  const result = []

  while (i1 < size1 && i2 < size2) {
    const lastCommon = result.at(-1)
    const item1 = arr1[i1]
    const item2 = arr2[i2]
    if (item1 === item2 && item1 !== lastCommon) {
      result.push(item1)
      i1 += 1
      i2 += 1
    }
    else if (item1 > item2) {
      i2 += 1
    }
    else {
      i1 += 1
    }
  }

  return result
}

export default getIntersectionOfSortedArrays