function solution(n) {
  const MOD = 1234567;
  let previous = 0, current = 1, next;
  
  for (let i = 2; i <= n; i++) {
      next = (previous + current) % MOD; // 현재 피보나치 수를 계산하고 MOD로 나눔
      previous = current;                   // previous를 현재의 current로 갱신
      current = next;                   // current를 현재 계산한 피보나치 수로 갱신
  }
  
  return current;
}

console.log(solution(3)); //2
console.log(solution(5)); //5