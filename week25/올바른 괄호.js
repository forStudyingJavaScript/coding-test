function solution(s) {
  let count = 0;  //괄호의 균형을 나타내는 카운트 변수
  let isValid = true;  //괄호가 유효한지 여부를 저장하는 변수

  //문자열 배열로 변환 후 forEach로 순회
  s.split('').forEach(char => {
      if (char === '(') count++;  //여는 괄호는 카운트를 증가
      else count--;  //닫는 괄호는 카운트를 감소

      if (count < 0) isValid = false; //카운트가 음수가 되면 유효하지 않은 괄호
  });

  // 순회 중간에 이미 유효하지 않으면 false
  if (!isValid) return false;

  // 모든 괄호를 처리한 후 카운트가 0이면 올바른 괄호
  return count === 0;
}

console.log(solution("()()")); //true
console.log(solution("(())()")); //true
console.log(solution(")()(")); //false
console.log(solution("(()(")); //false
