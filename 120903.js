/* 
120903 배열의 유사도

두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ s1, s2의 길이 ≤ 100
1 ≤ s1, s2의 원소의 길이 ≤ 10
s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
s1과 s2는 각각 중복된 원소를 갖지 않습니다. 

---

1) for문
- s1을 순회
- s2를 순회
- 순회하며 두 값의 동일한 값은 res에 추가

const solution = (s1, s2) => {
  let res = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) res++;
    }
  }
  return res;
};

2) arr.function()
- filter() : 주어진 배열의 얕은 복사본 생성. 순회, 복사 메서드. (두 종류를 동시 사용은 지양.)
- includes() : 배열의 항목에 특정 값이 포함되어 있는지 판단하여 true/false를 반환.
[참고사이트](https://velog.io/@rosamondkim/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4Lv.0-%EB%B0%B0%EC%97%B4%EC%9D%98%EC%9C%A0%EC%82%AC%EB%8F%84-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
 */

const solution = (s1, s2) => {
  return s1.filter((e) => s2.includes(e)).length;
};

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(solution(["n", "omg"], ["m", "dot"]));
