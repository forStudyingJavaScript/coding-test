/* 
12912 두 정수 사이의 합 (lv.1)

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.

1) 조건문

const solution = (a, b) => {
  let res = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      res += i;
    }
  } else if (b < a) {
    for (i = b; i <= a; i++) {
      res += i;
    }
  } else {
    res = a;
  }
  return res;
};

2) 함수형
- Math.min()
- Math.max()
*/

const solution = (a, b) => {
  let res = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) res += i;
  return res;
};

console.log(solution(3, 5)); //12
console.log(solution(3, 3)); //3
console.log(solution(5, 3)); //12
