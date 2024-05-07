/* 
약수의 개수와 덧셈(77884) 

두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

const solution = (left, right) => {
  let res = 0;

  for (let i = left; i <= right; i++) {
    let p = 1;
    for (j = 2; j <= i; j++) {
      if (i % j === 0) p++;
    }
    
    p % 2 === 0 ? (res += i) : (res -= i);
  }
  return res;
};

console.log(solution(13, 17)); //43
console.log(solution(24, 27)); //52
