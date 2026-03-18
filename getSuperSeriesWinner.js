//Суперсерия Канада-СССР – это 8 товарищеских хоккейных матчей, проводившихся между командами СССР и Канады в 72 (первая суперсерия) и в 74 годах (вторая суперсерия). В этом задании вам предстоит написать функцию, которая вычисляет команду, выигравшую суперсерию.

//Моё решение
const getSuperSeriesWinner = (scores) => {
    let result = 0
    for(const play of scores) {
        
        const rez = play[0] - play[1]
        const rez1 = Math.sign(rez)
        
        result += rez1
    }    
    
    if (result >= 1) {
        return 'canada'
    }
    else if (result < 0) {
        return 'ussr'
    }
    else {
        return null
    }
}
export default getSuperSeriesWinner

//Решение учителя
export default (scores) => {
  let result = 0
  for (const score of scores) {
    result += Math.sign(score[0] - score[1])
  }

  if (result > 0) {
    return 'canada'
  }
  if (result < 0) {
    return 'ussr'
  }

  return null
}