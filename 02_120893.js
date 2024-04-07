/* 
120893 대문자와 소문자 (lv.0)

문자열 myStr이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ myStr의 길이 ≤ 1,000
myStr은 영어 대문자와 소문자로만 구성되어 있습니다.

변환할 방법이 도저히 생각이 나지 않아서 인터넷의 도움을 받았습니다..

1) for문
  - myStr을 순회하며 대소문자 확인
  - .toUpperCase() : 문자열을 대문자로 반환
  - .toLowerCase() : 문자열을 소문자로 반환

const solution = (myStr) => {
  let res = [];
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === myStr[i].toUpperCase()) {
      res.push(myStr[i].toLowerCase());
    } else {
      res.push(myStr[i].toUpperCase());
    }
  }
  return res.join("");
};

2) 함수형
- 스프레드 연산자
- map()
- join()
 */

const solution = (myStr) =>
  [...myStr]
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");

console.log(solution("cccCCC")); //	"CCCccc"
console.log(solution("abCdEfghIJ")); //	"ABcDeFGHij"
