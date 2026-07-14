//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива 
//кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.

//Моё решение 1
const getTotalAmount = (money, str) => {
    let result = 0
    for (const nombill of money) {
        
        const nom = nombill.slice(4)
        const bill = nombill.slice(0, 3)
        
        if (bill === str) {
            result += Number(nom)
        }
    }
    return result
}
export default getTotalAmount
// Moё решение 2
const getTotalAmount = (coll, val) => {
    
    result = 0
    
    for (const item of coll) {
        
        const valuta = item.slice(0, 3)
        const nominal = Number(item.slice(4))
       
        if (val !== valuta) {
            continue
        } 
        else {
            result = result + nominal
        }
    }
    return result
}
export default getTotalAmount

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',]
console.log(getTotalAmount(money1, 'usd')) // 16

const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',]
console.log(getTotalAmount(money2, 'eur')) // 135

const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',]
console.log(getTotalAmount(money3, 'rub'))// 270


// Решение учителя
const getTotalAmount = (money, currency) => {
  let sum = 0

  for (const bill of money) {
    const currentCurrency = bill.slice(0, 3)
    if (currentCurrency !== currency) {
      continue
    }
    const denomination = Number(bill.slice(4))
    sum += denomination
  }
  return sum
}
export default getTotalAmount