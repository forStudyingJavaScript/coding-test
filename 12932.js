/* 
12932 자연수 뒤집어 배열로 만들기

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.

1) 
스프레드로 풀어서 배열로 담기
처음엔 스프레드 연산자로 풀어서 배열로 담아보려고 했는데, 안돼서 생각해보니 n의 값이 Number였다.

2) 
- Array.form() : 순회 또는 유사 배열 객체를 복사해 새로운 배열을 만드는 메서드.
- reverse() : 값 뒤집기

- 먼저 숫자를 유사배열객체로 만든다.
- Array.from을 이용해 유사배열객체 복사 -> reverse로 뒤집기

결과값 => [ '5', '4', '3', '2', '1' ]
문자열을 담은 배열이 되었다.

- Array.from() 메서드 안에서 배열의 속성을 설정할 수 있다.

[참고사이트](https://hianna.tistory.com/707)
*/

const solution = (n) => {
  let str = String(n);
  let nums = (e) => Number(e);
  return Array.from(str, nums).reverse();
};

console.log(solution(12345));
console.log(solution(98765210));
