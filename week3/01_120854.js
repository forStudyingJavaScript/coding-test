/* 배열 원소의 길이 (120854)

문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ strlist 원소의 길이 ≤ 100
strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

1) for문
strlist를 순회하며 각 인덱스값의 길이를 반환한다.

const solution = (strlist) => {
  const res = [];
  for (let i = 0; i < strlist.length; i++) {
    res[i] = strlist[i].length;
  }
  return res;
};

2) 함수형
- map을 이용하여 요소의 길이를 새로운 배열로 반환한다.
- map() : map()메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

[자바스크립트-map-함수](https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-map-%ED%95%A8%EC%88%98/)
*/

const solution = (strlist) => strlist.map((el) => el.length);

console.log(solution(["We", "are", "the", "world!"])); //[2, 3, 3, 6]
console.log(solution(["I", "Love", "Programmers."])); //[1, 4, 12]
