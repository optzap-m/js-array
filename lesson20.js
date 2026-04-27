//Моё решение
export const getMax = (arr) =>{
    if (arr.length === 0) {
        return null
    }
    const[first, ...rest] = arr
    let max = first
    
    for (const item of rest){
        const currentElement = item
        
        if (item > max) {
            max = item
        }
    }
    return max
} 

console.log(getMax([]))
console.log(getMax([1, 10, 8]))


//Решение учителя
export const getMax = (coll) => {
  if (coll.length === 0) {
    return null
  }

  let [max, ...rest] = coll
  for (const value of rest) {
    if (value > max) {
      max = value
    }
  }

  return max
}
