/* 없는 숫자 더하기

0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.

1) for문 이용
- 0부터 9까지 더한 값 45에서 numbers의 총 합을 뺀다.

const solution = (numbers) => {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return 45 - res;
};

2) 함수형
-  includes() : includes()메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단한다.
*/

const solution = (numbers) => {
  let res = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) res += i;
  }
  return res;
};

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); //14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); //6
