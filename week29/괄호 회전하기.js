function isValidBrackets(s) {
  const stack = [];
  const matchingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  // 문자열의 각 문자에 대해 검사
  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      // 열린 괄호는 스택에 추가
      stack.push(char);
    } else {
      // 닫힌 괄호일 경우, 스택이 비어있거나 매칭되는 열린 괄호가 아니면 false 반환
      if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
        return false;
      }
      // 매칭되는 열린 괄호가 있으면 스택에서 제거
      stack.pop();
    }
    }
  // 스택이 비어 있으면 올바른 괄호 문자열, 그렇지 않으면 false 반환
  return stack.length === 0;
}

function solution(s) {
  let validRotationCount = 0; // 올바른 괄호 문자열이 되는 회전 횟수를 저장할 변수
  const n = s.length;
  
  // 문자열을 0부터 n-1번 회전시킨 경우를 각각 검사
  for (let i = 0; i < n; i++) {
    // 문자열을 i번 왼쪽으로 회전시킴
    const rotated = s.slice(i) + s.slice(0, i);  
    if (isValidBrackets(rotated)) {
      // 회전된 문자열이 올바른 괄호 문자열이면 count 증가
      validRotationCount++;
    }
  }
  
  return validRotationCount;
}

console.log(solution("[](){}")); //3
console.log(solution("}]()[{")); //2
console.log(solution("[)(]"));   //0
console.log(solution("}}}"));    //0