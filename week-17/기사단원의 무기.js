function solution(number, limit, power) {
  const numbers = Array.from({ length: number }, (_, i) => i + 1);

  let attacks = [];
  
  for (const num of numbers) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (i !== num / i) divisors.push(num / i);
      }
    }

    attacks.push(divisors.length);
  }

  return attacks.reduce((sum, current) => {
    if (current <= limit) return sum + current;
    else return sum + power;
  }, 0);
}

console.log(solution(5, 3, 2)); //10
console.log(solution(10, 3, 2)); //21