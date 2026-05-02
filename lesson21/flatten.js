//Моё решение 1.

export const flatten = (array) => {
  let flatNums = [];
  
  for(const item of array){
      Array.isArray(item) ? flatNums = [...flatNums, ...item] : flatNums = [...flatNums, item]
  }
  
  return flatNums;
}

//Моё решение 2
const flatten = (array) => {
  let flatNums = []
  
  for(let i = 0; i <  array.length; i += 1) {
      
      let item = array[i]
      
       if (Array.isArray(item)) {
           flatNums = [...flatNums, ...item]
       } 
       else {
           flatNums = [...flatNums, item]
       }
       
  }
  
  return flatNums
}
console.log(flatten(numbers))

//Решение учителя

export const flatten = (coll) => {
  let result = []
  for (const item of coll) {
    if (Array.isArray(item)) {
      result = [...result, ...item]
    }
    else {
      result = [...result, item]
    }
  }

  return result
}