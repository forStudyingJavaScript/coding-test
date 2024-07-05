function solution(d, budget) {
  return d.sort((a, b) => a - b).reduce((count, price) => {
      return count + ((budget -= price) >= 0);
  }, 0);
}

console.log(solution([1,3,2,5,4], 9)); //3