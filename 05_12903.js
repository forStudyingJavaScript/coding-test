/* 
12903 가운데 글자 가져오기 (lv. 1)

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두 글자를 반환하면 됩니다.

제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.

1) 조건문

const solution = (s) => {
  const nums = s.length;
  let sliceNum = Math.ceil(nums / 2);
  let res = "";
  // console.log(sliceNum);
  if (nums % 2 !== 0) {
    res = s.slice(sliceNum - 1, sliceNum);
  } else {
    res = s.slice(sliceNum - 1, sliceNum + 1);
  }
  return res;
};

2) 삼항 연산자
- 식이 너무 길어서 삼항연산자로 정리해 보았습니다.
 */

const solution = (s) => {
  let sliceNum = Math.ceil(s.length / 2);
  return s.length % 2 !== 0
    ? s.slice(sliceNum - 1, sliceNum)
    : s.slice(sliceNum - 1, sliceNum + 1);
};

console.log(solution("abcde")); //"c"
console.log(solution("qwer")); //"we"
