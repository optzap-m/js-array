const getSameParity = (arr) => {
    if (arr.lenght === 0) {
        return []
    }
    const result = []
    for (const item of arr) {
        if (item % 2 !== 0) {
            result.push(item)
        } 
    }
    return result
}

const cool = [1, 2, 3]
const cool1 = [1, 2, 8]
const cool2 = [2, 2, 8]
console.log(getSameParity (cool))