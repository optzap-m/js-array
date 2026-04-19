const guka = (array1, array2) => {
    let i = 0
    let j = 0
    let result = []
    if (array1[i] === array2[j]) {
        result.push(i)
        i++
        j++
    } else if (array1[i] > array2[j]) {
       j++ 
    } else {
        i++
    }
    return result
}

console.log(guka([10, 11, 24], [10, 13, 14, 18, 24, 30]))