function solution(numbers) {
  const primes = new Set();
  
  // 소수 판별 함수
  function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  }
  
  // 모든 조합을 재귀적으로 생성
  function generateCombinations(current, remaining) {
      // current 숫자가 소수인지 확인하고 Set에 추가
      if (current.length > 0) {
          const num = parseInt(current);
          if (isPrime(num)) {
              primes.add(num);
          }
      }

      // 재귀적으로 남은 숫자들을 사용하여 조합을 생성
      remaining.forEach((digit, index) => {
          generateCombinations(
              current + digit, 
              remaining.slice(0, index).concat(remaining.slice(index + 1))
          );
      });
  }
  
  // 초기 호출
  generateCombinations("", numbers.split(""));

  return primes.size;
}

console.log(solution("17")); //3
console.log(solution("011")); //2